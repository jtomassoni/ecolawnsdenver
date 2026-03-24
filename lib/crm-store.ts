import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { getCrmDataDir } from '@/lib/crm-data-dir';
import type { CrmDatabase, CrmEmailMessage, LeadRecord, LeadStatus } from '@/lib/crm-types';
import { LEAD_STATUSES, LEAD_STATUS_LABELS } from '@/lib/crm-types';
import {
  extractBounceDiagnostic,
  findOutboundForBounceAttachment,
  looksLikeBounceNotification,
  parseBounceFailedRecipient,
  summarizeBounce,
} from '@/lib/crm-bounce';

const DATA_DIR = getCrmDataDir();
const STORE_PATH = path.join(DATA_DIR, 'crm-store.json');

let mutex = Promise.resolve();

async function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = mutex.then(() => fn());
  mutex = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

function emptyDb(): CrmDatabase {
  return { version: 1, leads: [] };
}

function normalizeLead(lead: LeadRecord): LeadRecord {
  return {
    ...lead,
    timeline: Array.isArray(lead.timeline) ? lead.timeline : [],
  };
}

async function readDb(): Promise<CrmDatabase> {
  try {
    const raw = await readFile(STORE_PATH, 'utf8');
    const parsed = JSON.parse(raw) as CrmDatabase;
    if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.leads)) {
      return emptyDb();
    }
    return {
      ...parsed,
      leads: parsed.leads.map((l) => normalizeLead(l as LeadRecord)),
    };
  } catch (e: unknown) {
    const err = e as { code?: string };
    if (err.code === 'ENOENT') return emptyDb();
    throw e;
  }
}

async function writeDb(db: CrmDatabase): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(STORE_PATH, JSON.stringify(db, null, 2), 'utf8');
}

function isLeadStatus(s: string): s is LeadStatus {
  return (LEAD_STATUSES as readonly string[]).includes(s);
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** "Name" <a@b.com> or a@b.com */
export function parseFromHeader(from: string): { name: string; email: string } {
  const trimmed = from.trim();
  const angle = trimmed.match(/^(.+?)\s*<([^>]+)>$/);
  if (angle) {
    let name = angle[1].replace(/^"|"$/g, '').trim();
    const email = normalizeEmail(angle[2]);
    if (!name) name = email.split('@')[0] || 'Customer';
    return { name, email };
  }
  const email = normalizeEmail(trimmed);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { name: email.split('@')[0] || 'Customer', email };
  }
  return { name: 'Unknown', email: email || 'unknown@invalid' };
}

export async function listLeads(options?: {
  status?: LeadStatus;
  q?: string;
}): Promise<LeadRecord[]> {
  const db = await readDb();
  let rows = [...db.leads];
  if (options?.status) {
    rows = rows.filter((l) => l.status === options.status);
  }
  if (options?.q) {
    const q = options.q.trim().toLowerCase();
    if (q) {
      rows = rows.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.email.includes(q) ||
          l.phone.includes(q) ||
          l.physicalAddress.toLowerCase().includes(q)
      );
    }
  }
  rows.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
  return rows;
}

export async function getLeadById(id: string): Promise<LeadRecord | null> {
  const db = await readDb();
  return db.leads.find((l) => l.id === id) ?? null;
}

export async function findLeadByEmail(email: string): Promise<LeadRecord | null> {
  const norm = normalizeEmail(email);
  const db = await readDb();
  return db.leads.find((l) => l.email === norm) ?? null;
}

export async function createLead(input: {
  name: string;
  email: string;
  phone?: string;
  physicalAddress?: string;
  status?: LeadStatus;
  notes?: string;
}): Promise<LeadRecord> {
  return withLock(async () => {
    const db = await readDb();
    const now = new Date().toISOString();
    const email = normalizeEmail(input.email);
    const existing = db.leads.find((l) => l.email === email);
    if (existing) {
      throw new Error('A lead with this email already exists');
    }
    const lead: LeadRecord = {
      id: crypto.randomUUID(),
      name: input.name.trim() || 'Unknown',
      email,
      phone: (input.phone ?? '').trim(),
      physicalAddress: (input.physicalAddress ?? '').trim(),
      status: input.status && isLeadStatus(input.status) ? input.status : 'new_lead',
      notes: (input.notes ?? '').trim(),
      emails: [],
      timeline: [],
      createdAt: now,
      updatedAt: now,
    };
    db.leads.push(lead);
    await writeDb(db);
    return lead;
  });
}

