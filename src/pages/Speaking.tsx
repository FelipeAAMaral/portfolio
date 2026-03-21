import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

const Speaking = () => {
  const { language } = useLanguage();

  const title = language === "en" ? "Speaking" : "Palestras";
  const intro =
    language === "en"
      ? "I'm available for talks and conversations about product, technology, career development, and AI applied in real operating contexts."
      : "Estou disponível para palestras e conversas sobre produto, tecnologia, desenvolvimento de carreira e IA aplicada em contextos reais de trabalho.";

  const themes =
    language === "en"
      ? [
          "From engineering to product leadership",
          "How product evolves across startup stages",
          "Using AI in product work without losing judgment",
          "What changes when product, tech, and business work better together",
        ]
      : [
          "Da engenharia à liderança de produto",
          "Como produto muda ao longo das fases de uma startup",
          "Como usar IA no trabalho de produto sem perder senso crítico",
          "O que muda quando produto, tecnologia e negócio trabalham melhor juntos",
        ];

  const formats =
    language === "en"
      ? [
          "Talks for internal teams or communities",
          "Panels, meetups, webinars, and recorded conversations",
          "Formats that work better with practical examples than with hype",
        ]
      : [
          "Palestras para times internos ou comunidades",
          "Painéis, meetups, webinars e conversas gravadas",
          "Formatos que funcionam melhor com exemplos práticos do que com hype",
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
            {language === "en" ? "Themes" : "Temas"}
          </p>
          <div className="space-y-3">
            {themes.map((item) => (
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
            {language === "en" ? "Formats" : "Formatos"}
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
      </div>

      <section className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-start">
        <div>
          <h2 className="font-serif text-3xl text-foreground mb-4">
            {language === "en" ? "Interested in inviting me?" : "Quer me convidar?"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {language === "en"
              ? "Send the event context, audience, and preferred format through the form and I can understand whether there's a good fit."
              : "Me envie pelo formulário o contexto do evento, o público e o formato desejado, e eu consigo entender se faz sentido."}
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Speaking;
