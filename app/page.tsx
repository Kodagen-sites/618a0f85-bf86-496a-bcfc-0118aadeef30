import CinematicHero from "@/components/CinematicHero";
import TourBeats from "@/components/sections/TourBeats";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Practice from "@/components/sections/Practice";
import Engagements from "@/components/sections/Engagements";
import ContactCta from "@/components/sections/ContactCta";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const revalidate = 3600;

export default function Home() {
  return (
    <main>
      <CinematicHero />
      <TourBeats />
      <PortfolioGrid />
      <Practice />
      <Engagements />
      <ContactCta />
      <WhatsAppFloat />
    </main>
  );
}
