
import { useLanguage } from "@/context/LanguageContext";

const ProjectsBuilt = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-16 bg-muted/30 py-10 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'en' ? '🏗️ What I\'ve Built and Led' : '🏗️ O Que Construí e Liderei'}
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg mb-6">
            {language === 'en' ? 
              "At Pontotel, I've:" 
              : 
              "Na Pontotel, eu:"}
          </p>
          <ul className="space-y-4">
            {[
              language === 'en' ? "Structured the entire Product department from scratch" : "Estruturei todo o departamento de Produto do zero",
              language === 'en' ? "Implemented career frameworks, performance evaluations, and onboarding journeys" : "Implementei frameworks de carreira, avaliações de desempenho e jornadas de onboarding",
              language === 'en' ? "Adopted Shape Up and product analytics with PostHog" : "Adotei Shape Up e analytics de produto com PostHog",
              language === 'en' ? "Introduced AI-assisted processes to improve efficiency" : "Introduzi processos assistidos por IA para melhorar a eficiência",
              language === 'en' ? "Led initiatives in mobile UX, API integration, and compliance automation" : "Liderei iniciativas em UX mobile, integração de APIs e automação de compliance",
              language === 'en' ? "Organized product teams as \"UGBs\", inspired by Roman military units, with clear roles and focus areas" : "Organizei equipes de produto como \"UGBs\", inspiradas em unidades militares romanas, com funções e áreas de foco claras"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 bg-card p-3 rounded-lg border hover:shadow-sm transition-all">
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBuilt;
