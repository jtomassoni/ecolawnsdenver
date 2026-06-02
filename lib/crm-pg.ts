import { readFile } from 'fs/promises';
import path from 'path';
import { Pool } from 'pg';
import { getCrmDataDir } from '@/lib/crm-data-dir';
import type { LeadRecord } from '@/lib/crm-types';

const MAX_INBOUND_SYNC_IDS = 4000;

let pool: Pool | null = null;
let schemaReady = false;
let jsonImportAttempted = false;

export function isCrmPostgresEnabled(): boolean {
  return Boolean(process.env.DATABASE_URL?.trim());
}

function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 15_000,
    });
  }
  return pool;
}

function normalizeLeadData(lead: LeadRecord): LeadRecord {
  return {
    ...lead,
    timeline: Array.isArray(lead.timeline) ? lead.timeline : [],
  };
}

async function ensureSchema(p: Pool): Promise<void> {
  await p.query(`
    CREATE TABLE IF NOT EXISTS crm_leads (
      id TEXT PRIMARY KEY,
      email_normalized TEXT NOT NULL,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL
    );
    CREATE UNIQUE INDEX IF NOT EXISTS crm_leads_email_unique ON crm_leads (email_normalized);
    CREATE TABLE IF NOT EXISTS crm_inbound_sync_ids (
      message_id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS crm_inbound_sync_ids_created ON crm_inbound_sync_ids (created_at);
  `);
}

async function migrateJsonStoreIfEmpty(p: Pool): Promise<void> {
  const { rows } = await p.query<{ c: number }>('SELECT COUNT(*)::int AS c FROM crm_leads');
  if ((rows[0]?.c ?? 0) > 0) return;

  const storePath = path.join(getCrmDataDir(), 'crm-store.json');
  try {
    const raw = await readFile(storePath, 'utf8');
    const parsed = JSON.parse(raw) as { leads?: unknown };
    if (!parsed || !Array.isArray(parsed.leads)) return;
    for (const item of parsed.leads) {
      const lead = normalizeLeadData(item as LeadRecord);
      try {
        await saveLeadToPg(lead, p);
      } catch (e: unknown) {
        const code = e && typeof e === 'object' && 'code' in e ? String((e as { code: unknown }).code) : '';
        if (code === '23505') continue;
        throw e;
      }
    }
  } catch (e: unknown) {
    const err = e as { code?: string };
    if (err.code === 'ENOENT') return;
    throw e;
  }
}

/** Call before CRM reads/writes when using Postgres. Idempotent and cached. */
export async function ensureCrmSchemaAndMigrate(): Promise<void> {
  if (!isCrmPostgresEnabled()) return;
  const p = getPool();
  if (!schemaReady) {
    await ensureSchema(p);
    schemaReady = true;
  }
  if (!jsonImportAttempted) {
    await migrateJsonStoreIfEmpty(p);
    jsonImportAttempted = true;
  }
}

export async function loadAllLeadsFromPg(): Promise<LeadRecord[]> {
  const p = getPool();
  const { rows } = await p.query<{ data: LeadRecord }>(
    'SELECT data FROM crm_leads ORDER BY updated_at DESC'
  );
  return rows.map((r) => normalizeLeadData(r.data));
}

export async function saveLeadToPg(lead: LeadRecord, poolOverride?: Pool): Promise<void> {
  const p = poolOverride ?? getPool();
  const emailNorm = lead.email.trim().toLowerCase();
  await p.query(
    `INSERT INTO crm_leads (id, email_normalized, data, updated_at)
     VALUES ($1, $2, $3::jsonb, $4::timestamptz)
     ON CONFLICT (id) DO UPDATE SET
       email_normalized = EXCLUDED.email_normalized,
       data = EXCLUDED.data,
       updated_at = EXCLUDED.updated_at`,
    [lead.id, emailNorm, JSON.stringify(lead), lead.updatedAt]
  );
}

export async function deleteLeadFromPg(id: string): Promise<void> {
  await getPool().query('DELETE FROM crm_leads WHERE id = $1', [id]);
}

export async function hasInboundSyncIdPg(messageId: string): Promise<boolean> {
  const norm = messageId.trim();
  if (!norm) return false;
  await ensureCrmSchemaAndMigrate();
  const { rowCount } = await getPool().query(
    'SELECT 1 FROM crm_inbound_sync_ids WHERE message_id = $1',
    [norm]
  );
  return (rowCount ?? 0) > 0;
}

export async function markInboundSyncIdPg(messageId: string): Promise<void> {
  const norm = messageId.trim();
  if (!norm) return;
  await ensureCrmSchemaAndMigrate();
  const p = getPool();
  await p.query(
    `INSERT INTO crm_inbound_sync_ids (message_id) VALUES ($1) ON CONFLICT DO NOTHING`,
    [norm]
  );
  const { rows } = await p.query<{ c: number }>(
    'SELECT COUNT(*)::int AS c FROM crm_inbound_sync_ids'
  );
  const c = rows[0]?.c ?? 0;
  if (c <= MAX_INBOUND_SYNC_IDS) return;
  const excess = c - MAX_INBOUND_SYNC_IDS;
  await p.query(
    `DELETE FROM crm_inbound_sync_ids WHERE message_id IN (
       SELECT message_id FROM crm_inbound_sync_ids ORDER BY created_at ASC LIMIT $1
     )`,
    [excess]
  );
}
