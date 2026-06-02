'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { FaCheck, FaHome, FaCamera, FaCalendarCheck } from 'react-icons/fa';
import { trackConversion, trackEvent } from '@/components/GoogleAnalytics';

const LISTING_SERVICES = [
  {
    title: 'Listing-ready mow',
    description: 'Full mow, edge, trim, and blow before photos or the first showing.',
    icon: FaCamera,
  },
  {
    title: 'While-it\'s-listed maintenance',
    description: 'Weekly or bi-weekly visits so the yard stays show-ready between open houses.',
    icon: FaCalendarCheck,
  },
  {
    title: 'Quick touch-up',
    description: 'Between-showings cleanup when the lawn got ahead of you, with priority when routes allow.',
    icon: FaHome,
  },
];

export default function RealtorsPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    brokerage: '',
    listingAddress: '',
    listingStatus: 'active',
    serviceNeeded: 'listing-ready-mow',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => phone.replace(/\D/g, '').length >= 10;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (
      !form.name.trim() ||
      !isValidEmail(form.email) ||
      !isValidPhone(form.phone) ||
      !form.brokerage.trim() ||
      !form.listingAddress.trim()
    ) {
      setError('Please fill in all required fields correctly.');
      return;
    }

    setIsSubmitting(true);
    try {
      const serviceLabel =
        form.serviceNeeded === 'listing-ready-mow'
          ? 'Listing-ready mow'
          : form.serviceNeeded === 'while-listed'
            ? 'Maintenance while listed'
            : 'Quick touch-up';

      const statusLabel =
        form.listingStatus === 'active'
          ? 'On market now'
          : form.listingStatus === 'coming-soon'
            ? 'Coming soon / pre-listing'
            : 'Other';

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          address: form.listingAddress.trim(),
          brokerage: form.brokerage.trim(),
          listingStatus: statusLabel,
          realtorService: serviceLabel,
          notes: form.notes.trim(),
          type: 'Realtor Listing Request',
        }),
      });
      const data = await response.json();
      if (data.success) {
        trackConversion('form_submission', 0);
        trackEvent('submit', 'Form', 'Realtor Listing Request');
        router.push('/thank-you?type=realtor');
      } else {
        setError(data.message || 'Failed to send request. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Realtor listing lawn care - Denver',
    description:
      'Listing-ready and while-listed lawn maintenance for Denver metro homes on the market. Quiet electric equipment.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'EcoLawns Denver',
      url: 'https://ecolawnsdenver.com',
    },
    areaServed: { '@type': 'City', name: 'Denver' },
  };

  return (
    <>
      <Script
        id="realtors-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div
        className="w-full min-h-full bg-gradient-to-br from-green-50 via-primary-light/30 to-green-100 py-6 sm:py-10 px-4 sm:px-6"
        style={{
          paddingLeft: 'max(1rem, env(safe-area-inset-left))',
          paddingRight: 'max(1rem, env(safe-area-inset-right))',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-8 sm:mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">For realtors & sellers</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                Curb appeal for homes on the market
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                First impressions start at the sidewalk. We help Denver listings look sharp for photos and showings: quiet
                electric mowers, fast scheduling when routes allow, and{' '}
                <strong className="text-primary">10% off our standard visit rate</strong> for active listings through
                this program.
              </p>
              <div className="bg-white rounded-xl border-2 border-primary shadow-md p-5 sm:p-6">
                <h2 className="text-lg font-bold text-primary mb-3">Realtor listing special</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong>10% off</strong> listing-ready and while-listed visits (standard pricing applies; we
                      confirm for the property)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-0.5 shrink-0" />
                    <span>Priority scheduling for new listings when our route allows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-0.5 shrink-0" />
                    <span>One contact for multiple listings. Email us the address and we&apos;ll quote each yard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-primary mt-0.5 shrink-0" />
                    <span>Licensed & insured · quiet electric equipment (no gas fumes at open houses)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-primary/20">
              <Image
                src="/images/lawn-being-cut.png"
                alt="Listing-ready lawn mowing in Denver - EcoLawns Denver"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {LISTING_SERVICES.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 border border-primary/20 shadow-sm"
              >
                <Icon className="text-primary text-2xl mb-3" aria-hidden />
                <h3 className="font-semibold text-primary mb-2">{title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div
            id="request"
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-primary-light/50 scroll-mt-24"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 text-center">Request listing lawn care</h2>
            <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mb-6">
              Tell us about the property and we&apos;ll reply with pricing and the earliest visit we can offer.
            </p>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Your name <span className="text-red-600">*</span>
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
                    Brokerage <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.brokerage}
                    onChange={(e) => setForm({ ...form, brokerage: e.target.value })}
                    placeholder="Your brokerage or team"
                    required
                    className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none min-h-[44px]"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
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
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Listing address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={form.listingAddress}
                  onChange={(e) => setForm({ ...form, listingAddress: e.target.value })}
                  placeholder="123 Main St, Denver, CO 80202"
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none min-h-[44px]"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Listing status</label>
                  <select
                    value={form.listingStatus}
                    onChange={(e) => setForm({ ...form, listingStatus: e.target.value })}
                    className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none min-h-[44px] bg-white"
                  >
                    <option value="active">On market now</option>
                    <option value="coming-soon">Coming soon / pre-listing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">What do you need?</label>
                  <select
                    value={form.serviceNeeded}
                    onChange={(e) => setForm({ ...form, serviceNeeded: e.target.value })}
                    className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none min-h-[44px] bg-white"
                  >
                    <option value="listing-ready-mow">Listing-ready mow</option>
                    <option value="while-listed">Maintenance while listed</option>
                    <option value="touch-up">Quick touch-up</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Notes (optional)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  placeholder="Photo day, open house date, lockbox code, lawn condition…"
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
                {isSubmitting ? 'Sending…' : 'Request quote for this listing'}
              </button>
            </form>

            <p className="text-center text-xs text-gray-500 mt-6 max-w-md mx-auto">
              Homeowners booking for themselves?{' '}
              <Link href="/#book" className="text-primary font-semibold underline underline-offset-2">
                Book a visit on our home page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
