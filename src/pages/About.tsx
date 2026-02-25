import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="container py-20 animate-fade-in">
      <div className="max-w-2xl">
        <p className="text-xs font-mono tracking-widest uppercase text-primary mb-4">
          {language === 'en' ? 'About' : 'Sobre'}
        </p>
        <h1 className="font-serif text-display-lg font-bold text-foreground mb-8 leading-tight">
          {language === 'en' ? 'The full story.' : 'A história completa.'}
        </h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            {language === 'en'
              ? "I'm Felipe Amaral — a product and technology leader with over 10 years building software. My career took me from software engineering to product leadership, giving me a rare combination of technical depth and business vision."
              : "Sou Felipe Amaral — líder de produto e tecnologia com mais de 10 anos construindo software. Minha carreira me levou da engenharia de software à liderança de produto, me dando uma combinação rara de profundidade técnica e visão de negócio."}
          </p>
          <p>
            {language === 'en'
              ? "Currently Head of Product at Pontotel, a B2B HRTech SaaS company in Latin America, where I lead a 17-person product organization responsible for data-driven product management, Go-to-Market strategy, and cross-functional leadership across engineering, design and commercial teams."
              : "Atualmente Head de Produto na Pontotel, empresa de HRTech B2B SaaS na América Latina, onde lidero uma organização de produto de 17 pessoas responsável por gestão de produto orientada a dados, estratégia de Go-to-Market, e liderança cross-functional entre times de engenharia, design e comercial."}
          </p>
          <p>
            {language === 'en'
              ? "Outside of Pontotel, I built Hearken — a Generative AI SaaS — from scratch, handling the full cycle: AI architecture, backend, frontend, and Go-to-Market. This project reflects my belief that great product leaders need skin in the game."
              : "Fora da Pontotel, construí o Hearken — um SaaS de IA Generativa — do zero, lidando com o ciclo completo: arquitetura de IA, backend, frontend e Go-to-Market. Esse projeto reflete minha crença de que grandes líderes de produto precisam ter skin in the game."}
          </p>
          <p>
            {language === 'en'
              ? "My foundation is a Computer Science degree from ICMC-USP — one of Brazil's top technical universities — complemented by an academic exchange at Queen Mary University of London, which shaped my perspective on building products for global markets."
              : "Minha base é uma graduação em Ciência da Computação pelo ICMC-USP — uma das melhores universidades técnicas do Brasil — complementada por um intercâmbio na Queen Mary University of London, que moldou minha perspectiva sobre construir produtos para mercados globais."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
