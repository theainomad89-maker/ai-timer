export default function SupportPage() {
  return (
    <div className="bg-graybg">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="hero-title">Support</h1>
        <p className="mt-6 text-slate-700 body-text leading-relaxed">
          Need help? Email us at{" "}
          <a className="text-pulse font-semibold" href="mailto:riegeraw@gmail.com">riegeraw@gmail.com</a>
        </p>
        <h2 className="mt-10 section-title">FAQ</h2>
        <ul className="list-disc pl-6 mt-6 space-y-4 text-slate-700 body-text leading-relaxed">
          <li><strong>Does Pulse require an account?</strong> No, it works fully offline.</li>
          <li><strong>What's included in the subscription?</strong> Full access to all features.</li>
          <li><strong>Is my data private?</strong> Yes. All data stays on device.</li>
        </ul>
      </div>
    </div>
  );
}
