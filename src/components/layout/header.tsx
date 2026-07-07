"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants/site";
import { Logo } from "@/components/layout/logo";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-villa-bg/95 border-villa-primary/10 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-6 py-3 md:px-[30px]">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-[22px]">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-villa-primary text-[11.5px] tracking-[1.3px] uppercase",
                  isActive
                    ? "border-villa-accent border-b-2 pb-[3px] font-semibold"
                    : "font-medium",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-villa-primary lg:hidden"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-villa-primary/10 flex flex-col gap-1 border-t px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-villa-primary py-2 text-[12px] tracking-[1.3px] uppercase",
                  isActive ? "font-semibold" : "font-medium",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
