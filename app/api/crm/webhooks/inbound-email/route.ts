import { NextRequest, NextResponse } from 'next/server';
import {
  ingestInboundEmail,
  normalizeEmail,
  parseFromHeader,
  tryIngestBounceEmail,
} from '@/lib/crm-store';

function verifySecret(request: NextRequest): boolean {
  const secret = process.env.CRM_INBOUND_WEBHOOK_SECRET?.trim();
  if (!secret) return false;
  const auth = request.headers.get('authorization');
  if (auth === `Bearer ${secret}`) return true;
  if (request.headers.get('x-crm-webhook-secret') === secret) return true;
  return false;
}

/**
 * Generic inbound JSON (Zapier, Mailgun transform, etc.) to attach customer email to a lead.
 *
 * Body: { from, to, subject, text, html?, messageId?, inReplyTo? }
 * Sender matched to a lead by email; otherwise creates a new lead.
 */
export async function POST(request: NextRequest) {
  if (!process.env.CRM_INBOUND_WEBHOOK_SECRET?.trim()) {
    return NextResponse.json(
      { error: 'CRM_INBOUND_WEBHOOK_SECRET is not configured' },
      { status: 503 }
    );
  }
  if (!verifySecret(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let payload: {
    from?: string;
    fromEmail?: string;
    to?: string;
    subject?: string;
    text?: string;
    html?: string;
    messageId?: string;
    inReplyTo?: string;
  };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const fromHeader =
    typeof payload.from === 'string' && payload.from.trim()
      ? payload.from.trim()
      : payload.fromEmail
        ? payload.fromEmail.trim()
        : '';
  const to = typeof payload.to === 'string' ? payload.to : '';
  const subject = typeof payload.subject === 'string' ? payload.subject : '';
  const bodyText = typeof payload.text === 'string' ? payload.text : '';
  const bodyHtml = typeof payload.html === 'string' ? payload.html : undefined;

  if (!fromHeader) {
    return NextResponse.json({ error: 'from or fromEmail is required' }, { status: 400 });
  }
  if (!to.trim()) {
    return NextResponse.json({ error: 'to is required' }, { status: 400 });
  }

  try {
    const { email: fromAddr } = parseFromHeader(fromHeader);
    const bounceResult = await tryIngestBounceEmail({
      fromHeader,
      fromAddresses: [normalizeEmail(fromAddr)],
      to: to.trim(),
      subject,
      bodyText: bodyText || '(no plain text body)',
      bodyHtml,
      messageId: typeof payload.messageId === 'string' ? payload.messageId : undefined,
      inReplyTo: typeof payload.inReplyTo === 'string' ? payload.inReplyTo : undefined,
    });

    if (bounceResult.handled) {
      return NextResponse.json({
        ok: true,
        bounce: true,
        imported: bounceResult.imported,
        skipReason: bounceResult.skipReason,
      });
    }

    const { lead, created, message } = await ingestInboundEmail({
      fromHeader,
      to,
      subject,
      bodyText: bodyText || '(no plain text body)',
      bodyHtml,
      messageId: typeof payload.messageId === 'string' ? payload.messageId : undefined,
      inReplyTo: typeof payload.inReplyTo === 'string' ? payload.inReplyTo : undefined,
    });
    return NextResponse.json({
      ok: true,
      leadId: lead.id,
      newLead: created,
      messageId: message.id,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Ingest failed';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
