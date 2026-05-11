/**
 * Footer — FT2 Asymmetric Editorial.
 * Brand statement + offices + hairline contact strip.
 */

import { siteConfig } from "@/content/site-config";

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
