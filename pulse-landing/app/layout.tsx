import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pulse — The Timer That Thinks For You",
  description:
    "Pulse is the first AI-powered timer generator. Create custom timers in seconds for workouts, meetings, studying, cooking, and more.",
  keywords: [
    "timer","ai timer","workout","meeting","study","productivity","focus","countdown","schedule","cooking"
  ],
  openGraph: {
    title: "Pulse — AI-Powered Timers",
    description:
      "Instantly generate timers for anything with AI. Work, study, workouts, cooking — you choose.",
    url: "https://your-vercel-domain.xyz",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Pulse" }]
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
