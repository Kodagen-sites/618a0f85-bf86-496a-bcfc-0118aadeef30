/**
 * Header — variant id: `pill-floating`.
 * Glassy rounded pill centered at top.
 * Wordmark left, nav center (desktop) / hamburger (mobile), CTA right — all inside one pill.
 *
 * Glass intensifies on scroll via the `header-pill` CSS rules in
 * app/globals.css (driven by an intersection sentinel — see app/layout.tsx).
 */

"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tour", href: "#tour" },
  { label: "Practice", href: "#practice" },
  { label: "Engagements", href: "#engagements" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-pill-wrap fixed top-4 md:top-5 inset-x-4 md:inset-x-0 z-40 flex flex-col items-center pointer-events-none">
      <div
        className="header-pill pointer-events-auto flex items-center gap-1 md:gap-2 rounded-full border backdrop-blur-2xl transition-all duration-500"
        style={{ padding: "6px 8px" }}
      >
        <a
          href="/"
          className="px-3 md:px-4 py-2 font-display tracking-[0.28em] uppercase text-[11px] md:text-[12px] text-ink"
        >
          {siteConfig.brand.wordmark}
        </a>

        <nav className="hidden md:flex items-center gap-1 mx-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-1.5 rounded-full font-mono uppercase tracking-[0.22em] text-[10px] text-ink/65 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink/80 hover:text-ink transition-colors"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-4 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-px w-4 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <a
          href="/contact"
          className="px-3 md:px-4 py-2 rounded-full bg-primary text-bg font-mono uppercase tracking-[0.22em] text-[10px] hover:brightness-110 transition-all"
        >
          <span className="hidden md:inline">Private Viewing</span>
          <span className="md:hidden">Viewing</span>
        </a>
      </div>

      <div
        className={`md:hidden pointer-events-auto mt-2 w-[min(92vw,360px)] overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(10,10,10,0.55)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <nav className="flex flex-col p-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl font-mono uppercase tracking-[0.22em] text-[11px] text-ink/75 hover:text-ink hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
