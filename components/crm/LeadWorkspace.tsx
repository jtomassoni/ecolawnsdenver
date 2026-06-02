'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  type RefObject,
} from 'react';
import type {
  CrmEmailMessage,
  CrmTimelineEvent,
  CrmTimelineStaffNote,
  LeadRecord,
  LeadStatus,
} from '@/lib/crm-types';
import EmailPreviewModal, { type EmailPreviewData } from '@/components/EmailPreviewModal';
import { LEAD_STATUSES, LEAD_STATUS_LABELS } from '@/lib/crm-types';
import { formatCrmDateTime, formatCrmDateTimeCompact } from '@/lib/crm-format';
import { FaChevronDown, FaEdit, FaEnvelope, FaImage, FaStickyNote } from 'react-icons/fa';
import { mergeLegacyBounceRowsForDisplay } from '@/lib/crm-bounce';
import { compressPhotoForTimelineUpload } from '@/lib/crm-photo-upload';

const inputClass =
  'w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary';

/** Overrides global input min-height for dense CRM fields */
const inputClassCompact =
  'w-full px-2.5 py-1.5 !min-h-0 h-9 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary';

const textareaClassCompact =
  'w-full px-2.5 py-1.5 !min-h-0 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary resize-y';

const leadStatusBadge: Record<LeadStatus, string> = {
  new_lead: 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
  warm_lead: 'bg-amber-50 text-amber-900 ring-amber-600/20',
  active_customer: 'bg-primary/10 text-primary-dark ring-primary/25',
  delinquent: 'bg-red-50 text-red-800 ring-red-600/15',
  inactive: 'bg-gray-100 text-gray-600 ring-gray-500/10',
  notification: 'bg-slate-100 text-slate-700 ring-slate-500/20',
};

/** Full-row menu styling: idle = themed strip; active = obvious current selection in open list */
const leadStatusMenuRow: Record<LeadStatus, { idle: string; active: string }> = {
  new_lead: {
    idle: 'bg-emerald-50/85 text-emerald-950 hover:bg-emerald-100 border-l-emerald-400/55',
    active:
      'bg-emerald-100 text-emerald-950 border-l-emerald-600 ring-2 ring-emerald-600/25 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]',
  },
  warm_lead: {
    idle: 'bg-amber-50/90 text-amber-950 hover:bg-amber-100 border-l-amber-400/60',
    active:
      'bg-amber-100 text-amber-950 border-l-amber-600 ring-2 ring-amber-600/25 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]',
  },
  active_customer: {
    idle: 'bg-primary/[0.09] text-primary-dark hover:bg-primary/16 border-l-primary/45',
    active:
      'bg-primary/[0.2] text-primary-dark border-l-primary ring-2 ring-primary/35 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]',
  },
  delinquent: {
    idle: 'bg-red-50/90 text-red-950 hover:bg-red-100 border-l-red-400/55',
    active:
      'bg-red-100 text-red-950 border-l-red-600 ring-2 ring-red-600/20 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]',
  },
  inactive: {
    idle: 'bg-slate-100/80 text-slate-800 hover:bg-slate-200/85 border-l-slate-400/45',
    active:
      'bg-slate-200 text-slate-900 border-l-slate-600 ring-2 ring-slate-500/22 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]',
  },
  notification: {
    idle: 'bg-slate-50 text-slate-900 hover:bg-slate-100 border-l-slate-400/50',
    active:
      'bg-slate-200/95 text-slate-950 border-l-slate-700 ring-2 ring-slate-600/22 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]',
  },
};

/** Resolve timeline status lines (`Status · Label → Label`) back to `LeadStatus` for badges */
const LEAD_STATUS_BY_LABEL: Record<string, LeadStatus> = Object.fromEntries(
  LEAD_STATUSES.map((s) => [LEAD_STATUS_LABELS[s], s])
) as Record<string, LeadStatus>;

const PROFILE_STATUS_LINE = /^Status · (.+) → (.+)$/;

type ActivityKind = 'created' | 'email' | 'staff_note' | 'profile_update';

type ActivityRow = {
  key: string;
  sortAt: string;
  kind: ActivityKind;
  email?: CrmEmailMessage;
  timeline?: CrmTimelineEvent;
};

type TimelineSegment =
  | { type: 'row'; row: ActivityRow }
  | { type: 'email_thread'; rows: ActivityRow[]; threadKey: string };

function cleanMessageId(id: string): string {
  return id.replace(/^<|>$/g, '').trim();
}

/** Strip Re:/Fwd: chains for matching one conversation. */
function normalizeEmailSubject(subject: string): string {
  let s = subject.trim().toLowerCase();
  for (let i = 0; i < 8; i++) {
    const next = s.replace(/^(re|fwd|fw)\s*:\s*/i, '').trim();
    if (next === s) break;
    s = next;
  }
  return s;
}

/** Remove Gmail/Apple-style quoted replies so the bubble shows only new text. */
function stripEmailReplyQuotes(body: string): string {
  let t = body.trim();
  const splitAtQuoteHeader = [
    /\r?\n\r?\nOn .{10,600}?wrote:\s*/gi,
    /\r?\nOn .{10,600}?wrote:\s*/gi,
    /^On .{10,600}?wrote:\s*/gim,
    /\r?\n\r?\nAm .{10,600}?schrieb:\s*/gi,
    /\r?\nAm .{10,600}?schrieb:\s*/gi,
  ];
  for (const re of splitAtQuoteHeader) {
    re.lastIndex = 0;
    const m = re.exec(t);
    if (m && m.index !== -1) {
      t = t.slice(0, m.index).trim();
      break;
    }
  }
  t = t.replace(/(^|\r?\n)\s*>[^\r\n]*(\r?\n|$)/g, '\n').trim();
  t = t.replace(/\r?\n-{5,}\s*Original Message\s*-{5,}\r?\n[\s\S]*$/i, '').trim();
  return t;
}

function isBounceEmail(m: CrmEmailMessage): boolean {
  return m.kind === 'bounce';
}

function messagesThreadTogether(a: CrmEmailMessage, b: CrmEmailMessage): boolean {
  if (isBounceEmail(a) || isBounceEmail(b)) return false;
  const sa = normalizeEmailSubject(a.subject || '');
  const sb = normalizeEmailSubject(b.subject || '');
  if (sa && sb && sa === sb) return true;
  const aid = a.messageId ? cleanMessageId(a.messageId) : '';
  const bid = b.messageId ? cleanMessageId(b.messageId) : '';
  const aR = a.inReplyTo ? cleanMessageId(a.inReplyTo) : '';
  const bR = b.inReplyTo ? cleanMessageId(b.inReplyTo) : '';
  if (aid && bR && aid === bR) return true;
  if (bid && aR && bid === aR) return true;
  return false;
}

function belongsToEmailThread(cluster: CrmEmailMessage[], next: CrmEmailMessage): boolean {
  return cluster.some((m) => messagesThreadTogether(m, next));
}

function groupTimelineRows(rows: ActivityRow[]): TimelineSegment[] {
  const out: TimelineSegment[] = [];
  let i = 0;
  while (i < rows.length) {
    const r = rows[i];
    if (r.kind !== 'email' || !r.email) {
      out.push({ type: 'row', row: r });
      i += 1;
      continue;
    }
    const clusterRows: ActivityRow[] = [r];
    const clusterMsgs: CrmEmailMessage[] = [r.email];
    let j = i + 1;
    while (j < rows.length) {
      const nextRow = rows[j];
      if (nextRow.kind !== 'email' || !nextRow.email) break;
      if (!belongsToEmailThread(clusterMsgs, nextRow.email)) break;
      clusterRows.push(nextRow);
      clusterMsgs.push(nextRow.email);
      j += 1;
    }
    if (clusterRows.length >= 2) {
      const threadKey = `thread:${clusterRows
        .map((x) => x.key)
        .sort()
        .join('~')}`;
      out.push({ type: 'email_thread', rows: clusterRows, threadKey });
      i = j;
    } else {
      out.push({ type: 'row', row: r });
      i += 1;
    }
  }
  return out;
}

function threadDisplaySubject(messages: CrmEmailMessage[]): string {
  const raw = messages.map((m) => m.subject || '').find((s) => s.trim()) || '(no subject)';
  return raw.replace(/^(re|fwd|fw)\s*:\s*/i, '').trim() || raw.trim() || '(no subject)';
}

/** Timeline email row label: lead name, else email local-part, else generic. */
function timelineContactLabel(name: string, email: string): string {
  const n = name.trim();
  if (n) return n;
  const e = email.trim();
  if (e) {
    const local = e.split('@')[0]?.trim();
    if (local) return local;
    return e;
  }
  return 'Customer';
}

/** Subject line for continuing a thread (Gmail-style Re:). */
function replySubjectForThread(messages: CrmEmailMessage[]): string {
  const ordered = [...messages].sort((a, b) =>
    a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
  );
  const raw =
    [...ordered].reverse().find((m) => (m.subject || '').trim())?.subject?.trim() || '';
  if (/^re:\s*/i.test(raw)) return raw;
  const base =
    raw.replace(/^(re|fwd|fw)\s*:\s*/i, '').trim() || threadDisplaySubject(messages);
  return `Re: ${base}`;
}

/** Newline count for “N lines” truncation (timeline staff notes). */
function sourceLineCount(text: string): number {
  if (!text) return 0;
  return text.split(/\r?\n/).length;
}

/** Saved-edit cards: only show Details/Hide when collapsed state hides real content (multi-field or very long line). */
const PROFILE_UPDATE_DETAILS_MIN_CHARS = 220;

