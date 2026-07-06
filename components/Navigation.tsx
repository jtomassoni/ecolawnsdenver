'use client';

import Link from 'next/link';

export default function Navigation({
  pathnameFromServer: _pathnameFromServer = '',
}: {
  pathnameFromServer?: string;
}) {
  return (
    <nav
      className="bg-white shadow-md py-3 sticky top-0 z-50 flex-shrink-0"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-primary font-bold text-2xl"
          aria-label="EcoLawns Denver Home"
        >
          EcoLawns Denver
        </Link>
      </div>
    </nav>
  );
}
