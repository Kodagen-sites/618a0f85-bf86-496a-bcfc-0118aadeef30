import CinematicHero from "@/components/CinematicHero";
import TourBeats from "@/components/sections/TourBeats";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Practice from "@/components/sections/Practice";
import ContactCta from "@/components/sections/ContactCta";

export const revalidate = 3600;

export default function Home() {
  return (
    <main>
      <CinematicHero />
      <TourBeats />
      <PortfolioGrid />
      <Practice />
      <ContactCta />
    </main>
  );
}
