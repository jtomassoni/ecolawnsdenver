'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BOOKABLE_SERVICES } from '@/lib/bookable-services';
import { trackConversion, trackEvent } from '@/components/GoogleAnalytics';

type Props = {
  open: boolean;
  onClose: () => void;
  initialSelection?: string[];
};

export default function BookVisitModal({ open, onClose, initialSelection = [] }: Props) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set(initialSelection));
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setSelected(new Set(initialSelection));
      setError('');
    }
  }, [open, initialSelection]);

  if (!open) return null;

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => phone.replace(/\D/g, '').length >= 10;

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (selected.size === 0) {
      setError('Pick at least one service.');
      return;
    }
    if (
      !form.name.trim() ||
      !isValidEmail(form.email) ||
      !isValidPhone(form.phone) ||
      !form.address.trim()
    ) {
      setError('Please fill in all required fields correctly.');
      return;
    }

    const serviceLabels = BOOKABLE_SERVICES.filter((s) => selected.has(s.id)).map((s) => s.title);

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          address: form.address.trim(),
          notes: form.notes.trim(),
          type: 'Book a Visit Request',
          bookableServices: serviceLabels,
        }),
      });
      const data = await response.json();
      if (data.success) {
        trackConversion('form_submission', 0);
        trackEvent('submit', 'Form', `Book a Visit: ${serviceLabels.join(', ')}`);
        onClose();
        router.push('/thank-you?type=book');
      } else {
        setError(data.message || 'Failed to send request. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-0 sm:p-4"
      style={{
        paddingTop: 'max(0px, env(safe-area-inset-top))',
        paddingBottom: 'max(0px, env(safe-area-inset-bottom))',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-none sm:rounded-xl max-w-lg w-full h-full sm:h-auto max-h-full sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-semibold text-primary pr-2">Book a visit</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Tell us what you need and we&apos;ll follow up with pricing for your address, usually within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset>
            <legend className="block text-sm font-medium text-primary mb-2">
              What do you need? <span className="text-red-600">*</span>
            </legend>
            <div className="space-y-2">
              {BOOKABLE_SERVICES.map((service) => (
                <label
                  key={service.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    selected.has(service.id)
                      ? 'border-primary bg-primary-light/10'
                      : 'border-gray-200 hover:border-primary-light'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected.has(service.id)}
                    onChange={() => toggle(service.id)}
                    className="mt-1 h-4 w-4 accent-primary shrink-0"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-primary">{service.title}</span>
                    <span className="block text-xs text-gray-600 mt-0.5">{service.priceHint}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="(303) 555-1234"
              required
              className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Property address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="123 Main St, Denver, CO 80202"
              required
              className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">Anything else? (optional)</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={2}
              placeholder="Best days to mow, gate codes, lawn size estimate…"
              className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none"
            />
          </div>

          {error ? (
            <p className="text-sm text-red-700 bg-red-50 rounded-lg p-3">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all disabled:opacity-50 min-h-[48px]"
          >
            {isSubmitting ? 'Sending…' : 'Send request'}
          </button>
        </form>
      </div>
    </div>
  );
}
