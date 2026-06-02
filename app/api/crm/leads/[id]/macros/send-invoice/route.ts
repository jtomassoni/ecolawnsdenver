import { NextRequest, NextResponse } from 'next/server';
import { requireCrmSession } from '@/lib/auth';
import { appendEmailToLead, getLeadById } from '@/lib/crm-store';
import { buildInvoiceEmail } from '@/lib/crm-invoice-template';
import { getCrmFromAddress, getCrmSmtpDebugInfo, sendCrmEmail } from '@/lib/crm-mail';

type Params = { params: Promise<{ id: string }> };

const URL_RE = /^https?:\/\/.+/i;

export async function POST(request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  const lead = await getLeadById(id);
  if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  let body: { stripePaymentLink?: string; previewOnly?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const stripePaymentLink = String(body.stripePaymentLink ?? '').trim();
  if (!stripePaymentLink || !URL_RE.test(stripePaymentLink)) {
    return NextResponse.json(
      { error: 'stripePaymentLink must be a valid http(s) URL' },
      { status: 400 }
    );
  }

  const { subject, text, html } = buildInvoiceEmail(lead, stripePaymentLink);

  if (body.previewOnly === true) {
    return NextResponse.json({ preview: true, subject, text, html });
  }

  const from = getCrmFromAddress();
  if (!from) {
    return NextResponse.json({ error: 'CRM outbound email is not configured' }, { status: 500 });
  }

  let messageId: string | undefined;
  try {
    const sent = await sendCrmEmail({ to: lead.email, subject, text, html });
    messageId = sent.messageId;
  } catch (e) {
    console.error('send-invoice', { smtp: getCrmSmtpDebugInfo(), error: e });
    return NextResponse.json(
      {
        error: e instanceof Error ? e.message : 'Failed to send email',
        smtpDebug: getCrmSmtpDebugInfo(),
      },
      { status: 500 }
    );
  }

  const msg = await appendEmailToLead(id, {
    direction: 'outbound',
    from,
    to: lead.email,
    subject,
    bodyText: text,
    bodyHtml: html,
    messageId,
  });

  return NextResponse.json({ sent: true, message: msg });
}
