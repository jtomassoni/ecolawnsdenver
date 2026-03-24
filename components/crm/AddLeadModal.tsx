'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NewLeadForm from '@/components/crm/NewLeadForm';

export default function AddLeadModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-6 sm:pt-10 pb-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-lg max-h-[min(calc(100dvh-3rem),40rem)] flex flex-col rounded-xl border border-slate-200 bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-lead-modal-title"
      >
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-100 px-4 py-3">
          <div>
            <h2 id="add-lead-modal-title" className="text-base font-semibold text-slate-900">
              New lead
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Name, email, phone, and service address.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-2xl leading-none px-1 shrink-0"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          <NewLeadForm
            variant="modal"
            onCancel={onClose}
            onSuccess={(leadId) => {
              onClose();
              router.push(`/crm/leads/${leadId}`);
              router.refresh();
            }}
          />
        </div>
      </div>
    </div>
  );
}
