import { HeroParallax } from "@/components/HeroParallax";
import { PromoSection } from "@/components/PromoSection";
import { MenuSection } from "@/components/MenuSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { VisionValues } from "@/components/VisionValues";
import { ContactPartnership } from "@/components/ContactPartnership";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroParallax />
      <PromoSection />
      <MenuSection />
      <JourneyTimeline />
      <VisionValues />
      <Testimonials />
      <InstagramFeed />
      <ContactPartnership />
    </>
  );
}
