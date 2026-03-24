import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="flex-shrink-0 border-t border-gray-200 bg-gray-50/90 py-3 px-4"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-xs text-gray-500">
        <p className="m-0">© {new Date().getFullYear()} EcoLawns Denver</p>
        <Link
          href="/crm/login"
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label="Staff sign in"
        >
          Staff
        </Link>
      </div>
    </footer>
  );
}