export async function updateLead(
  id: string,
  patch: Partial<Pick<LeadRecord, 'name' | 'email' | 'phone' | 'physicalAddress' | 'status' | 'notes'>>
): Promise<LeadRecord | null> {
  return withLock(async () => {
    const db = await readDb();
    const lead = db.leads.find((l) => l.id === id);
    if (!lead) return null;

    const timeline = [...(lead.timeline ?? [])];
    const now = new Date().toISOString();
    const lines: string[] = [];

    const nextName =
      patch.name !== undefined ? (patch.name.trim() || lead.name) : lead.name;
    const nextEmail =
      patch.email !== undefined ? normalizeEmail(patch.email) : lead.email;
    const nextPhone = patch.phone !== undefined ? patch.phone.trim() : lead.phone;
    const nextAddr =
      patch.physicalAddress !== undefined ? patch.physicalAddress.trim() : lead.physicalAddress;
    const nextNotes = patch.notes !== undefined ? patch.notes.trim() : lead.notes;

    if (patch.name !== undefined && nextName !== lead.name) {
      lines.push(`Name · ${JSON.stringify(lead.name)} → ${JSON.stringify(nextName)}`);
    }
    if (patch.email !== undefined && nextEmail !== lead.email) {
      lines.push(`Email · ${lead.email} → ${nextEmail}`);
    }
    if (patch.phone !== undefined && nextPhone !== lead.phone) {
      lines.push(`Phone · ${lead.phone || '—'} → ${nextPhone || '—'}`);
    }
    if (patch.physicalAddress !== undefined && nextAddr !== lead.physicalAddress) {
      lines.push(
        `Service address · ${lead.physicalAddress || '—'} → ${nextAddr || '—'}`
      );
    }
    if (patch.status !== undefined) {
      if (!isLeadStatus(patch.status)) throw new Error('Invalid status');
      if (patch.status !== lead.status) {
        lines.push(
          `Status · ${LEAD_STATUS_LABELS[lead.status]} → ${LEAD_STATUS_LABELS[patch.status]}`
        );
      }
    }
    if (patch.notes !== undefined && nextNotes !== lead.notes) {
      lines.push(`Profile notes · ${lead.notes || '—'} → ${nextNotes || '—'}`);
    }

    if (patch.name !== undefined) lead.name = nextName;
    if (patch.email !== undefined) {
      const taken = db.leads.some((l) => l.id !== id && l.email === nextEmail);
      if (taken) throw new Error('Another lead already uses this email');
      lead.email = nextEmail;
    }
    if (patch.phone !== undefined) lead.phone = nextPhone;
    if (patch.physicalAddress !== undefined) lead.physicalAddress = nextAddr;
    if (patch.status !== undefined) {
      if (!isLeadStatus(patch.status)) throw new Error('Invalid status');
      lead.status = patch.status;
    }
    if (patch.notes !== undefined) lead.notes = nextNotes;

    if (lines.length) {
      timeline.push({
        id: crypto.randomUUID(),
        kind: 'profile_update',
        createdAt: now,
        lines,
      });
    }

    lead.timeline = timeline;
    lead.updatedAt = now;
    await writeDb(db);
    return lead;
  });
}

export async function appendLeadTimelineNote(id: string, body: string): Promise<LeadRecord | null> {
  return withLock(async () => {
    const db = await readDb();
    const lead = db.leads.find((l) => l.id === id);
    if (!lead) return null;
    const text = body.trim();
    if (!text) return lead;
    const now = new Date().toISOString();
    const timeline = [...(lead.timeline ?? [])];
    timeline.push({
      id: crypto.randomUUID(),
      kind: 'staff_note',
      createdAt: now,
      body: text,
    });
    lead.timeline = timeline;
    lead.updatedAt = now;
    await writeDb(db);
    return lead;
  });
}

export async function updateLeadTimelineNote(
  leadId: string,
  noteId: string,
  body: string
): Promise<LeadRecord | null> {
  return withLock(async () => {
    const db = await readDb();
    const lead = db.leads.find((l) => l.id === leadId);
    if (!lead) return null;
    const text = body.trim();
    if (!text) return null;
    const timeline = [...(lead.timeline ?? [])];
    const i = timeline.findIndex((e) => e.id === noteId && e.kind === 'staff_note');
    if (i === -1) return null;
    const ev = timeline[i];
    if (ev.kind !== 'staff_note') return null;
    const now = new Date().toISOString();
    timeline[i] = { ...ev, body: text };
    lead.timeline = timeline;
    lead.updatedAt = now;
    await writeDb(db);
    return lead;
  });
}

export async function deleteLead(id: string): Promise<boolean> {
  return withLock(async () => {
    const db = await readDb();
    const i = db.leads.findIndex((l) => l.id === id);
    if (i === -1) return false;
    db.leads.splice(i, 1);
    await writeDb(db);
    return true;
  });
}

