import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lawn Care Services in Denver | Weekly Mowing, Spring Cleanup, Snow Removal',
  description:
    'Denver lawn services with free quotes: weekly & bi-weekly electric mowing, spring/fall cleanup, aeration, and quiet snow removal. Battery-powered on your lawn; solar-assisted charging. From $40/mow.',
  keywords: [
    'lawn mowing service Denver',
    'weekly lawn mowing',
    'spring cleanup Denver',
    'snow removal Denver',
    'lawn aeration Denver',
    'fall cleanup service',
    'electric lawn mowing',
    'Denver lawn services',
    'bi-weekly mowing',
    'lawn maintenance Denver'
  ],
  openGraph: {
    title: 'Lawn Care Services in Denver | EcoLawns Denver',
    description:
      'Electric lawn mowing, cleanups & snow removal in Denver. Free quotes, transparent pricing, solar-backed battery charging.',
    url: 'https://ecolawnsdenver.com/services',
    siteName: 'EcoLawns Denver',
    images: [
      {
        url: 'https://ecolawnsdenver.com/images/lawn-being-cut.png',
        width: 800,
        height: 600,
        alt: 'Professional lawn mowing service in Denver',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawn Care Services in Denver | EcoLawns Denver',
    description:
      'Denver electric lawn care—mowing, cleanups, snow removal. Free quotes & pricing on this page.',
    images: ['https://ecolawnsdenver.com/images/lawn-being-cut.png'],
  },
  alternates: {
    canonical: 'https://ecolawnsdenver.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

