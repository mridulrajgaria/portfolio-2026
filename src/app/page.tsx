import CustomCursor from "@/components/layout/CustomCursor";
import Hero from "@/components/ui/Hero";
import WorkExperience from "@/components/ui/WorkExperience";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import ResearchSection from "@/components/ui/ResearchSection";
import BentoGrid from "@/components/ui/BentoGrid";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-white selection:text-black">
      <CustomCursor />
      <Navbar />
      
      <Hero />
      <WorkExperience />
      <FeaturedProjects />
      <ResearchSection />
      <BentoGrid />
      
      <Footer />
    </main>
  );
}
