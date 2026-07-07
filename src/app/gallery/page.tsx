import type { Metadata } from "next";
import { SplitHero } from "@/components/sections/split-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { GalleryGrid } from "@/features/gallery/components/gallery-grid";
import { HERO_IMAGE } from "@/features/gallery/data/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the beauty and comfort of Paradisiac Beach Club through our photo gallery — stylish interiors, stunning outdoor spaces, and unforgettable island memories.",
};

export default function GalleryPage() {
  return (
    <>
      <SplitHero
        title="GALLERY"
        titleMaxRem={3.9}
        subtitleScript="Take a Look Inside"
        description="Explore the beauty and comfort of Paradisiac Beach Club through our photo gallery. From stylish interiors to stunning outdoor spaces, every detail is designed for relaxation and unforgettable island memories."
        image={HERO_IMAGE}
        imageAlt="Paradisiac Beach Club"
      />
      <GalleryGrid />
      <CtaBand
        variant="light"
        lightBgClass="bg-[#f2ede4]"
        heading="Memories Made Here"
        copy="Every corner of Paradisiac Beach Club is designed for your comfort, enjoyment and unforgettable island moments."
      />
    </>
  );
}
