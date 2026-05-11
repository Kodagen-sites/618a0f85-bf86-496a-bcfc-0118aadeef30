# Ridge — Estates That Matter

A cinematic real-estate landing page. **Archetype A** (Deep Cinematic Dolly) — each scroll is a beat of a house tour. **Style S2** (Dark Monolithic) — charcoal, ivory, antique gold.

## Generation fingerprint
- Industry: Luxury real estate
- Archetype: A · Deep Cinematic Dolly
- Style: S2 · Dark Monolithic (luxury real estate variant)
- Voice family: V1 Heritage Understated
- Header variant: `split-edges`
- Footer variant: FT2 (asymmetric editorial)
- Card variant: CV4 Liquid Glass (over property imagery)
- Hero overlay: HO3 bottom-anchored (subject in upper-two-thirds, beat copy in lower frame)
- Narrative shape: building-tour (Approach → Threshold → Great Room → Terrace → Resolution)

## Stack
- Next.js 16 App Router
- React 19 + Tailwind 3
- GSAP ScrollTrigger (scroll-scrubbed canvas)
- Framer Motion (section reveals)
- Gemini APIs (Nano Banana keyframes + Veo 3.1 Lite video)

## Asset pipeline (already run)

```bash
npm install
npm run gen:images   # 6 scene keyframes + 6 property images
npm run gen:videos   # 3 Veo clips, image-to-video w/ lastFrame continuity
npm run gen:stitch   # ffmpeg concat → raw/final.mp4
npm run gen:frames   # ffmpeg extract → public/frames/frame-NNNN.jpg + content/frames-manifest.json
```

## Dev
```bash
npm run dev   # http://localhost:3000
```

## Build
```bash
rm -rf .next && npm run build && npm run build
```

## Structure

- `app/page.tsx` — homepage; mounts `CinematicHero` then five static sections
- `app/layout.tsx` — root layout, fonts, Header, Footer
- `components/ScrollCanvas.tsx` — pinned scroll-scrubbed frame renderer
- `components/CinematicHero.tsx` — Archetype A homepage with 5 overlay beats
- `components/sections/TourBeats.tsx` — five-up reference grid below the hero
- `components/sections/PortfolioGrid.tsx` — six properties for viewing
- `components/sections/Practice.tsx` — three services + stats strip
- `components/sections/ContactCta.tsx` — private viewing form
- `content/site-config.ts` — every word + brand value lives here
- `content/frames-manifest.json` — frame count + path written by `gen:frames`
- `prompts/scene-N/{start,end,motion}.txt` — saved Nano Banana + Veo prompts
- `prompts/section-*.txt` — property image prompts
