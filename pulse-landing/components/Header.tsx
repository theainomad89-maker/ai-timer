export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 header-logo">
          <img src="/pulse-logo.png" alt="Pulse" className="h-8 w-8 sm:h-16 sm:w-16" />
          <span className="text-lg sm:text-4xl font-extrabold">Pulse</span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-6 header-nav">
          <a href="#screens" className="hover:opacity-80 text-sm sm:text-3xl">Screens</a>
          <a href="/support" className="hover:opacity-80 text-sm sm:text-3xl">Support</a>
          <a href="/privacy" className="hover:opacity-80 text-sm sm:text-3xl">Privacy</a>
        </nav>
      </div>
    </header>
  );
}
