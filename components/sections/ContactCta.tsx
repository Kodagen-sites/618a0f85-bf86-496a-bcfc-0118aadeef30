"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

export default function ContactCta() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 px-6 md:px-10 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(201,168,90,0.20), transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-14 items-center">
        <div className="md:col-span-7">
          <FadeUp>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.5em] text-primary/80 mb-5">
              A Private Viewing
            </div>
          </FadeUp>
          <TextReveal>
            <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Tell us, in <span className="italic text-primary">one paragraph</span>, what you are looking for.
            </h2>
          </TextReveal>
          <FadeUp delay={0.15}>
            <p className="mt-8 font-body text-base text-ink/65 leading-relaxed max-w-md">
              We will read it carefully, we will respond within two business
              days, and we will not put you on any list.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setOpen(true);
              }}
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-primary text-bg font-mono text-[10.5px] uppercase tracking-[0.4em] hover:brightness-110 transition-all"
            >
              Begin a private inquiry
              <span aria-hidden="true">→</span>
            </button>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mt-12 space-y-3 font-body text-sm text-ink/75">
              <a
                href={`mailto:${siteConfig.brand.email}`}
                className="block hover:text-primary transition-colors"
              >
                {siteConfig.brand.email}
              </a>
              <a
                href={`tel:${siteConfig.brand.phone.replace(/[^\d+]/g, "")}`}
                className="block hover:text-primary transition-colors"
              >
                {siteConfig.brand.phone}
              </a>
              <p className="text-ink/50 text-[12px] font-mono uppercase tracking-[0.3em] pt-2">
                {siteConfig.brand.location}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-drawer-title"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[520px] border-l border-[color:var(--hairline)] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "rgba(16,13,10,0.96)", backdropFilter: "blur(20px)" }}
      >
        <div className="h-full overflow-y-auto px-7 md:px-10 py-10">
          <div className="flex items-start justify-between mb-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-primary/80 mb-3">
                Private Inquiry
              </div>
              <h3
                id="contact-drawer-title"
                className="font-display font-light text-2xl md:text-3xl leading-tight tracking-tight"
              >
                A paragraph is enough.
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-4 -mt-1 text-ink/60 hover:text-primary transition-colors text-2xl leading-none font-light"
            >
              ×
            </button>
          </div>

          <form onSubmit={onSubmit}>
            <div className="space-y-6">
              <Field id="name" label="Name" type="text" required />
              <Field id="email" label="Email" type="email" required />
              <Field id="locale" label="Where are you looking" type="text" placeholder="Aspen, Lake Como, Sonoma…" />
              <Textarea
                id="message"
                label="What you are looking for"
                placeholder="A paragraph is enough."
                rows={6}
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-10 w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-bg font-mono text-[10.5px] uppercase tracking-[0.4em] disabled:opacity-60 hover:brightness-110 transition-all"
            >
              {sent ? "Received — we'll be in touch" : "Send privately"}
              <span aria-hidden="true">{sent ? "✓" : "→"}</span>
            </button>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.4em] text-ink/40">
              Replies within two business days · Discretion assumed
            </p>
          </form>
        </div>
      </aside>
    </section>
  );
}

function Field({
  id,
  label,
  ...props
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-ink/55 mb-2">
        {label}
      </span>
      <input
        id={id}
        name={id}
        className="w-full bg-transparent border-b border-[color:var(--hairline)] focus:border-primary outline-none py-2 text-ink text-base font-body placeholder:text-ink/30 transition-colors"
        {...props}
      />
    </label>
  );
}

function Textarea({
  id,
  label,
  ...props
}: { id: string; label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-ink/55 mb-2">
        {label}
      </span>
      <textarea
        id={id}
        name={id}
        className="w-full bg-transparent border-b border-[color:var(--hairline)] focus:border-primary outline-none py-2 text-ink text-base font-body placeholder:text-ink/30 resize-none transition-colors"
        {...props}
      />
    </label>
  );
}
