import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import TechnologiesSection from "@/components/TechnologiesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
             <div id="about-section" style={{ height: '1px' }}></div>
      <ProjectsPreview />
      <TechnologiesSection />
    </div>
  );
};

export default Index;