/**
 * If the message is a mailer-daemon / DSN bounce, attach it to the lead whose email
 * matches the failed recipient. Otherwise returns { handled: false }.
 */
export async function tryIngestBounceEmail(input: {
  fromHeader: string;
  fromAddresses: string[];
  to: string;
  subject: string;
  bodyText: string;
  bodyHtml?: string;
  messageId?: string;
  inReplyTo?: string;
}): Promise<
  | { handled: true; imported: boolean; skipReason?: 'no_recipient' | 'no_lead' }
  | { handled: false }
> {
  if (!looksLikeBounceNotification(input.fromAddresses, input.subject)) {
    return { handled: false };
  }

  const failedRecipient = parseBounceFailedRecipient(input.bodyText, input.bodyHtml);
  if (!failedRecipient) {
    return { handled: true, imported: false, skipReason: 'no_recipient' };
  }

  const failedNorm = normalizeEmail(failedRecipient);

  return withLock(async () => {
    const db = await readDb();
    const lead = db.leads.find((l) => l.email === failedNorm);
    if (!lead) {
      return { handled: true, imported: false, skipReason: 'no_lead' };
    }

    const now = new Date().toISOString();
    const summary = summarizeBounce(input.bodyText);
    const diagnostic = extractBounceDiagnostic(input.bodyText);

    const match = findOutboundForBounceAttachment(
      lead.emails,
      failedNorm,
      now,
      input.inReplyTo,
      input.bodyText,
      input.bodyHtml
    );

    if (match) {
      match.deliveryFailure = {
        failedRecipient: failedNorm,
        summary,
        diagnostic,
        recordedAt: now,
      };
      lead.updatedAt = now;
      await writeDb(db);
      return { handled: true, imported: true };
    }

    const row: CrmEmailMessage = {
      id: crypto.randomUUID(),
      direction: 'inbound',
      from: input.fromHeader.trim(),
      to: input.to.trim(),
      subject: input.subject.trim(),
      bodyText: input.bodyText,
      bodyHtml: input.bodyHtml,
      messageId: input.messageId,
      inReplyTo: input.inReplyTo,
      createdAt: now,
      kind: 'bounce',
      bounce: {
        failedRecipient: failedNorm,
        summary,
        diagnostic,
      },
    };
    lead.emails.push(row);
    lead.updatedAt = now;
    await writeDb(db);
    return { handled: true, imported: true };
  });
}

