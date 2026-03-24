import nodemailer from 'nodemailer';

export function getMailTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

/**
 * Optional second Gmail account used only for CRM / invoice outbound.
 */
function getCrmSmtpTransporter() {
  const user = process.env.CRM_SMTP_USER?.trim();
  const pass = process.env.CRM_SMTP_PASSWORD?.trim();
  if (user && pass) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });
  }
  return getMailTransporter();
}

/**
 * From address for CRM / invoice mail. Defaults to EMAIL_USER (same as quote forms).
 * Optional CRM_FROM_EMAIL for display name (must be this Gmail or a Gmail “Send mail as” alias).
 */
export function getCrmFromAddress(): string | null {
  const fromOverride = process.env.CRM_FROM_EMAIL?.trim();
  const crmUser = process.env.CRM_SMTP_USER?.trim();
  const crmPass = process.env.CRM_SMTP_PASSWORD?.trim();
  if (crmUser && crmPass) {
    return fromOverride || crmUser;
  }
  return fromOverride || process.env.EMAIL_USER?.trim() || null;
}

/** Optional Reply-To (rarely needed when From is already your Gmail). */
export function getCrmReplyTo(): string | undefined {
  const raw = process.env.CRM_REPLY_TO_EMAIL?.trim();
  return raw || undefined;
}

function htmlToPlainFallback(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export async function sendCrmEmail(options: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}): Promise<{ messageId?: string }> {
  const from = getCrmFromAddress();
  const replyTo = getCrmReplyTo();
  const html = options.html ?? options.text.replace(/\n/g, '<br/>');

  const transporter = getCrmSmtpTransporter();
  if (!transporter || !from) {
    throw new Error(
      'CRM email is not configured: set EMAIL_USER + EMAIL_APP_PASSWORD (Gmail app password), or optional CRM_SMTP_USER + CRM_SMTP_PASSWORD'
    );
  }
  const info = await transporter.sendMail({
    from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
  const raw = typeof info.messageId === 'string' ? info.messageId : '';
  const messageId = raw.replace(/^<|>$/g, '').trim() || undefined;
  return { messageId };
}

export { htmlToPlainFallback };
