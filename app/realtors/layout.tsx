import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realtors - Listing-ready lawn care in Denver',
  description:
    'EcoLawns Denver helps realtors and sellers with listing-ready lawn care: priority mowing, edge, and cleanup for homes on the market. Realtor pricing for Denver metro listings.',
  keywords: [
    'realtor lawn care Denver',
    'listing lawn mowing Denver',
    'curb appeal lawn service',
    'real estate lawn maintenance Denver',
    'pre-listing lawn care',
  ],
  openGraph: {
    title: 'Realtors | Listing-ready lawn care | EcoLawns Denver',
    description:
      'Priority lawn care for listed homes in Denver: quiet electric equipment, fast scheduling, realtor pricing.',
    url: 'https://ecolawnsdenver.com/realtors',
    siteName: 'EcoLawns Denver',
    images: [{ url: 'https://ecolawnsdenver.com/images/lawn-being-cut.png', width: 1200, height: 630, alt: 'Listing-ready lawn care in Denver' }],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ecolawnsdenver.com/realtors',
  },
};

export default function RealtorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
