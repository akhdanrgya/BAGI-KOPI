import { HeroParallax } from "@/components/HeroParallax";
import { MenuSection } from "@/components/MenuSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { VisionValues } from "@/components/VisionValues";
import { ContactPartnership } from "@/components/ContactPartnership";

export default function Home() {
  return (
    <>
      <HeroParallax />
      <MenuSection />
      <JourneyTimeline />
      <VisionValues />
      <ContactPartnership />
    </>
  );
}
