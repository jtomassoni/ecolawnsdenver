'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BOOKABLE_SERVICES } from '@/lib/bookable-services';
import { trackEvent } from '@/components/GoogleAnalytics';
import BookVisitModal from '@/components/BookVisitModal';

type Props = {
  /** Shorter copy when embedded on the home page (below hero). */
  compact?: boolean;
  /** Show link to season-pass pricing section on services page. */
  showSeasonPassLink?: boolean;
};

export default function BookVisitMenu({ compact = false, showSeasonPassLink = false }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialSelection, setInitialSelection] = useState<string[]>([]);

  function openQuote(serviceId?: string) {
    trackEvent(
      'click',
      'CTA',
      serviceId ? `Book a Visit - ${serviceId}` : 'Book a Visit - open form'
    );
    setInitialSelection(serviceId ? [serviceId] : []);
    setModalOpen(true);
  }

  return (
    <>
      <section
        id="book"
        className={`scroll-mt-24 ${
          compact
            ? 'bg-gradient-to-br from-green-50 via-primary-light/25 to-green-100 py-10 sm:py-14 px-4 sm:px-6'
            : 'bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-primary-light/50 mb-6 sm:mb-8'
        }`}
        aria-labelledby="book-heading"
        style={
          compact
            ? {
                paddingLeft: 'max(1rem, env(safe-area-inset-left))',
                paddingRight: 'max(1rem, env(safe-area-inset-right))',
              }
            : undefined
        }
      >
        <div className={compact ? 'max-w-6xl mx-auto' : undefined}>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-primary mb-2">
            Now mowing in Denver
          </p>
          <h2
            id="book-heading"
            className={`font-bold text-primary text-center ${
              compact ? 'text-2xl sm:text-3xl md:text-4xl mb-3' : 'text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3'
            }`}
          >
            Book a visit
          </h2>
          <p
            className={`text-center text-gray-700 mx-auto ${
              compact ? 'text-base sm:text-lg mb-8 max-w-2xl' : 'text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl'
            }`}
          >
            {compact
              ? 'Pick what you need: a single mow this week, regular mowing, or a cleanup. No season pass required. We’ll confirm pricing for your yard.'
              : 'Need a mow this week, regular help every two weeks, or a mid-season cleanup? Choose below and we’ll send a quote for your address.'}
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6`}>
            {BOOKABLE_SERVICES.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-xl shadow-md border border-primary/20 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-36 sm:h-44">
                  <Image
                    src={service.image}
                    alt={`${service.title} - EcoLawns Denver`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-700 mb-2 flex-1 leading-relaxed">{service.description}</p>
                  <p className="text-sm font-medium text-primary mb-4">{service.priceHint}</p>
                  <button
                    type="button"
                    onClick={() => openQuote(service.id)}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all min-h-[48px] text-sm sm:text-base mt-auto"
                  >
                    Book this
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              type="button"
              onClick={() => openQuote()}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all min-h-[48px] text-sm sm:text-base w-full sm:w-auto shadow-md"
            >
              Request a quote
            </button>
            {showSeasonPassLink ? (
              <Link
                href="#season-plans"
                className="inline-flex items-center justify-center text-primary font-semibold underline underline-offset-2 text-sm sm:text-base min-h-[48px]"
              >
                Save 25% with a season pass →
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <BookVisitModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialSelection={initialSelection}
      />
    </>
  );
}
