import type { Metadata } from "next";
import { SplitHero } from "@/components/sections/split-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { IconStrip } from "@/features/amenities/components/icon-strip";
import { ThoughtfulAmenities } from "@/features/amenities/components/thoughtful-amenities";
import { HERO_IMAGE } from "@/features/amenities/data/content";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "At Paradisiac Beach Club, every detail is designed to make your stay comfortable, effortless and unforgettable — modern amenities, thoughtful touches, and spaces created for relaxation.",
};

export default function AmenitiesPage() {
  return (
    <>
      <SplitHero
        title="AMENITIES"
        subtitleScript="Everything You Need"
        description="At Paradisiac Beach Club, every detail is designed to make your stay comfortable, effortless and unforgettable. Enjoy modern amenities, thoughtful touches, and spaces created for relaxation, connection and convenience."
        image={HERO_IMAGE}
        imageAlt="Villa exterior"
      />
      <IconStrip />
      <ThoughtfulAmenities />
      <CtaBand
        heading="Relax. Enjoy. You're Home."
        lightBgClass="bg-[#f2ede4]"
        variant="light"
        copy="From modern comforts to thoughtful touches, Paradisiac Beach Club has everything you need for an unforgettable escape."
      />
    </>
  );
}
