
import { useLanguage } from "@/context/LanguageContext";
import AboutHero from "@/components/about/AboutHero";
import CareerJourney from "@/components/about/CareerJourney";
import ProjectsBuilt from "@/components/about/ProjectsBuilt";
import ProductPhilosophy from "@/components/about/ProductPhilosophy";
import SkillsToolbox from "@/components/about/SkillsToolbox";
import CpoPath from "@/components/about/CpoPath";
import AboutMe from "@/components/about/AboutMe";
import BuildTogether from "@/components/about/BuildTogether";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-gradient-primary">
        {t('about.title')}
      </h1>

      {/* Professional Overview Section */}
      <AboutHero />

      {/* Career Journey Section */}
      <CareerJourney />

      {/* What I've Built Section */}
      <ProjectsBuilt />

      {/* Product Philosophy */}
      <ProductPhilosophy />

      {/* Skills Section */}
      <SkillsToolbox />

      {/* CPO Path Section */}
      <CpoPath />

      {/* More About Me Section */}
      <AboutMe />

      {/* Let's Build Together */}
      <BuildTogether />
    </div>
  );
};

export default About;
