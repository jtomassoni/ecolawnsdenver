'use client';

import { useEffect, useState } from 'react';

export type EmailPreviewData = {
  to: string;
  from?: string;
  subject: string;
  html: string;
  text: string;
};

export default function EmailPreviewModal({
  open,
  onClose,
  onSend,
  preview,
  loading,
  sending,
  error,
  title = 'Email preview',
}: {
  open: boolean;
  onClose: () => void;
  onSend?: () => void;
  preview: EmailPreviewData | null;
  loading?: boolean;
  sending?: boolean;
  error?: string;
  title?: string;
}) {
  const [viewMode, setViewMode] = useState<'rendered' | 'plain'>('rendered');

  useEffect(() => {
    if (open) setViewMode('rendered');
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/55 backdrop-blur-[1px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="email-preview-title"
        aria-modal="true"
      >
        <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center gap-3 bg-gradient-to-r from-emerald-50 to-white">
          <div className="min-w-0">
            <h2 id="email-preview-title" className="text-2xl font-semibold text-emerald-800">
              {title}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Review before sending</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-3xl leading-none px-1"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-sm">
          {loading && <p className="text-slate-500">Loading preview…</p>}
          {error && (
            <p className="text-red-700 text-sm rounded-lg bg-red-50 border border-red-100 px-3 py-2">
              {error}
            </p>
          )}
          {preview && !loading && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {preview.from ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">From</p>
                    <p className="text-slate-900 break-all mt-1">{preview.from}</p>
                  </div>
                ) : null}
                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">To</p>
                  <p className="text-slate-900 break-all mt-1">{preview.to}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Subject</p>
                  <p className="text-slate-900 font-medium mt-1 break-words">{preview.subject}</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <div className="px-3 py-2.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Message preview</p>
                  <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5">
                    <button
                      type="button"
                      onClick={() => setViewMode('rendered')}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                        viewMode === 'rendered'
                          ? 'bg-emerald-600 text-white'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Rendered
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('plain')}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                        viewMode === 'plain'
                          ? 'bg-emerald-600 text-white'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Plain text
                    </button>
                  </div>
                </div>
                {viewMode === 'rendered' ? (
                  <iframe
                    title="Rendered email preview"
                    srcDoc={preview.html}
                    className="w-full h-[52vh] bg-white"
                    sandbox=""
                  />
                ) : (
                  <pre className="m-0 p-4 bg-white text-slate-800 text-sm leading-relaxed whitespace-pre-wrap max-h-[52vh] overflow-auto">
                    {preview.text}
                  </pre>
                )}
              </div>
            </>
          )}
        </div>
        <div className="px-5 py-3 border-t border-slate-200 flex items-center justify-end gap-2 bg-slate-50">
          {onSend ? (
            <button
              type="button"
              onClick={onSend}
              disabled={loading || sending || !preview}
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-50"
            >
              {sending ? 'Sending…' : 'Send email'}
            </button>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 disabled:opacity-50"
            disabled={sending}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
