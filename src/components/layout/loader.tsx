"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants/site";

const MIN_VISIBLE_MS = 1400;
const FADE_MS = 500;
const SESSION_KEY = "villa-loader-shown";

export function Loader() {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");

    const showTimer = setTimeout(() => setVisible(true), 0);
    const fadeTimer = setTimeout(() => setFadingOut(true), MIN_VISIBLE_MS);
    const hideTimer = setTimeout(() => setVisible(false), MIN_VISIBLE_MS + FADE_MS);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`bg-villa-bg fixed inset-0 z-100 flex items-center justify-center overflow-hidden font-sans transition-opacity duration-500 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-20 opacity-50 [animation:ldr-wave_3s_linear_infinite]"
        style={{
          background:
            "radial-gradient(circle at 28px 54px, transparent 22px, rgba(125,180,230,.18) 23px, transparent 24px)",
          backgroundSize: "56px 80px",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20 -scale-y-100 opacity-40 [animation:ldr-wave_4s_linear_infinite]"
        style={{
          background:
            "radial-gradient(circle at 28px 54px, transparent 22px, rgba(191,154,90,.16) 23px, transparent 24px)",
          backgroundSize: "56px 80px",
        }}
      />

      <div className="text-center [animation:ldr-breathe_3.2s_ease-in-out_infinite]">
        <div
          className="font-heading text-villa-primary pl-3 text-[44px] font-semibold tracking-[12px] [animation:ldr-in_.8s_ease_both]"
        >
          {SITE.logoPrimary}
        </div>
        <div
          className="font-script mt-1 text-[68px] leading-[0.8] text-[#2f6fb0] [animation:ldr-in_.8s_ease_.12s_both]"
        >
          {SITE.logoScript}
        </div>
        <div className="text-villa-accent mt-[18px] pl-1.5 text-[13px] tracking-[6px] uppercase [animation:ldr-in_.8s_ease_.24s_both]">
          {SITE.tagline}
        </div>
        <div className="mt-[34px] flex justify-center gap-[11px] [animation:ldr-in_.8s_ease_.36s_both]">
          <span className="bg-villa-accent size-[9px] rounded-full [animation:ldr-dot_1.4s_ease-in-out_infinite]" />
          <span className="bg-villa-accent size-[9px] rounded-full [animation:ldr-dot_1.4s_ease-in-out_.18s_infinite]" />
          <span className="bg-villa-accent size-[9px] rounded-full [animation:ldr-dot_1.4s_ease-in-out_.36s_infinite]" />
        </div>
      </div>
    </div>
  );
}
