'use client';

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
  preview,
  loading,
  error,
  title = 'Email preview',
}: {
  open: boolean;
  onClose: () => void;
  preview: EmailPreviewData | null;
  loading?: boolean;
  error?: string;
  title?: string;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="bg-white rounded-xl shadow-xl border border-primary-light/40 max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="email-preview-title"
        aria-modal="true"
      >
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center gap-2">
          <h2 id="email-preview-title" className="text-base font-semibold text-primary">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none px-1"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-4 overflow-y-auto flex-1 space-y-3 text-sm">
          {loading && <p className="text-gray-500">Loading preview…</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {preview && !loading && (
            <>
              {preview.from ? (
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">From</p>
                  <p className="text-gray-900 break-all">{preview.from}</p>
                </div>
              ) : null}
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">To</p>
                <p className="text-gray-900 break-all">{preview.to}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Subject</p>
                <p className="text-gray-900 font-medium">{preview.subject}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Message</p>
                <div
                  className="rounded-lg border border-gray-100 bg-gray-50/80 p-3 overflow-auto max-h-[40vh] text-gray-800 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:mb-2 [&_p]:my-1"
                  dangerouslySetInnerHTML={{ __html: preview.html }}
                />
              </div>
            </>
          )}
        </div>
        <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
