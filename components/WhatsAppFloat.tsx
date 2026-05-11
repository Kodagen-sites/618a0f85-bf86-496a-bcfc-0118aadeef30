import { siteConfig } from "@/content/site-config";

export default function WhatsAppFloat() {
  const whatsapp = siteConfig.brand.socials.find((s) => s.icon === "whatsapp");
  if (!whatsapp) return null;

  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ridge on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-transform hover:scale-105 active:scale-95"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M19.11 17.49c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16.02 5.33c-5.85 0-10.6 4.75-10.6 10.59 0 1.87.49 3.69 1.42 5.29l-1.51 5.51 5.64-1.48a10.55 10.55 0 0 0 5.04 1.28h.01c5.84 0 10.59-4.75 10.59-10.59 0-2.83-1.1-5.49-3.1-7.49a10.52 10.52 0 0 0-7.49-3.11zm0 19.4h-.01a8.8 8.8 0 0 1-4.49-1.23l-.32-.19-3.34.88.89-3.26-.21-.34a8.8 8.8 0 0 1-1.35-4.69c0-4.86 3.96-8.81 8.83-8.81 2.36 0 4.57.92 6.24 2.59a8.76 8.76 0 0 1 2.58 6.23c0 4.86-3.96 8.82-8.82 8.82z" />
      </svg>
    </a>
  );
}
