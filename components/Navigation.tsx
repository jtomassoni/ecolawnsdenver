'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const goToQuoteForm = () => {
    if (pathname === '/') {
      window.dispatchEvent(new Event('emphasize-quote-form'));
    } else {
      router.push('/');
      setTimeout(() => {
        window.dispatchEvent(new Event('emphasize-quote-form'));
      }, 350);
    }
    closeMobileMenu();
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.nav-content')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white shadow-md py-3 sticky top-0 z-50 flex-shrink-0" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative nav-content">
        <Link href="/" className="text-primary font-bold text-2xl z-[51]" aria-label="EcoLawns Denver Home" onClick={closeMobileMenu}>
          EcoLawns Denver
        </Link>
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 z-[51] min-w-[44px] min-h-[44px] justify-center items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-primary rounded transition-all ${mobileMenuOpen ? 'rotate-45 translate-x-1.5 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-primary rounded transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-primary rounded transition-all ${mobileMenuOpen ? '-rotate-45 translate-x-1.5 -translate-y-1.5' : ''}`}></span>
        </button>
        <div className={`md:flex gap-4 items-center ${mobileMenuOpen ? 'fixed top-[60px] left-0 right-0 bg-white flex-col items-stretch p-4 shadow-lg translate-y-0 opacity-100 visible z-[49] max-h-[calc(100vh-60px)] overflow-y-auto transition-all duration-300' : 'max-md:fixed max-md:top-[60px] max-md:left-0 max-md:right-0 max-md:bg-white max-md:flex-col max-md:items-stretch max-md:p-4 max-md:shadow-lg max-md:-translate-y-full max-md:opacity-0 max-md:invisible max-md:transition-all max-md:duration-300 max-md:z-[49] max-md:max-h-[calc(100vh-60px)] max-md:overflow-y-auto'}`}>
          <Link
            href="/"
            className={`text-primary no-underline px-4 py-2 rounded transition-all min-h-[44px] flex items-center ${pathname === '/' ? 'text-primary-dark font-bold bg-primary-light/10' : 'hover:bg-primary-light/10'}`}
            aria-label="Home page"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-primary no-underline px-4 py-2 rounded transition-all min-h-[44px] flex items-center ${pathname === '/services' ? 'text-primary-dark font-bold bg-primary-light/10' : 'hover:bg-primary-light/10'}`}
            aria-label="Services page"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`text-primary no-underline px-4 py-2 rounded transition-all min-h-[44px] flex items-center ${pathname === '/about' ? 'text-primary-dark font-bold bg-primary-light/10' : 'hover:bg-primary-light/10'}`}
            aria-label="About page"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <button
            onClick={goToQuoteForm}
            aria-label="Get a free quote for lawn care services"
            className="bg-primary text-white border-none px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all min-h-[44px] hover:bg-primary-dark"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

