
import HeroSection from "@/components/home/HeroSection";
import CraftSection from "@/components/home/CraftSection";
import CasesSection from "@/components/home/CasesSection";
import FoundationSection from "@/components/home/FoundationSection";
import OffScreenSection from "@/components/home/OffScreenSection";

const Index = () => {
  return (
    <div>
      {/* 1. Hero — Elegant statement of purpose */}
      <HeroSection />

      {/* 2. The Craft — Philosophy / The Apple filter */}
      <CraftSection />

      {/* 3. Selected Work — Proof of craft */}
      <CasesSection />

      {/* 4. Foundation — Academic rigor */}
      <FoundationSection />

      {/* 5. Off-Screen — The human element */}
      <OffScreenSection />
    </div>
  );
};

export default Index;
