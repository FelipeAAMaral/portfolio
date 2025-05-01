
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Code, Trophy, Users as UsersIcon } from "lucide-react";

const AboutMe = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-16 bg-muted/30 py-10 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'en' ? '✍️ A Bit More About Me' : '✍️ Um Pouco Mais Sobre Mim'}
          </h2>
        </div>
        <div className="md:w-2/3 space-y-4">
          <ul className="space-y-3">
            {[
              { icon: <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />, text: language === 'en' ? "I publish reflections on product leadership on Medium" : "Publico reflexões sobre liderança de produto no Medium" },
              { icon: <Code className="h-5 w-5 text-primary flex-shrink-0" />, text: language === 'en' ? "I built my portfolio website using Astro and Netlify, with bilingual content" : "Construí meu site de portfólio usando Astro e Netlify, com conteúdo bilíngue" },
              { icon: <Trophy className="h-5 w-5 text-primary flex-shrink-0" />, text: language === 'en' ? "I'm a passionate Palmeiras supporter - it's more than just green colors, it's about being part of a community that shares values, history, and passion" : "Sou um torcedor apaixonado do Palmeiras - é mais do que apenas cores verdes, é sobre fazer parte de uma comunidade que compartilha valores, história e paixão" },
              { icon: <UsersIcon className="h-5 w-5 text-primary flex-shrink-0" />, text: language === 'en' ? "I believe the best products start with a genuine interest in helping people" : "Acredito que os melhores produtos começam com um interesse genuíno em ajudar as pessoas" }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border hover:shadow-sm transition-all">
                {item.icon}
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
