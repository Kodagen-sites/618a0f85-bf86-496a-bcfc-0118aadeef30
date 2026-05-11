"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

export default function ContactCta() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

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
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-14">
        <div className="md:col-span-6">
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

        <div className="md:col-span-6">
          <FadeUp delay={0.2}>
            <form
              onSubmit={onSubmit}
              className="border border-[color:var(--hairline)] p-7 md:p-10 backdrop-blur-md"
              style={{ background: "rgba(20,17,13,0.55)" }}
            >
              <div className="space-y-6">
                <Field id="name" label="Name" type="text" required />
                <Field id="email" label="Email" type="email" required />
                <Field id="locale" label="Where are you looking" type="text" placeholder="Aspen, Lake Como, Sonoma…" />
                <Textarea
                  id="message"
                  label="What you are looking for"
                  placeholder="A paragraph is enough."
                  rows={5}
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-primary text-bg font-mono text-[10.5px] uppercase tracking-[0.4em] disabled:opacity-60 hover:brightness-110 transition-all"
              >
                {sent ? "Received — we'll be in touch" : "Send privately"}
                <span aria-hidden="true">{sent ? "✓" : "→"}</span>
              </button>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.4em] text-ink/40">
                Replies within two business days · Discretion assumed
              </p>
            </form>
          </FadeUp>
        </div>
      </div>
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