function profileUpdateUsesDetailsToggle(lines: string[]): boolean {
  if (lines.length > 1) return true;
  return (lines[0]?.length ?? 0) > PROFILE_UPDATE_DETAILS_MIN_CHARS;
}

function profileUpdateCollapsedSummary(lines: string[]): string {
  if (lines.length > 1) return `Profile updated · ${lines.length} changes`;
  const line = lines[0] ?? '';
  const field = line.split(' · ')[0]?.trim() || 'Field';
  if (line.length > PROFILE_UPDATE_DETAILS_MIN_CHARS) return `${field} updated`;
  return line;
}

/** Themed chips for saved “Status · … → …” log lines; other lines stay plain text */
function renderProfileUpdateLine(line: string): ReactNode {
  const m = line.match(PROFILE_STATUS_LINE);
  if (!m) return line;
  const fromLabel = m[1].trim();
  const toLabel = m[2].trim();
  const from = LEAD_STATUS_BY_LABEL[fromLabel];
  const to = LEAD_STATUS_BY_LABEL[toLabel];
  if (!from || !to) return line;
  return (
    <span className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 align-middle">
      <span className="text-slate-600 shrink-0">Status</span>
      <span className="text-slate-400 shrink-0" aria-hidden>
        ·
      </span>
      <span
        className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${leadStatusBadge[from]}`}
      >
        {fromLabel}
      </span>
      <span className="text-slate-400 font-medium tabular-nums shrink-0" aria-hidden>
        →
      </span>
      <span
        className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${leadStatusBadge[to]}`}
      >
        {toLabel}
      </span>
    </span>
  );
}

function buildActivityRows(lead: LeadRecord): ActivityRow[] {
  const mergedEmails = mergeLegacyBounceRowsForDisplay(lead.emails);
  const rows: ActivityRow[] = [
    { key: `created-${lead.id}`, sortAt: lead.createdAt, kind: 'created' },
  ];
  for (const m of mergedEmails) {
    rows.push({ key: `email-${m.id}`, sortAt: m.createdAt, kind: 'email', email: m });
  }
  for (const ev of lead.timeline ?? []) {
    rows.push({
      key: `${ev.kind}-${ev.id}`,
      sortAt: ev.createdAt,
      kind: ev.kind === 'staff_note' ? 'staff_note' : 'profile_update',
      timeline: ev,
    });
  }
  rows.sort((a, b) => (a.sortAt > b.sortAt ? -1 : a.sortAt < b.sortAt ? 1 : 0));
  return rows;
}

function rowMatchesQuery(row: ActivityRow, q: string): boolean {
  if (!q) return true;
  const t = q.trim().toLowerCase();
  if (!t) return true;
  if (row.kind === 'created') {
    return 'lead record created added'.includes(t);
  }
  if (row.kind === 'email' && row.email) {
    const m = row.email;
    const bounceBlob =
      m.kind === 'bounce' && m.bounce
        ? `${m.bounce.failedRecipient} ${m.bounce.summary} ${m.bounce.diagnostic ?? ''} bounce delivery failed dsn`.toLowerCase()
        : '';
    const failureBlob = m.deliveryFailure
      ? `${m.deliveryFailure.failedRecipient} ${m.deliveryFailure.summary} ${m.deliveryFailure.diagnostic ?? ''} not delivered bounce failed`.toLowerCase()
      : '';
    return (
      (m.subject || '').toLowerCase().includes(t) ||
      m.bodyText.toLowerCase().includes(t) ||
      m.from.toLowerCase().includes(t) ||
      m.to.toLowerCase().includes(t) ||
      bounceBlob.includes(t) ||
      failureBlob.includes(t) ||
      (m.direction === 'outbound' ? 'outbound sent you customer' : 'inbound reply').includes(t)
    );
  }
  if (row.kind === 'staff_note' && row.timeline?.kind === 'staff_note') {
    return row.timeline.body.toLowerCase().includes(t) || 'note staff'.includes(t);
  }
  if (row.kind === 'profile_update' && row.timeline?.kind === 'profile_update') {
    return row.timeline.lines.some((l) => l.toLowerCase().includes(t)) || 'profile update saved'.includes(t);
  }
  return false;
}

type ContactEditKey = 'name' | 'email' | 'phone' | 'physicalAddress' | 'notes';

