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

function linkifyEscapedText(escaped: string): string {
  return escaped.replace(
    /(https?:\/\/[^\s<]+)/g,
    '<a href="$1" style="color:#166534;text-decoration:underline;font-weight:600;">$1</a>'
  );
}

export function buildCrmBrandedHtml(text: string, options?: { logoUrl?: string }): string {
  const logoUrl = options?.logoUrl?.trim() || '/images/logo.jpg';
  const blocks = text
    .trim()
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);
  const body = blocks
    .map((block) => {
      const safe = linkifyEscapedText(escapeHtml(block)).replace(/\n/g, '<br/>');
      const signature = block.startsWith('—');
      if (signature) {
        return `<p style="margin:14px 0 0;color:#64748b;font-size:14px;">${safe}</p>`;
      }
      return `<p style="margin:0 0 14px;color:#0f172a;font-size:16px;line-height:1.6;">${safe}</p>`;
    })
    .join('');

  const logoMarkup = logoUrl
    ? `<img src="${escapeHtml(logoUrl)}" alt="EcoLawns Denver" width="170" style="display:block;width:170px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;" />`
    : `<div style="font-size:22px;font-weight:800;line-height:1;color:#ffffff;letter-spacing:0.3px;">EcoLawns Denver</div>`;
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#e9f5ee;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e9f5ee;padding:20px 8px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:640px;max-width:100%;background:#ffffff;border:1px solid #cde6d3;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#166534;padding:18px 20px;">
                ${logoMarkup}
              </td>
            </tr>
            <tr>
              <td style="padding:22px 20px 12px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:0 20px 22px 20px;">
                <div style="height:1px;background:#dbece0;margin:0 0 12px 0;"></div>
                <p style="margin:0;color:#6b7280;font:13px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                  www.ecolawnsdenver.com
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
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
  return { subject, text, html: buildCrmBrandedHtml(text) };
}

export function buildLawnCutNoticeEmail(lead: LeadRecord): {
  subject: string;
  text: string;
  html: string;
} {
  const vars = leadTemplateVars(lead, {});
  const text = applyTemplateVars(LAWN_CUT_NOTICE_BODY, vars);
  return { subject: LAWN_CUT_NOTICE_SUBJECT, text, html: buildCrmBrandedHtml(text) };
}

export function buildInvoiceTemplateEmail(lead: LeadRecord): {
  subject: string;
  text: string;
  html: string;
} {
  const vars = leadTemplateVars(lead, {});
  const text = applyTemplateVars(INVOICE_TEMPLATE_BODY, vars);
  return { subject: INVOICE_TEMPLATE_SUBJECT, text, html: buildCrmBrandedHtml(text) };
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
