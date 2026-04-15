export default function Footer() {
  return (
    <footer
      className="flex-shrink-0 border-t border-gray-200 bg-gray-50/90 py-3 px-4"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-xs text-gray-500">
        <p className="m-0" suppressHydrationWarning>
          © {new Date().getFullYear()} EcoLawns Denver
        </p>
      </div>
    </footer>
  );
}
