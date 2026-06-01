export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MovieApp. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="/" className="hover:text-slate-900">
            Home
          </a>
          <a href="/movie" className="hover:text-slate-900">
            Movies
          </a>
          <a href="/tv" className="hover:text-slate-900">
            TV
          </a>
        </div>
      </div>
    </footer>
  );
}
