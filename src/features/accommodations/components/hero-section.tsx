import Image from "next/image";
import { BedDouble, Snowflake, Users, Wifi, type LucideIcon } from "lucide-react";
import { HERO_IMAGE, HERO_STATS } from "@/features/accommodations/data/bedrooms";
import { heroImageMaskStyle } from "@/lib/constants/hero-mask";

const STAT_ICONS: Record<string, LucideIcon> = {
  Users,
  BedDouble,
  Snowflake,
  Wifi,
};

export function HeroSection() {
  return (
    <section className="from-villa-wash to-villa-bg relative flex min-h-[560px] items-center overflow-hidden bg-gradient-to-b">
      <div
        className="absolute inset-y-0 right-0 hidden w-[62%] md:block"
        style={heroImageMaskStyle}
      >
        <Image
          src={HERO_IMAGE}
          alt="Master bedroom at Paradisiac Beach Club"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="60vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 md:px-[30px] md:py-[74px]">
        <div className="max-w-[640px]">
          <h1 className="font-heading text-villa-primary text-[clamp(1.65rem,6vw,3.5rem)] leading-none font-semibold">
            ACCOMMODATIONS
          </h1>
          <p className="font-script text-villa-accent my-2 text-[28px] md:my-[6px] md:text-[34px]">
            Rest. Relax. Recharge.
          </p>
          <span className="bg-villa-accent mb-6 block h-0.5 w-[60px]" />
          <p className="mb-9 max-w-[430px] text-[15px] leading-[2] font-light text-[#4a5763]">
            Paradisiac Beach Club comfortably accommodates up to 6 guests in 3
            beautifully appointed bedrooms, each with its own ensuite
            bathroom, air conditioning, and thoughtful details for a restful
            stay.
          </p>

          <div className="flex flex-wrap gap-6 md:gap-[30px]">
            {HERO_STATS.map((stat) => {
              const Icon = STAT_ICONS[stat.icon];
              return (
                <div key={stat.title} className="flex items-center gap-3">
                  <Icon
                    className="text-villa-primary size-8 shrink-0"
                    strokeWidth={1.4}
                  />
                  <div>
                    <div className="text-villa-primary text-[11.5px] font-semibold tracking-[0.8px] uppercase">
                      {stat.title}
                    </div>
                    <div className="text-[11px] font-light text-[#6a7784]">
                      {stat.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
