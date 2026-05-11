"use client";

/**
 * ARCHETYPE A — Deep Cinematic Dolly (real estate variant).
 *
 * The video itself IS the house tour. Five overlay beats sit on top of
 * the scroll-scrubbed frame sequence, each timed to a moment of the tour:
 *
 *   beat 1 — Approach    (0-12%)   driveway → entrance
 *   beat 2 — Threshold   (15-28%)  foyer
 *   beat 3 — Great Room  (35-52%)  marble + chandelier + glass wall
 *   beat 4 — Terrace     (58-75%)  infinity pool + dusk
 *   beat 5 — Resolution  (82-100%) wide establishing shot of the estate
 */

import { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { range, block } from "@/lib/progress";
import ScrollCanvas from "@/components/ScrollCanvas";
import framesManifest from "@/content/frames-manifest.json";

const SNAP_POINTS = [0, 0.12, 0.32, 0.52, 0.72, 0.92, 1.0];

export default function CinematicHero() {
  const [progress, setProgress] = useState(0);

  // Beat 1 — Hero (Approach)
  const hero = progress < 0.06 ? 1 : 1 - range(progress, 0.06, 0.12);

  // Beat 2 — Threshold
  const beat2 = block(progress, 0.16, 0.30, 0.05);

  // Beat 3 — Great Room
  const beat3 = block(progress, 0.36, 0.52, 0.05);

  // Beat 4 — Terrace
  const beat4 = block(progress, 0.58, 0.74, 0.05);

  // Beat 5 — Resolution (manifesto + CTA, sticks to the end)
  const beat5 = range(progress, 0.82, 0.92);

  // Scroll hint fades out after the first beat
  const scrollHint = 1 - range(progress, 0.02, 0.08);

  // Progress bar across the entire hero
  const railPct = Math.round(progress * 100);

  const tour = siteConfig.tourBeats;

  return (
    <>
      <ScrollCanvas
        frameCount={framesManifest.frameCount || siteConfig.scrollHero.frameCount}
        scrollDistance={siteConfig.scrollHero.scrollDistance}
        snapPoints={SNAP_POINTS}
        onProgress={setProgress}
      >
        {/* Top-edge thin progress rail */}
        <div className="absolute top-0 left-0 right-0 h-px bg-ink/10 z-30">
          <div
            className="h-full bg-primary/90"
            style={{ width: `${railPct}%`, transition: "width 80ms linear" }}
          />
        </div>

        {/* ── Beat 1 — Hero / Approach ── */}
        <div
          className="absolute inset-x-0 bottom-0 px-6 md:px-12 pb-24 md:pb-28"
          style={{
            opacity: hero,
            transform: `translateY(${(1 - hero) * 24}px)`,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.5em] text-primary/85 mb-6">
              {siteConfig.hero.eyebrow}
            </div>

            <h1 className="font-display font-light text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight max-w-5xl">
              {siteConfig.hero.h1.map((line, i) => (
                <span
                  key={i}
                  className={`inline ${
                    line.accent ? "italic text-primary" : "text-ink"
                  }`}
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-xl font-body text-base md:text-lg text-ink/75 leading-relaxed">
              {siteConfig.hero.subhead}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 pointer-events-auto">
              <a
                href={siteConfig.hero.primaryCta.href}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-bg font-mono text-[10.5px] uppercase tracking-[0.32em] hover:brightness-110 transition-all"
              >
                {siteConfig.hero.primaryCta.label}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href={siteConfig.hero.secondaryCta.href}
                className="inline-flex items-center gap-3 px-8 py-4 border border-ink/30 text-ink font-mono text-[10.5px] uppercase tracking-[0.32em] hover:border-primary hover:text-primary transition-colors"
              >
                {siteConfig.hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        {/* ── Beat 2 — Threshold ── (text on the left) */}
        <BeatPanel
          opacity={beat2}
          anchor="left-bottom"
          beat={tour[1]}
        />

        {/* ── Beat 3 — Great Room ── (text on the right) */}
        <BeatPanel
          opacity={beat3}
          anchor="right-bottom"
          beat={tour[2]}
        />

        {/* ── Beat 4 — Terrace ── (text on the left) */}
        <BeatPanel
          opacity={beat4}
          anchor="left-bottom"
          beat={tour[3]}
        />

        {/* ── Beat 5 — Resolution / Manifesto + closing CTA ── */}
        <div
          className="absolute inset-0 z-20 flex items-end justify-center px-6 pb-28 md:pb-32"
          style={{
            opacity: beat5,
            pointerEvents: beat5 > 0.4 ? "auto" : "none",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,5,5,0) 30%, rgba(5,5,5,0.55) 75%, rgba(5,5,5,0.85) 100%)",
            }}
          />
          <div className="relative max-w-3xl text-center">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.5em] text-primary/85 mb-6">
              {tour[4].label} · A House, Seen Whole
            </div>
            <h2 className="font-display font-light italic text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              {siteConfig.manifesto}
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-bg font-mono text-[10.5px] uppercase tracking-[0.32em] hover:brightness-110 transition-all"
              >
                See the portfolio
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-ink/30 text-ink font-mono text-[10.5px] uppercase tracking-[0.32em] hover:border-primary hover:text-primary transition-colors"
              >
                Speak privately
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-6 font-mono text-[9px] tracking-[0.5em] text-ink/50 uppercase"
          style={{ opacity: scrollHint }}
        >
          Begin Tour ↓
        </div>

        {/* Section indicator on the right edge */}
        <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 items-center">
          {tour.map((b, i) => {
            const reached = progress >= [0.0, 0.16, 0.36, 0.58, 0.82][i] - 0.02;
            return (
              <div key={b.step} className="flex items-center gap-3">
                <span
                  className={`font-mono text-[9px] tracking-[0.4em] uppercase ${
                    reached ? "text-primary" : "text-ink/30"
                  }`}
                >
                  {String(b.step).padStart(2, "0")}
                </span>
                <span
                  className={`h-px transition-all duration-500 ${
                    reached ? "w-8 bg-primary" : "w-4 bg-ink/30"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </ScrollCanvas>
    </>
  );
}

function BeatPanel({
  opacity,
  anchor,
  beat,
}: {
  opacity: number;
  anchor: "left-bottom" | "right-bottom";
  beat: { step: number; label: string; title: string; body: string };
}) {
  const isLeft = anchor === "left-bottom";
  return (
    <div
      className={`absolute z-20 px-6 md:px-12 pb-24 md:pb-28 max-w-xl ${
        isLeft
          ? "left-0 md:left-12 bottom-0 text-left"
          : "right-0 md:right-12 bottom-0 text-right md:ml-auto"
      }`}
      style={{
        opacity,
        transform: `translateY(${(1 - opacity) * 18}px)`,
        pointerEvents: opacity > 0.5 ? "auto" : "none",
      }}
    >
      <div
        className="p-7 md:p-9 backdrop-blur-2xl border"
        style={{
          background: "rgba(5,5,5,0.62)",
          borderColor: "var(--hairline)",
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.65)",
        }}
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-primary/85 mb-3">
          Beat {String(beat.step).padStart(2, "0")} · {beat.label}
        </div>
        <h3 className="font-display italic text-2xl md:text-4xl text-ink leading-[1.1] tracking-tight mb-4">
          {beat.title}
        </h3>
        <p className="font-body text-sm md:text-base text-ink/75 leading-relaxed">
          {beat.body}
        </p>
      </div>
    </div>
  );
}
