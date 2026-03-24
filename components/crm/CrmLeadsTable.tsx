'use client';

import Link from 'next/link';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { LeadRecord, LeadStatus } from '@/lib/crm-types';
import AddLeadModal from '@/components/crm/AddLeadModal';
import { LEAD_STATUSES, LEAD_STATUS_LABELS } from '@/lib/crm-types';
import { formatCrmDateTime, formatCrmDateTimeCompact } from '@/lib/crm-format';

const NOTIFICATION_STATUS: LeadStatus = 'notification';

const statusBadge: Record<LeadStatus, string> = {
  new_lead: 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
  warm_lead: 'bg-amber-50 text-amber-900 ring-amber-600/20',
  active_customer: 'bg-primary/10 text-primary-dark ring-primary/25',
  delinquent: 'bg-red-50 text-red-800 ring-red-600/15',
  inactive: 'bg-gray-100 text-gray-600 ring-gray-500/10',
  notification: 'bg-slate-100 text-slate-700 ring-slate-500/20',
};

/** When status is “All”, optionally hide rows marked Notification (system inboxes / noise). */
type LeadScope = 'everything' | 'hide_notifications';

function NewLeadUrlSync({ setAddOpen }: { setAddOpen: (open: boolean) => void }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('newLead') !== '1') return;
    setAddOpen(true);
    router.replace('/crm', { scroll: false });
  }, [searchParams, router, setAddOpen]);

  return null;
}

export default function CrmLeadsTable({ initialLeads }: { initialLeads: LeadRecord[] }) {
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<LeadStatus | ''>('');
  const [scope, setScope] = useState<LeadScope>('everything');
  const [addLeadOpen, setAddLeadOpen] = useState(false);

  const filtered = useMemo(() => {
    let rows = initialLeads;
    if (status) {
      rows = rows.filter((l) => l.status === status);
    } else if (scope === 'hide_notifications') {
      rows = rows.filter((l) => l.status !== NOTIFICATION_STATUS);
    }
    const t = q.trim().toLowerCase();
    if (t) {
      rows = rows.filter(
        (l) =>
          l.name.toLowerCase().includes(t) ||
          l.email.includes(t) ||
          l.phone.includes(t) ||
          l.physicalAddress.toLowerCase().includes(t)
      );
    }
    return rows;
  }, [initialLeads, q, status, scope]);

  return (
    <div className="space-y-6">
      <Suspense fallback={null}>
        <NewLeadUrlSync setAddOpen={setAddLeadOpen} />
      </Suspense>
      <AddLeadModal open={addLeadOpen} onClose={() => setAddLeadOpen(false)} />
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Leads</h1>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl">
            Open a lead to sync Gmail replies into the timeline (on load and about every minute on that page).
            Use status <strong className="text-slate-600">Notification</strong> for system inboxes; the default
            list shows <strong className="text-slate-600">everyone</strong>, and you can narrow to sales &amp; ops
            with the list filter below.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setAddLeadOpen(true)}
          className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm shrink-0"
        >
          Add lead
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col lg:flex-row gap-3 lg:items-center flex-wrap">
          <input
            type="search"
            placeholder="Search name, email, phone, address…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="flex-1 min-w-[12rem] px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
          />
          <select
            value={status}
            onChange={(e) => setStatus((e.target.value as LeadStatus | '') || '')}
            className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary min-w-[11rem]"
            aria-label="Filter by status"
          >
            <option value="">All statuses</option>
            {LEAD_STATUSES.map((s) => (
              <option key={s} value={s}>
                {LEAD_STATUS_LABELS[s]}
              </option>
            ))}
          </select>
          <select
            value={scope}
            onChange={(e) => setScope(e.target.value as LeadScope)}
            disabled={Boolean(status)}
            className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary min-w-[12rem] disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Which leads to list"
            title={
              status
                ? 'Clear status filter to use this list scope'
                : 'When viewing all statuses, optionally hide notification inboxes'
            }
          >
            <option value="everything">List: everyone (incl. notifications)</option>
            <option value="hide_notifications">List: hide notification status</option>
          </select>
        </div>
        {status && (
          <p className="text-xs text-slate-500">
            List scope applies only when status is <strong className="text-slate-600">All statuses</strong> — you
            are viewing <strong className="text-slate-600">{LEAD_STATUS_LABELS[status]}</strong> only.
          </p>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50/90 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3 hidden md:table-cell">Phone</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 hidden lg:table-cell whitespace-nowrap">Last activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                    No leads match. Add one or adjust filters.
                  </td>
                </tr>
              ) : (
                filtered.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-4 py-3">
                      <Link
                        href={`/crm/leads/${lead.id}`}
                        className="font-medium text-gray-900 hover:text-primary"
                      >
                        {lead.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{lead.email}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">
                      {lead.phone || '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusBadge[lead.status]}`}
                      >
                        {LEAD_STATUS_LABELS[lead.status]}
                      </span>
                    </td>
                    <td
                      className="px-4 py-3 text-slate-600 hidden lg:table-cell whitespace-nowrap"
                      title={formatCrmDateTime(lead.updatedAt)}
                    >
                      <span className="block text-slate-800">{formatCrmDateTimeCompact(lead.updatedAt)}</span>
                      <span className="block text-[11px] text-slate-400 mt-0.5 tabular-nums">
                        {formatCrmDateTime(lead.updatedAt)}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
