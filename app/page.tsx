import Image from 'next/image';
import Script from 'next/script';
import { SITE_URL, BUSINESS_NAME } from '@/lib/structured-data';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_NAME,
  url: SITE_URL,
  description:
    'EcoLawns Denver is permanently closed and no longer in operation. We are not accepting new customers or bookings.',
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full min-h-full bg-gray-100">
        <header
          className="w-full min-h-[calc(100vh-60px)] relative flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-6"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/hero.jpg')",
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt="EcoLawns Denver — permanently closed"
            fill
            className="object-cover -z-10"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg leading-tight">
              EcoLawns Denver Is Closed
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-6 drop-shadow-md leading-relaxed">
              We are no longer in operation and are not accepting new customers, quotes, or
              bookings.
            </p>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed drop-shadow-md">
              Thank you to everyone who supported our electric lawn care service in the Denver
              area. We appreciate your business and trust over the years.
            </p>
          </div>
        </header>
      </div>
    </>
  );
}
