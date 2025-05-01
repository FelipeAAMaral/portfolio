
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const IntroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">🌟 {language === 'en' ? 'Quick Intro' : 'Breve Introdução'}</h2>
          </div>
          <div className="md:w-2/3 space-y-4">
            <p className="text-lg">
              {language === 'en' ? 
                "Hi, I'm Felipe Amaral — a tech and product leader with over 10 years of experience in software. Currently, I'm the Head of Product at Pontotel, a B2B HRTech company where I lead a 17-person product organization." 
                : 
                "Olá, eu sou Felipe Amaral — um líder de tecnologia e produto com mais de 10 anos de experiência em software. Atualmente, sou Head de Produto na Pontotel, uma empresa B2B de HRTech onde lidero uma organização de produto de 17 pessoas."}
            </p>
            <p className="text-lg">
              {language === 'en' ? 
                "My journey has taken me from coding to leading cross-functional teams and shaping the future of HRTech solutions in Latin America." 
                : 
                "Minha jornada me levou da codificação à liderança de equipes multifuncionais e à moldagem do futuro das soluções de HRTech na América Latina."}
            </p>
            <div className="pt-4">
              <Button variant="default" asChild>
                <Link to="/about">
                  {language === 'en' ? 'Learn more about me' : 'Saiba mais sobre mim'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
