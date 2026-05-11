/**
 * Footer — FT2 Asymmetric Editorial.
 * Brand statement + offices + hairline contact strip.
 */

import { siteConfig } from "@/content/site-config";

type SocialIconName = "instagram" | "linkedin" | "pinterest" | "twitter" | "facebook";

function SocialIcon({ name }: { name: SocialIconName }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 10v7M8 7.5v.01" />
          <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v7" />
        </svg>
      );
    case "pinterest":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M11 8c2.5 0 4 1.6 4 3.6 0 2.3-1.5 4-3.4 4-1 0-1.7-.5-1.5-1.4l.5-2M11 8c-1.6 0-3 1-3 3 0 .8.3 1.3.7 1.7M9.5 21l1.6-7" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}>
          <path d="M4 4l7.5 10L4.5 20h2L12 15l4 5h4l-7.7-10.3L19.5 4h-2L12 9 8 4z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v7h3v-7h2.2l.3-3H14V8.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className="bg-bg pt-24 pb-10 border-t border-[color:var(--hairline)]">
      <div className="px-6 md:px-10 grid grid-cols-12 gap-y-12 gap-x-6">
        {/* Brand statement — spans 7 cols */}
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.4em] text-primary/80 mb-6">
            {siteConfig.brand.wordmark} · A PRIVATE BROKERAGE
          </div>
          <p className="font-display font-light text-3xl md:text-5xl text-ink leading-[1.1] tracking-tight max-w-2xl">
            We show very few houses to very few people, and we believe that is
            the only way a place like this should be sold.
          </p>
        </div>

        {/* Offices — spans 5 cols */}
        <div className="col-span-6 md:col-span-3 md:col-start-9">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/50 mb-4">
            Offices
          </div>
          <ul className="font-body text-sm text-ink/80 space-y-2">
            <li>San Francisco</li>
            <li>Aspen</li>
            <li>Lake Como</li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2 md:col-start-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/50 mb-4">
            Practice
          </div>
          <ul className="font-body text-sm text-ink/80 space-y-2">
            <li>Acquisition</li>
            <li>Curated Sale</li>
            <li>Counsel</li>
          </ul>
        </div>

        {/* Contact strip — full width */}
        <div className="col-span-12 mt-12 pt-8 border-t border-[color:var(--hairline)] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-display text-[32px] tracking-[0.32em] text-ink mb-2">
              {siteConfig.brand.wordmark}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
              Estates that matter · since 2007
            </p>
            {siteConfig.brand.socials?.length ? (
              <div className="mt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/50 mb-3">
                  Follow
                </div>
                <ul className="flex items-center gap-3">
                  {siteConfig.brand.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--hairline)] text-ink/70 transition-colors hover:text-primary hover:border-primary/60"
                      >
                        <SocialIcon name={s.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-1 font-body text-sm text-ink/70 md:text-right">
            <a
              href={`mailto:${siteConfig.brand.email}`}
              className="hover:text-primary transition-colors"
            >
              {siteConfig.brand.email}
            </a>
            <a
              href={`tel:${siteConfig.brand.phone.replace(/[^\d+]/g, "")}`}
              className="hover:text-primary transition-colors"
            >
              {siteConfig.brand.phone}
            </a>
            <p className="text-ink/45 text-[12px]">
              © {new Date().getFullYear()} Ridge Holdings, LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
