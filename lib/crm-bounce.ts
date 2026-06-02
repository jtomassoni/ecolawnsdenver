import type { CrmDeliveryFailure, CrmEmailMessage } from '@/lib/crm-types';

function normalizeEmailLocal(email: string): string {
  return email.trim().toLowerCase();
}

export function cleanMessageIdPart(id: string): string {
  return id.replace(/^<|>$/g, '').trim();
}

/** Pull Original-Message-ID from a DSN / bounce body when present. */
export function parseOriginalMessageIdFromBounce(bodyText: string, bodyHtml?: string): string | null {
  const blob = `${bodyText}\n${bodyHtml ?? ''}`;
  const m = blob.match(/Original-Message-ID:\s*<?([^>\s\r\n]+)>?/i);
  if (m) return cleanMessageIdPart(m[1]);
  return null;
}

/**
 * Find the outbound sent to `failedRecipientNorm` that this bounce most likely refers to.
 */
export function findOutboundForBounceAttachment(
  emails: readonly CrmEmailMessage[],
  failedRecipientNorm: string,
  bounceAtIso: string,
  bounceInReplyTo?: string,
  bodyText?: string,
  bodyHtml?: string
): CrmEmailMessage | null {
  const failNorm = normalizeEmailLocal(failedRecipientNorm);
  const bounceTime = new Date(bounceAtIso).getTime();
  const outbounds = emails.filter(
    (m) => m.direction === 'outbound' && normalizeEmailLocal(m.to) === failNorm
  );
  if (outbounds.length === 0) return null;

  const originalMid = parseOriginalMessageIdFromBounce(bodyText ?? '', bodyHtml);
  if (originalMid) {
    const hit = outbounds.find(
      (m) => m.messageId && cleanMessageIdPart(m.messageId) === originalMid
    );
    if (hit) return hit;
  }

  if (bounceInReplyTo) {
    const cleanR = cleanMessageIdPart(bounceInReplyTo);
    const hit = outbounds.find((m) => m.messageId && cleanMessageIdPart(m.messageId) === cleanR);
    if (hit) return hit;
  }

  const beforeBounce = outbounds.filter(
    (m) => new Date(m.createdAt).getTime() <= bounceTime + 120_000
  );
  const pool = beforeBounce.length > 0 ? beforeBounce : outbounds;
  pool.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return pool[0] ?? null;
}

/**
 * For UI (and legacy data): drop standalone `kind: bounce` rows and fold them into
 * matching outbound copies via `deliveryFailure`.
 */
export function mergeLegacyBounceRowsForDisplay(emails: CrmEmailMessage[]): CrmEmailMessage[] {
  const copy = emails.map((e) => ({ ...e }));
  const bounceRows = copy.filter((e) => e.kind === 'bounce' && e.bounce);
  const rest = copy.filter((e) => e.kind !== 'bounce');
  const unmatched: CrmEmailMessage[] = [];
  bounceRows.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  for (const b of bounceRows) {
    if (!b.bounce) continue;
    const target = findOutboundForBounceAttachment(
      rest,
      b.bounce.failedRecipient,
      b.createdAt,
      b.inReplyTo,
      b.bodyText,
      b.bodyHtml
    );
    if (!target) {
      unmatched.push(b);
      continue;
    }
    const next: CrmDeliveryFailure = {
      failedRecipient: b.bounce.failedRecipient,
      summary: b.bounce.summary,
      diagnostic: b.bounce.diagnostic,
      recordedAt: b.createdAt,
    };
    if (
      !target.deliveryFailure ||
      new Date(next.recordedAt) >= new Date(target.deliveryFailure.recordedAt)
    ) {
      target.deliveryFailure = next;
    }
  }
  return rest.concat(unmatched);
}

const BOUNCE_FROM_HINTS =
  /mailer-daemon|mailerdaemon|postmaster|^daemon@|^noreply\+|^bounce|^return/i;

/**
 * Heuristic: message is a delivery failure / DSN, not a customer reply.
 */
export function looksLikeBounceNotification(fromAddresses: string[], subject: string): boolean {
  const subj = subject.toLowerCase();
  if (
    /delivery status notification|undeliverable|undelivered mail|returned mail|mail delivery failed|failure notice|address not found|message not delivered|could not be delivered/i.test(
      subj
    )
  ) {
    return true;
  }
  for (const addr of fromAddresses) {
    const a = addr.toLowerCase();
    if (BOUNCE_FROM_HINTS.test(a)) return true;
  }
  return false;
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
}

/**
 * Best-effort parse of the address that failed (Gmail DSN, RFC-style, common MTAs).
 */
export function parseBounceFailedRecipient(bodyText: string, bodyHtml?: string): string | null {
  const htmlPlain = bodyHtml ? stripTags(bodyHtml) : '';
  const blob = `${bodyText}\n${htmlPlain}`;

  const tryNorm = (raw: string | undefined): string | null => {
    if (!raw) return null;
    const e = normalizeEmailLocal(raw.replace(/^<|>$/g, ''));
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? e : null;
  };

  const patterns: RegExp[] = [
    /Your message wasn't delivered to\s+([^\s<]+@[^\s>]+)/i,
    /(?:wasn't|was not)\s+delivered to[^a-z0-9@]*([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/i,
    /not delivered to[^a-z0-9@]*([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/i,
    /Final-Recipient:\s*rfc822;\s*([^\s]+)/i,
    /Original-Recipient:\s*rfc822;\s*([^\s]+)/i,
    /X-Failed-Recipients:\s*([^\s]+)/i,
    /RCPT TO:\s*<([^>]+)>/i,
  ];

  for (const re of patterns) {
    const m = blob.match(re);
    const hit = tryNorm(m?.[1]);
    if (hit) return hit;
  }

  return null;
}

export function summarizeBounce(bodyText: string): string {
  const t = bodyText.slice(0, 6000);
  if (/address not found|couldn't be found|could not be found/i.test(t)) {
    return 'Address not found';
  }
  if (/NXDOMAIN|domain name not found|no mx|dns type\s+['"]?mx['"]?\s+lookup/i.test(t)) {
    return 'Domain not found (DNS)';
  }
  if (/mailbox.*full|quota|over quota/i.test(t)) {
    return 'Mailbox full or quota exceeded';
  }
  if (/user unknown|no such user|550 5\.1\.1|recipient rejected|invalid recipient/i.test(t)) {
    return 'Recipient rejected';
  }
  if (/spam|blocked|blacklist|policy rejection/i.test(t)) {
    return 'Blocked or filtered';
  }
  if (/message expired|could not be delivered for.*hours/i.test(t)) {
    return 'Delivery timed out';
  }
  return 'Delivery failed';
}

export function extractBounceDiagnostic(bodyText: string): string | undefined {
  const lines = bodyText.split(/\r?\n/);
  for (const line of lines) {
    const t = line.trim();
    if (
      /^Diagnostic-Code:/i.test(t) ||
      /^Status:/i.test(t) ||
      /NXDOMAIN|550\s|554\s|5\.\d\.\d/.test(t)
    ) {
      return t.length > 280 ? `${t.slice(0, 277)}…` : t;
    }
  }
  const dns = bodyText.match(/DNS type[^\n]{10,200}/i);
  if (dns) {
    const s = dns[0].trim();
    return s.length > 280 ? `${s.slice(0, 277)}…` : s;
  }
  return undefined;
}
