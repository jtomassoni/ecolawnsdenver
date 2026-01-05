'use client';

import Script from 'next/script';
import { FaSeedling, FaSnowflake, FaLeaf, FaMapMarkerAlt, FaDollarSign, FaShieldAlt, FaUsers, FaPlug } from 'react-icons/fa';

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EcoLawns Denver",
    "description": "Local lawn care service serving Denver homeowners with 100% battery-powered electric equipment. Licensed, insured, and committed to reducing noise and emissions.",
    "image": "https://ecolawnsdenver.com/images/hero.jpg",
    "@id": "https://ecolawnsdenver.com/about",
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
    "areaServed": [
      "Cherry Creek",
      "Washington Park",
      "Congress Park",
      "Capitol Hill",
      "Highland",
      "LoHi",
      "Sloan's Lake",
      "Berkeley",
      "Sunnyside",
      "Bear Valley",
      "Harvey Park",
      "Ruby Hill",
      "Marston",
      "Denver"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Mowing",
            "description": "Weekly or bi-weekly mowing April–October"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Snow Removal",
            "description": "Driveway and walkway clearing in winter"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seasonal Cleanup",
            "description": "Spring and fall cleanup services"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full min-h-full bg-gradient-to-br from-green-50 via-primary-light/30 to-green-100 py-2 px-3 md:px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-white to-green-50/50 rounded-xl shadow-lg p-4 md:p-6 border border-primary-light/50">
        <div className="text-center mb-3 pb-2 border-b-2 border-primary/20">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">About EcoLawns Denver</h1>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
            We're a local lawn care service serving Denver homeowners. We mow lawns, handle seasonal cleanups, and clear snow in the winter. <strong>All our equipment is electric by design</strong> - half of our mission is reducing noise and neighborhood emissions while keeping your property beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-3">
          {/* What We Do */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">What We Do</h2>
            <div className="space-y-2">
              <div className="flex gap-2 p-2 bg-gradient-to-r from-primary-light/40 to-primary-light/20 rounded-lg border-l-4 border-primary shadow-sm">
                <FaSeedling className="text-primary text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-0.5">Lawn Mowing</h3>
                  <p className="text-xs text-gray-700">Weekly or bi-weekly mowing April–October.</p>
                </div>
              </div>
              <div className="flex gap-2 p-2 bg-gradient-to-r from-primary-light/40 to-primary-light/20 rounded-lg border-l-4 border-primary shadow-sm">
                <FaSnowflake className="text-primary text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-0.5">Snow Removal</h3>
                  <p className="text-xs text-gray-700">Driveway and walkway clearing in winter.</p>
                </div>
              </div>
              <div className="flex gap-2 p-2 bg-gradient-to-r from-primary-light/40 to-primary-light/20 rounded-lg border-l-4 border-primary shadow-sm">
                <FaLeaf className="text-primary text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-0.5">Seasonal Cleanup</h3>
                  <p className="text-xs text-gray-700">Spring and fall cleanup services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Why Choose Us</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gradient-to-br from-primary-light/50 to-primary-light/30 p-2.5 rounded-lg text-center border border-primary/20">
                <FaMapMarkerAlt className="text-primary text-xl mx-auto mb-1" />
                <h3 className="font-semibold text-primary text-xs mb-0.5">Local to Denver</h3>
                <p className="text-xs text-gray-700 leading-tight">We know Denver's climate and water restrictions.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-light/50 to-primary-light/30 p-2.5 rounded-lg text-center border border-primary/20">
                <FaDollarSign className="text-primary text-xl mx-auto mb-1" />
                <h3 className="font-semibold text-primary text-xs mb-0.5">Transparent Pricing</h3>
                <p className="text-xs text-gray-700 leading-tight">See your price upfront, no surprises.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-light/50 to-primary-light/30 p-2.5 rounded-lg text-center border border-primary/20">
                <FaShieldAlt className="text-primary text-xl mx-auto mb-1" />
                <h3 className="font-semibold text-primary text-xs mb-0.5">Licensed & Insured</h3>
                <p className="text-xs text-gray-700 leading-tight">Fully licensed and insured.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-light/50 to-primary-light/30 p-2.5 rounded-lg text-center border border-primary/20">
                <FaUsers className="text-primary text-xl mx-auto mb-1" />
                <h3 className="font-semibold text-primary text-xs mb-0.5">Reliable Service</h3>
                <p className="text-xs text-gray-700 leading-tight">We show up on schedule.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Electric Equipment Section */}
        <div className="pt-3 border-t-2 border-primary/20">
          <div className="flex gap-3 items-start bg-gradient-to-r from-primary-light/30 to-primary-light/10 p-4 rounded-lg border border-primary/20">
            <FaPlug className="text-primary text-2xl flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-semibold text-primary mb-1.5">100% Electric Equipment</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                All our equipment is electric by intention. Half of our business mission is to reduce noise and neighborhood emissions. We use battery-powered mowers, electric leaf blowers, and electric snow removal equipment - keeping your neighborhood quiet and clean while delivering professional results. No loud gas engines, no exhaust fumes, no early morning noise complaints.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="pt-6 border-t-2 border-primary/20 mt-6">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Environmental Stewardship</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                At EcoLawns Denver, we believe that professional lawn care doesn't have to come at the expense of our environment. Our commitment to 100% battery-powered electric equipment means zero emissions, reduced noise pollution, and a healthier neighborhood for everyone. We're not just mowing lawns - we're building a more sustainable future for Denver, one yard at a time.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Premium Service, Premium Values</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We understand that choosing electric lawn care is an investment in both quality and sustainability. Our customers value quiet neighborhoods, clean air, and environmental responsibility. That's why we deliver exceptional service that matches the premium nature of battery-powered equipment - meticulous attention to detail, reliable scheduling, and results that exceed expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services in Detail */}
        <div className="pt-6 border-t-2 border-primary/20 mt-6">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Our Services in Detail</h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <FaSeedling className="text-primary" />
                Weekly & Bi-Weekly Lawn Mowing in Denver
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Our battery-powered electric lawn mowing service runs from April through October, covering the full growing season in Denver. We offer both weekly and bi-weekly schedules to match your lawn's needs and your budget. Every visit includes:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Precision mowing with battery-powered electric mowers</li>
                <li>Edge trimming along sidewalks, driveways, and flower beds</li>
                <li>Leaf and debris blowing with electric blowers</li>
                <li>Cleanup of all clippings and debris</li>
                <li>Consistent scheduling you can rely on</li>
              </ul>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                Our electric mowers are perfect for Denver's varied lawn sizes, from compact urban yards to larger suburban properties. Starting at $40 per visit, we provide transparent pricing based on your lawn's square footage.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <FaLeaf className="text-primary" />
                Spring Cleanup & Aeration Services
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Get your lawn ready for the growing season with our comprehensive spring cleanup and aeration services. We use electric equipment throughout the process:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Thorough dethatching to remove dead grass and debris</li>
                <li>Core aeration to improve soil compaction and water absorption</li>
                <li>Overseeding to fill in bare spots and improve lawn density</li>
                <li>Fertilization to promote healthy growth</li>
                <li>Complete cleanup of all debris and clippings</li>
              </ul>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                Our spring services are designed specifically for Denver's climate and soil conditions, helping your lawn thrive throughout the growing season while following Colorado's water conservation guidelines.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <FaSnowflake className="text-primary" />
                Electric Snow Removal Service
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Don't let winter weather disrupt your routine. Our electric snow removal service uses battery-powered equipment to clear your driveway, walkways, and sidewalks quickly and quietly. Available throughout the winter season, we provide:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Driveway clearing with electric snow blowers</li>
                <li>Sidewalk and walkway clearing</li>
                <li>Path clearing to your front door</li>
                <li>Clean, quiet operation - no gas fumes or loud engines</li>
                <li>Reliable service when you need it most</li>
              </ul>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                Our electric snow removal equipment is perfect for Denver's winter conditions, providing reliable service without the noise and emissions of traditional gas-powered equipment. Book ad-hoc service as needed throughout the winter season.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <FaLeaf className="text-primary" />
                Fall Cleanup & Winter Preparation
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Prepare your lawn for Denver's winter with our comprehensive fall cleanup services. Using electric equipment, we ensure your property is ready for the cold months ahead:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Leaf removal and cleanup with electric blowers</li>
                <li>Debris removal from lawns and garden beds</li>
                <li>Winter fertilizer application</li>
                <li>Final mowing and trimming before winter</li>
                <li>Gutter and drainage area cleanup</li>
              </ul>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                Our fall services help protect your lawn through Denver's winter and ensure a healthy start to the next growing season, all while maintaining our commitment to electric, emission-free equipment.
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="pt-6 border-t-2 border-primary/20 mt-6">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Serving Denver & Surrounding Areas</h2>
          <div className="bg-white p-5 rounded-lg border border-primary/20 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              EcoLawns Denver is locally owned and operated, serving homeowners throughout the Denver metro area. We're based in Bear Valley, Denver, and provide electric lawn care services to neighborhoods including:
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-primary-light/10 p-3 rounded-lg">
                <h4 className="font-semibold text-primary text-sm mb-2">Central Denver</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Cherry Creek</li>
                  <li>• Washington Park</li>
                  <li>• Congress Park</li>
                  <li>• Capitol Hill</li>
                </ul>
              </div>
              <div className="bg-primary-light/10 p-3 rounded-lg">
                <h4 className="font-semibold text-primary text-sm mb-2">North Denver</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Highland (LoHi)</li>
                  <li>• Sloan's Lake</li>
                  <li>• Berkeley</li>
                  <li>• Sunnyside</li>
                </ul>
              </div>
              <div className="bg-primary-light/10 p-3 rounded-lg">
                <h4 className="font-semibold text-primary text-sm mb-2">South Denver</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Bear Valley</li>
                  <li>• Harvey Park</li>
                  <li>• Ruby Hill</li>
                  <li>• Marston</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mt-4">
              Don't see your neighborhood? We serve many areas throughout Denver and surrounding communities. Contact us to see if we service your area. Our electric lawn care services are perfect for any Denver neighborhood that values quiet, clean, and sustainable property maintenance.
            </p>
          </div>
        </div>

        {/* Equipment & Technology */}
        <div className="pt-6 border-t-2 border-primary/20 mt-6">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Our Battery-Powered Equipment</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Electric Lawn Mowers</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our fleet consists entirely of battery-powered electric lawn mowers from leading manufacturers. These mowers provide the same cutting power as gas mowers but operate at a fraction of the noise level and produce zero emissions. With instant start-up and consistent performance, our electric mowers deliver professional results while keeping your neighborhood quiet and clean.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Electric Leaf Blowers & Trimmers</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                All our trimming and cleanup equipment is battery-powered. Electric leaf blowers provide powerful airflow for debris removal without the deafening noise of gas blowers. Our electric trimmers offer precise edge work and detail trimming, all while maintaining our commitment to zero emissions and quiet operation.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-primary/20 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Electric Snow Removal Equipment</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our winter services use battery-powered electric snow blowers that are powerful enough to handle Denver's snow while operating quietly and cleanly. No gas fumes, no loud engines - just reliable snow removal that respects your neighborhood's peace and air quality.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing & Transparency */}
        <div className="pt-6 border-t-2 border-primary/20 mt-6">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Transparent Pricing for Electric Lawn Care</h2>
          <div className="bg-white p-5 rounded-lg border border-primary/20 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              We believe in complete pricing transparency. Our electric lawn care services start at $40 per visit, with pricing based on your lawn's square footage. We offer two payment options:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-primary-light/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Season Pass</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Save 25% with our season pass. Two payments cover 14 bi-weekly visits (every 2 weeks, April–October, ~28 weeks). Additional cuts beyond the 14 visits are available at the same discounted rate (25% off). Perfect for homeowners who want to lock in their rate and save money while supporting sustainable lawn care.
                </p>
              </div>
              <div className="bg-primary-light/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Pay Per Visit</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Flexible pay-per-visit option for homeowners who prefer to pay as they go. Same great electric lawn care service, with the flexibility to adjust your schedule as needed.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              All pricing is calculated based on your lawn size, which you can measure using our free measurement guide. No hidden fees, no surprises - just transparent pricing for premium electric lawn care in Denver.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-6 border-t-2 border-primary/20 mt-6 mb-6">
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Ready to Experience Electric Lawn Care?</h2>
            <p className="text-base mb-4 opacity-95">
              Join Denver homeowners who choose quiet, clean, and sustainable lawn care. Get your free quote today and discover why battery-powered lawn service is the smart choice for your property.
            </p>
            <a 
              href="/" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all shadow-md hover:shadow-lg"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

