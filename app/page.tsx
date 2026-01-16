'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { FaSnowflake, FaSeedling, FaPhone, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { trackEvent, trackConversion } from '@/components/GoogleAnalytics';

const testimonials = [
  {
    quote: "I pay extra for EcoLawns because their battery-powered electric lawn mowers are completely silent - I can work from home without interruption. The zero emissions is a huge bonus for our neighborhood air quality in Cherry Creek.",
    author: "Mark R. in Cherry Creek, Denver"
  },
  {
    quote: "Finally found an electric lawn care service in Denver that uses only battery-powered equipment. No gas fumes, no noise pollution - just quiet, eco-friendly lawn mowing. Worth every dollar for the peace and clean air.",
    author: "Sarah M. in Washington Park, Colorado"
  },
  {
    quote: "Their all-electric battery-powered lawn service is why I chose them. As someone who values sustainability, paying more for emission-free lawn care in Highland was an easy decision. My lawn looks amazing and I feel good about my environmental impact.",
    author: "John D. in Highland, Denver"
  },
  {
    quote: "The quiet battery-powered mowers are a game-changer. My neighbors love that there's no gas engine noise, and I love supporting a truly eco-friendly lawn service in LoHi. Premium price, but premium service and values.",
    author: "Emily T. in LoHi, Denver"
  },
  {
    quote: "Best electric lawn care service in Denver. Their battery-powered equipment means zero emissions, quiet operation, and no gas smell. I'm happy to pay more for sustainable lawn mowing that aligns with my values in Congress Park.",
    author: "Michael P. in Congress Park, Denver"
  }
];

