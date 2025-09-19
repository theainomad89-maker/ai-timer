import PhoneMockup from "./PhoneMockup";

export default function ScreenshotGrid() {
  return (
    <div className="mt-8 grid sm:grid-cols-2 gap-6 sm:gap-8">
      <div className="flex justify-center">
        <PhoneMockup src="/screens/screen-1.png" alt="Pulse screenshot 1" size="md" />
      </div>
      <div className="flex justify-center">
        <PhoneMockup src="/screens/screen-2.png" alt="Pulse screenshot 2" size="md" />
      </div>
    </div>
  );
}
