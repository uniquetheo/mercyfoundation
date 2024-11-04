import BannerCTASection from "@/components/BannerCTA";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="bg-white min-h-[calc(100vh-80px)]">
      <HeroSection />
      <Services />
      <ProjectsSection />
      <StatsSection />
      <BannerCTASection />
    </main>
  );
}
