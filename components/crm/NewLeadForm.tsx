'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LEAD_STATUSES, LEAD_STATUS_LABELS } from '@/lib/crm-types';

type NewLeadFormProps = {
  variant?: 'page' | 'modal';
  onCancel?: () => void;
  /** When set, called after a successful create instead of navigating from inside the form. */
  onSuccess?: (leadId: string) => void;
};

export default function NewLeadForm({ variant = 'page', onCancel, onSuccess }: NewLeadFormProps) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [status, setStatus] = useState('new_lead');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isModal = variant === 'modal';
  const inputClass =
    'w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary';
  const inputClassModal =
    'w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary';
  const fieldClass = isModal ? inputClassModal : inputClass;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/crm/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          physicalAddress,
          status,
          notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Could not create lead');
        return;
      }
      if (onSuccess) {
        onSuccess(data.lead.id);
      } else {
        router.push(`/crm/leads/${data.lead.id}`);
        router.refresh();
      }
    } catch {
      setError('Request failed');
    } finally {
      setLoading(false);
    }
  }

  const formBody = (
    <>
      <div
        className={
          isModal ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-4 sm:gap-y-3' : 'space-y-5'
        }
      >
        <div className={isModal ? 'sm:col-span-1' : ''}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input className={fieldClass} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={isModal ? 'sm:col-span-1' : ''}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input className={fieldClass} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className={isModal ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            required
            className={fieldClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={isModal ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Physical address</label>
          <textarea
            className={`${fieldClass} ${isModal ? 'min-h-[3.25rem]' : 'min-h-[4.5rem]'} resize-y`}
            value={physicalAddress}
            onChange={(e) => setPhysicalAddress(e.target.value)}
          />
        </div>
        <div className={isModal ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select className={fieldClass} value={status} onChange={(e) => setStatus(e.target.value)}>
            {LEAD_STATUSES.map((s) => (
              <option key={s} value={s}>
                {LEAD_STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
        <div className={isModal ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea
            className={`${fieldClass} ${isModal ? 'min-h-[3.5rem]' : 'min-h-[5rem]'} resize-y`}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
      <div className={`flex flex-wrap gap-2 ${isModal ? 'pt-1' : 'pt-2 gap-3'}`}>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-50"
        >
          {loading ? 'Saving…' : 'Create lead'}
        </button>
      </div>
    </>
  );

  if (isModal) {
    return <form onSubmit={handleSubmit} className="space-y-3">{formBody}</form>;
  }

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">New lead</h1>
        <p className="text-gray-500 text-sm mt-1">Name, email, phone, and service address.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-5"
      >
        {formBody}
      </form>
    </div>
  );
}
