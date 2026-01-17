'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { trackConversion, trackEvent } from '@/components/GoogleAnalytics';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const serviceType = searchParams.get('type') || 'service';

  useEffect(() => {
    // Track conversion in Google Analytics
    trackConversion('form_submission', 0);
    trackEvent('conversion', 'Thank You Page', serviceType);

    // Track Google Ads conversion if conversion ID is set
    const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
    if (typeof window !== 'undefined' && (window as any).gtag && conversionId) {
      (window as any).gtag('event', 'conversion', {
        'send_to': conversionId,
        'value': 1.0,
        'currency': 'USD'
      });
    }
  }, [serviceType]);

  const getServiceName = () => {
    switch (serviceType) {
      case 'lawn':
        return 'Lawn Care Service';
      case 'snow':
        return 'Snow Removal Service';
      case 'spring':
        return 'Spring Cleanup Service';
      case 'fall':
        return 'Fall Cleanup Service';
      default:
        return 'Service';
    }
  };

  return (
    <>
      {/* Google Ads Conversion Tracking - Fires automatically via useEffect */}

      <div className="bg-gradient-to-br from-green-50 via-primary-light/30 to-green-100 flex justify-center items-center px-4 py-8 sm:py-12 absolute inset-0">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center">
          {/* Success Icon */}
          <div className="mb-3 flex justify-center">
            <div className="bg-primary-light/20 rounded-full p-3">
              <FaCheckCircle className="text-primary text-4xl md:text-5xl" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Thank You!
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-1">
            Your {getServiceName()} request has been received.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            We'll contact you within 24 hours to confirm your booking and provide your personalized quote.
          </p>

          {/* What Happens Next */}
          <div className="bg-primary-light/10 rounded-lg p-4 mb-4 text-left">
            <h2 className="text-base font-semibold text-primary mb-2">What happens next?</h2>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-semibold">1</span>
                <span>We'll review your property details and calculate your personalized quote</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-semibold">2</span>
                <span>You'll receive an email or phone call within 24 hours with your quote</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-semibold">3</span>
                <span>Once you approve, we'll schedule your first service</span>
              </li>
            </ol>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-4 mb-4">
            <p className="text-sm text-gray-600 mb-2">Have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="tel:+13019437914"
                onClick={() => trackEvent('click', 'Contact', 'Phone - Thank You')}
                className="flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm"
              >
                <FaPhone />
                <span>(301) 943-7914</span>
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href="mailto:jtomassoni@gmail.com"
                onClick={() => trackEvent('click', 'Contact', 'Email - Thank You')}
                className="flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm"
              >
                <FaEnvelope />
                <span>jtomassoni@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              onClick={() => trackEvent('click', 'Navigation', 'Back to Home - Thank You')}
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition-all text-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              onClick={() => trackEvent('click', 'Navigation', 'View Services - Thank You')}
              className="bg-white text-primary border-2 border-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-light/10 transition-all text-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ThankYou() {
  return (
    <Suspense fallback={
      <div className="bg-gradient-to-br from-green-50 via-primary-light/30 to-green-100 flex justify-center items-center px-4 py-8 sm:py-12 absolute inset-0">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 rounded-full w-16 mx-auto mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
          </div>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
