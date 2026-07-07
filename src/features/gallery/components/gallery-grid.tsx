"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GALLERY_SECTIONS } from "@/features/gallery/data/content";

export function GalleryGrid() {
  const [activeKey, setActiveKey] = useState<string>("all");

  const sections =
    activeKey === "all"
      ? GALLERY_SECTIONS
      : GALLERY_SECTIONS.filter((section) => section.key === activeKey);

  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-12 pb-10 md:px-[30px]">
      <div className="mb-9 flex flex-wrap gap-3">
        <FilterPill
          label="All"
          active={activeKey === "all"}
          onClick={() => setActiveKey("all")}
        />
        {GALLERY_SECTIONS.map((section) => (
          <FilterPill
            key={section.key}
            label={section.label}
            active={activeKey === section.key}
            onClick={() => setActiveKey(section.key)}
          />
        ))}
      </div>

      {sections.map((section) => (
        <div key={section.key} className="mb-10">
          <div className="mb-4 flex items-center gap-4">
            <h3 className="text-villa-primary text-[13px] font-semibold tracking-[2px] uppercase">
              {section.label}
            </h3>
            <span className="bg-villa-accent h-px w-[60px]" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {section.images.map((image, index) => (
              <div
                key={`${section.key}-${index}`}
                className="relative h-[150px] overflow-hidden rounded-[2px] sm:h-[190px]"
              >
                <Image
                  src={image.src}
                  alt={image.caption ?? `${section.label} photo`}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover"
                />
                {image.caption && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,24,44,0.7)] to-transparent to-55%" />
                    <span className="absolute bottom-3.5 left-4 text-[12px] font-semibold tracking-[1.4px] text-white uppercase">
                      {image.caption}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-[3px] px-[22px] py-[11px] text-[11.5px] font-medium tracking-[1.2px] uppercase",
        active
          ? "bg-villa-primary text-white"
          : "border-villa-primary/15 text-villa-primary border bg-white",
      )}
    >
      {label}
    </button>
  );
}
