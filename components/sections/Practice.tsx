"use client";

import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

export default function Practice() {
  return (
    <section
      id="practice"
      className="relative py-28 md:py-40 px-6 md:px-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5">
          <FadeUp>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.5em] text-primary/80 mb-5">
              The Practice
            </div>
          </FadeUp>
          <TextReveal>
            <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Three things, <span className="italic text-primary">done seriously</span>.
            </h2>
          </TextReveal>
          <FadeUp delay={0.15}>
            <p className="mt-8 font-body text-base text-ink/65 leading-relaxed max-w-md">
              We are a small brokerage by design. We accept a small number of
              representations each year, and we believe that limitation is what
              lets us do this well.
            </p>
          </FadeUp>
        </div>

        <ul className="md:col-span-7 divide-y divide-[color:var(--hairline)]">
          {siteConfig.services.map((s, i) => (
            <FadeUp key={s.name} delay={i * 0.1}>
              <li className="py-8 first:pt-0 last:pb-0 grid grid-cols-12 gap-6 items-start">
                <span className="col-span-2 md:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.4em] text-primary/85 pt-1">
                  0{i + 1}
                </span>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 tracking-tight">
                    {s.name}
                  </h3>
                  <p className="font-body text-base text-ink/70 leading-relaxed max-w-2xl">
                    {s.description}
                  </p>
                </div>
              </li>
            </FadeUp>
          ))}
        </ul>
      </div>

      {/* Stats strip */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-32 pt-12 md:pt-16 border-t border-[color:var(--hairline)] grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
        {siteConfig.stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08}>
            <div>
              <div className="font-display font-light text-5xl md:text-6xl text-primary leading-none tracking-tight mb-3">
                {s.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55">
                {s.label}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
