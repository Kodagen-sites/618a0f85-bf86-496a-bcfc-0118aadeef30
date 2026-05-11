"use client";

/**
 * Portfolio — properties for viewing.
 * Six estates, three statuses, CV4-inspired liquid-glass card with hover lift.
 */

import Image from "next/image";
import { siteConfig, type Property } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

const statusStyles: Record<Property["status"], string> = {
  Available: "text-primary border-primary/50",
  Reserved: "text-accent/80 border-accent/40",
  Sold: "text-ink/40 border-ink/20",
};

export default function PortfolioGrid() {
  return (
    <section
      id="portfolio"
      className="relative py-28 md:py-40 px-6 md:px-10"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.5em] text-primary/80 mb-5">
              The Portfolio · Eleven Estates
            </div>
            <TextReveal>
              <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
                Houses we are <span className="italic text-primary">currently showing</span>.
              </h2>
            </TextReveal>
          </div>
          <FadeUp delay={0.15}>
            <p className="font-body text-base text-ink/65 max-w-md leading-relaxed">
              Private viewings are by appointment only. We will fly to wherever
              you happen to be, and we will not show the house until we have
              spoken with you first.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {siteConfig.properties.map((p, i) => (
            <FadeUp key={p.slug} delay={i * 0.08}>
              <article
                className="group relative overflow-hidden border border-[color:var(--hairline)] backdrop-blur-sm hover:border-primary/40 transition-colors duration-500"
                style={{ background: "rgba(20,17,13,0.55)" }}
              >
                {/* Image — falls back gracefully to gradient if not yet generated */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--bg-tertiary)]">
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(5,5,5,0) 40%, rgba(5,5,5,0.78) 100%)",
                    }}
                  />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1.5 border ${statusStyles[p.status]} font-mono text-[9px] uppercase tracking-[0.32em]`}
                    style={{ background: "rgba(5,5,5,0.6)" }}
                  >
                    {p.status}
                  </div>
                  {/* Caption over image */}
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink/65 mb-2">
                      {p.location}
                    </div>
                    <h3 className="font-display font-light text-2xl md:text-3xl text-ink leading-tight">
                      {p.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-baseline justify-between border-b border-[color:var(--hairline)] pb-4 mb-4">
                    <span className="font-display text-[26px] md:text-3xl text-primary tracking-tight">
                      {p.priceLabel}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55">
                      {p.bedrooms} bd · {p.bathrooms} ba · {p.squareMeters}m²
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {p.highlights.slice(0, 3).map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 font-body text-[13px] text-ink/70"
                      >
                        <span className="text-primary mt-1.5 leading-none">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-primary/90 hover:text-primary transition-colors"
                    aria-disabled={p.status === "Sold" ? "true" : "false"}
                  >
                    {p.status === "Sold" ? "Reference only" : "Request viewing"}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
