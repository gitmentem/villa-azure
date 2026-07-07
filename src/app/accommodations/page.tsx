import type { Metadata } from "next";
import { HeroSection } from "@/features/accommodations/components/hero-section";
import { BedroomsSection } from "@/features/accommodations/components/bedrooms-section";
import { EnsuiteSection } from "@/features/accommodations/components/ensuite-section";
import { CtaBand } from "@/components/sections/cta-band";
import { CTA_IMAGE } from "@/features/accommodations/data/bedrooms";

export const metadata: Metadata = {
  title: "Accommodations",
  description:
    "Paradisiac Beach Club comfortably accommodates up to 6 guests in 3 beautifully appointed bedrooms, each with its own ensuite bathroom, air conditioning, and thoughtful details for a restful stay.",
};

export default function AccommodationsPage() {
  return (
    <>
      <HeroSection />
      <BedroomsSection />
      <EnsuiteSection />
      <CtaBand
        variant="image"
        image={CTA_IMAGE}
        imageAlt="Paradisiac Beach Club pool at dusk"
        heading="Your Perfect Stay Awaits"
        copy="Comfortable spaces, modern amenities, and breathtaking views."
      />
    </>
  );
}
