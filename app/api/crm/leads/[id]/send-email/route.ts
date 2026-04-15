import { NextRequest, NextResponse } from 'next/server';
import { requireCrmSession } from '@/lib/auth';
import { appendEmailToLead, getLeadById } from '@/lib/crm-store';
import { getCrmFromAddress, getCrmSmtpDebugInfo, sendCrmEmail } from '@/lib/crm-mail';
import { buildCrmBrandedHtml } from '@/lib/crm-email-templates';

type Params = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  const lead = await getLeadById(id);
  if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  let body: { subject?: string; text?: string; html?: string; previewOnly?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const subject = String(body.subject ?? '').trim();
  const text = String(body.text ?? '').trim();
  if (!subject || !text) {
    return NextResponse.json({ error: 'subject and text are required' }, { status: 400 });
  }

  const toAddr = String(lead.email ?? '').trim();
  if (!toAddr) {
    return NextResponse.json({ error: 'Lead has no email address' }, { status: 400 });
  }

  const from = getCrmFromAddress();
  if (!from) {
    return NextResponse.json({ error: 'CRM outbound email is not configured' }, { status: 500 });
  }

  const html = body.html !== undefined ? String(body.html) : undefined;
  const origin = request.nextUrl.origin;
  const logoUrl = `${origin}/images/logo.jpg`;
  const resolvedHtml = html !== undefined ? html : buildCrmBrandedHtml(text, { logoUrl });

  if (body.previewOnly === true) {
    return NextResponse.json({
      preview: {
        to: toAddr,
        from,
        subject,
        text,
        html: resolvedHtml,
      },
    });
  }

  let messageId: string | undefined;
  try {
    const sent = await sendCrmEmail({
      to: toAddr,
      subject,
      text,
      html: resolvedHtml,
    });
    messageId = sent.messageId;
  } catch (e) {
    console.error('sendCrmEmail', { smtp: getCrmSmtpDebugInfo(), error: e });
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
    to: toAddr,
    subject,
    bodyText: text,
    bodyHtml: resolvedHtml,
    messageId,
  });

  return NextResponse.json({ message: msg });
}
