
import { useLanguage } from "@/context/LanguageContext";

const AboutHero = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">🌟 {language === 'en' ? 'Professional Overview' : 'Visão Profissional'}</h2>
        </div>
        <div className="md:w-2/3 space-y-4">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-palmeiras-green/20 to-primary/30 blur"></div>
            <div className="relative aspect-square md:aspect-video overflow-hidden rounded-lg border bg-card">
              <img 
                src="https://source.unsplash.com/random/800x800/?professional" 
                alt="Felipe Amaral" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="text-lg">
            {language === 'en' ? 
              "Hi, I'm Felipe Amaral — a tech and product leader with over 10 years of experience in the software industry. My journey has taken me from writing code to leading cross-functional teams and shaping the future of HRTech solutions in Latin America." 
              : 
              "Olá, eu sou Felipe Amaral — um líder de tecnologia e produto com mais de 10 anos de experiência na indústria de software. Minha jornada me levou da escrita de código à liderança de equipes multifuncionais e à moldagem do futuro das soluções de HRTech na América Latina."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
