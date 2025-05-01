
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, HeartHandshake } from "lucide-react";

const BuildTogether = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mt-12 bg-card border p-8 rounded-xl">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="bg-indigo-500/10 p-3 rounded-full">
            <HeartHandshake className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6">
          {language === 'en' ? 'Let\'s Build Together' : 'Vamos Construir Juntos'}
        </h2>
        <p className="text-lg mb-8">
          {language === 'en' ? 
            "Thanks for reading my story. Whether you're building a product, scaling a team, or navigating your own journey, I'm always open to exchange ideas and collaborate." 
            : 
            "Obrigado por ler minha história. Se você está construindo um produto, escalando uma equipe ou navegando em sua própria jornada, estou sempre aberto para trocar ideias e colaborar."}
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors">
          {language === 'en' ? 'Get in Touch' : 'Entre em Contato'}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default BuildTogether;
