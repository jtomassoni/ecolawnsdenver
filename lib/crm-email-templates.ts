import { applyTemplateVars } from '@/lib/crm-store';
import type { LeadRecord } from '@/lib/crm-types';

export const MOW_REMINDER_SUBJECT_TEMPLATE = 'Reminder: lawn service {{service_day}}';

const MOW_REMINDER_BODY = `Hi {{name}},

This is a friendly reminder that we're scheduled to mow at {{address}} {{service_day}}.

If anything's in the way or you need to reschedule, just reply to this email.

— EcoLawns Denver`;

export const LAWN_CUT_NOTICE_SUBJECT = "We've cut your lawn";

const LAWN_CUT_NOTICE_BODY = `Hi {{name}},

We've just finished mowing at {{address}}. Walks and edges are cleared like usual.

If something doesn't look right, reply to this email and we'll make it right.

— EcoLawns Denver`;

export const INVOICE_TEMPLATE_SUBJECT = 'Your EcoLawns Denver invoice';

const INVOICE_TEMPLATE_BODY = `Hi {{name}},

Thanks for choosing EcoLawns Denver.

You can pay your invoice here:
[PASTE PAYMENT LINK]

If you have any questions, just reply to this email.

— EcoLawns Denver`;

export const CRM_EMAIL_TEMPLATE_IDS = ['mow_reminder', 'lawn_cut_notice', 'invoice_link'] as const;
export type CrmEmailTemplateId = (typeof CRM_EMAIL_TEMPLATE_IDS)[number];

export const CRM_EMAIL_TEMPLATE_LABELS: Record<CrmEmailTemplateId, string> = {
  mow_reminder: 'Mow reminder',
  lawn_cut_notice: "We've cut your lawn",
  invoice_link: 'Invoice link',
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function textToSimpleHtml(text: string): string {
  const safe = escapeHtml(text);
  return `<div style="font-family:system-ui,sans-serif;line-height:1.55;max-width:36rem;">${safe.replace(/\n/g, '<br/>')}</div>`;
}

function leadTemplateVars(
  lead: LeadRecord,
  extra: Record<string, string>
): Record<string, string> {
  return {
    name: lead.name?.trim() || 'there',
    email: lead.email?.trim() || '',
    phone: lead.phone?.trim() || '—',
    address: lead.physicalAddress?.trim() || 'your property',
    ...extra,
  };
}

/** Human phrase for when service happens, e.g. "tomorrow" or "on Thursday, April 10". */
export function buildMowReminderEmail(
  lead: LeadRecord,
  options?: { serviceDayLabel?: string }
): { subject: string; text: string; html: string } {
  const raw = (options?.serviceDayLabel ?? '').trim();
  const serviceDay = raw || 'tomorrow';
  const vars = leadTemplateVars(lead, { service_day: serviceDay });
  const subject = applyTemplateVars(MOW_REMINDER_SUBJECT_TEMPLATE, vars);
  const text = applyTemplateVars(MOW_REMINDER_BODY, vars);
  return { subject, text, html: textToSimpleHtml(text) };
}

export function buildLawnCutNoticeEmail(lead: LeadRecord): {
  subject: string;
  text: string;
  html: string;
} {
  const vars = leadTemplateVars(lead, {});
  const text = applyTemplateVars(LAWN_CUT_NOTICE_BODY, vars);
  return { subject: LAWN_CUT_NOTICE_SUBJECT, text, html: textToSimpleHtml(text) };
}

export function buildInvoiceTemplateEmail(lead: LeadRecord): {
  subject: string;
  text: string;
  html: string;
} {
  const vars = leadTemplateVars(lead, {});
  const text = applyTemplateVars(INVOICE_TEMPLATE_BODY, vars);
  return { subject: INVOICE_TEMPLATE_SUBJECT, text, html: textToSimpleHtml(text) };
}

export function buildCrmEmailFromTemplate(
  templateId: string,
  lead: LeadRecord,
  options?: { serviceDayLabel?: string }
): { subject: string; text: string; html: string } | null {
  if (templateId === 'mow_reminder') {
    return buildMowReminderEmail(lead, options);
  }
  if (templateId === 'lawn_cut_notice') {
    return buildLawnCutNoticeEmail(lead);
  }
  if (templateId === 'invoice_link') {
    return buildInvoiceTemplateEmail(lead);
  }
  return null;
}
