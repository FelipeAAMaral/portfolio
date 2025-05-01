
import { useLanguage } from "@/context/LanguageContext";

const ProductPhilosophy = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'en' ? 'My Product Philosophy' : 'Minha Filosofia de Produto'}
          </h2>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              language === 'en' ? "Focus on outcomes, not outputs" : "Foco em resultados, não em entregas",
              language === 'en' ? "Empower small, autonomous teams" : "Capacitar equipes pequenas e autônomas",
              language === 'en' ? "Use frameworks like Shape Up to balance strategy and delivery" : "Usar frameworks como Shape Up para equilibrar estratégia e entrega",
              language === 'en' ? "Embrace data-informed decisions without losing sight of intuition" : "Abraçar decisões informadas por dados sem perder de vista a intuição",
              language === 'en' ? "Build with purpose, clarity, and user empathy" : "Construir com propósito, clareza e empatia pelo usuário"
            ].map((item, index) => (
              <div key={index} className="border rounded-lg p-5 bg-card hover:shadow-md transition-all flex items-center">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPhilosophy;
