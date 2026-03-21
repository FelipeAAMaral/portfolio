import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

const Mentorship = () => {
  const { language } = useLanguage();

  const title = language === "en" ? "Mentorship" : "Mentoria";
  const intro =
    language === "en"
      ? "I offer mentorship for people navigating product, technology, and career growth with more clarity."
      : "Ofereço mentoria para quem quer navegar produto, tecnologia e carreira com mais clareza.";

  const topics =
    language === "en"
      ? [
          "Transitioning from engineering to product roles",
          "Building product judgment in real operating contexts",
          "Career growth in startups across different stages",
          "Using AI more thoughtfully in product work",
        ]
      : [
          "Transição de engenharia para produto",
          "Construção de repertório prático em produto",
          "Crescimento de carreira em startups em fases diferentes",
          "Uso mais criterioso de IA no trabalho de produto",
        ];

  const formatTitle = language === "en" ? "How I usually help" : "Como eu costumo ajudar";
  const audienceTitle = language === "en" ? "Who this is useful for" : "Para quem isso costuma ser útil";
  const ctaTitle = language === "en" ? "Interested?" : "Faz sentido para você?";

  const formats =
    language === "en"
      ? [
          "One-off sessions for specific decisions or career questions",
          "Short follow-up cycles for transitions, prioritization, and growth",
          "Conversations grounded in real operating experience, not generic advice",
        ]
      : [
          "Sessões pontuais para decisões específicas ou dúvidas de carreira",
          "Acompanhamentos curtos para transição, priorização e crescimento",
          "Conversas baseadas em experiência prática, e não em conselho genérico",
        ];

  const audience =
    language === "en"
      ? [
          "People moving from technical roles toward product",
          "PMs and early product leaders who want more structure",
          "Professionals trying to make AI useful in their day-to-day work",
        ]
      : [
          "Pessoas saindo de um papel técnico em direção a produto",
          "PMs e líderes de produto em início de trajetória",
          "Profissionais tentando usar IA de forma mais útil no dia a dia",
        ];

  return (
    <div className="container py-20 animate-fade-in">
      <div className="max-w-3xl mb-14">
        <span className="eyebrow mb-6">{title}</span>
        <h1 className="font-serif text-display-lg text-foreground mb-6">{title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 mb-16">
        <section className="panel p-6 md:p-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
            {formatTitle}
          </p>
          <div className="space-y-3">
            {formats.map((item) => (
              <div
                key={item}
                className="rounded-[1.1rem] border border-border/80 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="panel p-6 md:p-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
            {audienceTitle}
          </p>
          <div className="space-y-3">
            {audience.map((item) => (
              <div
                key={item}
                className="rounded-[1.1rem] border border-border/80 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="panel p-6 md:p-8 mb-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
          {language === "en" ? "Topics" : "Temas que costumo cobrir"}
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {topics.map((item) => (
            <div
              key={item}
              className="rounded-[1.1rem] border border-border/80 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-start">
        <div>
          <h2 className="font-serif text-3xl text-foreground mb-4">{ctaTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {language === "en"
              ? "If you think a conversation could help, send context through the form and I can understand whether mentorship makes sense."
              : "Se você acha que uma conversa pode ajudar, me mande contexto pelo formulário e eu entendo se a mentoria faz sentido."}
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Mentorship;
