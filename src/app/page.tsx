import type { Metadata } from "next";
import { HeroSection } from "@/features/home/components/hero-section";
import { HighlightBar } from "@/features/home/components/highlight-bar";
import { AboutSection } from "@/features/home/components/about-section";
import { GlimpseSection } from "@/features/home/components/glimpse-section";
import { LocalColumns } from "@/features/home/components/local-columns";

export const metadata: Metadata = {
  title: "Paradisiac Beach Club | Luxury Villa by the Sea, St. Ann, Jamaica",
  description:
    "A modern coastal retreat on Jamaica's beautiful North Coast. Relax in style, unwind in your private plunge pool, and enjoy easy access to beaches, dining, and unforgettable experiences.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightBar />
      <AboutSection />
      <GlimpseSection />
      <LocalColumns />
    </>
  );
}
