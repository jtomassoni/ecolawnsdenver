'use client';

import Script from 'next/script';
import type { ReactNode } from 'react';
import { FaSeedling, FaSnowflake, FaLeaf, FaMapMarkerAlt, FaDollarSign, FaShieldAlt, FaUsers, FaPlug, FaSolarPanel, FaTruck, FaChevronDown } from 'react-icons/fa';
import { DENVER_NEIGHBORHOODS } from '@/lib/structured-data';

function AboutExpandable({
  id,
  title,
  hint,
  children,
}: {
  id?: string;
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <details
      id={id}
      className="group border-t border-primary/20 pt-5 scroll-mt-4 first:border-t-0 first:pt-0"
    >
      <summary className="cursor-pointer list-none flex items-start justify-between gap-3 gap-y-2 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1 text-center sm:text-left px-1">
          <h2 className="text-xl sm:text-2xl font-bold text-primary">{title}</h2>
          {hint ? <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{hint}</p> : null}
        </div>
        <FaChevronDown
          className="text-primary w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="pt-4 mt-1">{children}</div>
    </details>
  );
}

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EcoLawns Denver",
    "description": "Local electric lawn care focused on south Denver, Littleton, Englewood, and nearby—with 100% battery-powered equipment, batteries charged in part from home solar and portable power on job sites. Licensed, insured, and committed to reducing noise and emissions.",
    "image": "https://ecolawnsdenver.com/images/hero.jpg",
    "@id": "https://ecolawnsdenver.com/about",
    "url": "https://ecolawnsdenver.com",
    "telephone": "+1-301-943-7914",
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
    "areaServed": [...DENVER_NEIGHBORHOODS],
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
      <div className="w-full min-h-full bg-gradient-to-br from-green-50 via-primary-light/30 to-green-100 py-4 sm:py-6 px-3 sm:px-4 md:px-6" style={{ paddingLeft: "max(0.75rem, env(safe-area-inset-left))", paddingRight: "max(0.75rem, env(safe-area-inset-right))" }}>
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-white to-green-50/50 rounded-xl shadow-lg p-4 sm:p-5 md:p-6 border border-primary-light/50">
        <div className="text-center mb-4 sm:mb-5 pb-3 sm:pb-4 border-b-2 border-primary/20">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3">About EcoLawns Denver</h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl mx-auto px-2 leading-relaxed">
            We're a local lawn care team based in Bear Valley, focused on south Denver, Littleton, Englewood, and nearby neighborhoods. We mow lawns, handle seasonal cleanups, and clear snow in the winter. <strong>All our equipment is electric by design</strong>—half of our mission is reducing noise and neighborhood emissions while keeping your property beautiful. We also charge much of that battery power from solar at home and a portable station on site—see below for how that works (and an honest note about our truck).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5">
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
                <h3 className="font-semibold text-primary text-xs mb-0.5">South Denver & suburbs</h3>
                <p className="text-xs text-gray-700 leading-tight">We know Front Range seasons and local water guidance.</p>
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

        {/* Solar charging & honest footprint */}
        <div id="solar-charging" className="pt-4 sm:pt-5 border-t-2 border-primary/20 scroll-mt-4">
          <div className="flex gap-3 items-start bg-gradient-to-r from-amber-50/90 via-primary-light/20 to-green-50/80 p-4 rounded-lg border border-amber-200/60">
            <FaSolarPanel className="text-amber-600 text-2xl flex-shrink-0 mt-0.5" aria-hidden />
            <div>
              <h2 className="text-xl font-semibold text-primary mb-1.5">How we renewably power the work</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                At home we run a solar setup on the property: panels on the shed capture Colorado sunshine, and that energy charges a portable power station we take on the road. At your job site we plug our tool batteries into that bank so much of our day-to-day charging comes from the sun—not from burning fuel to run the mower.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                It is a practical loop: sun → shed → portable battery → your yard. We are always looking for ways to stretch that renewable share as gear and vehicles improve.
              </p>
              <div className="flex gap-3 items-start bg-white/70 p-3 rounded-lg border border-primary/15">
                <FaTruck className="text-primary text-lg flex-shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-primary">Straight talk on the truck:</span> we still use a gas-powered truck to reach job sites—for now. Moving tools and crew efficiently matters, and we are not pretending the truck is electric. The equipment that actually runs on your lawn is battery-powered, and we are working to keep as much of that energy as possible coming from solar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t-2 border-primary/20 pt-5">
          <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto leading-relaxed mb-5 px-1">
            Want the long version? Tap a section to expand—same in-depth info, just tucked away so this page is easier to scan.
          </p>
          <div>
        <AboutExpandable
          title="Our Mission & Values"
          hint="Why we focus on electric equipment and how we think about service."
        >
          <div className="grid md:grid-cols-2 gap-4">
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
        </AboutExpandable>

        <AboutExpandable
          title="Our Services in Detail"
          hint="Mowing, spring and fall work, and electric snow removal—what each visit includes."
        >
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
        </AboutExpandable>

        <AboutExpandable
          id="service-areas"
          title="South Denver, Littleton, Englewood & nearby"
          hint="Where we spend most of our routes—and how to ask about your address."
        >
          <div className="bg-white p-5 rounded-lg border border-primary/20 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              EcoLawns Denver is locally owned and based in Bear Valley. Most of our work is in south Denver and the southwest corridor—quiet electric mowing and cleanups close to home. Typical service areas include:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-primary-light/15 p-4 rounded-lg border border-primary/25">
                <h4 className="font-semibold text-primary text-sm mb-2">Southwest Denver & inner suburbs</h4>
                <ul className="text-xs text-gray-700 space-y-1 columns-1 sm:columns-2 gap-x-4">
                  <li>• Littleton</li>
                  <li>• Englewood</li>
                  <li>• Harvey Park</li>
                  <li>• Bear Valley</li>
                  <li>• Marston</li>
                  <li>• Ruby Hill</li>
                  <li>• Sheridan</li>
                  <li>• Fort Logan</li>
                  <li>• Southmoor Park</li>
                  <li>• University Hills</li>
                  <li>• Hampden South</li>
                </ul>
              </div>
              <div className="bg-primary-light/10 p-4 rounded-lg">
                <h4 className="font-semibold text-primary text-sm mb-2">South metro & foothills edge</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Ken Caryl</li>
                  <li>• Highlands Ranch</li>
                  <li>• Other south-side Denver addresses by arrangement</li>
                </ul>
                <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                  Not sure if you&apos;re in range? Send your street address with a quote request—we&apos;ll tell you quickly.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mt-4">
              We sometimes take jobs elsewhere in the metro when scheduling allows. If you value quiet, electric equipment and sustainable lawn care, ask—we&apos;re happy to check your neighborhood.
            </p>
          </div>
        </AboutExpandable>

        <AboutExpandable
          title="Our Battery-Powered Equipment"
          hint="Mowers, blowers, trimmers, and snow gear—still all electric on your property."
        >
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
        </AboutExpandable>

        <AboutExpandable
          title="Transparent Pricing for Electric Lawn Care"
          hint="Starting rates, season pass vs pay-per-visit, and how lawn size affects quotes."
        >
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
        </AboutExpandable>
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

