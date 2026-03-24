/** `notification` is hidden on the leads list until “Show notification leads” or status filter = Notification. */
export const LEAD_STATUSES = [
  'new_lead',
  'warm_lead',
  'active_customer',
  'delinquent',
  'inactive',
  'notification',
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  new_lead: 'New lead',
  warm_lead: 'Warm lead',
  active_customer: 'Active customer',
  delinquent: 'Delinquent',
  inactive: 'Inactive',
  notification: 'Notification',
};

/** Parsed delivery failure, stored on the outbound message that did not get through. */
export interface CrmDeliveryFailure {
  failedRecipient: string;
  /** Short label e.g. "Address not found", "Domain not found (DNS)" */
  summary: string;
  /** Optional SMTP/DNS line for support */
  diagnostic?: string;
  /** When the bounce / DSN was recorded (ISO) */
  recordedAt: string;
}

/** Legacy: standalone inbound bounce row (older sync). Prefer `deliveryFailure` on outbound. */
export interface CrmEmailBounceMeta {
  failedRecipient: string;
  summary: string;
  diagnostic?: string;
}

export interface CrmEmailMessage {
  id: string;
  direction: 'inbound' | 'outbound';
  from: string;
  to: string;
  subject: string;
  bodyText: string;
  bodyHtml?: string;
  messageId?: string;
  inReplyTo?: string;
  createdAt: string;
  /** Set when a mailer-daemon / DSN notice is correlated to this outbound send. */
  deliveryFailure?: CrmDeliveryFailure;
  /** Legacy standalone bounce timeline row; merged into outbound in the UI when possible. */
  kind?: 'normal' | 'bounce';
  bounce?: CrmEmailBounceMeta;
}

/** Staff-authored note on the lead timeline (separate from the profile “Notes” field). */
export type CrmTimelineStaffNote = {
  id: string;
  kind: 'staff_note';
  createdAt: string;
  body: string;
};

/** Logged when contact fields or status change via Save. */
export type CrmTimelineProfileUpdate = {
  id: string;
  kind: 'profile_update';
  createdAt: string;
  lines: string[];
};

export type CrmTimelineEvent = CrmTimelineStaffNote | CrmTimelineProfileUpdate;

export interface LeadRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  physicalAddress: string;
  status: LeadStatus;
  notes: string;
  emails: CrmEmailMessage[];
  /** Activity rows merged with emails in the UI (staff notes, saved field changes). */
  timeline: CrmTimelineEvent[];
  createdAt: string;
  updatedAt: string;
}

export interface CrmDatabase {
  version: 1;
  leads: LeadRecord[];
}