export default function LeadWorkspace({ initialLead }: { initialLead: LeadRecord }) {
  const router = useRouter();
  const [lead, setLead] = useState(initialLead);
  const [editing, setEditing] = useState<ContactEditKey | null>(null);
  const [draft, setDraft] = useState('');
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);
  const statusMenuRef = useRef<HTMLDivElement>(null);
  const [timelineComposerOpen, setTimelineComposerOpen] = useState(false);
  const timelineComposerRef = useRef<HTMLDivElement>(null);
  const [fieldSaving, setFieldSaving] = useState(false);
  const [fieldError, setFieldError] = useState('');

  const editFieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const [mailSubject, setMailSubject] = useState('');
  const [mailBody, setMailBody] = useState('');
  const [mailBusy, setMailBusy] = useState(false);
  const [mailError, setMailError] = useState('');
  const [mailTemplateBusy, setMailTemplateBusy] = useState(false);
  const [mailPreviewOpen, setMailPreviewOpen] = useState(false);
  const [mailPreviewData, setMailPreviewData] = useState<EmailPreviewData | null>(null);
  const [mailPreviewBusy, setMailPreviewBusy] = useState(false);

  const [activitySearch, setActivitySearch] = useState('');
  const [timelineComposer, setTimelineComposer] = useState<'note' | 'email'>('note');
  const [timelineNote, setTimelineNote] = useState('');
  const [timelineNotePhoto, setTimelineNotePhoto] = useState<File | null>(null);
  const [noteBusy, setNoteBusy] = useState(false);
  const [notePreparingPhoto, setNotePreparingPhoto] = useState(false);
  const [noteError, setNoteError] = useState('');
  const [noteErrorDetail, setNoteErrorDetail] = useState('');

  const [openActivityKeys, setOpenActivityKeys] = useState<Set<string>>(() => new Set());

  const allRows = useMemo(() => buildActivityRows(lead), [lead]);
  const filteredRows = useMemo(() => {
    const q = activitySearch.trim().toLowerCase();
    if (!q) return allRows;
    return allRows.filter((r) => rowMatchesQuery(r, q));
  }, [allRows, activitySearch]);

  const timelineSegments = useMemo(() => groupTimelineRows(filteredRows), [filteredRows]);

  const emailSignature = useMemo(
    () =>
      lead.emails.map((e) => `${e.id}:${e.deliveryFailure?.recordedAt ?? ''}`).join(','),
    [lead.emails]
  );

  useEffect(() => {
    setLead(initialLead);
    setEditing(null);
    setDraft('');
    setStatusMenuOpen(false);
    setTimelineComposerOpen(false);
    setFieldError('');
    setTimelineNotePhoto(null);
  }, [initialLead]);

  /** Default expansion: latest email or its conversation open. Re-run when the email thread changes. */
  useEffect(() => {
    const merged = mergeLegacyBounceRowsForDisplay(lead.emails);
    if (merged.length === 0) {
      setOpenActivityKeys(new Set());
      return;
    }
    const latest = [...merged].sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1)).at(-1)!;
    const segments = groupTimelineRows(buildActivityRows(lead));
    const threadSeg = segments.find(
      (s): s is Extract<TimelineSegment, { type: 'email_thread' }> =>
        s.type === 'email_thread' && s.rows.some((r) => r.email?.id === latest.id)
    );
    setOpenActivityKeys(new Set([threadSeg ? threadSeg.threadKey : `email-${latest.id}`]));
  }, [lead.id, emailSignature]);

  useEffect(() => {
    if (editing) editFieldRef.current?.focus();
  }, [editing]);

  useEffect(() => {
    if (!statusMenuOpen) return;
    function onPointerDown(e: PointerEvent) {
      const el = statusMenuRef.current;
      if (el && !el.contains(e.target as Node)) setStatusMenuOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setStatusMenuOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [statusMenuOpen]);

  useEffect(() => {
    if (!timelineComposerOpen) return;
    function onPointerDown(e: PointerEvent) {
      const el = timelineComposerRef.current;
      if (el && !el.contains(e.target as Node)) setTimelineComposerOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setTimelineComposerOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [timelineComposerOpen]);

  const searchOpen = activitySearch.trim().length > 0;

  const gmailSyncInFlight = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const POLL_MS = 60_000;
    const leadId = initialLead.id;

    async function pullGmailReplies() {
      if (cancelled || gmailSyncInFlight.current) return;
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
      gmailSyncInFlight.current = true;
      try {
        const res = await fetch('/api/crm/sync-inbox', { method: 'POST' });
        if (cancelled || !res.ok) return;
        try {
          const leadRes = await fetch(`/api/crm/leads/${leadId}`);
          const j = (await leadRes.json()) as { lead?: LeadRecord };
          if (j.lead) setLead(j.lead);
        } catch {
          /* ignore */
        }
        router.refresh();
      } catch {
        /* ignore */
      } finally {
        gmailSyncInFlight.current = false;
      }
    }

    void pullGmailReplies();
    const intervalId = window.setInterval(() => void pullGmailReplies(), POLL_MS);
    const onVisibility = () => {
      if (document.visibilityState === 'visible') void pullGmailReplies();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [router, initialLead.id]);

  function toggleActivity(key: string) {
    setOpenActivityKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function isRowOpen(key: string) {
    if (searchOpen) return true;
    return openActivityKeys.has(key);
  }

  function startEdit(key: ContactEditKey) {
    setFieldError('');
    setStatusMenuOpen(false);
    setEditing(key);
    if (key === 'name') setDraft(lead.name);
    else if (key === 'email') setDraft(lead.email);
    else if (key === 'phone') setDraft(lead.phone);
    else if (key === 'physicalAddress') setDraft(lead.physicalAddress);
    else setDraft(lead.notes);
  }

  function cancelEdit() {
    setEditing(null);
    setDraft('');
    setFieldError('');
  }

  async function applyLeadPatch(patch: Record<string, string>) {
    setFieldSaving(true);
    setFieldError('');
    try {
      const res = await fetch(`/api/crm/leads/${lead.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch),
      });
      const data = await res.json();
      if (!res.ok) {
        setFieldError(data.error || 'Save failed');
        return;
      }
      setLead(data.lead);
      setEditing(null);
      setDraft('');
      setStatusMenuOpen(false);
      router.refresh();
    } catch {
      setFieldError('Request failed');
    } finally {
      setFieldSaving(false);
    }
  }

  async function saveEdit() {
    if (!editing) return;
    setFieldError('');
    if (editing === 'name') {
      const next = draft.trim() || lead.name;
      if (next === lead.name) {
        cancelEdit();
        return;
      }
      await applyLeadPatch({ name: draft.trim() || lead.name });
      return;
    }
    if (editing === 'email') {
      const next = draft.trim().toLowerCase();
      if (next === lead.email) {
        cancelEdit();
        return;
      }
      await applyLeadPatch({ email: draft });
      return;
    }
    if (editing === 'phone') {
      if (draft.trim() === lead.phone) {
        cancelEdit();
        return;
      }
      await applyLeadPatch({ phone: draft });
      return;
    }
    if (editing === 'physicalAddress') {
      if (draft.trim() === lead.physicalAddress) {
        cancelEdit();
        return;
      }
      await applyLeadPatch({ physicalAddress: draft });
      return;
    }
    if (editing === 'notes') {
      if (draft.trim() === lead.notes) {
        cancelEdit();
        return;
      }
      await applyLeadPatch({ notes: draft });
    }
  }

  async function saveStatus(next: LeadStatus) {
    if (next === lead.status) {
      setStatusMenuOpen(false);
      return;
    }
    await applyLeadPatch({ status: next });
  }

  async function addTimelineNote() {
    setNoteError('');
    setNoteErrorDetail('');
    const text = timelineNote.trim();
    if (!text) {
      setNoteError('Note content is required.');
      return;
    }
    setNoteBusy(true);
    setNotePreparingPhoto(false);
    try {
      let photoFile = timelineNotePhoto;
      if (photoFile) {
        setNotePreparingPhoto(true);
        try {
          photoFile = await compressPhotoForTimelineUpload(photoFile);
        } finally {
          setNotePreparingPhoto(false);
        }
      }
      const hasPhoto = Boolean(photoFile);
      const res = hasPhoto
        ? await fetch(`/api/crm/leads/${lead.id}/notes`, {
            method: 'POST',
            credentials: 'include',
            body: (() => {
              const form = new FormData();
              form.set('text', text);
              if (photoFile) form.set('photo', photoFile);
              return form;
            })(),
          })
        : await fetch(`/api/crm/leads/${lead.id}/notes`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
          });
      let data: { error?: string; detail?: string; lead?: LeadRecord } = {};
      try {
        data = (await res.json()) as typeof data;
      } catch {
        if (res.status === 413) {
          setNoteError('Upload too large for the host (try a smaller photo or re-save as JPEG).');
          return;
        }
        setNoteError(
          `Could not read the server response (${res.status}). Check your connection and try again.`
        );
        return;
      }
      if (!res.ok) {
        if (res.status === 413) {
          setNoteError('Upload too large for the host (try a smaller photo or re-save as JPEG).');
          return;
        }
        setNoteError(data.error || 'Could not add note');
        if (typeof data.detail === 'string' && data.detail.trim()) {
          setNoteErrorDetail(data.detail.trim());
        }
        return;
      }
      setNoteError('');
      setNoteErrorDetail('');
      setTimelineNote('');
      setTimelineNotePhoto(null);
      if (data.lead) setLead(data.lead);
      router.refresh();
    } catch {
      setNoteError('Network error — try again in a moment.');
    } finally {
      setNoteBusy(false);
      setNotePreparingPhoto(false);
    }
  }

  async function updateTimelineNote(noteId: string, text: string): Promise<LeadRecord | null> {
    const res = await fetch(`/api/crm/leads/${lead.id}/notes`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ noteId, text }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Could not update note');
    }
    return data.lead as LeadRecord;
  }

  async function deleteTimelineNote(noteId: string): Promise<LeadRecord | null> {
    const res = await fetch(`/api/crm/leads/${lead.id}/notes`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ noteId }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Could not delete note');
    }
    return data.lead as LeadRecord;
  }

  function discardOutgoingDraft() {
    if (mailBusy || mailTemplateBusy) return;
    const hasContent = mailSubject.trim() || mailBody.trim();
    if (
      hasContent &&
      !confirm('Discard this draft? The subject and message will be cleared.')
    ) {
      return;
    }
    setMailSubject('');
    setMailBody('');
    setMailError('');
    setTimelineComposer('note');
  }

  async function sendOutgoingMail(
    subject: string,
    text: string,
    options?: { clearMainComposer?: boolean }
  ): Promise<boolean> {
    setMailError('');
    const s = subject.trim();
    const t = text.trim();
    if (!s || !t) {
      setMailError('Subject and message are required to send.');
      return false;
    }
    setMailBusy(true);
    try {
      const res = await fetch(`/api/crm/leads/${lead.id}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: s, text: t }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMailError(data.error || 'Send failed');
        return false;
      }
      if (options?.clearMainComposer !== false) {
        setMailSubject('');
        setMailBody('');
      }
      const refresh = await fetch(`/api/crm/leads/${lead.id}`);
      const j = await refresh.json();
      if (j.lead) setLead(j.lead);
      router.refresh();
      return true;
    } catch {
      setMailError('Request failed');
      return false;
    } finally {
      setMailBusy(false);
    }
  }

  async function previewOutgoingMail(subject: string, text: string): Promise<void> {
    setMailError('');
    const s = subject.trim();
    const t = text.trim();
    if (!s || !t) {
      setMailError('Subject and message are required to preview.');
      return;
    }
    setMailPreviewBusy(true);
    try {
      const res = await fetch(`/api/crm/leads/${lead.id}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: s, text: t, previewOnly: true }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMailError(data.error || 'Preview failed');
        return;
      }
      if (data.preview) {
        setMailPreviewData(data.preview as EmailPreviewData);
        setMailPreviewOpen(true);
      }
    } catch {
      setMailError('Request failed');
    } finally {
      setMailPreviewBusy(false);
    }
  }

  type ComposerTemplateId = 'mow_reminder' | 'lawn_cut_notice' | 'invoice_link';

  async function insertEmailTemplateIntoComposer(
    templateId: ComposerTemplateId,
    options?: { serviceDayLabel?: string }
  ) {
    setMailError('');
    setMailTemplateBusy(true);
    try {
      const res = await fetch(`/api/crm/leads/${lead.id}/macros/email-template`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId,
          previewOnly: true,
          ...(options?.serviceDayLabel !== undefined && options.serviceDayLabel !== ''
            ? { serviceDayLabel: options.serviceDayLabel }
            : {}),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMailError(data.error || 'Could not load template');
        return;
      }
      setTimelineComposer('email');
      setMailSubject(data.subject);
      setMailBody(data.text);
    } catch {
      setMailError('Request failed');
    } finally {
      setMailTemplateBusy(false);
    }
  }

  async function deleteLead() {
    if (!confirm('Delete this lead and all stored messages? This cannot be undone.')) return;
    const res = await fetch(`/api/crm/leads/${lead.id}`, { method: 'DELETE' });
    if (res.ok) {
      router.push('/admin');
      router.refresh();
    }
  }

  return (
    <div className="flex flex-col gap-5 pb-8 lg:grid lg:grid-cols-[minmax(272px,320px)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-5 lg:items-start">
      <header className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4 lg:col-start-1 lg:row-start-1 lg:self-start">
        <Link
          href="/admin"
          className="text-xs text-slate-500 hover:text-primary mb-1 inline-block font-medium"
        >
          ← All leads
        </Link>
        <div className="flex flex-col gap-3">
          <div className="min-w-0">
            <ContactField
              variant="heroName"
              label="Name"
              emptyHint="Add name"
              editing={editing}
              fieldKey="name"
              draft={draft}
              setDraft={setDraft}
              displayValue={lead.name}
              saving={fieldSaving}
              error={fieldError}
              inputRef={editFieldRef}
              onStartEdit={() => startEdit('name')}
              onSave={() => void saveEdit()}
              onCancel={cancelEdit}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Status
              </span>
              <div className="relative w-full min-w-0" ref={statusMenuRef}>
                <button
                  type="button"
                  id="lead-status-menu-trigger"
                  aria-haspopup="listbox"
                  aria-expanded={statusMenuOpen}
                  aria-label={`Status: ${LEAD_STATUS_LABELS[lead.status]}. Change status`}
                  disabled={fieldSaving}
                  onClick={() => {
                    setFieldError('');
                    cancelEdit();
                    setStatusMenuOpen((open) => !open);
                  }}
                  className="flex w-full min-w-0 items-center justify-between gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-800 shadow-sm hover:border-primary/35 hover:bg-slate-50/90 transition-colors disabled:opacity-60"
                >
                  <span
                    className={`min-w-0 truncate inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${leadStatusBadge[lead.status]}`}
                  >
                    {LEAD_STATUS_LABELS[lead.status]}
                  </span>
                  <FaChevronDown
                    className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform ${statusMenuOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                {statusMenuOpen ? (
                  <ul
                    role="listbox"
                    aria-labelledby="lead-status-menu-trigger"
                    className="absolute left-0 top-[calc(100%+0.35rem)] z-50 min-w-[13.5rem] max-w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-slate-200/90 bg-slate-50/80 p-1.5 shadow-lg shadow-slate-900/12 backdrop-blur-sm space-y-1"
                  >
                    {LEAD_STATUSES.map((s) => {
                      const selected = s === lead.status;
                      const row = leadStatusMenuRow[s];
                      return (
                        <li key={s} role="presentation">
                          <button
                            type="button"
                            role="option"
                            aria-selected={selected}
                            disabled={fieldSaving}
                            onClick={() => void saveStatus(s)}
                            className={`flex w-full items-center justify-between gap-2 border-l-4 pl-3 pr-3 py-2.5 text-left text-sm font-medium transition-[background-color,box-shadow,ring-color] duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50 disabled:opacity-50 ${
                              selected ? row.active : row.idle
                            }`}
                          >
                            <span>{LEAD_STATUS_LABELS[s]}</span>
                            {selected ? (
                              <span
                                className="shrink-0 rounded-md bg-white/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-current ring-1 ring-black/5"
                                aria-hidden
                              >
                                Current
                              </span>
                            ) : null}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={deleteLead}
                className="inline-flex h-9 items-center justify-center rounded-md border border-red-200 bg-white px-3 text-xs text-red-700 hover:bg-red-50"
              >
                Delete lead
              </button>
            </div>
          </div>
        </div>

        {fieldError && statusMenuOpen && !editing && (
          <p className="text-sm text-red-600 mt-1.5">{fieldError}</p>
        )}
      </header>

      <div className="min-w-0 space-y-5 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4 space-y-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h2 className="text-base font-semibold text-slate-900 tracking-tight">Timeline</h2>
                  <span className="text-xs text-slate-400 tabular-nums">
                    {allRows.length} event{allRows.length === 1 ? '' : 's'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 max-w-2xl leading-snug">
                  Newest first — emails, notes, and field changes. While this lead is open we check Gmail
                  every minute for new messages to or from this inbox (and when you return to the tab).
                </p>
              </div>
              <input
                type="search"
                placeholder="Search timeline…"
                value={activitySearch}
                onChange={(e) => setActivitySearch(e.target.value)}
                className="w-full sm:max-w-xs px-2.5 py-1.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary shrink-0"
              />
            </div>
            {activitySearch.trim() ? (
              <p className="text-xs text-slate-500 -mt-1">
                {filteredRows.length} match{filteredRows.length === 1 ? '' : 'es'}
              </p>
            ) : null}

            <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-2.5 sm:p-3 space-y-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide shrink-0">
                  Add to timeline
                </span>
                <div className="relative w-full sm:w-[min(100%,15rem)] shrink-0" ref={timelineComposerRef}>
                  <button
                    type="button"
                    id="lead-timeline-composer-trigger"
                    aria-haspopup="listbox"
                    aria-expanded={timelineComposerOpen}
                    aria-label={
                      timelineComposer === 'note'
                        ? 'Composer: add note. Change type'
                        : 'Composer: send email. Change type'
                    }
                    onClick={() => setTimelineComposerOpen((o) => !o)}
                    className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200/90 bg-white pl-2.5 pr-2 py-2 text-sm font-medium text-slate-800 shadow-sm hover:border-primary/30 hover:bg-slate-50/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      {timelineComposer === 'note' ? (
                        <FaStickyNote
                          className="shrink-0 text-[14px] text-amber-800/85"
                          aria-hidden
                        />
                      ) : (
                        <FaEnvelope className="shrink-0 text-[14px] text-primary-dark" aria-hidden />
                      )}
                      <span className="truncate">
                        {timelineComposer === 'note' ? 'Add note' : 'Send email'}
                      </span>
                    </span>
                    <FaChevronDown
                      className={`h-3 w-3 shrink-0 text-slate-400 transition-transform duration-200 ${timelineComposerOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                  {timelineComposerOpen ? (
                    <ul
                      role="listbox"
                      aria-labelledby="lead-timeline-composer-trigger"
                      className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-40 overflow-hidden rounded-xl border border-slate-200/90 bg-white p-1 shadow-lg shadow-slate-900/[0.08] ring-1 ring-black/[0.04]"
                    >
                      <li role="presentation">
                        <button
                          type="button"
                          role="option"
                          aria-selected={timelineComposer === 'note'}
                          onClick={() => {
                            setTimelineComposer('note');
                            setTimelineComposerOpen(false);
                          }}
                          className={`flex w-full items-center gap-2.5 border-l-[3px] py-2.5 pl-2.5 pr-3 text-left text-sm font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-inset ${
                            timelineComposer === 'note'
                              ? 'border-amber-500 bg-amber-50/70 text-amber-950'
                              : 'border-transparent text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <FaStickyNote
                            className={`shrink-0 text-[14px] ${timelineComposer === 'note' ? 'text-amber-800' : 'text-amber-700/70'}`}
                            aria-hidden
                          />
                          <span className="min-w-0 flex-1">Add note</span>
                          {timelineComposer === 'note' ? (
                            <span className="shrink-0 rounded-md bg-white/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-900/90 ring-1 ring-amber-900/10">
                              Current
                            </span>
                          ) : null}
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          type="button"
                          role="option"
                          aria-selected={timelineComposer === 'email'}
                          onClick={() => {
                            setTimelineComposer('email');
                            setTimelineComposerOpen(false);
                          }}
                          className={`flex w-full items-center gap-2.5 border-l-[3px] py-2.5 pl-2.5 pr-3 text-left text-sm font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-inset ${
                            timelineComposer === 'email'
                              ? 'border-primary bg-primary/[0.06] text-slate-900'
                              : 'border-transparent text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <FaEnvelope
                            className={`shrink-0 text-[14px] ${timelineComposer === 'email' ? 'text-primary-dark' : 'text-slate-400'}`}
                            aria-hidden
                          />
                          <span className="min-w-0 flex-1">Send email</span>
                          {timelineComposer === 'email' ? (
                            <span className="shrink-0 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-dark ring-1 ring-primary/15">
                              Current
                            </span>
                          ) : null}
                        </button>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>

              {timelineComposer === 'note' ? (
                <>
                  <textarea
                    className={`${inputClass} min-h-[3rem] py-2 resize-y bg-white text-sm`}
                    placeholder="Quick note — saves to the timeline with a timestamp"
                    value={timelineNote}
                    onChange={(e) => setTimelineNote(e.target.value)}
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
                      <FaImage className="text-[12px] text-slate-500" aria-hidden />
                      Add photo
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files?.[0] ?? null;
                          setNoteError('');
                          setNoteErrorDetail('');
                          setTimelineNotePhoto(file);
                          e.currentTarget.value = '';
                        }}
                      />
                    </label>
                    {timelineNotePhoto ? (
                      <>
                        <span className="max-w-full truncate text-xs text-slate-600">
                          {timelineNotePhoto.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => setTimelineNotePhoto(null)}
                          className="text-xs font-medium text-slate-500 hover:text-slate-700 hover:underline"
                        >
                          Remove
                        </button>
                      </>
                    ) : (
                      <span className="text-xs text-slate-500">
                        iPhone photos OK — we resize to JPEG before upload
                      </span>
                    )}
                  </div>
                  {timelineNotePhoto ? (
                    <p className="text-xs text-slate-500 -mt-1">
                      Add a note above to use as the photo caption.
                    </p>
                  ) : null}
                  {noteError ? (
                    <div
                      className="rounded-lg border border-red-200 bg-red-50/90 px-3 py-2 text-sm text-red-800 space-y-1.5"
                      role="alert"
                    >
                      <p className="font-medium leading-snug m-0">{noteError}</p>
                      {noteErrorDetail ? (
                        <p className="text-xs font-mono text-red-900/90 whitespace-pre-wrap break-words leading-snug m-0 border-t border-red-200/80 pt-1.5">
                          {noteErrorDetail}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={noteBusy || !timelineNote.trim()}
                      onClick={addTimelineNote}
                      className="px-3 py-1.5 rounded-md bg-slate-800 text-white text-xs font-medium hover:bg-slate-900 disabled:opacity-50"
                    >
                      {noteBusy
                        ? notePreparingPhoto
                          ? 'Preparing photo…'
                          : 'Adding…'
                        : 'Add note'}
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-xs text-slate-500 leading-snug">
                  Compose in the <span className="font-medium text-slate-700">draft card</span> on the
                  timeline below. Sends via Gmail (<code className="text-[11px] bg-slate-100 px-1 rounded">EMAIL_USER</code>
                  ); inbound mail is checked every minute while you stay on this lead.
                </p>
              )}
            </div>

            <div className="relative pl-3 border-l-2 border-primary/20 space-y-2.5 ml-1">
              {timelineComposer === 'email' ? (
                <article className="relative ml-2 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-b from-white to-primary/[0.04] shadow-sm">
                  <div className="absolute -left-[15px] top-5 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary" />
                  <div className="border-b border-primary/15 bg-white/80 px-3 py-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-dark">
                        <FaEnvelope className="text-[13px] shrink-0" aria-hidden />
                        Outgoing draft
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      Subject and message update live here. Send when ready — the sent message appears in the
                      timeline below.
                    </p>
                  </div>
                  <div className="px-3 py-3 space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-medium text-slate-500">Template</span>
                      <button
                        type="button"
                        disabled={mailTemplateBusy}
                        onClick={() => void insertEmailTemplateIntoComposer('mow_reminder')}
                        className="px-2.5 py-1 rounded-md border border-slate-200 bg-white text-[11px] font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                      >
                        {mailTemplateBusy ? 'Loading…' : 'Mow reminder (tomorrow)'}
                      </button>
                      <button
                        type="button"
                        disabled={mailTemplateBusy}
                        onClick={() => void insertEmailTemplateIntoComposer('lawn_cut_notice')}
                        className="px-2.5 py-1 rounded-md border border-slate-200 bg-white text-[11px] font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                      >
                        We&apos;ve cut your lawn
                      </button>
                      <button
                        type="button"
                        disabled={mailTemplateBusy}
                        onClick={() => void insertEmailTemplateIntoComposer('invoice_link')}
                        className="px-2.5 py-1 rounded-md border border-slate-200 bg-white text-[11px] font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                      >
                        Invoice link
                      </button>
                    </div>
                    {!lead.email.trim() ? (
                      <p className="text-xs text-amber-900 bg-amber-50/90 border border-amber-200/70 rounded-lg px-3 py-2">
                        Add an email address in the contact panel to send.
                      </p>
                    ) : null}
                    <input
                      className={`${inputClass} bg-white`}
                      placeholder="Subject"
                      value={mailSubject}
                      onChange={(e) => {
                        setMailError('');
                        setMailSubject(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                          e.preventDefault();
                          void sendOutgoingMail(mailSubject, mailBody);
                        }
                      }}
                    />
                    <textarea
                      className={`${inputClass} min-h-[7rem] py-2 resize-y bg-white text-sm`}
                      placeholder="Message"
                      value={mailBody}
                      onChange={(e) => {
                        setMailError('');
                        setMailBody(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                          e.preventDefault();
                          void sendOutgoingMail(mailSubject, mailBody);
                        }
                      }}
                    />
                    {mailError ? <p className="text-sm text-red-600">{mailError}</p> : null}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
                      <p className="text-[10px] text-slate-400">
                        <kbd className="rounded border border-slate-200 bg-slate-50 px-1 py-0.5 font-mono text-[9px]">
                          ⌘
                        </kbd>
                        {' + '}
                        <kbd className="rounded border border-slate-200 bg-slate-50 px-1 py-0.5 font-mono text-[9px]">
                          ↵
                        </kbd>
                        {' or Ctrl+↵ to send'}
                      </p>
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <button
                          type="button"
                          disabled={mailBusy || mailTemplateBusy || mailPreviewBusy || !mailSubject.trim() || !mailBody.trim()}
                          onClick={() => void previewOutgoingMail(mailSubject, mailBody)}
                          className="px-3 py-1.5 rounded-md border border-slate-200 bg-white text-slate-600 text-xs font-medium hover:bg-slate-50 disabled:opacity-50"
                        >
                          {mailPreviewBusy ? 'Previewing…' : 'Preview'}
                        </button>
                        <button
                          type="button"
                          disabled={mailBusy || mailTemplateBusy}
                          onClick={discardOutgoingDraft}
                          className="px-3 py-1.5 rounded-md border border-slate-200 bg-white text-slate-600 text-xs font-medium hover:bg-slate-50 disabled:opacity-50"
                        >
                          Discard draft
                        </button>
                        <button
                          type="button"
                          disabled={
                            mailBusy ||
                            !lead.email.trim() ||
                            !mailSubject.trim() ||
                            !mailBody.trim()
                          }
                          onClick={() => void sendOutgoingMail(mailSubject, mailBody)}
                          className="px-3 py-1.5 rounded-md bg-primary text-white text-xs font-semibold hover:bg-primary-dark disabled:opacity-50"
                        >
                          {mailBusy ? 'Sending…' : 'Send'}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ) : null}
              {filteredRows.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6 text-center text-slate-500 text-sm ml-2">
                  No events match this search.
                </div>
              ) : (
                timelineSegments.map((seg) =>
                  seg.type === 'row' ? (
                    <ActivityItem
                      key={seg.row.key}
                      row={seg.row}
                      open={isRowOpen(seg.row.key)}
                      onToggle={() => toggleActivity(seg.row.key)}
                      searchActive={searchOpen}
                      staffNoteActions={{
                        onLeadUpdated: (next) => {
                          setLead(next);
                          router.refresh();
                        },
                        updateTimelineNote,
                        deleteTimelineNote,
                      }}
                      emailReply={{
                        contactDisplayName: timelineContactLabel(lead.name, lead.email),
                        customerEmail: lead.email,
                        mailError,
                        onClearMailError: () => setMailError(''),
                        mailBusy,
                        onSendMail: (subject, text) =>
                          sendOutgoingMail(subject, text, { clearMainComposer: false }),
                      }}
                    />
                  ) : (
                    <EmailThreadConversation
                      key={seg.threadKey}
                      rows={seg.rows}
                      open={searchOpen || openActivityKeys.has(seg.threadKey)}
                      onToggle={() => toggleActivity(seg.threadKey)}
                      searchActive={searchOpen}
                      contactDisplayName={timelineContactLabel(lead.name, lead.email)}
                      customerEmail={lead.email}
                      mailError={mailError}
                      onClearMailError={() => setMailError('')}
                      mailBusy={mailBusy}
                      onSendMail={(subject, text) =>
                        sendOutgoingMail(subject, text, { clearMainComposer: false })
                      }
                    />
                  )
                )
              )}
            </div>
          </section>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4 lg:col-start-1 lg:row-start-2 lg:sticky lg:top-4 lg:z-10 lg:self-start">
          <div className="space-y-1.5">
            <div className="flex flex-col gap-1">
              <h2 className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Contact
              </h2>
              <p className="text-[10px] text-slate-400 leading-snug tabular-nums">
                <span className="font-medium text-slate-500">Created</span>{' '}
                {formatCrmDateTimeCompact(lead.createdAt)}
                <span className="mx-1.5 text-slate-300">·</span>
                <span className="font-medium text-slate-500">Updated</span>{' '}
                {formatCrmDateTimeCompact(lead.updatedAt)}
              </p>
            </div>

            <div className="flex flex-col divide-y divide-slate-100 pt-1 border-t border-slate-100">
              <div className="min-w-0 py-2 first:pt-0">
                <ContactField
                  variant="headerCompact"
                  label="Email"
                  shortLabel="Email"
                  emptyHint="Add email"
                  editing={editing}
                  fieldKey="email"
                  draft={draft}
                  setDraft={setDraft}
                  displayValue={lead.email}
                  saving={fieldSaving}
                  error={fieldError}
                  inputRef={editFieldRef}
                  onStartEdit={() => startEdit('email')}
                  onSave={() => void saveEdit()}
                  onCancel={cancelEdit}
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="min-w-0 py-2">
                <ContactField
                  variant="headerCompact"
                  label="Phone"
                  shortLabel="Phone"
                  emptyHint="Add phone"
                  editing={editing}
                  fieldKey="phone"
                  draft={draft}
                  setDraft={setDraft}
                  displayValue={lead.phone}
                  saving={fieldSaving}
                  error={fieldError}
                  inputRef={editFieldRef}
                  onStartEdit={() => startEdit('phone')}
                  onSave={() => void saveEdit()}
                  onCancel={cancelEdit}
                  type="tel"
                  autoComplete="tel"
                />
              </div>
              <div className="min-w-0 py-2">
                <ContactField
                  variant="headerCompact"
                  label="Physical address"
                  shortLabel="Address"
                  emptyHint="Add address"
                  editing={editing}
                  fieldKey="physicalAddress"
                  draft={draft}
                  setDraft={setDraft}
                  displayValue={lead.physicalAddress}
                  saving={fieldSaving}
                  error={fieldError}
                  inputRef={editFieldRef}
                  onStartEdit={() => startEdit('physicalAddress')}
                  onSave={() => void saveEdit()}
                  onCancel={cancelEdit}
                  multiline
                  minH="min-h-[4.5rem]"
                />
              </div>
              <div className="min-w-0 py-2">
                <ContactField
                  variant="headerCompact"
                  label="Profile notes"
                  labelHint="(private)"
                  shortLabel="Notes"
                  emptyHint="No internal notes"
                  editing={editing}
                  fieldKey="notes"
                  draft={draft}
                  setDraft={setDraft}
                  displayValue={lead.notes}
                  saving={fieldSaving}
                  error={fieldError}
                  inputRef={editFieldRef}
                  onStartEdit={() => startEdit('notes')}
                  onSave={() => void saveEdit()}
                  onCancel={cancelEdit}
                  multiline
                  minH="min-h-[5rem]"
                  placeholder="Internal reference — timeline shows before → after when you Save"
                />
              </div>
            </div>
        </div>
      </div>

      <EmailPreviewModal
        open={mailPreviewOpen}
        onClose={() => {
          setMailPreviewOpen(false);
          setMailPreviewData(null);
        }}
        onSend={() => {
          void (async () => {
            const sent = await sendOutgoingMail(mailSubject, mailBody);
            if (sent) {
              setMailPreviewOpen(false);
              setMailPreviewData(null);
            }
          })();
        }}
        preview={mailPreviewData}
        loading={mailPreviewBusy}
        sending={mailBusy}
        title="Outgoing email preview"
      />
    </div>
  );
}

function ContactField({
  label,
  labelHint,
  shortLabel,
  emptyHint,
  editing,
  fieldKey,
  draft,
  setDraft,
  displayValue,
  saving,
  error,
  inputRef,
  onStartEdit,
  onSave,
  onCancel,
  multiline,
  minH = 'min-h-[4rem]',
  type = 'text',
  autoComplete,
  placeholder,
  variant = 'default',
}: {
  label: string;
  labelHint?: string;
  /** Narrow column label when collapsed (e.g. "Address") */
  shortLabel?: string;
  emptyHint: string;
  editing: ContactEditKey | null;
  fieldKey: ContactEditKey;
  draft: string;
  setDraft: (s: string) => void;
  displayValue: string;
  saving: boolean;
  error: string;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
  onStartEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  multiline?: boolean;
  minH?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  variant?: 'default' | 'heroName' | 'heroEmail' | 'headerCompact';
}) {
  const active = editing === fieldKey;
  const isHeroName = variant === 'heroName';
  const isHeroEmail = variant === 'heroEmail';
  const isHeaderCompact = variant === 'headerCompact';

  const rowLabel = shortLabel ?? label;
  const collapsedLineClamp = multiline ? 'line-clamp-2' : 'truncate';

  function onKeyDown(e: ReactKeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      onCancel();
    }
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      onSave();
    }
  }

  const nameInputEditClass = `${inputClassCompact} text-base font-semibold`;

  if (!active) {
    if (isHeroName) {
      return (
        <div className="py-0.5">
          <span className="sr-only">{label}</span>
          <button
            type="button"
            onClick={onStartEdit}
            title="Edit name"
            className="w-full text-left rounded-md -mx-0.5 px-0.5 py-0 hover:bg-slate-50 transition-colors"
          >
            {displayValue.trim() ? (
              <span className="block text-base font-semibold text-slate-900 tracking-tight truncate leading-tight">
                {displayValue}
              </span>
            ) : (
              <span className="text-sm text-slate-400 italic">{emptyHint}</span>
            )}
          </button>
        </div>
      );
    }

    const labelCol = (
      <span
        className={
          isHeaderCompact
            ? 'text-[10px] font-semibold uppercase tracking-wide text-slate-400 leading-tight'
            : 'text-[10px] font-semibold uppercase tracking-wide text-slate-400 w-[3.75rem] sm:w-20 shrink-0 leading-tight pt-0.5'
        }
      >
        {isHeroEmail ? 'Email' : rowLabel}
        {labelHint && !isHeroEmail ? (
          <span
            className={
              isHeaderCompact
                ? 'font-normal normal-case text-[9px] text-slate-400 ml-1'
                : 'block font-normal normal-case text-[9px] text-slate-400 mt-0.5'
            }
          >
            {labelHint}
          </span>
        ) : null}
      </span>
    );

    return (
      <div className={isHeaderCompact ? 'py-0' : 'py-1'}>
        <button
          type="button"
          onClick={onStartEdit}
          title={`Edit ${label}`}
          className={
            isHeaderCompact
              ? 'w-full flex flex-col gap-1 items-stretch text-left rounded-md -mx-0.5 px-0.5 py-1 hover:bg-slate-50 transition-colors'
              : 'w-full flex items-start gap-2 text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors'
          }
        >
          {labelCol}
          <span
            className={`min-w-0 leading-snug text-left ${isHeaderCompact ? 'text-sm text-slate-800' : 'flex-1 text-[11px] sm:text-xs text-slate-700'} ${collapsedLineClamp} break-words ${multiline ? 'whitespace-pre-line' : ''}`}
          >
            {displayValue.trim() ? displayValue : <span className="text-slate-400 italic">{emptyHint}</span>}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={
        isHeaderCompact
          ? 'py-1.5 space-y-1 rounded-lg border border-slate-200 bg-slate-50/70 px-2 -mx-0.5'
          : 'py-1.5 space-y-1.5 rounded-lg border border-slate-200 bg-slate-50/70 px-2 -mx-0.5'
      }
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={
            isHeaderCompact
              ? 'text-[10px] font-semibold uppercase tracking-wide text-slate-400'
              : 'text-xs font-medium text-slate-600'
          }
        >
          {isHeaderCompact ? rowLabel : label}
          {labelHint ? (
            isHeaderCompact ? (
              <span className="font-normal normal-case text-[9px] text-slate-400 ml-1">{labelHint}</span>
            ) : (
              <span className="font-normal text-slate-400"> {labelHint}</span>
            )
          ) : null}
        </span>
      </div>
      {multiline ? (
        <textarea
          ref={inputRef as RefObject<HTMLTextAreaElement>}
          className={`${textareaClassCompact} ${minH}`}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      ) : (
        <input
          ref={inputRef as RefObject<HTMLInputElement>}
          type={type}
          autoComplete={autoComplete}
          className={isHeroName ? nameInputEditClass : inputClassCompact}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      )}
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          className="px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={saving}
          className="px-2.5 py-1 rounded-md border border-slate-200 bg-white text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

type StaffNoteActionsProps = {
  onLeadUpdated: (lead: LeadRecord) => void;
  updateTimelineNote: (noteId: string, text: string) => Promise<LeadRecord | null>;
  deleteTimelineNote: (noteId: string) => Promise<LeadRecord | null>;
};

function StaffNoteActivityCard({
  ev,
  open,
  onToggle,
  onLeadUpdated,
  updateTimelineNote,
  deleteTimelineNote,
}: {
  ev: CrmTimelineStaffNote;
  open: boolean;
  onToggle: () => void;
} & StaffNoteActionsProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(ev.body);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (!editing) setDraft(ev.body);
  }, [ev.body, ev.id, editing]);

  function startEdit() {
    if (!open) onToggle();
    setEditing(true);
    setDraft(ev.body);
    setErr('');
  }

  function cancelEdit() {
    setDraft(ev.body);
    setEditing(false);
    setErr('');
  }

  async function saveNote() {
    setErr('');
    const t = draft.trim();
    if (!t) {
      setErr('Note cannot be empty.');
      return;
    }
    if (t === ev.body) {
      setEditing(false);
      return;
    }
    setBusy(true);
    try {
      const next = await updateTimelineNote(ev.id, draft);
      if (next) onLeadUpdated(next);
      setEditing(false);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setBusy(false);
    }
  }

  async function deleteNote() {
    if (!confirm('Delete this staff note?')) return;
    setErr('');
    setBusy(true);
    try {
      const next = await deleteTimelineNote(ev.id);
      if (next) onLeadUpdated(next);
      setEditing(false);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Delete failed');
    } finally {
      setBusy(false);
    }
  }

  const needsExpand = sourceLineCount(ev.body) > 5;
  const showClamped = needsExpand && !open;

  return (
    <article className="relative ml-2 rounded-xl border border-amber-200/80 bg-amber-50/40 overflow-hidden">
      <div className="absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400" />
      <div className="w-full text-left px-3 py-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-amber-200/50">
        <div className="min-w-0 flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-900/90">
            <FaStickyNote className="text-[13px] text-amber-800/85 shrink-0" aria-hidden />
            Staff note
          </span>
          {needsExpand && !editing ? (
            <button
              type="button"
              onClick={onToggle}
              className="text-xs font-medium text-amber-800/70 hover:underline"
            >
              {open ? 'Show less' : 'Expand'}
            </button>
          ) : null}
        </div>
        <time
          className="text-[11px] text-slate-500 tabular-nums whitespace-nowrap shrink-0"
          dateTime={ev.createdAt}
          title={formatCrmDateTime(ev.createdAt)}
        >
          {formatCrmDateTimeCompact(ev.createdAt)}
        </time>
      </div>
      <div className="px-3 pb-3 pt-1.5">
        {editing ? (
          <>
            <textarea
              className={`${inputClass} min-h-[6rem] resize-y bg-white`}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              disabled={busy}
              aria-label="Edit staff note"
            />
            {err ? <p className="text-xs text-red-600 mt-2">{err}</p> : null}
            <div className="flex flex-wrap gap-2 mt-2">
              <button
                type="button"
                disabled={busy}
                onClick={() => void saveNote()}
                className="px-3 py-1.5 rounded-lg bg-amber-900 text-white text-xs font-semibold hover:bg-amber-950 disabled:opacity-50"
              >
                {busy ? 'Saving…' : 'Save'}
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={cancelEdit}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p
              className={`text-sm text-slate-800 whitespace-pre-wrap break-words leading-relaxed ${showClamped ? 'line-clamp-5' : ''}`}
            >
              {ev.body}
            </p>
            {ev.photo ? (
              <a
                href={ev.photo.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 block overflow-hidden rounded-lg border border-amber-200/80 bg-white hover:border-amber-300/90"
              >
                <img
                  src={ev.photo.url}
                  alt="Timeline photo attachment"
                  className="max-h-72 w-full object-cover"
                  loading="lazy"
                />
              </a>
            ) : null}
            {(!needsExpand || open) && (
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={startEdit}
                  disabled={busy}
                  className="text-xs font-medium text-amber-900/90 hover:underline disabled:opacity-50"
                >
                  Edit note
                </button>
                <button
                  type="button"
                  onClick={() => void deleteNote()}
                  disabled={busy}
                  className="text-xs font-medium text-red-700 hover:underline disabled:opacity-50"
                >
                  Delete note
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}

function ActivityItem({
  row,
  open,
  onToggle,
  searchActive,
  staffNoteActions,
  emailReply,
}: {
  row: ActivityRow;
  open: boolean;
  onToggle: () => void;
  searchActive: boolean;
  staffNoteActions?: StaffNoteActionsProps;
  emailReply: EmailReplyActionsProps;
}) {
  if (row.kind === 'created') {
    return (
      <article className="relative ml-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm">
        <div className="absolute -left-[15px] top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300" />
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="font-semibold text-slate-700">Lead record created</span>
          <time className="text-xs text-slate-500 tabular-nums" dateTime={row.sortAt}>
            {formatCrmDateTime(row.sortAt)}
          </time>
        </div>
        <p className="text-xs text-slate-400 mt-1">System · record added to CRM</p>
      </article>
    );
  }

  if (row.kind === 'email' && row.email) {
    return (
      <EmailActivityCard
        message={row.email}
        open={open}
        onToggle={onToggle}
        showToggle={!searchActive}
        {...emailReply}
      />
    );
  }

  if (row.kind === 'staff_note' && row.timeline?.kind === 'staff_note') {
    const ev = row.timeline;
    if (staffNoteActions) {
      return (
        <StaffNoteActivityCard
          ev={ev}
          open={open}
          onToggle={onToggle}
          {...staffNoteActions}
        />
      );
    }
    const needsExpand = sourceLineCount(ev.body) > 5;
    const showClamped = needsExpand && !open;
    return (
      <article className="relative ml-2 rounded-xl border border-amber-200/80 bg-amber-50/40 overflow-hidden">
        <div className="absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400" />
        <div className="w-full text-left px-3 py-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-amber-200/50">
          <div className="min-w-0 flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-900/90">
              <FaStickyNote className="text-[13px] text-amber-800/85 shrink-0" aria-hidden />
              Staff note
            </span>
            {needsExpand ? (
              <button
                type="button"
                onClick={onToggle}
                className="text-xs font-medium text-amber-800/70 hover:underline"
              >
                {open ? 'Show less' : 'Expand'}
              </button>
            ) : null}
          </div>
          <time
            className="text-[11px] text-slate-500 tabular-nums whitespace-nowrap shrink-0"
            dateTime={ev.createdAt}
            title={formatCrmDateTime(ev.createdAt)}
          >
            {formatCrmDateTimeCompact(ev.createdAt)}
          </time>
        </div>
        <div className="px-3 pb-3 pt-1.5">
          <p
            className={`text-sm text-slate-800 whitespace-pre-wrap break-words leading-relaxed ${showClamped ? 'line-clamp-5' : ''}`}
          >
            {ev.body}
          </p>
          {ev.photo ? (
            <a
              href={ev.photo.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 block overflow-hidden rounded-lg border border-amber-200/80 bg-white hover:border-amber-300/90"
            >
              <img
                src={ev.photo.url}
                alt="Timeline photo attachment"
                className="max-h-72 w-full object-cover"
                loading="lazy"
              />
            </a>
          ) : null}
        </div>
      </article>
    );
  }

  if (row.kind === 'profile_update' && row.timeline?.kind === 'profile_update') {
    const ev = row.timeline;
    const useToggle = profileUpdateUsesDetailsToggle(ev.lines);
    const expanded = !useToggle || open;
    const collapsedSummary = profileUpdateCollapsedSummary(ev.lines);

    return (
      <article className="relative ml-2 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary/70" />
        <div className="px-3 py-2.5 flex flex-wrap items-start justify-between gap-3 hover:bg-slate-50/80 transition-colors">
          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <FaEdit className="text-[13px] text-primary/80 shrink-0" aria-hidden />
              Saved edit
            </span>
            {!useToggle ? (
              <p className="mt-2 text-sm text-slate-800 break-words whitespace-pre-wrap leading-snug">
                {renderProfileUpdateLine(ev.lines[0] ?? '')}
              </p>
            ) : expanded ? (
              <ul className="mt-2 text-sm text-slate-800 space-y-1.5 list-disc pl-4 marker:text-slate-400">
                {ev.lines.map((line) => (
                  <li key={line} className="break-words whitespace-pre-wrap leading-snug pl-0.5">
                    {renderProfileUpdateLine(line)}
                  </li>
                ))}
              </ul>
            ) : (
              <button
                type="button"
                onClick={onToggle}
                className="mt-0.5 w-full text-left rounded-md -mx-1 px-1 py-0.5 hover:bg-slate-100/80 transition-colors"
              >
                <span className="text-sm text-slate-800 leading-snug break-words">
                  {renderProfileUpdateLine(collapsedSummary)}
                </span>
              </button>
            )}
          </div>
          <div className="flex flex-col items-end gap-0.5 shrink-0 text-right">
            <time className="text-[11px] text-slate-500 tabular-nums" dateTime={ev.createdAt}>
              {formatCrmDateTimeCompact(ev.createdAt)}
            </time>
            <time className="text-[10px] text-slate-400 tabular-nums max-w-[14rem]" dateTime={ev.createdAt}>
              {formatCrmDateTime(ev.createdAt)}
            </time>
            {useToggle ? (
              <button
                type="button"
                onClick={onToggle}
                className="text-xs text-primary font-medium hover:underline mt-1"
              >
                {open ? 'Hide' : 'Details'}
              </button>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return null;
}

function EmailMessageBubble({
  message,
  contactDisplayName,
}: {
  message: CrmEmailMessage;
  contactDisplayName: string;
}) {
  const outbound = message.direction === 'outbound';
  const body = stripEmailReplyQuotes(message.bodyText);
  const compact = formatCrmDateTimeCompact(message.createdAt);
  const failure = message.deliveryFailure;

  if (message.kind === 'bounce' && message.bounce) {
    const b = message.bounce;
    return (
      <div className="flex justify-start">
        <div className="max-w-[min(100%,32rem)] rounded-2xl rounded-bl-md border border-amber-300/90 bg-amber-50/95 px-3.5 py-2.5 text-amber-950 shadow-sm">
          <p className="text-[11px] font-semibold mb-1.5 text-amber-900/90">
            Delivery failure (unlinked notice) · {compact}
          </p>
          <p className="text-xs font-semibold text-amber-950">{b.summary}</p>
          <p className="text-xs text-amber-900/90 mt-1 break-all">
            Failed address: <span className="font-mono">{b.failedRecipient}</span>
          </p>
          {b.diagnostic ? (
            <p className="text-[11px] text-amber-900/80 mt-2 font-mono leading-snug break-all">
              {b.diagnostic}
            </p>
          ) : null}
          <p className="text-[11px] text-amber-800/80 mt-2 border-t border-amber-200/80 pt-2 whitespace-pre-wrap leading-relaxed">
            {body.slice(0, 1200)}
            {body.length > 1200 ? '…' : ''}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={outbound ? 'flex justify-end' : 'flex justify-start'}>
      <div
        className={
          outbound
            ? `max-w-[min(100%,32rem)] rounded-[1.25rem] rounded-br-md px-3.5 py-2.5 shadow-sm ${
                failure
                  ? 'bg-primary text-white ring-2 ring-amber-400/90 ring-offset-2 ring-offset-white'
                  : 'bg-primary text-white'
              }`
            : 'max-w-[min(100%,32rem)] rounded-[1.25rem] rounded-bl-md bg-slate-200/90 px-3.5 py-2.5 text-slate-900 shadow-sm'
        }
      >
        <p
          className={`text-[11px] font-medium mb-1 tabular-nums ${outbound ? 'text-white/80' : 'text-slate-600'}`}
        >
          {outbound ? 'You' : contactDisplayName.trim() || 'Customer'} · {compact}
        </p>
        <p
          className={`text-[15px] whitespace-pre-wrap leading-snug ${outbound ? 'text-white' : 'text-slate-900'}`}
        >
          {body || '—'}
        </p>
        {outbound && failure ? (
          <div className="mt-2.5 pt-2.5 border-t border-white/25 text-left space-y-1">
            <p className="text-[11px] font-semibold text-amber-100 uppercase tracking-wide">
              Not delivered
            </p>
            <p className="text-sm font-semibold text-white">{failure.summary}</p>
            <p className="text-[11px] text-white/90 break-all">
              <span className="font-mono">{failure.failedRecipient}</span>
            </p>
            {failure.diagnostic ? (
              <p className="text-[10px] text-white/75 font-mono leading-snug break-all">
                {failure.diagnostic}
              </p>
            ) : null}
            <p className="text-[10px] text-white/60 tabular-nums">
              Reported {formatCrmDateTimeCompact(failure.recordedAt)}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

type EmailReplyActionsProps = {
  /** Lead name (or fallback) for email row headers and bubbles on this lead page. */
  contactDisplayName: string;
  customerEmail: string;
  mailError: string;
  onClearMailError: () => void;
  mailBusy: boolean;
  onSendMail: (subject: string, text: string) => Promise<boolean>;
};

/**
 * Chat-style follow-up. Subject is chosen automatically (Re: …) for email threading
 * but not shown like an email composer.
 */
function latestOutboundInThread(messages: CrmEmailMessage[]): CrmEmailMessage | undefined {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].direction === 'outbound') return messages[i];
  }
  return undefined;
}

function EmailThreadReplyComposer({
  threadMessages,
  customerEmail,
  followUpBlocked,
  mailError,
  onClearMailError,
  mailBusy,
  onSendMail,
}: EmailReplyActionsProps & {
  threadMessages: CrmEmailMessage[];
  /** Last outbound in this thread was not delivered — block follow-up until the address is fixed / a new send succeeds. */
  followUpBlocked?: boolean;
}) {
  const [replyBody, setReplyBody] = useState('');

  const canSend = customerEmail.trim().length > 0;
  const replyReady = replyBody.trim().length > 0;

  function subjectForSend() {
    return replySubjectForThread(threadMessages);
  }

  async function submitReply() {
    const ok = await onSendMail(subjectForSend(), replyBody);
    if (ok) setReplyBody('');
  }

  return (
    <div className="px-3 py-3 bg-slate-100/80 border-t border-slate-200/60">
      {followUpBlocked ? (
        <p className="text-xs text-amber-950 bg-amber-50/90 border border-amber-300/80 rounded-xl px-3 py-2 leading-snug">
          This send was not delivered, so follow-up from here is turned off. Correct the lead’s email (or wait until a new
          message in this thread sends successfully), then you can reply again.
        </p>
      ) : (
        <>
          {!canSend ? (
            <p className="text-xs text-amber-900 bg-amber-50/90 border border-amber-200/70 rounded-xl px-3 py-2 mb-2">
              Add an email address on this lead to send a message.
            </p>
          ) : null}
          <div className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden">
            <textarea
              className="w-full min-h-[4.25rem] max-h-48 px-3.5 py-3 text-[15px] leading-snug bg-transparent border-0 focus:outline-none focus:ring-0 resize-y placeholder:text-slate-400 disabled:opacity-50"
              placeholder="Reply… (⌘↵ or Ctrl+↵ to send)"
              value={replyBody}
              onChange={(e) => {
                onClearMailError();
                setReplyBody(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Enter' || !(e.metaKey || e.ctrlKey)) return;
                e.preventDefault();
                if (!canSend || mailBusy || !replyReady) return;
                void submitReply();
              }}
              disabled={!canSend}
              aria-label="Reply message"
            />
            <div className="flex flex-wrap items-center justify-between gap-2 px-3 pb-2.5 pt-0">
              <p className="text-[10px] text-slate-400 pl-0.5">
                Threading uses <span className="font-medium text-slate-500">Re:</span> automatically.
              </p>
              <button
                type="button"
                disabled={!canSend || mailBusy || !replyReady}
                onClick={() => void submitReply()}
                className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark disabled:opacity-40 shadow-sm"
              >
                {mailBusy ? 'Sending…' : 'Send'}
              </button>
            </div>
          </div>
          {mailError ? <p className="text-sm text-red-600 mt-2">{mailError}</p> : null}
        </>
      )}
    </div>
  );
}

function EmailThreadConversation({
  rows,
  open,
  onToggle,
  searchActive,
  contactDisplayName,
  customerEmail,
  mailError,
  onClearMailError,
  mailBusy,
  onSendMail,
}: {
  rows: ActivityRow[];
  open: boolean;
  onToggle: () => void;
  searchActive: boolean;
} & EmailReplyActionsProps) {
  const messages = rows
    .map((r) => r.email!)
    .sort((a, b) => (a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0));
  const subject = threadDisplaySubject(messages);
  const latest = messages[messages.length - 1];
  const strippedLatest = stripEmailReplyQuotes(latest.bodyText);
  const preview =
    strippedLatest.length > 120 ? `${strippedLatest.slice(0, 120).trim()}…` : strippedLatest;
  const threadFailureSummaries = messages
    .filter((m) => m.direction === 'outbound' && m.deliveryFailure)
    .map((m) => m.deliveryFailure!.summary);
  const threadFailureLine =
    threadFailureSummaries.length > 0 ? threadFailureSummaries.join(' · ') : '';
  const showToggle = !searchActive;
  const latestOutbound = latestOutboundInThread(messages);
  const followUpBlocked = Boolean(latestOutbound?.deliveryFailure);

  return (
    <article className="relative ml-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50/95 to-slate-100/60 shadow-sm">
      <div className="absolute -left-[15px] top-5 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary" />
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-3 border-b border-slate-200/60 bg-white/50 px-3 py-2.5 text-left hover:bg-white/80 transition-colors"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <FaEnvelope className="text-[13px] text-slate-400 shrink-0" aria-hidden />
              {messages.length} in this thread
            </span>
            {showToggle && <span className="text-xs text-slate-400">{open ? '▼' : '▶'}</span>}
          </div>
          <p className="mt-0.5 text-base font-semibold text-slate-900 tracking-tight">{subject}</p>
          {!open && (
            <>
              {threadFailureLine ? (
                <p className="mt-1 text-xs font-semibold text-amber-900">
                  Not delivered: {threadFailureLine}
                </p>
              ) : null}
              <p className="mt-1 line-clamp-2 text-sm text-slate-600 whitespace-pre-wrap leading-snug">
                {preview}
              </p>
            </>
          )}
        </div>
        <time
          className="shrink-0 text-[11px] text-slate-400 tabular-nums"
          dateTime={latest.createdAt}
        >
          {formatCrmDateTimeCompact(latest.createdAt)}
        </time>
      </button>
      {open && (
        <>
          <div className="space-y-2.5 px-3 py-3.5 border-b border-slate-200/50 bg-slate-50/40">
            {messages.map((m) => (
              <EmailMessageBubble key={m.id} message={m} contactDisplayName={contactDisplayName} />
            ))}
          </div>
          <EmailThreadReplyComposer
            threadMessages={messages}
            contactDisplayName={contactDisplayName}
            customerEmail={customerEmail}
            followUpBlocked={followUpBlocked}
            mailError={mailError}
            onClearMailError={onClearMailError}
            mailBusy={mailBusy}
            onSendMail={onSendMail}
          />
        </>
      )}
    </article>
  );
}

function EmailActivityCard({
  message,
  open,
  onToggle,
  showToggle,
  contactDisplayName,
  customerEmail,
  mailError,
  onClearMailError,
  mailBusy,
  onSendMail,
}: {
  message: CrmEmailMessage;
  open: boolean;
  onToggle: () => void;
  showToggle: boolean;
} & EmailReplyActionsProps) {
  const outbound = message.direction === 'outbound';
  const isBounce = message.kind === 'bounce';
  const failure = message.deliveryFailure;
  const stripped = stripEmailReplyQuotes(message.bodyText);
  const preview =
    isBounce && message.bounce
      ? `${message.bounce.summary} · ${message.bounce.failedRecipient}`
      : outbound && failure
        ? `Not delivered: ${failure.summary}`
        : stripped.length > 140
          ? `${stripped.slice(0, 140).trim()}…`
          : stripped;

  const who = contactDisplayName.trim() || 'Customer';
  const roleLine = isBounce
    ? 'Bounce / DSN'
    : outbound && failure
      ? `${who} · not delivered`
      : who;

  return (
    <article
      className={`relative ml-2 overflow-hidden rounded-2xl border shadow-sm ${
        isBounce
          ? 'border-amber-300/80 bg-amber-50/50'
          : outbound && failure
            ? 'border-amber-300/70 bg-amber-50/30'
            : outbound
              ? 'border-primary/20 bg-primary/[0.03]'
              : 'border-slate-200/90 bg-slate-50/90'
      }`}
    >
      <div
        className={`absolute -left-[15px] top-5 h-2.5 w-2.5 rounded-full border-2 border-white ${
          isBounce ? 'bg-amber-500' : outbound && failure ? 'bg-amber-500' : outbound ? 'bg-primary' : 'bg-slate-400'
        }`}
      />
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-3 border-b border-slate-200/60 bg-white/60 px-3 py-2.5 text-left hover:bg-white/90 transition-colors"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide ${
                isBounce
                  ? 'uppercase text-amber-900'
                  : outbound && failure
                    ? 'normal-case text-amber-900'
                    : outbound
                      ? 'normal-case text-primary-dark'
                      : 'normal-case text-slate-600'
              }`}
            >
              <FaEnvelope
                className={`text-[12px] shrink-0 ${
                  isBounce || (outbound && failure)
                    ? 'text-amber-800'
                    : outbound
                      ? 'text-primary-dark'
                      : 'text-slate-500'
                }`}
                aria-hidden
              />
              {roleLine}
            </span>
            {showToggle && <span className="text-xs text-slate-400">{open ? '▼' : '▶'}</span>}
          </div>
          <p className="mt-0.5 text-sm font-semibold text-slate-900">{message.subject || '(no subject)'}</p>
          <p className="mt-0.5 text-[11px] text-slate-500 break-all line-clamp-1">
            {message.from} → {message.to}
          </p>
          {!open && (
            <p className="mt-1.5 line-clamp-2 text-sm text-slate-600 whitespace-pre-wrap">{preview}</p>
          )}
        </div>
        <time
          className="shrink-0 text-[11px] text-slate-500 tabular-nums"
          dateTime={message.createdAt}
        >
          {formatCrmDateTimeCompact(message.createdAt)}
        </time>
      </button>
      {open && (
        <>
          <div className={`space-y-2 px-3 py-3 ${!isBounce ? 'border-b border-slate-200/60' : ''}`}>
            <EmailMessageBubble message={message} contactDisplayName={contactDisplayName} />
          </div>
          {!isBounce ? (
            <EmailThreadReplyComposer
              threadMessages={[message]}
              contactDisplayName={contactDisplayName}
              customerEmail={customerEmail}
              followUpBlocked={Boolean(outbound && failure)}
              mailError={mailError}
              onClearMailError={onClearMailError}
              mailBusy={mailBusy}
              onSendMail={onSendMail}
            />
          ) : null}
        </>
      )}
    </article>
  );
}
