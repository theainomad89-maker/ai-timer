import AppStoreButton from "@/components/AppStoreButton";
import PhoneMockup from "@/components/PhoneMockup";
import ScreenshotGrid from "@/components/ScreenshotGrid";

export default function Page() {
  
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-pulse to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          {/* Custom column widths: text 1.15fr, phone 1fr */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] items-center gap-12 lg:gap-16">
            
            {/* LEFT: move text right via left padding, keep a readable max width */}
            <div className="max-w-xl lg:pl-10 xl:pl-16">
              <h1 className="hero-title">
                Generate Timers Instantly with AI
              </h1>
              <p className="mt-6 hero-subtitle leading-relaxed">
                For workouts, cooking, study, or meetings — Pulse creates the perfect timer in seconds.
              </p>
              <div className="mt-8">
                <AppStoreButton href="https://apps.apple.com/app/idXXXXXXXXX" large />
              </div>
            </div>

            {/* RIGHT: phone stays prominent; slight negative margin pulls it inward */}
            <div className="flex justify-center lg:justify-start lg:-mr-6 order-first lg:order-last">
              <PhoneMockup src="/screens/screen-1.png" alt="Pulse app preview" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-graybg -mt-4">
        <div className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-3 gap-8">
          {[
            { title: "Generate with AI", body: "Describe your routine and get a ready-to-run timer instantly." },
            { title: "For Any Task", body: "Work, study, workouts, cooking, meetings — you choose." },
            { title: "Stay on Track", body: "Clean design, haptics, and smart intervals keep you focused." }
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-soft">
                <h3 className="feature-title">{f.title}</h3>
                <p className="text-slate-600 mt-4 body-text leading-relaxed">{f.body}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Screenshots (you'll supply 2 images) */}
      <section id="screens" className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">See Pulse in Action</h2>
          <p className="text-slate-600 mt-4 body-text leading-relaxed">
            Generate timers instantly with AI and run them with a single tap.
          </p>
          <ScreenshotGrid />
          <div className="mt-12 flex justify-center">
            <AppStoreButton href="https://apps.apple.com/app/idXXXXXXXXX" large />
          </div>
        </div>
      </section>

      {/* Privacy anchor for the button */}
      <section id="privacy" className="bg-graybg py-8">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="section-title">Privacy Policy</h2>
          <p className="text-slate-700 mt-6 body-text leading-relaxed">
            Pulse does not collect, use, or share personal data. All timers and data are stored locally on your device.
            We do not use third-party analytics, trackers, or advertising SDKs. If you contact us for support,
            we will only use your email to respond to your request.
          </p>
          <p className="text-slate-700 mt-6 body-text leading-relaxed">
            If our policy changes, we will update this page and the version in the App Store listing.
          </p>
          <p className="text-slate-700 mt-6 body-text leading-relaxed">
            Contact: <a href="mailto:riegeraw@gmail.com" className="text-pulse font-semibold">riegeraw@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
