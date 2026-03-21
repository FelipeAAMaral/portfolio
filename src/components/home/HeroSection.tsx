import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    proofPoints: ["10 years at Pontotel", "Built product org: 0 → 17 people", "10x delivery throughput", "NPS 30 → 50+"],
    nowItems: ["Head of Product at Pontotel", "Building Hearken in public", "Open to international opportunities"],
  },
  pt: {
    proofPoints: ["10 anos na Pontotel", "Área de produto: 0 → 17 pessoas", "10x throughput de entregas", "NPS 30 → 50+"],
    nowItems: ["Head de Produto na Pontotel", "Construindo o Hearken em público", "Aberto a oportunidades internacionais"],
  },
};

const HeroSection = () => {
  const { t, language } = useLanguage();

  const { proofPoints, nowItems } = content[language];

  return (
    <section
      id="hero"
      aria-label="Apresentação de Felipe Amaral"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 opacity-70 soft-grid" aria-hidden="true" />

      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-16 py-24 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="eyebrow mb-8">{t("hero.eyebrow")}</span>

          <h1 className="mb-8 max-w-4xl font-serif text-display-xl text-foreground">
            {t("hero.headline").replace(t("hero.headlineHighlight"), "")}{" "}
            <span className="text-gradient-primary">{t("hero.headlineHighlight")}</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t("hero.description")}
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            {proofPoints.map((item) => (
              <span key={item} className="proof-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="btn-accent">
              {t("hero.ctaPrimary")}
              <ArrowRight size={16} />
            </a>
            <a href="#system" className="btn-ghost">
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="panel overflow-hidden">
            <img
              src="/assets-img/9b58c456-6538-4179-9b48-28e9ca475eaf.png"
              alt="Felipe Amaral em ambiente natural na Patagônia"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="panel mt-4 p-6">
            <div className="mb-4">
              <span className="eyebrow before:w-5">{t("hero.nowLabel")}</span>
            </div>

            <div className="space-y-3">
              {nowItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 block h-2 w-2 rounded-full bg-primary/80" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 border-t border-border/80 pt-4 text-sm leading-relaxed text-foreground/86">
              {t("hero.nowFootnote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
