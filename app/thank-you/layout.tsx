import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - EcoLawns Denver',
  description: 'Thank you for your service request. We\'ll contact you within 24 hours.',
  robots: {
    index: false, // Don't index thank you pages
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
