import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About EcoLawns Denver | Local Electric Lawn Care Service in Denver, CO',
  description: 'Learn about EcoLawns Denver - a local lawn care service serving Denver homeowners with 100% battery-powered electric equipment. Licensed, insured, and committed to reducing noise and emissions.',
  keywords: [
    'about EcoLawns Denver',
    'Denver lawn care company',
    'electric lawn service Denver',
    'local lawn care Bear Valley',
    'battery-powered lawn mowing',
    'eco-friendly lawn care company',
    'Denver lawn service areas',
    'licensed lawn care Denver'
  ],
  openGraph: {
    title: 'About EcoLawns Denver | Local Electric Lawn Care Service',
    description: 'Learn about EcoLawns Denver - serving Denver with 100% battery-powered electric lawn care equipment.',
    url: 'https://ecolawnsdenver.com/about',
    siteName: 'EcoLawns Denver',
    images: [
      {
        url: 'https://ecolawnsdenver.com/images/hero.jpg',
        width: 2000,
        height: 1200,
        alt: 'EcoLawns Denver lawn care service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About EcoLawns Denver | Local Electric Lawn Care',
    description: 'Learn about EcoLawns Denver - serving Denver with 100% battery-powered electric equipment.',
    images: ['https://ecolawnsdenver.com/images/hero.jpg'],
  },
  alternates: {
    canonical: 'https://ecolawnsdenver.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

