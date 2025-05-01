
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block bg-palmeiras-light text-primary px-4 py-1 rounded-full text-sm font-medium mb-2 animate-pulse">
              {t('hero.greeting')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Felipe Amaral
            </h1>
            <p className="text-xl md:text-2xl text-slate-300">
              {t('hero.intro')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link to="/contact">
                  {t('contact.title')}
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/about">
                  {t('about.title')}
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/30 to-palmeiras-green/40 blur"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white/20 bg-card transform hover:scale-[1.01] transition-transform duration-300">
                <img 
                  src="/lovable-uploads/9b58c456-6538-4179-9b48-28e9ca475eaf.png" 
                  alt="Felipe Amaral" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-white">
                <span>Scroll for more</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
