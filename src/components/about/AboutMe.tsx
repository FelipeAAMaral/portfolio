
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Code, Trophy, Users } from "lucide-react";

const AboutMe = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 py-10 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16 text-white">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-primary">
            {t('about.more')}
          </h2>
        </div>
        <div className="md:w-2/3 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/assets-img/4de6514c-8f1c-4ad4-8571-d7cc0c2c6fe1.png" 
                  alt={t('about.profileImageAlt') || "Profile"}
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
                    text: t('about.mediumPublishing') || "I publish articles on Medium regularly"
                  },
                  { 
                    icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/30 ring-4 ring-indigo-500/10"><Code className="h-4 w-4 text-indigo-400" /></div>, 
                    text: t('about.portfolioBuilt') || "I built this portfolio using React & Tailwind"
                  },
                  { 
                    icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/30 ring-4 ring-indigo-500/10"><Trophy className="h-4 w-4 text-indigo-400" /></div>, 
                    text: t('about.palmeirasFan') || "Huge Palmeiras fan (best soccer team in Brazil!)"
                  },
                  { 
                    icon: <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/30 ring-4 ring-indigo-500/10"><Users className="h-4 w-4 text-indigo-400" /></div>, 
                    text: t('about.productBelief') || "I believe great products are built by diverse teams"
                  }
                ].map((item, index) => (
                  <li key={index} className="group">
                    <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg border border-white/10 
                      transition-all duration-300 
                      group-hover:border-indigo-500/50 
                      group-hover:bg-slate-700/50 
                      group-hover:shadow-lg 
                      group-hover:shadow-indigo-500/20">
                      <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {item.icon}
                      </div>
                      <p className="text-slate-200 transition-colors duration-300 group-hover:text-white">
                        {item.text}
                      </p>
                    </div>
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
