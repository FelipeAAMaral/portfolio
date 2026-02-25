
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const IntroSection = () => {
  const { language } = useLanguage();

  const titleLine1 = language === 'en' ? "What do" : "O que";
  const titleLine2 = language === 'en' ? "I do?" : "eu faço?";

  const body1 = language === 'en'
    ? "I'm Felipe Amaral — a tech and product leader with over 10 years of experience building software. Currently Head of Product at Pontotel, a B2B HRTech company, where I lead a 17-person product organization."
    : "Sou Felipe Amaral — líder de produto e tecnologia com mais de 10 anos construindo software. Atualmente Head de Produto na Pontotel, uma empresa B2B de HRTech, onde lidero uma organização de produto de 17 pessoas.";

  const body2 = language === 'en'
    ? "My journey took me from engineering to product leadership — shaping the future of workforce management solutions across Latin America."
    : "Minha jornada me levou da engenharia à liderança de produto — moldando o futuro das soluções de gestão de força de trabalho na América Latina.";

  const cta = language === 'en' ? "Read more about me" : "Saiba mais sobre mim";

  const areas = language === 'en'
    ? [
      { tag: "Product Strategy", n: "01" },
      { tag: "Team Leadership", n: "02" },
      { tag: "HRTech", n: "03" },
    ]
    : [
      { tag: "Estratégia de Produto", n: "01" },
      { tag: "Liderança de Times", n: "02" },
      { tag: "HRTech", n: "03" },
    ];

  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — heading + areas */}
          <div>
            <h2 className="font-serif text-display-lg font-bold text-foreground mb-10 leading-tight">
              {titleLine1}<br />
              <em className="text-primary not-italic">{titleLine2}</em>
            </h2>

            <div className="space-y-0 divide-y divide-border">
              {areas.map((a) => (
                <div key={a.n} className="flex items-center justify-between py-4">
                  <span className="text-base font-medium text-foreground">{a.tag}</span>
                  <span className="text-xs font-mono text-muted-foreground">{a.n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — body text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">{body1}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{body2}</p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200">
              {cta}
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;
