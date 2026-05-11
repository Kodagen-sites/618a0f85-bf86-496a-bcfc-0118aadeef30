"use client";

/**
 * Standalone tour beats list — sits below the cinematic hero so the
 * five beats remain readable as a static reference index after the
 * scroll-scrubbed experience.
 */

import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";

export default function TourBeats() {
  return (
    <section
      id="tour"
      className="relative py-28 md:py-40 px-6 md:px-10"
      style={{ background: "var(--bg-tertiary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.5em] text-primary/80 mb-5">
            The Five Beats
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-light text-4xl md:text-6xl max-w-4xl leading-[1.05] tracking-tight mb-16 md:mb-24">
            Every house, we believe, has the <span className="italic text-primary">same five</span> moments.
          </h2>
        </FadeUp>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[color:var(--hairline)]">
          {siteConfig.tourBeats.map((b, i) => (
            <FadeUp key={b.step} delay={i * 0.08}>
              <li
                className="relative p-7 md:p-8 h-full"
                style={{ background: "var(--bg-tertiary)" }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-primary mb-6">
                  {String(b.step).padStart(2, "0")}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink/55 mb-3">
                  {b.label}
                </div>
                <h3 className="font-display italic text-xl md:text-2xl text-ink leading-[1.15] tracking-tight mb-4">
                  {b.title}
                </h3>
                <p className="font-body text-[13px] text-ink/65 leading-relaxed">
                  {b.body}
                </p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
