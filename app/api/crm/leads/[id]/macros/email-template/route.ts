import { NextRequest, NextResponse } from 'next/server';
import { requireCrmSession } from '@/lib/auth';
import {
  buildCrmEmailFromTemplate,
  CRM_EMAIL_TEMPLATE_IDS,
  type CrmEmailTemplateId,
} from '@/lib/crm-email-templates';
import { appendEmailToLead, getLeadById } from '@/lib/crm-store';
import { getCrmFromAddress, sendCrmEmail } from '@/lib/crm-mail';

type Params = { params: Promise<{ id: string }> };

function isTemplateId(id: string): id is CrmEmailTemplateId {
  return (CRM_EMAIL_TEMPLATE_IDS as readonly string[]).includes(id);
}

export async function POST(request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  const lead = await getLeadById(id);
  if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  let body: { templateId?: string; serviceDayLabel?: string; previewOnly?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const templateId = String(body.templateId ?? '').trim();
  if (!templateId || !isTemplateId(templateId)) {
    return NextResponse.json(
      {
        error: `templateId must be one of: ${CRM_EMAIL_TEMPLATE_IDS.join(', ')}`,
      },
      { status: 400 }
    );
  }

  const serviceDayLabel = body.serviceDayLabel !== undefined ? String(body.serviceDayLabel) : undefined;
  const built = buildCrmEmailFromTemplate(templateId, lead, { serviceDayLabel });
  if (!built) {
    return NextResponse.json({ error: 'Unknown template' }, { status: 400 });
  }

  const { subject, text, html } = built;

  if (body.previewOnly === true) {
    return NextResponse.json({ preview: true, templateId, subject, text, html });
  }

  const toAddr = String(lead.email ?? '').trim();
  if (!toAddr) {
    return NextResponse.json({ error: 'Lead has no email address' }, { status: 400 });
  }

  const from = getCrmFromAddress();
  if (!from) {
    return NextResponse.json({ error: 'CRM outbound email is not configured' }, { status: 500 });
  }

  let messageId: string | undefined;
  try {
    const sent = await sendCrmEmail({ to: toAddr, subject, text, html });
    messageId = sent.messageId;
  } catch (e) {
    console.error('email-template macro', e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Failed to send email' },
      { status: 500 }
    );
  }

  const msg = await appendEmailToLead(id, {
    direction: 'outbound',
    from,
    to: toAddr,
    subject,
    bodyText: text,
    bodyHtml: html,
    messageId,
  });

  return NextResponse.json({ sent: true, templateId, message: msg });
}
