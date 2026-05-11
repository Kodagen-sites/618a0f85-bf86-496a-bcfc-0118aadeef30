"use client";

/**
 * HeaderSplitEdges — variant id: `split-edges`.
 * Wordmark left-edge, mono nav center, CTA right-edge. Hairline divider on scroll.
 * Picked for luxury real estate under V1 Heritage voice.
 */

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site-config";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tour", href: "#tour" },
  { label: "Practice", href: "#practice" },
  { label: "Engagements", href: "#engagements" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-md" : "py-5"
      }`}
      style={{
        background: scrolled ? "rgba(5,5,5,0.78)" : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--hairline)"
          : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-[19px] md:text-[22px] tracking-[0.32em] text-ink"
        >
          {siteConfig.brand.wordmark}
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[10.5px] uppercase tracking-[0.32em] text-ink/65">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-primary/50 text-primary font-mono text-[10.5px] uppercase tracking-[0.32em] hover:bg-primary hover:text-bg transition-colors"
        >
          Private Viewing
          <span aria-hidden="true">→</span>
        </a>

        {/* mobile CTA */}
        <a
          href="#contact"
          className="md:hidden font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
        >
          Viewing →
        </a>
      </div>
    </header>
  );
}
