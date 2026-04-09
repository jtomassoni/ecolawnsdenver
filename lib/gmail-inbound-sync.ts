import { ImapFlow } from 'imapflow';
import { simpleParser } from 'mailparser';
import { ingestInboundEmail, normalizeEmail, tryIngestBounceEmail } from '@/lib/crm-store';
import { hasSyncedMessageId, markMessageIdSynced } from '@/lib/inbound-sync-state';
import { normalizeSmtpPassword } from '@/lib/crm-mail';

const IMAP_HOST = 'imap.gmail.com';
const DAYS_BACK = 21;
const MAX_MESSAGES = 120;

function collectAddresses(field: unknown): { name: string; address: string }[] {
  if (field == null) return [];
  const blocks = Array.isArray(field) ? field : [field];
  const out: { name: string; address: string }[] = [];
  for (const b of blocks) {
    const vals = b.value ?? [];
    for (const v of vals) {
      const addr = (v.address ?? '').trim();
      if (!addr) continue;
      out.push({
        name: (v.name ?? '').trim() || addr.split('@')[0] || 'Unknown',
        address: normalizeEmail(addr),
      });
    }
  }
  return out;
}

function normalizeInReplyTo(
  v: string | string[] | { value?: { address?: string }[] } | undefined
): string | undefined {
  if (v == null) return undefined;
  if (typeof v === 'string') return v.replace(/^<|>$/g, '').trim() || undefined;
  if (Array.isArray(v) && v[0]) {
    const s = String(v[0]);
    return s.replace(/^<|>$/g, '').trim() || undefined;
  }
  if (typeof v === 'object' && 'value' in v && Array.isArray(v.value) && v.value[0]?.address) {
    return v.value[0].address.replace(/^<|>$/g, '').trim() || undefined;
  }
  return undefined;
}

function formatFromHeader(name: string, email: string): string {
  const safeName = name.replace(/"/g, '').trim() || email.split('@')[0] || 'Customer';
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeName)) {
    return safeName;
  }
  return `${safeName} <${email}>`;
}

/**
 * Pull recent INBOX mail from Gmail (same account as EMAIL_USER) and append customer messages to CRM leads.
 * Does not mark messages read. Dedupes by Message-ID (or IMAP uid fallback).
 */
export async function syncGmailInboundToCrm(): Promise<{
  scanned: number;
  imported: number;
  skipped: number;
  errors: string[];
}> {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_APP_PASSWORD
    ? normalizeSmtpPassword(process.env.EMAIL_APP_PASSWORD)
    : '';
  if (!user || !pass) {
    throw new Error('EMAIL_USER and EMAIL_APP_PASSWORD are required for inbox sync');
  }
  const self = normalizeEmail(user);

  const client = new ImapFlow({
    host: IMAP_HOST,
    port: 993,
    secure: true,
    auth: { user, pass },
    logger: false,
  });

  const errors: string[] = [];
  let scanned = 0;
  let imported = 0;
  let skipped = 0;

  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');
    try {
      const since = new Date();
      since.setDate(since.getDate() - DAYS_BACK);
      const found = await client.search({ since });
      const uids = found === false ? [] : found;
      const sorted = [...uids].sort((a, b) => a - b);
      const slice = sorted.slice(-MAX_MESSAGES);

      for (const uid of slice) {
        scanned++;
        let messageIdKey = '';
        try {
          const fetched = await client.fetchOne(uid, { source: true, uid: true });
          if (fetched === false || !fetched.source) continue;

          const parsed = await simpleParser(fetched.source);
          const rawMid = parsed.messageId?.trim() || '';
          messageIdKey = rawMid.replace(/^<|>$/g, '') || `imap-uid-${uid}`;

          if (await hasSyncedMessageId(messageIdKey)) {
            skipped++;
            continue;
          }

          const fromList = collectAddresses(parsed.from);
          const toList = [
            ...collectAddresses(parsed.to),
            ...collectAddresses(parsed.cc),
          ];
          if (fromList.length === 0) continue;

          const fromFirst = fromList[0];
          if (fromFirst.address === self) {
            skipped++;
            await markMessageIdSynced(messageIdKey);
            continue;
          }

          const toUs = toList.some((a) => a.address === self);
          if (!toUs) {
            skipped++;
            continue;
          }

          const fromHeader = formatFromHeader(fromFirst.name, fromFirst.address);
          const text =
            (parsed.text && parsed.text.trim()) ||
            (typeof parsed.html === 'string' ? parsed.html.replace(/<[^>]+>/g, ' ').trim() : '') ||
            '(no plain text body)';

          const fromAddresses = fromList.map((a) => a.address);
          const subjectLine = (parsed.subject ?? '').trim() || '(no subject)';
          const htmlRaw =
            typeof parsed.html === 'string' && parsed.html ? parsed.html : undefined;

          const bounceResult = await tryIngestBounceEmail({
            fromHeader,
            fromAddresses,
            to: user,
            subject: subjectLine,
            bodyText: text,
            bodyHtml: htmlRaw,
            messageId: rawMid || undefined,
            inReplyTo: normalizeInReplyTo(parsed.inReplyTo),
          });

          if (bounceResult.handled) {
            await markMessageIdSynced(messageIdKey);
            if (bounceResult.imported) imported++;
            else skipped++;
            continue;
          }

          await ingestInboundEmail({
            fromHeader,
            to: user,
            subject: subjectLine,
            bodyText: text,
            bodyHtml: htmlRaw,
            messageId: rawMid || undefined,
            inReplyTo: normalizeInReplyTo(parsed.inReplyTo),
          });

          await markMessageIdSynced(messageIdKey);
          imported++;
        } catch (e) {
          const msg = e instanceof Error ? e.message : 'sync item failed';
          errors.push(`uid ${uid}${messageIdKey ? ` (${messageIdKey})` : ''}: ${msg}`);
        }
      }
    } finally {
      lock.release();
    }
  } finally {
    try {
      await client.logout();
    } catch {
      // ignore
    }
  }

  return { scanned, imported, skipped, errors };
}
