
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

const HeroSection = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    console.log("[HeroSection] Current language:", language);
    console.log("[HeroSection] Translation test:", { 
      greeting: t('hero.greeting'),
      intro: t('hero.intro'),
      contactTitle: t('contact.title'),
      aboutMe: t('nav.aboutMe')
    });
  }, [language, t]);
  
  // Fallback values in case translations fail
  const greeting = t('hero.greeting') || "Hello, I'm";
  const intro = t('hero.intro') || "Tech and product leader with 10+ years in software";
  const contactTitle = t('contact.title') || "Get in Touch";
  const aboutMe = t('nav.aboutMe') || "About me";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block bg-indigo-400/20 text-indigo-400 px-4 py-1 rounded-full text-sm font-medium mb-2 animate-pulse">
              {greeting}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Felipe Amaral
            </h1>
            <p className="text-xl md:text-2xl text-slate-300">
              {intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                <Link to="/contact">
                  {contactTitle}
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30" 
                asChild
              >
                <Link to="/about" className="flex items-center gap-2">
                  <UserRound size={18} />
                  {aboutMe}
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-indigo-500/30 to-indigo-600/40 blur"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white/20 bg-card transform hover:scale-[1.01] transition-transform duration-300">
                <img 
                  src="/assets-img/9b58c456-6538-4179-9b48-28e9ca475eaf.png" 
                  alt="Felipe Amaral" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
