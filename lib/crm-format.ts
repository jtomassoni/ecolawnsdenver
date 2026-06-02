const CRM_TIME_ZONE = 'America/Denver';
const CRM_LOCALE = 'en-US';

/** Rich timestamp for CRM activity rows. */
export function formatCrmDateTime(iso: string): string {
  try {
    return new Date(iso).toLocaleString(CRM_LOCALE, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      timeZone: CRM_TIME_ZONE,
    });
  } catch {
    return iso;
  }
}

export function formatCrmDateTimeCompact(iso: string): string {
  try {
    return new Date(iso).toLocaleString(CRM_LOCALE, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      timeZone: CRM_TIME_ZONE,
    });
  } catch {
    return iso;
  }
}
