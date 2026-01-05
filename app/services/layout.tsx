import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lawn Care Services in Denver | Weekly Mowing, Spring Cleanup, Snow Removal',
  description: 'Professional lawn care services in Denver: weekly & bi-weekly mowing, spring cleanup & aeration, fall cleanup, and electric snow removal. All services use battery-powered equipment for quiet, emission-free operation.',
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
    description: 'Professional lawn care services in Denver: weekly mowing, spring cleanup, snow removal. All with battery-powered electric equipment.',
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
    description: 'Professional lawn care services: weekly mowing, spring cleanup, snow removal with electric equipment.',
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

