
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code } from "lucide-react";

const CareerJourney = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'en' ? 'Career Journey' : 'Jornada Profissional'}
          </h2>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engineer to Product */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="p-1 bg-gradient-to-r from-palmeiras-green to-primary"></div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-palmeiras-light/20">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === 'en' ? 'From Engineer to Product' : 'De Engenheiro a Produto'}
                  </h3>
                </div>
                <p className="mb-3">
                  {language === 'en' ? 
                    "I started my career as a Software Engineer, spending 5 years building robust systems, integrating APIs, and solving real-world technical challenges." 
                    : 
                    "Comecei minha carreira como Engenheiro de Software, passando 5 anos construindo sistemas robustos, integrando APIs e resolvendo desafios técnicos do mundo real."}
                </p>
                <p>
                  {language === 'en' ? 
                    "Over time, I found myself increasingly drawn to user problems, product discovery, and strategic decision-making — which led to my transition into Product." 
                    : 
                    "Com o tempo, me vi cada vez mais atraído por problemas de usuários, descoberta de produtos e tomada de decisões estratégicas — o que levou à minha transição para Produto."}
                </p>
              </CardContent>
            </Card>
            
            {/* Head of Product */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="p-1 bg-gradient-to-r from-palmeiras-green to-primary"></div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-palmeiras-light/20">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === 'en' ? 'Head of Product at Pontotel' : 'Head de Produto na Pontotel'}
                  </h3>
                </div>
                <p className="mb-3">
                  {language === 'en' ? 
                    "For the past 5 years, I've been the Head of Product at Pontotel, a B2B HRTech company focused on time & attendance and people management solutions." 
                    : 
                    "Nos últimos 5 anos, tenho sido Head de Produto na Pontotel, uma empresa B2B de HRTech focada em soluções de ponto eletrônico e gestão de pessoas."}
                </p>
                <p>
                  {language === 'en' ? 
                    "I lead a 17-person product org, including Product Owners, Managers, UX Designers, and QA Analysts. Our platform supports hundreds of companies across Brazil and LATAM." 
                    : 
                    "Lidero uma organização de produto de 17 pessoas, incluindo Product Owners, Managers, UX Designers e Analistas de QA. Nossa plataforma suporta centenas de empresas em todo o Brasil e América Latina."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
