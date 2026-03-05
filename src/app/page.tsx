import { HeroParallax } from "@/components/HeroParallax";
import { PromoSection } from "@/components/PromoSection";
import { MenuSection } from "@/components/MenuSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { VisionValues } from "@/components/VisionValues";
import { ContactPartnership } from "@/components/ContactPartnership";

export default function Home() {
  return (
    <>
      <HeroParallax />
      <PromoSection />
      <MenuSection />
      <JourneyTimeline />
      <VisionValues />
      <ContactPartnership />
    </>
  );
}