const getPriceForSize = (size: number): number | null => {
  const pricingTiers = [
    { maxSize: 3000, price: 40 },
    { maxSize: 4000, price: 50 },
    { maxSize: 5000, price: 60 },
    { maxSize: 6000, price: 70 },
    { maxSize: 7000, price: 80 },
    { maxSize: 8000, price: 90 },
    { maxSize: 10000, price: 100 },
    { maxSize: 12000, price: 120 },
    { maxSize: 14000, price: 140 },
    { maxSize: 16000, price: 160 },
    { maxSize: 18000, price: 180 },
    { maxSize: 20000, price: 200 },
    { maxSize: 25000, price: 250 },
    { maxSize: 30000, price: 300 },
    { maxSize: 40000, price: 400 },
    { maxSize: 50000, price: 500 }
  ];
  const tier = pricingTiers.find(tier => size <= tier.maxSize);
  if (tier) return tier.price;
  if (size > 50000) return Math.max(500, Math.ceil(size * 0.01));
  return null;
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [lawnSize, setLawnSize] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<'seasonPass' | 'biweekly'>('seasonPass');
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly'>('biweekly');
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', phone: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showSnowRemovalModal, setShowSnowRemovalModal] = useState(false);
  const [showMeasureGuide, setShowMeasureGuide] = useState(false);
  const [snowForm, setSnowForm] = useState({ name: '', email: '', phone: '', address: '', drivewayLength: '', notes: '' });
  const [isSubmittingSnow, setIsSubmittingSnow] = useState(false);
  const [submitSuccessSnow, setSubmitSuccessSnow] = useState(false);
  const [submitErrorSnow, setSubmitErrorSnow] = useState('');
  const avgCutsPerSeason = frequency === 'weekly' ? 28 : 14;

  const openQuoteModal = () => {
    trackEvent('click', 'Modal', 'Open Quote Modal');
    setShowQuoteModal(true);
  };

  const goToStep1 = () => setStep(1);
  const goToStep2 = () => {
    if (lawnSize) {
      const calculatedPrice = getPriceForSize(parseInt(lawnSize));
      setPrice(calculatedPrice);
      setStep(2);
    }
  };
  const goToStep3 = () => {
    // If no lawn size, set price to null so we show "quote provided after address review"
    if (!lawnSize) {
      setPrice(null);
    }
    setStep(3);
  };

  const seasonalPrice = price ? Math.round(price * avgCutsPerSeason * 0.75) : 0;
  const seasonalPayment = Math.ceil(seasonalPrice / 2);
  const discountedPerVisitRate = price ? Math.round(price * 0.75) : 0;
  
  // Example price for 5000 sq ft when user skips lawn size
  const exampleSize = 5000;
  const examplePrice = getPriceForSize(exampleSize);
  const exampleSeasonalPrice = examplePrice ? Math.round(examplePrice * avgCutsPerSeason * 0.75) : 0;
  const exampleSeasonalPayment = Math.ceil(exampleSeasonalPrice / 2);
  const exampleDiscountedPerVisitRate = examplePrice ? Math.round(examplePrice * 0.75) : 0;

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => phone.replace(/\D/g, '').length >= 10;

  const submitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);

    if (!bookingForm.name.trim() || !isValidEmail(bookingForm.email) || 
        !isValidPhone(bookingForm.phone) || !bookingForm.address.trim()) {
      setSubmitError('Please fill in all required fields correctly.');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: bookingForm.name.trim(),
          email: bookingForm.email.trim(),
          phone: bookingForm.phone.trim(),
          address: bookingForm.address.trim(),
          lawnSize: lawnSize,
          subscriptionOption: selectedOption,
          frequency: frequency,
          type: 'Lawn Service Booking'
        })
      });

      const data = await response.json();
      if (data.success) {
        trackConversion('form_submission', price || 0);
        trackEvent('submit', 'Form', 'Lawn Service Booking');
        setSubmitSuccess(true);
        setBookingForm({ name: '', email: '', phone: '', address: '' });
      } else {
        setSubmitError(data.message || 'Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitError('An error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleEmphasize = () => {
      setShowQuoteModal(true);
    };
    window.addEventListener('emphasize-quote-form', handleEmphasize);
    return () => window.removeEventListener('emphasize-quote-form', handleEmphasize);
  }, []);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (showQuoteModal && target.classList.contains('fixed') && target.classList.contains('inset-0')) {
        setShowQuoteModal(false);
        setStep(1);
        setLawnSize('');
        setPrice(null);
        setFrequency('biweekly');
      }
      if (showSnowRemovalModal && target.classList.contains('fixed') && target.classList.contains('inset-0')) {
        setShowSnowRemovalModal(false);
      }
      if (showMeasureGuide && target.classList.contains('fixed') && target.classList.contains('inset-0')) {
        setShowMeasureGuide(false);
      }
    };

    if (showQuoteModal || showSnowRemovalModal || showMeasureGuide) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showQuoteModal, showSnowRemovalModal, showMeasureGuide]);

  // Handle Enter key to advance through modal steps
  useEffect(() => {
    if (!showQuoteModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        // Don't trigger if user is typing in an input/textarea
        const target = e.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          // For Step 1 input, let the onKeyDown handler handle it
          if (step === 1 && target.id === 'lawn-size-input-modal') {
            return;
          }
          // For Step 3 form inputs, let the form submission handle it
          if (step === 3) {
            return;
          }
        }

        // Step 2: Advance to step 3 with default selection (seasonPass)
        if (step === 2) {
          e.preventDefault();
          if (price && lawnSize) {
            setSelectedOption('seasonPass');
            goToStep3();
          } else if (!price && !lawnSize) {
            // Step 2 alternative (no lawn size)
            setSelectedOption('seasonPass');
            goToStep3();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showQuoteModal, step, price, lawnSize]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EcoLawns Denver",
    "image": "https://ecolawnsdenver.com/images/hero.jpg",
    "@id": "https://ecolawnsdenver.com",
    "url": "https://ecolawnsdenver.com",
    "telephone": "+1-303-555-0123",
    "priceRange": "$40-$500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bear Valley",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "postalCode": "80223",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7392,
      "longitude": -104.9903
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5"
    },
    "review": testimonials.map((testimonial, idx) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.author.split(' in ')[0]
      },
      "reviewBody": testimonial.quote,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weekly & Bi-Weekly Lawn Mowing",
            "description": "Professional battery-powered electric lawn mowing service in Denver"
          },
          "price": "40",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spring Cleanup & Aeration",
            "description": "Comprehensive spring lawn cleanup and aeration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Snow Removal Service",
            "description": "Electric snow removal for driveways and walkways"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fall Cleanup & Winter Prep",
            "description": "Fall cleanup and winter preparation services"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full min-h-full bg-gray-100">
        {/* Hero Section */}
        <header 
          className="w-full min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/hero.jpg')",
            paddingTop: "max(2rem, env(safe-area-inset-top))",
            paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))"
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Professional lawn care service in Denver, Colorado - EcoLawns Denver using battery-powered electric lawn mowers"
            fill
            className="object-cover -z-10"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight px-2">
                Professional Lawn Care in Denver
              </h1>
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 drop-shadow-md">
                Starting at $40/visit
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 drop-shadow-md max-w-3xl mx-auto leading-relaxed px-2">
                Get your weekends back with reliable, eco-friendly lawn care. <strong>All our equipment is electric by design</strong> - half of our mission is reducing noise and neighborhood emissions. <strong>Book your spring service now</strong>, or get snow removal for the rest of winter!
              </p>
              <div className="bg-yellow-400/90 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm sm:text-base mb-4 sm:mb-6 inline-block">
                ⚡ Limited Spring Spots Available - Book Now for April Start!
              </div>
            </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-2">
            <button
              onClick={() => {
                trackEvent('click', 'CTA', 'Get Free Lawn Quote - Hero');
                openQuoteModal();
              }}
              className="bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl shadow-2xl hover:bg-primary-dark transform hover:-translate-y-1 transition-all min-h-[56px] w-full sm:w-auto"
            >
              Get Free Lawn Quote
            </button>
            <button
              onClick={() => {
                trackEvent('click', 'CTA', 'Snow Removal - Hero');
                setShowSnowRemovalModal(true);
              }}
              className="bg-white/10 backdrop-blur-sm text-white/90 border border-white/40 px-5 sm:px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-white/20 hover:text-white transition-all min-h-[48px] w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FaSnowflake className="text-white" />
              <span>Snow Removal</span>
            </button>
          </div>

          {/* Phone Number & Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-2">
            <a
              href="tel:+13035550123"
              onClick={() => trackEvent('click', 'Contact', 'Phone - Hero')}
              className="flex items-center gap-2 text-white text-lg sm:text-xl font-semibold hover:text-primary-light transition-all bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20"
            >
              <FaPhone className="text-white" />
              <span>(303) 555-0123</span>
            </a>
            <div className="flex items-center gap-3 sm:gap-4 text-white/90 text-sm sm:text-base">
              <div className="flex items-center gap-1.5">
                <FaShieldAlt className="text-white" />
                <span>Licensed & Insured</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-white" />
                <span>Free Quotes</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12 px-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
                <FaSnowflake className="text-white flex-shrink-0" /> <span>Winter Services</span>
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Professional snow removal for driveways, walkways, and sidewalks. Available now through the end of winter season.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
                <FaSeedling className="text-white flex-shrink-0" /> <span>Spring Services</span>
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Book your lawn care now for April start. Weekly or bi-weekly mowing, spring cleanup, and aeration included. All services use quiet electric equipment.
              </p>
            </div>
            </div>
          </div>
        </header>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-green-50 via-primary-light/20 to-green-100 py-8 sm:py-12 px-4 sm:px-6" aria-label="Customer testimonials" style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-6 sm:mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-primary-light/30 p-4 sm:p-6 rounded-xl shadow-md border border-primary/20">
                <p className="text-gray-700 italic mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p>
                <span className="text-primary font-semibold text-xs sm:text-sm block text-right">- {testimonial.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Battery-Powered Lawn Care Matters */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6" aria-label="Benefits of battery-powered lawn care" style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center">Why Battery-Powered Lawn Care Matters</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-primary-light/20 to-white p-4 sm:p-6 rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">Zero Emissions for Cleaner Air</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Traditional gas-powered lawn mowers emit significant pollutants, including carbon monoxide, nitrogen oxides, and volatile organic compounds. In Denver, where air quality is a concern, our battery-powered electric mowers produce zero direct emissions. This means cleaner air for your family, your neighbors, and the entire Denver metro area.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-light/20 to-white p-4 sm:p-6 rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">Quiet Operation for Peaceful Neighborhoods</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Battery-powered lawn equipment operates at a fraction of the noise level of gas engines. Our electric mowers are so quiet that you can work from home, have conversations in your yard, or let your children nap - all while we maintain your lawn. No more early morning noise complaints or weekend disruptions.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-light/20 to-white p-4 sm:p-6 rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">Superior Performance & Reliability</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Modern battery-powered equipment matches or exceeds gas-powered performance while being more reliable and easier to maintain. Our electric mowers provide consistent cutting power, instant start-up (no pull cords!), and require less maintenance. You get professional results without the hassles of gas engines.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-light/20 to-white p-4 sm:p-6 rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">Supporting Denver's Sustainability Goals</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Denver has ambitious climate and sustainability goals, and every choice matters. By choosing EcoLawns Denver's electric lawn care services, you're directly contributing to reduced emissions, improved air quality, and a more sustainable city. Together, we're making Denver a cleaner, quieter, and more environmentally responsible place to live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Electric Lawn Care in Denver */}
      <section className="bg-gradient-to-br from-green-50 via-primary-light/20 to-green-100 py-8 sm:py-12 px-4 sm:px-6" aria-label="Why choose electric lawn care in Denver" style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 text-center">Why Choose Electric Lawn Care in Denver?</h2>
          <div className="bg-gradient-to-r from-primary-light/30 to-primary-light/10 p-4 sm:p-6 rounded-lg border border-primary/20 shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Denver homeowners are increasingly choosing electric lawn care services for good reasons. As Colorado's capital city works toward ambitious climate goals, battery-powered lawn maintenance has become the smart choice for environmentally conscious property owners.
            </p>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 text-lg">Environmental Benefits</h4>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>Zero direct emissions from equipment</li>
                  <li>Reduced carbon footprint</li>
                  <li>Improved local air quality</li>
                  <li>Support for Denver's climate goals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3 text-lg">Quality of Life Benefits</h4>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>Quiet operation - work from home friendly</li>
                  <li>No gas fumes or exhaust odors</li>
                  <li>No early morning noise complaints</li>
                  <li>Peaceful neighborhood environment</li>
                </ul>
              </div>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              At EcoLawns Denver, we've built our entire business around electric equipment because we believe it's the future of professional lawn care. Our customers choose us not just for great results, but because they share our values of environmental responsibility and community well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary-dark text-white py-12 px-4" aria-label="Contact information">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold">
            Locally Owned and Operated in Bear Valley, Denver, CO
          </p>
        </div>
      </section>

      {/* Snow Removal Modal */}
      {showSnowRemovalModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-0 sm:p-4"
          style={{
            paddingTop: "max(0px, env(safe-area-inset-top))",
            paddingBottom: "max(0px, env(safe-area-inset-bottom))",
            paddingLeft: "max(0px, env(safe-area-inset-left))",
            paddingRight: "max(0px, env(safe-area-inset-right))"
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowSnowRemovalModal(false);
            }
          }}
        >
          <div className="bg-white rounded-none sm:rounded-xl max-w-3xl w-full h-full sm:h-auto max-h-full sm:max-h-[95vh] overflow-y-auto p-4 sm:p-5 sm:p-6 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3 sm:mb-4 flex-shrink-0">
              <h3 className="text-lg sm:text-xl font-semibold text-primary pr-2">Request Ad-Hoc Snow Removal</h3>
              <button onClick={() => setShowSnowRemovalModal(false)} className="text-gray-500 hover:text-gray-700 text-3xl sm:text-2xl leading-none min-w-[44px] min-h-[44px] flex items-center justify-center">×</button>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base">Need snow removal right now? Request a one-time service. We'll contact you to confirm details and pricing.</p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmittingSnow(true);
              setSubmitErrorSnow('');
              setSubmitSuccessSnow(false);

              if (!snowForm.name.trim() || !isValidEmail(snowForm.email) || 
                  !isValidPhone(snowForm.phone) || !snowForm.address.trim() || 
                  !snowForm.drivewayLength.trim()) {
                setSubmitErrorSnow('Please fill in all required fields correctly.');
                setIsSubmittingSnow(false);
                return;
              }

              try {
                const response = await fetch('/api/send-email', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: snowForm.name.trim(),
                    email: snowForm.email.trim(),
                    phone: snowForm.phone.trim(),
                    address: snowForm.address.trim(),
                    drivewayLength: snowForm.drivewayLength.trim(),
                    notes: snowForm.notes.trim(),
                    type: 'Snow Removal Request (Ad-hoc)'
                  })
                });

                const data = await response.json();
                if (data.success) {
                  trackConversion('form_submission', 0);
                  trackEvent('submit', 'Form', 'Snow Removal Request');
                  setSubmitSuccessSnow(true);
                  setSnowForm({ name: '', email: '', phone: '', address: '', drivewayLength: '', notes: '' });
                  setTimeout(() => {
                    setShowSnowRemovalModal(false);
                    setSubmitSuccessSnow(false);
                  }, 2000);
                } else {
                  setSubmitErrorSnow(data.message || 'Failed to send request. Please try again.');
                }
              } catch (error) {
                console.error('Error submitting snow removal request:', error);
                setSubmitErrorSnow('An error occurred. Please try again or contact us directly.');
              } finally {
                setIsSubmittingSnow(false);
              }
            }} className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-primary mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={snowForm.name}
                  onChange={(e) => setSnowForm({ ...snowForm, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-primary mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  value={snowForm.email}
                  onChange={(e) => setSnowForm({ ...snowForm, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-primary mb-1">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  value={snowForm.phone}
                  onChange={(e) => setSnowForm({ ...snowForm, phone: e.target.value })}
                  placeholder="(303) 555-1234"
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-primary mb-1">
                  Driveway Length (feet) <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  value={snowForm.drivewayLength}
                  onChange={(e) => setSnowForm({ ...snowForm, drivewayLength: e.target.value })}
                  placeholder="e.g., 30"
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px] text-sm"
                />
                <small className="text-gray-500 text-xs italic block mt-0.5">Standard width & walkway</small>
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-primary mb-1">
                  Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={snowForm.address}
                  onChange={(e) => setSnowForm({ ...snowForm, address: e.target.value })}
                  placeholder="123 Main St, Denver, CO 80202"
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px] text-sm"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-primary mb-1">Additional Notes (optional)</label>
                <textarea
                  value={snowForm.notes}
                  onChange={(e) => setSnowForm({ ...snowForm, notes: e.target.value })}
                  rows={2}
                  placeholder="Any special instructions..."
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={isSubmittingSnow}
                  className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition-all disabled:bg-primary-light disabled:cursor-not-allowed min-h-[44px] text-sm"
                >
                  {isSubmittingSnow ? 'Submitting...' : 'Request Snow Removal'}
                </button>
              </div>
            </form>
            {submitSuccessSnow && (
              <div className="mt-3 p-2 bg-primary-light/20 text-primary rounded-lg text-center text-sm">
                Request sent! We'll contact you soon.
              </div>
            )}
            {submitErrorSnow && (
              <div className="mt-3 p-2 bg-red-100 text-red-700 rounded-lg text-center text-sm">
                {submitErrorSnow}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quote Form Modal */}
      {showQuoteModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowQuoteModal(false);
              setStep(1);
              setLawnSize('');
              setPrice(null);
              setFrequency('biweekly');
            }
          }}
        >
          <div className="bg-white rounded-none sm:rounded-xl max-w-4xl w-full h-full sm:h-auto max-h-full sm:max-h-[95vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold text-primary pr-2">Get Free Lawn Quote</h2>
              <button onClick={() => { setShowQuoteModal(false); setStep(1); setLawnSize(''); setPrice(null); setFrequency('biweekly'); }} className="text-gray-500 hover:text-gray-700 text-3xl sm:text-3xl leading-none min-w-[44px] min-h-[44px] flex items-center justify-center">×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6" style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}>
              {/* Breadcrumbs */}
              <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${step === 1 ? 'bg-primary-light/20 text-primary-dark font-semibold' : step > 1 ? 'text-primary cursor-pointer hover:bg-primary-light/10' : ''}`}
                  onClick={step > 1 ? goToStep1 : undefined}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? 'bg-primary text-white' : 'bg-primary-light text-primary'}`}>1</span>
                  <span className="hidden sm:inline">Lawn Size</span>
                </div>
                <span className="text-primary-light">→</span>
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${step === 2 ? 'bg-primary-light/20 text-primary-dark font-semibold' : step > 2 ? 'text-primary cursor-pointer hover:bg-primary-light/10' : ''}`}
                  onClick={step > 2 ? goToStep2 : undefined}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? 'bg-primary text-white' : 'bg-primary-light text-primary'}`}>2</span>
                  <span className="hidden sm:inline">Select Package</span>
                </div>
                <span className="text-primary-light">→</span>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${step === 3 ? 'bg-primary-light/20 text-primary-dark font-semibold' : ''}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 3 ? 'bg-primary text-white' : 'bg-primary-light text-primary'}`}>3</span>
                  <span className="hidden sm:inline">Complete Booking</span>
                </div>
              </div>

              {/* Step 1: Lawn Size */}
              {step === 1 && (
                <div className="max-w-md mx-auto">
                  <div className="mb-6">
                    <label htmlFor="lawn-size-input-modal" className="block text-lg font-semibold text-primary mb-2 text-center">
                      What's your lawn size?
                    </label>
                    <p className="text-sm text-gray-600 text-center mb-4">Most Denver lawns are 3,000 - 8,000 sq ft</p>
                    <input
                      id="lawn-size-input-modal"
                      type="number"
                      value={lawnSize}
                      onChange={(e) => setLawnSize(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && lawnSize) {
                          e.preventDefault();
                          goToStep2();
                        }
                      }}
                      placeholder="Enter square feet (e.g., 5000)"
                      className="w-full px-4 py-3 text-lg border-2 border-primary-light rounded-xl text-center focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[48px]"
                      min="0"
                    />
                  </div>
                  
                  <form onSubmit={(e) => { e.preventDefault(); goToStep2(); }} className="space-y-4">
                    <button
                      type="submit"
                      disabled={!lawnSize}
                      className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-all disabled:bg-primary-light disabled:cursor-not-allowed min-h-[48px]"
                    >
                      Get Instant Quote
                    </button>
                    
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">or</span>
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full bg-white text-primary py-3 rounded-xl font-semibold text-base hover:bg-gray-50 transition-all border-2 border-primary min-h-[48px]"
                    >
                      Skip - Use address instead
                    </button>
                    <p className="text-xs text-gray-500 text-center">We'll calculate pricing based on your property address</p>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <button 
                      type="button" 
                      onClick={() => setShowMeasureGuide(true)} 
                      className="text-sm text-primary hover:text-primary-dark underline"
                    >
                      Need help estimating?
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Package Selection */}
              {step === 2 && price && lawnSize && (
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-primary mb-4 text-center">Your Lawn Size: {lawnSize} sq ft</h3>
                  
                  {/* Frequency Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-primary mb-3 text-center">Mowing Frequency</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFrequency('biweekly')}
                        className={`py-3 px-4 rounded-xl font-semibold transition-all border-2 ${
                          frequency === 'biweekly'
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary-light'
                        }`}
                      >
                        Bi-Weekly
                        <div className="text-xs font-normal mt-1">Every 2 weeks</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('weekly')}
                        className={`py-3 px-4 rounded-xl font-semibold transition-all border-2 ${
                          frequency === 'weekly'
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary-light'
                        }`}
                      >
                        Weekly
                        <div className="text-xs font-normal mt-1">Every week</div>
                      </button>
                    </div>
                  </div>

                  <div className="bg-primary-light/20 p-6 rounded-xl mb-6 border-2 border-primary text-center min-h-[120px] flex items-center justify-center">
                    {selectedOption === 'seasonPass' ? (
                      <div>
                        <div className="inline-block bg-gradient-to-r from-primary to-primary-light text-white font-bold text-lg rounded-2xl px-6 py-2 mb-2">Save 25%</div>
                        <p className="text-2xl font-bold text-primary my-2">2 payments of ${seasonalPayment}</p>
                        <p className="text-primary text-sm">
                          One payment at the start of the season, one at mid-season.<br />
                          Covers {avgCutsPerSeason} {frequency === 'weekly' ? 'weekly' : 'bi-weekly'} visits ({frequency === 'weekly' ? 'every week' : 'every 2 weeks'}, April–October).<br />
                          <span className="text-xs text-gray-600 mt-1 block">Additional cuts at your discounted rate: ${discountedPerVisitRate}/visit</span>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-2xl font-bold text-primary my-2">${price}/visit</p>
                        <p className="text-primary text-sm">
                          Pay only for each visit.<br />
                          {frequency === 'weekly' ? 'Weekly' : 'Bi-weekly'} schedule: {avgCutsPerSeason} visits per season (April–October, ~28 weeks).
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <button
                      onClick={() => { setSelectedOption('seasonPass'); goToStep3(); }}
                      className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-all min-h-[48px]"
                    >
                      Select Season Pass
                    </button>
                    <div className="text-center text-gray-600 my-2">or</div>
                    <button
                      onClick={() => { setSelectedOption('biweekly'); goToStep3(); }}
                      className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-base hover:bg-gray-200 transition-all border border-gray-300 min-h-[48px]"
                    >
                      Pay per visit (${price}/visit)
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 Alternative: No lawn size provided */}
              {step === 2 && !price && !lawnSize && (
                <div className="max-w-md mx-auto">
                  {/* Frequency Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-primary mb-3 text-center">Mowing Frequency</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFrequency('biweekly')}
                        className={`py-3 px-4 rounded-xl font-semibold transition-all border-2 ${
                          frequency === 'biweekly'
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary-light'
                        }`}
                      >
                        Bi-Weekly
                        <div className="text-xs font-normal mt-1">Every 2 weeks</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('weekly')}
                        className={`py-3 px-4 rounded-xl font-semibold transition-all border-2 ${
                          frequency === 'weekly'
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary-light'
                        }`}
                      >
                        Weekly
                        <div className="text-xs font-normal mt-1">Every week</div>
                      </button>
                    </div>
                  </div>

                  <div className="bg-primary-light/20 p-6 rounded-xl mb-6 border-2 border-primary text-center min-h-[120px] flex items-center justify-center">
                    {selectedOption === 'seasonPass' ? (
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Example pricing for ~5,000 sq ft:</p>
                        <div className="inline-block bg-gradient-to-r from-primary to-primary-light text-white font-bold text-lg rounded-2xl px-6 py-2 mb-2">Save 25%</div>
                        <p className="text-2xl font-bold text-primary my-2">2 payments of ${exampleSeasonalPayment}</p>
                        <p className="text-primary text-sm">
                          One payment at the start of the season, one at mid-season.<br />
                          Covers {avgCutsPerSeason} {frequency === 'weekly' ? 'weekly' : 'bi-weekly'} visits ({frequency === 'weekly' ? 'every week' : 'every 2 weeks'}, April–October).<br />
                          <span className="text-xs text-gray-600 mt-1 block">Additional cuts at your discounted rate: ${exampleDiscountedPerVisitRate}/visit</span>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Example pricing for ~5,000 sq ft:</p>
                        <p className="text-2xl font-bold text-primary my-2">${examplePrice}/visit</p>
                        <p className="text-primary text-sm">
                          Pay only for each visit.<br />
                          {frequency === 'weekly' ? 'Weekly' : 'Bi-weekly'} schedule: {avgCutsPerSeason} visits per season (April–October, ~28 weeks).
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                    <p className="text-sm text-gray-700">
                      <strong>We'll scan your lawn on Google Maps</strong> and contact you with your personalized quote within 24 hours.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <button
                      onClick={() => { setSelectedOption('seasonPass'); goToStep3(); }}
                      className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-all min-h-[48px]"
                    >
                      Continue to Booking
                    </button>
                    <button
                      onClick={goToStep1}
                      className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-base hover:bg-gray-200 transition-all border border-gray-300 min-h-[48px]"
                    >
                      Back to Enter Lawn Size
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Booking Form */}
              {step === 3 && (
                <div className="max-w-2xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="text-base font-semibold text-primary mb-3">Order Summary</h4>
                      <div className="space-y-1.5 text-xs">
                        {lawnSize && (
                          <div className="flex justify-between">
                            <span>Lawn Size:</span>
                            <span>{lawnSize} sq ft</span>
                          </div>
                        )}
                        {!lawnSize && (
                          <div className="flex justify-between">
                            <span>Lawn Size:</span>
                            <span className="text-gray-500 italic">Will be calculated from address</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Frequency:</span>
                          <span className="capitalize">{frequency === 'weekly' ? 'Weekly' : 'Bi-Weekly'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Package:</span>
                          <span>{selectedOption === 'seasonPass' ? 'Season Pass (2 payments)' : 'Pay Per Visit'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Visits Included:</span>
                          <span>{avgCutsPerSeason} visits</span>
                        </div>
                        {price ? (
                          <div className="flex justify-between pt-1.5 border-t border-gray-300 font-semibold text-primary">
                            <span>Price:</span>
                            <span>{selectedOption === 'seasonPass' ? `2 × $${seasonalPayment}` : `$${price}/visit`}</span>
                          </div>
                        ) : (
                          <>
                            <div className="flex justify-between pt-1.5 border-t border-gray-300">
                              <span className="text-xs text-gray-600">Example (5,000 sq ft):</span>
                              <span className="text-xs text-gray-600">{selectedOption === 'seasonPass' ? `2 × $${exampleSeasonalPayment}` : `$${examplePrice}/visit`}</span>
                            </div>
                            <div className="flex justify-between pt-1.5 border-t border-gray-300 font-semibold text-primary">
                              <span>Your Price:</span>
                              <span className="text-primary text-xs">Quote provided after Google scan</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-300">
                        <p className="text-xs text-gray-600">
                          <strong>Payment:</strong> Digital or at time of service. Payments are late 24 hours after service.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="text-base font-semibold text-primary mb-3">Complete Your Booking</h4>
                      {!lawnSize && (
                        <div className="bg-blue-50 p-2 rounded-lg mb-3 border border-blue-200">
                          <p className="text-xs text-gray-700">
                            <strong>We'll scan your lawn on Google Maps</strong> and contact you with your personalized quote within 24 hours.
                          </p>
                        </div>
                      )}
                      <form onSubmit={submitBooking} className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-primary mb-1">
                            Mowing Frequency <span className="text-red-600">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setFrequency('biweekly')}
                              className={`py-2 px-3 rounded-lg font-semibold text-xs transition-all border-2 ${
                                frequency === 'biweekly'
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary-light'
                              }`}
                            >
                              Bi-Weekly
                            </button>
                            <button
                              type="button"
                              onClick={() => setFrequency('weekly')}
                              className={`py-2 px-3 rounded-lg font-semibold text-xs transition-all border-2 ${
                                frequency === 'weekly'
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary-light'
                              }`}
                            >
                              Weekly
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-primary mb-1">
                            Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                            required
                            className="w-full px-3 py-2 text-sm border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-primary mb-1">
                            Email <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="email"
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                            required
                            className="w-full px-3 py-2 text-sm border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-primary mb-1">
                            Phone Number <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="tel"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                            placeholder="(303) 555-1234"
                            required
                            className="w-full px-3 py-2 text-sm border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-primary mb-1">
                            Property Address <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            value={bookingForm.address}
                            onChange={(e) => setBookingForm({ ...bookingForm, address: e.target.value })}
                            placeholder="e.g., 123 Main St, Denver, CO 80202"
                            required
                            className="w-full px-3 py-2 text-sm border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[40px]"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all disabled:bg-primary-light disabled:cursor-not-allowed min-h-[44px]"
                        >
                          {isSubmitting ? 'Submitting...' : 'Book My Service'}
                        </button>
                      </form>
                      {submitSuccess && (
                        <div className="mt-3 p-2 bg-primary-light/20 text-primary rounded-lg text-center text-xs">
                          Request sent! We'll contact you soon.
                        </div>
                      )}
                      {submitError && (
                        <div className="mt-3 p-2 bg-red-100 text-red-700 rounded-lg text-center text-xs">
                          {submitError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Measure Guide Modal */}
      {showMeasureGuide && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowMeasureGuide(false);
            }
          }}
        >
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-primary">How to Estimate Your Lawn Size</h3>
              <button onClick={() => setShowMeasureGuide(false)} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
            </div>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-700">
                The easiest way to estimate your lawn size is to subtract your home's footprint from your total property size.
              </p>
              <div className="bg-primary-light/20 p-4 rounded-lg border border-primary-light">
                <h4 className="font-semibold text-primary mb-2">Quick Estimate Method:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Find your property size (usually on your property deed, tax records, or real estate listing)</li>
                  <li>Estimate your home's square footage (length × width of your house)</li>
                  <li>Subtract your home size from your property size</li>
                  <li>Also subtract driveways, patios, and other hard surfaces</li>
                </ol>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Example:</h4>
                <p className="text-gray-700">
                  If you have a 7,200 sq ft lot (0.17 acres) with a 2,000 sq ft home and 500 sq ft of driveway/patio, 
                  your lawn is approximately <strong>4,700 sq ft</strong>.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Don't worry about being exact!</strong> We'll confirm the size when we visit. 
                  Most Denver lawns are between 3,000 - 8,000 sq ft.
                </p>
              </div>
            </div>
            <button onClick={() => setShowMeasureGuide(false)} className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark">
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

