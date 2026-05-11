"use client";

import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

export default function Engagements() {
  return (
    <section
      id="engagements"
      className="relative py-28 md:py-40 px-6 md:px-10"
      style={{ background: "var(--bg-tertiary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(201,168,90,0.16), transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28">
          <div className="md:col-span-5">
            <FadeUp>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.5em] text-primary/80 mb-5">
                Engagements
              </div>
            </FadeUp>
            <TextReveal>
              <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
                What it <span className="italic text-primary">costs</span>, and what it doesn't.
              </h2>
            </TextReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <FadeUp delay={0.15}>
              <p className="font-body text-base text-ink/65 leading-relaxed max-w-md">
                Our fees are not negotiable, and they are not concealed. Three
                engagements, three prices. Anything outside this is, by design,
                a conversation rather than a quote.
              </p>
            </FadeUp>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[color:var(--hairline)]">
          {siteConfig.engagements.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.12}>
              <article
                className={[
                  "relative py-12 md:py-14 px-0 md:px-10 first:md:pl-0 last:md:pr-0",
                  "border-b md:border-b-0 md:border-r border-[color:var(--hairline)] last:border-b-0 last:md:border-r-0",
                  tier.featured ? "md:bg-[rgba(201,168,90,0.035)]" : "",
                ].join(" ")}
              >
                {tier.featured ? (
                  <span className="absolute top-12 right-0 md:right-10 font-mono text-[9px] uppercase tracking-[0.4em] text-primary">
                    · Most engaged
                  </span>
                ) : null}

                <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/85 mb-6">
                  {tier.eyebrow}
                </div>

                <h3 className="font-display text-3xl md:text-[2.25rem] text-ink tracking-tight leading-tight mb-8">
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-3 mb-7">
                  <span className="font-display font-light text-5xl md:text-6xl text-primary leading-none tracking-tight">
                    {tier.priceLabel}
                  </span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55 -mt-4 mb-8">
                  {tier.priceUnit}
                </div>

                <p className="font-body text-[15px] text-ink/70 leading-relaxed mb-10 max-w-sm">
                  {tier.summary}
                </p>

                <ul className="space-y-0 mb-10 border-t border-[color:var(--hairline)]">
                  {tier.inclusions.map((line) => (
                    <li
                      key={line}
                      className="grid grid-cols-[auto_1fr] gap-4 py-3.5 border-b border-[color:var(--hairline)] last:border-b-0"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] tracking-[0.3em] text-primary/70 pt-1.5"
                      >
                        —
                      </span>
                      <span className="font-body text-[14px] text-ink/72 leading-relaxed">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.4em] text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
                >
                  {tier.ctaLabel}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="mt-20 md:mt-28 font-body text-[13px] text-ink/45 italic leading-relaxed max-w-2xl">
            Engagements above are starting points. Cross-border, multi-property,
            and trust-held estates are scoped privately. We turn down work more
            often than we accept it — and we will say so within a week.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
