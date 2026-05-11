/**
 * Header — variant id: `pill-floating`.
 * Glassy rounded pill centered at top.
 * Wordmark left, nav center (desktop), CTA right — all inside one pill.
 *
 * Pure server component. Glass intensifies on scroll via the
 * `header-pill` CSS rules in app/globals.css (driven by an
 * intersection sentinel — see app/layout.tsx).
 */

import Link from "next/link";
import { siteConfig } from "@/content/site-config";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tour", href: "#tour" },
  { label: "Practice", href: "#practice" },
  { label: "Engagements", href: "#engagements" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="header-pill-wrap fixed top-4 md:top-5 inset-x-4 md:inset-x-0 z-40 flex justify-center pointer-events-none">
      <div
        className="header-pill pointer-events-auto flex items-center gap-1 md:gap-2 rounded-full border backdrop-blur-2xl transition-all duration-500"
        style={{ padding: "6px 8px" }}
      >
        <Link
          href="/"
          className="px-3 md:px-4 py-2 font-display tracking-[0.28em] uppercase text-[11px] md:text-[12px] text-ink"
        >
          {siteConfig.brand.wordmark}
        </Link>

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

        <a
          href="#contact"
          className="px-3 md:px-4 py-2 rounded-full bg-primary text-bg font-mono uppercase tracking-[0.22em] text-[10px] hover:brightness-110 transition-all"
        >
          <span className="hidden md:inline">Private Viewing</span>
          <span className="md:hidden">Viewing</span>
        </a>
      </div>
    </header>
  );
}
