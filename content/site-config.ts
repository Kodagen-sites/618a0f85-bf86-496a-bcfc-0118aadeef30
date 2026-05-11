/**
 * Single source of truth for Ridge.
 * Refined under V1 Heritage Understated voice, S2 Dark Monolithic visuals,
 * Archetype A (Deep Cinematic Dolly) for the hero, real estate landing page.
 */

export type Property = {
  slug: string;
  name: string;
  location: string;
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  highlights: string[];
  image: string;
  status: "Available" | "Reserved" | "Sold";
};

export const siteConfig = {
  brand: {
    name: "Ridge",
    wordmark: "RIDGE",
    tagline: "Estates that matter.",
    description:
      "A small, exacting portfolio of architecturally significant homes — shown the way they deserve to be shown.",
    email: "hello@ridge.estate",
    phone: "+1 (415) 555-0142",
    location: "San Francisco · Aspen · Lake Como",
  },

  hero: {
    eyebrow: "Private Portfolio · 2026",
    h1: [
      { text: "A house ", accent: false },
      { text: "is a quiet ", accent: true },
      { text: "argument.", accent: false },
    ],
    subhead:
      "Eleven estates. Three continents. Each one chosen for the way it holds light, frames a view, and asks something of the people who live there.",
    primaryCta: { label: "View the portfolio", href: "#portfolio" },
    secondaryCta: { label: "Request a private viewing", href: "#contact" },
  },

  // Five "house tour" beats — surfaced over the dolly hero
  tourBeats: [
    { step: 1, label: "Approach", title: "Arrival is the first room.",        body: "A driveway should slow you down. Cypresses, gravel, the soft fall of dusk. By the time the door opens, you've already begun to live there." },
    { step: 2, label: "Threshold", title: "What a foyer is for.",              body: "Marble. A staircase that floats. The held breath of a place that has been quietly waiting. The threshold is where the day ends and the house begins." },
    { step: 3, label: "Great Room", title: "Light is the only honest material.", body: "Eighteen feet of glass, a floor that catches every lamp, a chandelier that exists to be reflected. A great room is not a size. It is a temperament." },
    { step: 4, label: "Terrace", title: "The horizon writes the brief.",       body: "Infinity pool, travertine, the slow gold of evening. The line where water meets sky is, in the end, the only feature that cannot be retrofitted." },
    { step: 5, label: "Resolution", title: "A house, seen whole.",             body: "From the right distance, every estate finally tells you what it is. Quiet, deliberate, resolved. This is the moment we work toward — and the one we measure by." },
  ],

  // Six properties for viewing
  properties: [
    {
      slug: "the-cypress-house",
      name: "The Cypress House",
      location: "Sonoma, California",
      priceLabel: "$18.4M",
      bedrooms: 5,
      bathrooms: 6,
      squareMeters: 780,
      highlights: ["Infinity-edge pool", "Twelve acres", "Olive grove", "Architect: Studio Marrone"],
      image: "/section-cypress.jpg",
      status: "Available",
    },
    {
      slug: "villa-prima",
      name: "Villa Prima",
      location: "Lake Como, Italy",
      priceLabel: "€24.0M",
      bedrooms: 7,
      bathrooms: 8,
      squareMeters: 1180,
      highlights: ["Private dock", "Restored 1812 facade", "Frescoed ballroom", "Boathouse with 1962 Riva"],
      image: "/section-prima.jpg",
      status: "Available",
    },
    {
      slug: "the-aspen-ledge",
      name: "The Aspen Ledge",
      location: "Aspen, Colorado",
      priceLabel: "$32.0M",
      bedrooms: 6,
      bathrooms: 7,
      squareMeters: 910,
      highlights: ["Ski-in / ski-out", "Floor-to-ceiling triple glazing", "Private gondola", "Studio Marrone interiors"],
      image: "/section-ledge.jpg",
      status: "Reserved",
    },
    {
      slug: "casa-azul",
      name: "Casa Azul",
      location: "Careyes, Mexico",
      priceLabel: "$11.8M",
      bedrooms: 4,
      bathrooms: 5,
      squareMeters: 620,
      highlights: ["Cliffside infinity pool", "Open-air master suite", "Private cove", "Hand-troweled limestone walls"],
      image: "/section-azul.jpg",
      status: "Available",
    },
    {
      slug: "edgewater-pavilion",
      name: "Edgewater Pavilion",
      location: "Tiburon, California",
      priceLabel: "$14.6M",
      bedrooms: 4,
      bathrooms: 5,
      squareMeters: 540,
      highlights: ["Deep-water dock", "City-line view to SF", "Single-storey", "Steel and walnut throughout"],
      image: "/section-edgewater.jpg",
      status: "Available",
    },
    {
      slug: "the-quiet-house",
      name: "The Quiet House",
      location: "Hudson Valley, New York",
      priceLabel: "$9.2M",
      bedrooms: 5,
      bathrooms: 5,
      squareMeters: 690,
      highlights: ["170-year barn restoration", "Geothermal", "Library wing", "Eighty acres of meadow"],
      image: "/section-quiet.jpg",
      status: "Sold",
    },
  ] as Property[],

  // What we do — three quietly stated services
  services: [
    {
      name: "Private Acquisition",
      description:
        "We help a small number of clients each year buy the right house. Quiet, off-market, and slow when slow is the right pace.",
    },
    {
      name: "Curated Sales",
      description:
        "When you list with us, we do not make a noise. We make a film. And we show it only to the eleven or twelve people who should see it.",
    },
    {
      name: "Architectural Counsel",
      description:
        "Before the architects, before the contractor, before the offer — a sober conversation about what the house is, and what it isn't.",
    },
  ],

  // Stats — only meaningful, not fabricated marketing claims
  stats: [
    { value: "11", label: "Estates currently represented" },
    { value: "$284M", label: "Volume placed, 2025" },
    { value: "3", label: "Continents" },
    { value: "18yr", label: "Average broker tenure" },
  ],

  // Voice — one quiet manifesto line for the resolution moment
  manifesto:
    "We work slowly. We work with very few people. And we do not show a house to anyone who is not the right buyer for it.",

  scrollHero: {
    archetype: "A" as const,
    styleId: "S2",
    // Will be overwritten by content/frames-manifest.json at build/runtime;
    // we keep a conservative fallback so the page renders even before frames exist.
    frameCount: 576,
    scrollDistance: 6,
  },

  headerVariant: "split-edges",
};

export type SiteConfig = typeof siteConfig;
