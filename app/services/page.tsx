'use client';

import { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { FaSeedling, FaSnowflake, FaLeaf, FaCheck } from 'react-icons/fa';

const services = [
  {
    title: 'Weekly & Bi-Weekly Lawn Mowing',
    description: `Professional mowing service with quiet, battery-powered electric mowers. We trim edges, blow clippings, and keep your property spotless - all while reducing noise and emissions in your neighborhood.`,
    image: '/images/lawn-being-cut.png'
  },
  {
    title: 'Spring Cleanup & Aeration',
    description: `Thorough cleanup, dethatching, core aeration, and overseeding to get your lawn ready for the growing season. All equipment is electric, keeping your neighborhood quiet and clean.`,
    image: '/images/lawn-cut-shot.png'
  },
  {
    title: 'Snow Removal Service',
    description: `Professional snow removal for driveways, walkways, and sidewalks using electric equipment. Available now for winter service - quiet, emission-free, and reliable.`,
    image: '/images/snowblow-being-pushed.png',
    isSnowRemoval: true
  },
  {
    title: 'Fall Cleanup & Winter Prep',
    description: `Clear leaves and debris, apply winter fertilizer, and prepare your lawn for the cold months ahead. All done with electric equipment to minimize noise and emissions.`,
    image: '/images/leaf-raking.png'
  }
];

export default function Services() {
  const [showModal, setShowModal] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Lawn Care Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "EcoLawns Denver",
      "url": "https://ecolawnsdenver.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Denver",
      "sameAs": "https://en.wikipedia.org/wiki/Denver"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "image": `https://ecolawnsdenver.com${service.image}`
        }
      }))
    }
  };
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', lawnSize: 'medium', drivewayLength: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [lawnSizeSqFt, setLawnSizeSqFt] = useState<number | null>(null);
  const [mowingFrequency, setMowingFrequency] = useState<'weekly' | 'bi-weekly'>('weekly');
  const [paymentOption, setPaymentOption] = useState<'season-pass' | 'pay-per-visit' | null>(null);

  const handleQuoteClick = (service: typeof services[0]) => {
    setSelectedService(service.title);
    setShowModal(true);
    setCurrentStep(1);
    setLawnSizeSqFt(null);
    setMowingFrequency('weekly');
    setPaymentOption(null);
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => phone.replace(/\D/g, '').length >= 10;

  const submitForm = async (type: string) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    if (!formData.name.trim() || !isValidEmail(formData.email) || 
        !isValidPhone(formData.phone) || !formData.address.trim()) {
      setSubmitError('Please fill in all required fields correctly.');
      setIsSubmitting(false);
      return;
    }

    if (selectedService?.includes('Lawn') && !formData.lawnSize) {
      setSubmitError('Please select a lawn size.');
      setIsSubmitting(false);
      return;
    }

    if (selectedService?.includes('Snow') && !formData.drivewayLength.trim()) {
      setSubmitError('Please enter driveway length.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: type,
          lawnSizeSqFt: lawnSizeSqFt,
          mowingFrequency: mowingFrequency,
          paymentOption: paymentOption
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', address: '', lawnSize: 'medium', drivewayLength: '', notes: '' });
        setTimeout(() => {
          setShowModal(false);
          setSubmitSuccess(false);
        }, 2000);
      } else {
        setSubmitError(data.message || 'Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const calculateSeasonPassPrice = (sqFt: number, frequency: 'weekly' | 'bi-weekly') => {
    const perVisitPrice = getPriceForSize(sqFt);
    if (!perVisitPrice) return null;
    
    const visitsPerSeason = frequency === 'weekly' ? 28 : 14;
    const totalPrice = perVisitPrice * visitsPerSeason * 0.75; // 25% discount
    const paymentAmount = Math.ceil(totalPrice / 2);
    return { totalPrice, paymentAmount, perVisitPrice, visitsPerSeason };
  };


  return (
    <>
      <Script
        id="services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full min-h-full bg-gradient-to-br from-green-50 via-primary-light/30 to-green-100 py-6 sm:py-8 px-4 sm:px-6" style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-3 sm:mb-4">Services & Pricing</h1>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Professional, eco-friendly lawn care services in Denver. All equipment is electric by design - quiet, emission-free, and reliable.
        </p>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-primary-light/50">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6 text-center">Lawn Mowing Pricing</h2>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {/* Season Pass */}
            <div className="bg-gradient-to-br from-primary-light/20 to-primary-light/10 rounded-xl p-6 border-2 border-primary">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Season Pass</h3>
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">Save 25%</span>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Two payments cover 14 bi-weekly visits (every 2 weeks, April–October, ~28 weeks). Additional cuts at your discounted rate (25% off).
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-700">
                  <FaCheck className="text-primary mr-2 flex-shrink-0" />
                  <span>14 bi-weekly visits included</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaCheck className="text-primary mr-2 flex-shrink-0" />
                  <span>25% discount on all visits</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaCheck className="text-primary mr-2 flex-shrink-0" />
                  <span>Additional cuts at discounted rate</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaCheck className="text-primary mr-2 flex-shrink-0" />
                  <span>Lock in your rate for the season</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">Standard cost for most Denver lawns: ~$300-350 per payment (2 payments)</p>
            </div>

            {/* Pay Per Visit */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-4">Pay Per Visit</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Pay only for each visit. Bi-weekly schedule: 14 visits per season (April–October, ~28 weeks).
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-700">
                  <FaCheck className="text-primary mr-2 flex-shrink-0" />
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaCheck className="text-primary mr-2 flex-shrink-0" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaCheck className="text-primary mr-2 flex-shrink-0" />
                  <span>Pay as you go</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">Standard cost for most Denver lawns: ~$50-60 per visit</p>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="bg-primary-light/10 rounded-xl p-6 border border-primary-light mb-6">
            <p className="text-center text-gray-700">
              <span className="font-semibold text-primary">We'll contact you with specific pricing</span> based on your property size and needs. 
              The costs above represent standard pricing for most Denver lawns. Final pricing will be provided after we review your address.
            </p>
          </div>

          {/* Payment Information */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-primary mb-3 text-center">Payment Options</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="text-center">
                <strong>All payments can be made digitally or collected at the time of service.</strong> Payments are considered late 24 hours after service completion.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-primary-light/50 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-primary/20 overflow-hidden flex flex-col">
                <div className="relative w-full h-40 sm:h-48">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <h2 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">{service.title}</h2>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 flex-1 leading-relaxed">{service.description}</p>
                  {service.isSnowRemoval && (
                    <p className="text-xs text-gray-600 mb-2 sm:mb-3 italic">Pricing based on driveway length and property size</p>
                  )}
                  <button
                    onClick={() => handleQuoteClick(service)}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all min-h-[48px] shadow-md hover:shadow-lg text-sm sm:text-base"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Pricing */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-primary-light/50">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-light/10 rounded-xl p-6 border border-primary-light">
              <h3 className="text-lg font-semibold text-primary mb-3">Spring Cleanup & Aeration</h3>
              <p className="text-sm text-gray-700 mb-4">
                Comprehensive cleanup, dethatching, core aeration, and overseeding. Pricing varies by lawn size.
              </p>
              <p className="text-sm font-semibold text-primary">Standard cost for most Denver lawns: ~$150-200</p>
            </div>
            <div className="bg-primary-light/10 rounded-xl p-6 border border-primary-light">
              <h3 className="text-lg font-semibold text-primary mb-3">Fall Cleanup & Winter Prep</h3>
              <p className="text-sm text-gray-700 mb-4">
                Leaf removal, winter fertilization, and lawn preparation. Pricing varies by lawn size.
              </p>
              <p className="text-sm font-semibold text-primary">Standard cost for most Denver lawns: ~$150-200</p>
            </div>
            <div className="bg-primary-light/10 rounded-xl p-6 border border-primary-light">
              <h3 className="text-lg font-semibold text-primary mb-3">Snow Removal</h3>
              <p className="text-sm text-gray-700 mb-4">
                Professional snow removal for driveways, walkways, and sidewalks. Available for ad-hoc service.
              </p>
              <p className="text-sm font-semibold text-primary">Custom pricing based on property</p>
            </div>
            <div className="bg-primary-light/10 rounded-xl p-6 border border-primary-light">
              <h3 className="text-lg font-semibold text-primary mb-3">Additional Cuts</h3>
              <p className="text-sm text-gray-700 mb-4">
                Need extra cuts beyond your schedule? Season Pass customers get 25% off. Pay-per-visit customers pay standard rate.
              </p>
              <p className="text-sm font-semibold text-primary">Pricing provided with your quote</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {showModal && selectedService?.includes('Lawn') && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-0 sm:p-4" style={{ paddingTop: "max(0px, env(safe-area-inset-top))", paddingBottom: "max(0px, env(safe-area-inset-bottom))", paddingLeft: "max(0px, env(safe-area-inset-left))", paddingRight: "max(0px, env(safe-area-inset-right))" }}>
          <div className="bg-white rounded-none sm:rounded-xl max-w-2xl w-full h-full sm:h-auto max-h-full sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col">
            <div className="flex justify-between items-center mb-4 sm:mb-6 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary pr-2">Get Free Lawn Quote</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 text-3xl leading-none min-w-[44px] min-h-[44px] flex items-center justify-center">×</button>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-8 gap-2">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  currentStep > 1 ? 'bg-primary text-white' : currentStep === 1 ? 'bg-primary text-white' : 'bg-white text-primary border-2 border-primary-light'
                }`}>
                  1
                </div>
                <span className={`ml-2 text-sm font-medium ${currentStep >= 1 ? 'text-primary' : 'text-gray-400'}`}>Lawn Size</span>
              </div>
              <div className={`w-8 h-0.5 ${currentStep > 1 ? 'bg-primary' : 'bg-primary-light'} mx-2`}></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  currentStep > 2 ? 'bg-primary text-white' : currentStep === 2 ? 'bg-white text-primary border-2 border-primary' : 'bg-primary-light/30 text-primary border-2 border-primary-light'
                }`}>
                  2
                </div>
                <span className={`ml-2 text-sm font-medium ${currentStep >= 2 ? 'text-primary' : 'text-gray-400'}`}>Select Package</span>
              </div>
              <div className={`w-8 h-0.5 ${currentStep > 2 ? 'bg-primary' : 'bg-primary-light'} mx-2`}></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  currentStep === 3 ? 'bg-primary text-white' : 'bg-primary-light/30 text-primary border-2 border-primary-light'
                }`}>
                  3
                </div>
                <span className={`ml-2 text-sm font-medium ${currentStep >= 3 ? 'text-primary' : 'text-gray-400'}`}>Complete Booking</span>
              </div>
            </div>

            {/* Step 1: Lawn Size */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-primary mb-4">
                    What's your lawn size?
                  </label>
                  <input
                    type="number"
                    value={lawnSizeSqFt || ''}
                    onChange={(e) => setLawnSizeSqFt(e.target.value ? parseInt(e.target.value) : null)}
                    placeholder="Enter square feet (e.g., 5000)"
                    className="w-full px-4 py-3 border-2 border-primary-light rounded-lg focus:border-primary focus:outline-none text-lg min-h-[48px]"
                  />
                  <small className="text-gray-500 text-sm block mt-2">
                    Estimates are fine - we'll measure when we get there.
                  </small>
                </div>
                <button
                  onClick={() => {
                    if (lawnSizeSqFt && lawnSizeSqFt > 0) {
                      setCurrentStep(2);
                    }
                  }}
                  disabled={!lawnSizeSqFt || lawnSizeSqFt <= 0}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all disabled:bg-gray-300 disabled:cursor-not-allowed min-h-[48px]"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Select Package */}
            {currentStep === 2 && lawnSizeSqFt && (
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">
                    Your Lawn Size: {lawnSizeSqFt.toLocaleString()} sq ft
                  </p>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-primary mb-4">
                    Mowing Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setMowingFrequency('bi-weekly')}
                      className={`py-4 px-6 rounded-lg font-semibold transition-all border-2 ${
                        mowingFrequency === 'bi-weekly'
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-primary-light'
                      }`}
                    >
                      <div className="text-base font-bold">Bi-Weekly</div>
                      <div className="text-sm mt-1 opacity-90">Every 2 weeks</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMowingFrequency('weekly')}
                      className={`py-4 px-6 rounded-lg font-semibold transition-all border-2 ${
                        mowingFrequency === 'weekly'
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-primary-light'
                      }`}
                    >
                      <div className="text-base font-bold">Weekly</div>
                      <div className="text-sm mt-1 opacity-90">Every week</div>
                    </button>
                  </div>
                </div>

                {(() => {
                  const seasonPass = calculateSeasonPassPrice(lawnSizeSqFt, mowingFrequency);
                  const perVisitPrice = getPriceForSize(lawnSizeSqFt);
                  
                  return seasonPass && perVisitPrice ? (
                    <>
                      {/* Season Pass Offer */}
                      <div className="bg-primary-light/20 rounded-lg p-6 border-2 border-primary">
                        <div className="flex justify-center mb-3">
                          <span className="bg-primary-light text-primary text-sm font-bold px-3 py-1 rounded-full">Save 25%</span>
                        </div>
                        <div className="text-center mb-3">
                          <div className="text-3xl font-bold text-primary">2 payments of ${seasonPass.paymentAmount}</div>
                        </div>
                        <div className="text-sm text-primary space-y-1">
                          <p>One payment at the start of the season, one at mid-season.</p>
                          <p>Covers {seasonPass.visitsPerSeason} {mowingFrequency === 'weekly' ? 'weekly' : 'bi-weekly'} visits ({mowingFrequency === 'weekly' ? 'every week' : 'every 2 weeks'}, April-October).</p>
                          <p>Additional cuts at your discounted rate: ${Math.round(perVisitPrice * 0.75)}/visit.</p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setPaymentOption('season-pass');
                          setCurrentStep(3);
                        }}
                        className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all min-h-[52px] text-lg"
                      >
                        Select Season Pass
                      </button>

                      <div className="text-center text-gray-500 my-2">or</div>

                      <button
                        onClick={() => {
                          setPaymentOption('pay-per-visit');
                          setCurrentStep(3);
                        }}
                        className="w-full bg-gray-100 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all min-h-[52px] text-lg border-2 border-gray-300"
                      >
                        Pay per visit (${perVisitPrice}/visit)
                      </button>
                    </>
                  ) : null;
                })()}
              </div>
            )}

            {/* Step 3: Complete Booking */}
            {currentStep === 3 && lawnSizeSqFt && (
              <div className="space-y-4">
                <div className="bg-primary-light/10 rounded-lg p-4 mb-4">
                  <p className="text-sm text-primary font-semibold mb-1">Lawn Size: {lawnSizeSqFt.toLocaleString()} sq ft</p>
                  <p className="text-sm text-primary font-semibold mb-1">Frequency: {mowingFrequency === 'weekly' ? 'Weekly' : 'Bi-Weekly'}</p>
                  <p className="text-sm text-primary font-semibold mb-2">
                    Payment: {paymentOption === 'season-pass' ? 'Season Pass' : 'Pay Per Visit'}
                  </p>
                  <p className="text-xs text-gray-600 pt-2 border-t border-primary-light/30">
                    <strong>Payment Options:</strong> Digital or at time of service. Payments are late 24 hours after service.
                  </p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); submitForm(selectedService || 'Service Request'); }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(303) 555-1234"
                      required
                      className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="123 Main St, Denver, CO 80202"
                      required
                      className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Additional Notes (optional)</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      placeholder="Any special instructions..."
                      className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all min-h-[48px]"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all disabled:bg-primary-light disabled:cursor-not-allowed min-h-[48px]"
                    >
                      {isSubmitting ? 'Submitting...' : 'Complete Booking'}
                    </button>
                  </div>
                </form>
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-primary-light/20 text-primary rounded-lg text-center">
                    Request sent! We'll contact you soon.
                  </div>
                )}
                {submitError && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
                    {submitError}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Service Modal for Non-Lawn Services */}
      {showModal && !selectedService?.includes('Lawn') && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-0 sm:p-4" style={{ paddingTop: "max(0px, env(safe-area-inset-top))", paddingBottom: "max(0px, env(safe-area-inset-bottom))", paddingLeft: "max(0px, env(safe-area-inset-left))", paddingRight: "max(0px, env(safe-area-inset-right))" }}>
          <div className="bg-white rounded-none sm:rounded-xl max-w-lg w-full h-full sm:h-auto max-h-full sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4 flex-shrink-0">
              <h3 className="text-lg sm:text-xl font-semibold text-primary pr-2">Get Your {selectedService} Quote</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 text-3xl sm:text-2xl leading-none min-w-[44px] min-h-[44px] flex items-center justify-center">×</button>
            </div>
            <p className="text-gray-600 mb-4">Enter your information to get a quote for this service.</p>
            <form onSubmit={(e) => { e.preventDefault(); submitForm(selectedService || 'Service Request'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(303) 555-1234"
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Main St, Denver, CO 80202"
                  required
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                />
              </div>
              {selectedService?.includes('Snow') && (
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Driveway Length (feet) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={formData.drivewayLength}
                    onChange={(e) => setFormData({ ...formData, drivewayLength: e.target.value.replace(/\D/g, '') })}
                    placeholder="e.g., 30"
                    required
                    className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[44px]"
                  />
                  <small className="text-gray-500 text-xs italic block mt-1">
                    Estimates are fine - we'll measure when we get there. This just helps us plan if we can fit it in with other jobs that day.
                  </small>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Additional Notes (optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  placeholder="Any special instructions..."
                  className="w-full px-3 py-2 border border-primary-light rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all disabled:bg-primary-light disabled:cursor-not-allowed min-h-[48px]"
              >
                {isSubmitting ? 'Submitting...' : 'Get Quote'}
              </button>
            </form>
            {submitSuccess && (
              <div className="mt-4 p-3 bg-primary-light/20 text-primary rounded-lg text-center">
                Request sent! We'll contact you soon.
              </div>
            )}
            {submitError && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
                {submitError}
              </div>
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
}

