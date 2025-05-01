
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import MediumPostsSection from "@/components/home/MediumPostsSection";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Brief Introduction */}
      <IntroSection />

      {/* Featured Work Section */}
      <FeaturedWorkSection />

      {/* Medium Blog Posts */}
      <MediumPostsSection />
    </div>
  );
};

export default Index;
