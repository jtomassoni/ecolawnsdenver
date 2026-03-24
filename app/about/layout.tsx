import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About EcoLawns Denver | Local Electric Lawn Care Service in Denver, CO',
  description: 'Learn about EcoLawns Denver - electric lawn care in Denver with batteries charged in part from home solar and portable power on job sites. Licensed, insured, quiet equipment and fewer neighborhood emissions.',
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
    description: 'Electric lawn care in Denver—battery equipment, with charging supported by solar at home and portable power on site.',
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
    description: 'Electric lawn care in Denver—battery equipment, with charging supported by solar at home and portable power on site.',
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

