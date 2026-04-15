import nodemailer from 'nodemailer';
import { existsSync } from 'node:fs';
import path from 'node:path';

/** Gmail app passwords are 16 chars; Google often displays them with spaces — strip so SMTP accepts them. */
export function normalizeSmtpPassword(raw: string): string {
  return raw.trim().replace(/\s+/g, '');
}

type CrmSmtpMode = 'crm_smtp' | 'default_email' | 'missing';

function maskEmail(value: string): string {
  const t = value.trim();
  if (!t) return '(empty)';
  const at = t.indexOf('@');
  if (at <= 0) return `${t.slice(0, 2)}***`;
  const local = t.slice(0, at);
  const domain = t.slice(at + 1);
  const localMasked = local.length <= 2 ? `${local[0] ?? ''}*` : `${local.slice(0, 2)}***`;
  const domainParts = domain.split('.');
  const first = domainParts[0] || '';
  const firstMasked = first.length <= 2 ? `${first[0] ?? ''}*` : `${first.slice(0, 2)}***`;
  const rest = domainParts.slice(1).join('.');
  return `${localMasked}@${firstMasked}${rest ? `.${rest}` : ''}`;
}

function resolveCrmSmtpAuth(): { mode: CrmSmtpMode; user: string; pass: string } {
  const crmUser = process.env.CRM_SMTP_USER?.trim() ?? '';
  const crmPass = process.env.CRM_SMTP_PASSWORD
    ? normalizeSmtpPassword(process.env.CRM_SMTP_PASSWORD)
    : '';
  if (crmUser && crmPass) {
    return { mode: 'crm_smtp', user: crmUser, pass: crmPass };
  }
  const defaultUser = process.env.EMAIL_USER?.trim() ?? '';
  const defaultPass = process.env.EMAIL_APP_PASSWORD
    ? normalizeSmtpPassword(process.env.EMAIL_APP_PASSWORD)
    : '';
  if (defaultUser && defaultPass) {
    return { mode: 'default_email', user: defaultUser, pass: defaultPass };
  }
  return { mode: 'missing', user: '', pass: '' };
}

export function getCrmSmtpDebugInfo() {
  const resolved = resolveCrmSmtpAuth();
  return {
    mode: resolved.mode,
    userMasked: resolved.user ? maskEmail(resolved.user) : '(missing)',
    hasCrmSmtpUser: Boolean(process.env.CRM_SMTP_USER?.trim()),
    hasCrmSmtpPassword: Boolean(process.env.CRM_SMTP_PASSWORD?.trim()),
    hasEmailUser: Boolean(process.env.EMAIL_USER?.trim()),
    hasEmailAppPassword: Boolean(process.env.EMAIL_APP_PASSWORD?.trim()),
  };
}

export function getMailTransporter() {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_APP_PASSWORD
    ? normalizeSmtpPassword(process.env.EMAIL_APP_PASSWORD)
    : '';
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

/**
 * Optional second Gmail account used only for CRM / invoice outbound.
 * If CRM_SMTP_USER and CRM_SMTP_PASSWORD are both set, they override EMAIL_USER / EMAIL_APP_PASSWORD for sends.
 */
function getCrmSmtpTransporter() {
  const resolved = resolveCrmSmtpAuth();
  if (resolved.mode !== 'missing') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user: resolved.user, pass: resolved.pass },
    });
  }
  return null;
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
  const smtpDebug = getCrmSmtpDebugInfo();
  const from = getCrmFromAddress();
  const replyTo = getCrmReplyTo();
  const html = options.html ?? options.text.replace(/\n/g, '<br/>');
  const inlineLogoCid = 'ecolawns-logo';
  const logoPath = path.join(process.cwd(), 'public', 'images', 'logo.jpg');
  const logoReferenced =
    /https?:\/\/[^"'\s]+\/images\/logo\.jpg/i.test(html) || /\/images\/logo\.jpg/i.test(html);
  const canAttachLogo = logoReferenced && existsSync(logoPath);
  const resolvedHtml = canAttachLogo
    ? html
        .replace(/https?:\/\/[^"'\s]+\/images\/logo\.jpg/gi, `cid:${inlineLogoCid}`)
        .replace(/\/images\/logo\.jpg/gi, `cid:${inlineLogoCid}`)
    : html;

  const transporter = getCrmSmtpTransporter();
  if (!transporter || !from) {
    throw new Error(
      'CRM email is not configured: set EMAIL_USER + EMAIL_APP_PASSWORD (Gmail app password), or optional CRM_SMTP_USER + CRM_SMTP_PASSWORD'
    );
  }
  let info: { messageId?: string };
  try {
    info = await transporter.sendMail({
      from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: resolvedHtml,
      ...(canAttachLogo
        ? {
            attachments: [
              {
                filename: 'ecolawns-logo.jpg',
                path: logoPath,
                cid: inlineLogoCid,
              },
            ],
          }
        : {}),
      ...(replyTo ? { replyTo } : {}),
    });
  } catch (e) {
    console.error('sendCrmEmail SMTP context', {
      ...smtpDebug,
      fromMasked: maskEmail(from),
      toMasked: maskEmail(options.to),
    });
    throw e;
  }
  const raw = typeof info.messageId === 'string' ? info.messageId : '';
  const messageId = raw.replace(/^<|>$/g, '').trim() || undefined;
  return { messageId };
}

export { htmlToPlainFallback };
