export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 header-logo">
          <img src="/pulse-logo.png" alt="Pulse" className="h-16 w-16" />
          <span>Pulse</span>
        </a>
        <nav className="flex items-center gap-6 header-nav">
          <a href="#screens" className="hover:opacity-80">Screens</a>
          <a href="/support" className="hover:opacity-80">Support</a>
          <a href="/privacy" className="hover:opacity-80">Privacy</a>
        </nav>
      </div>
    </header>
  );
}
