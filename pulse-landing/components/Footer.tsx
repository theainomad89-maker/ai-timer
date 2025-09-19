export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <p>© 2025 Alex Rieger. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-900">Privacy</a>
            <a href="/support" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
