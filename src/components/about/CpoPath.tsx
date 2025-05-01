
import { useLanguage } from "@/context/LanguageContext";

const CpoPath = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'en' ? 'On the Path to CPO' : 'No Caminho para CPO'}
          </h2>
        </div>
        <div className="md:w-2/3 space-y-4">
          <p className="text-lg">
            {language === 'en' ? 
              "I'm actively working toward becoming a Chief Product Officer (CPO). This includes:" 
              : 
              "Estou trabalhando ativamente para me tornar um Chief Product Officer (CPO). Isso inclui:"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              language === 'en' ? "Deepening my financial and business acumen" : "Aprofundar meu conhecimento financeiro e de negócios",
              language === 'en' ? "Learning from founders, C-levels, and top product minds" : "Aprender com fundadores, C-levels e grandes mentes de produto",
              language === 'en' ? "Investing in team development and culture" : "Investir no desenvolvimento de equipe e cultura",
              language === 'en' ? "Sharing my journey through writing and mentoring" : "Compartilhar minha jornada através da escrita e mentoria"
            ].map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CpoPath;
