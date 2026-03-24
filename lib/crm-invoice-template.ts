import { applyTemplateVars } from '@/lib/crm-store';
import type { LeadRecord } from '@/lib/crm-types';

export const INVOICE_EMAIL_SUBJECT = 'Your EcoLawns Denver invoice';

const BODY_TEMPLATE = `Hi {{name}},

Thank you for choosing EcoLawns Denver. You can pay securely for services at {{address}} using this link:

{{stripe_link}}

If anything looks off or you have questions, reply to this email and we’ll help.

— EcoLawns Denver`;

export function buildInvoiceEmail(lead: LeadRecord, stripePaymentLink: string): {
  subject: string;
  text: string;
  html: string;
} {
  const vars = {
    name: lead.name || 'there',
    email: lead.email,
    phone: lead.phone || '—',
    address: lead.physicalAddress || 'your property',
    stripe_link: stripePaymentLink.trim(),
  };
  const text = applyTemplateVars(BODY_TEMPLATE, vars);
  const safe = escapeHtml(text);
  const linked = safe.replace(
    /(https:\/\/[^\s<]+)/g,
    '<a href="$1" style="color:#2E7D32;">$1</a>'
  );
  const html = `<div style="font-family:system-ui,sans-serif;line-height:1.55;max-width:36rem;">${linked.replace(/\n/g, '<br/>')}</div>`;
  return { subject: INVOICE_EMAIL_SUBJECT, text, html };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
