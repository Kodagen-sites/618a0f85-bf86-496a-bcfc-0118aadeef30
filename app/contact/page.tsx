import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCta from "@/components/sections/ContactCta";
import { siteConfig } from "@/content/site-config";

export const metadata = {
  title: `Contact — ${siteConfig.brand.name}`,
  description:
    "Begin a private inquiry. We reply within two business days, and we never put you on a list.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "var(--bg)" }}>
      <Header />

      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/section-cypress.jpg"
          alt="A quiet estate at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,13,10,0.55) 0%, rgba(16,13,10,0.25) 45%, var(--bg) 100%)",
          }}
        />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl w-full mx-auto px-6 md:px-10 pb-16 md:pb-24">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.5em] text-primary/90 mb-5">
              Contact · {siteConfig.brand.location}
            </div>
            <h1 className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-3xl">
              A quiet conversation,
              <span className="italic text-primary"> on your terms.</span>
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-ink/75 max-w-xl leading-relaxed">
              Tell us, in one paragraph, what you are looking for. We will read
              it carefully and reply within two business days.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />

      <Footer />
    </main>
  );
}
