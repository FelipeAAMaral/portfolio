
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Code, Trophy, Users } from "lucide-react";

const AboutMe = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 py-10 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16 text-white">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-primary">
            {language === 'en' ? '✍️ A Bit More About Me' : '✍️ Um Pouco Mais Sobre Mim'}
          </h2>
        </div>
        <div className="md:w-2/3 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/lovable-uploads/4de6514c-8f1c-4ad4-8571-d7cc0c2c6fe1.png" 
                  alt="Felipe Amaral" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <ul className="space-y-3">
                {[
                  { 
                    icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/30 ring-4 ring-indigo-500/10"><GraduationCap className="h-4 w-4 text-indigo-400" /></div>, 
                    text: language === 'en' ? "I publish reflections on product leadership on Medium" : "Publico reflexões sobre liderança de produto no Medium" 
                  },
                  { 
                    icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/30 ring-4 ring-indigo-500/10"><Code className="h-4 w-4 text-indigo-400" /></div>, 
                    text: language === 'en' ? "I built my portfolio website using Astro and Netlify, with bilingual content" : "Construí meu site de portfólio usando Astro e Netlify, com conteúdo bilíngue" 
                  },
                  { 
                    icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/30 ring-4 ring-indigo-500/10"><Trophy className="h-4 w-4 text-indigo-400" /></div>, 
                    text: language === 'en' ? "I'm a passionate Palmeiras supporter - it's more than just green colors, it's about being part of a community that shares values, history, and passion" : "Sou um torcedor apaixonado do Palmeiras - é mais do que apenas cores verdes, é sobre fazer parte de uma comunidade que compartilha valores, história e paixão" 
                  },
                  { 
                    icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/30 ring-4 ring-indigo-500/10"><Users className="h-4 w-4 text-indigo-400" /></div>, 
                    text: language === 'en' ? "I believe the best products start with a genuine interest in helping people" : "Acredito que os melhores produtos começam com um interesse genuíno em ajudar as pessoas" 
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg border border-white/10 hover:border-indigo-500/50 transition-all">
                    {item.icon}
                    <p className="text-slate-200">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
