import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PassionsGrid from "@/components/PassionsGrid";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { RidingBike, MountainScene, SeaBreeze } from "@/components/AnimatedElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <RidingBike />
      <ExperienceSection />
      <PassionsGrid />
      <MountainScene />
      <ContactSection />
      <SeaBreeze />
      <FooterSection />
    </div>
  );
};

export default Index;