export async function appendEmailToLead(leadId: string, msg: Omit<CrmEmailMessage, 'id' | 'createdAt'>): Promise<CrmEmailMessage | null> {
  return withLock(async () => {
    const db = await readDb();
    const lead = db.leads.find((l) => l.id === leadId);
    if (!lead) return null;
    const row: CrmEmailMessage = {
      ...msg,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    lead.emails.push(row);
    lead.updatedAt = row.createdAt;
    await writeDb(db);
    return row;
  });
}

function digitsOnlyPhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

function phonesLikelySame(a: string, b: string): boolean {
  const da = digitsOnlyPhone(a);
  const db = digitsOnlyPhone(b);
  if (da.length < 10 || db.length < 10) return false;
  return da.slice(-10) === db.slice(-10);
}

/**
 * Parses site booking-notification HTML/text (see /api/send-email).
 * Returns null if the body does not look like that template.
 */
export function extractWebsiteBookingCustomer(
  bodyText: string,
  bodyHtml?: string
): { name: string; email: string; phone: string; physicalAddress: string } | null {
  const blob = `${bodyText}\n${bodyHtml ?? ''}`;
  // Matches /api/send-email template: "New … Submission" (h2 + body fields)
  if (!/New\s+.+\s+Submission/i.test(blob)) {
    return null;
  }

  let email = '';
  const mailto = bodyHtml?.match(/mailto:([^"'>\s]+)/i)?.[1];
  if (mailto) email = normalizeEmail(mailto);
  if (!email) {
    const m = bodyText.match(/Email:\s*([^\s<]+@[^\s]+\.[^\s>]+)/i);
    if (m) email = normalizeEmail(m[1]);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return null;
  }

  const pick = (label: string): string => {
    const re = new RegExp(
      `${label}:\\s*([^\\n<]+)`,
      'i'
    );
    const m = bodyText.match(re);
    return (m?.[1] ?? '').replace(/<[^>]*>/g, '').trim();
  };

  const name = pick('Name') || email.split('@')[0] || 'Customer';
  const phone = pick('Phone');
  const physicalAddress = pick('Property Address');

  return { name, email, phone, physicalAddress };
}

/**
 * Create or update a lead from the public booking form, and append the submission to the timeline.
 * Matches by customer email first, then by phone (last 10 digits).
 */
export async function upsertLeadFromWebsiteBooking(input: {
  name: string;
  email: string;
  phone?: string;
  physicalAddress?: string;
  subject: string;
  bodyText: string;
  bodyHtml?: string;
  toAddress: string;
  messageId?: string;
  inReplyTo?: string;
}): Promise<{ lead: LeadRecord; created: boolean; message: CrmEmailMessage }> {
  const custEmail = normalizeEmail(input.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(custEmail)) {
    throw new Error('Invalid customer email');
  }

  const phoneTrim = (input.phone ?? '').trim();
  const addrTrim = (input.physicalAddress ?? '').trim();
  const nameTrim = (input.name ?? '').trim() || custEmail.split('@')[0] || 'Customer';

  return withLock(async () => {
    const db = await readDb();
    let lead = db.leads.find((l) => l.email === custEmail);
    if (!lead && phoneTrim && digitsOnlyPhone(phoneTrim).length >= 10) {
      lead =
        db.leads.find((l) => phonesLikelySame(l.phone, phoneTrim)) ?? undefined;
    }

    let created = false;
    const now = new Date().toISOString();

    if (!lead) {
      created = true;
      lead = {
        id: crypto.randomUUID(),
        name: nameTrim,
        email: custEmail,
        phone: phoneTrim,
        physicalAddress: addrTrim,
        status: 'new_lead',
        notes: '',
        emails: [],
        timeline: [],
        createdAt: now,
        updatedAt: now,
      };
      db.leads.push(lead);
    } else {
      if (nameTrim) lead.name = nameTrim;
      if (phoneTrim) lead.phone = phoneTrim;
      if (addrTrim) lead.physicalAddress = addrTrim;
      lead.updatedAt = now;
    }

    const fromDisplay = `${nameTrim} <${custEmail}>`;
    const message: CrmEmailMessage = {
      id: crypto.randomUUID(),
      direction: 'inbound',
      from: fromDisplay,
      to: input.toAddress.trim(),
      subject: input.subject.trim(),
      bodyText: input.bodyText,
      bodyHtml: input.bodyHtml,
      messageId: input.messageId,
      inReplyTo: input.inReplyTo,
      createdAt: now,
    };
    lead.emails.push(message);
    lead.updatedAt = now;
    await writeDb(db);
    return { lead, created, message };
  });
}

/** Inbound: attach to existing lead by sender email, or create a new lead. */
export async function ingestInboundEmail(input: {
  fromHeader: string;
  to: string;
  subject: string;
  bodyText: string;
  bodyHtml?: string;
  messageId?: string;
  inReplyTo?: string;
}): Promise<{ lead: LeadRecord; created: boolean; message: CrmEmailMessage }> {
  const booking = extractWebsiteBookingCustomer(input.bodyText, input.bodyHtml);
  if (booking) {
    return upsertLeadFromWebsiteBooking({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      physicalAddress: booking.physicalAddress,
      subject: input.subject,
      bodyText: input.bodyText,
      bodyHtml: input.bodyHtml,
      toAddress: input.to,
      messageId: input.messageId,
      inReplyTo: input.inReplyTo,
    });
  }

  const { name, email } = parseFromHeader(input.fromHeader);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid sender email');
  }

  return withLock(async () => {
    const db = await readDb();
    let lead = db.leads.find((l) => l.email === email);
    let created = false;
    const now = new Date().toISOString();

    if (!lead) {
      created = true;
      lead = {
        id: crypto.randomUUID(),
        name,
        email,
        phone: '',
        physicalAddress: '',
        status: 'new_lead',
        notes: '',
        emails: [],
        timeline: [],
        createdAt: now,
        updatedAt: now,
      };
      db.leads.push(lead);
    }

    const message: CrmEmailMessage = {
      id: crypto.randomUUID(),
      direction: 'inbound',
      from: input.fromHeader.trim(),
      to: input.to.trim(),
      subject: input.subject.trim(),
      bodyText: input.bodyText,
      bodyHtml: input.bodyHtml,
      messageId: input.messageId,
      inReplyTo: input.inReplyTo,
      createdAt: now,
    };
    lead.emails.push(message);
    lead.updatedAt = now;
    await writeDb(db);
    return { lead, created, message };
  });
}

export function applyTemplateVars(
  template: string,
  vars: Record<string, string>
): string {
  let out = template;
  for (const [k, v] of Object.entries(vars)) {
    out = out.split(`{{${k}}}`).join(v);
  }
  return out;
}
