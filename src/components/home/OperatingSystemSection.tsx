import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    eyebrow: "How I work",
    headline: "A simple process, well executed.",
    description:
      "My process is the same in any context: understand the problem clearly, organize execution, and keep decisions transparent. AI is a tool inside this process — not a shortcut around it.",
    steps: [
      {
        number: "01",
        title: "Understand the problem",
        body: "Before thinking about solutions, I focus on understanding the problem clearly: context, impact, trade-offs, and what actually deserves priority.",
      },
      {
        number: "02",
        title: "Define the plan",
        body: "I turn ambition into an executable plan: scope, risks, owners, metrics, and what makes sense to leave out.",
      },
      {
        number: "03",
        title: "Execute with depth",
        body: "I go deep into architecture, data, integrations, and technical details to make sure the product vision holds when it becomes a delivery.",
      },
      {
        number: "04",
        title: "Review carefully",
        body: "I do quality reviews, documentation, and revisit key decisions to maintain consistency and reduce operational noise.",
      },
      {
        number: "05",
        title: "Ship and learn",
        body: "A delivery closes one cycle and opens the next: feedback, follow-through, and clear learning to improve the next decision.",
      },
    ],
    guardrailsLabel: "Working principles",
    guardrails: [
      "Problem well-defined before the solution",
      "AI with context, review, and accountability",
      "Technical decisions explained clearly",
      "Documentation useful for the team",
      "Quality and consistency over speed",
    ],
  },

  pt: {
    eyebrow: "Como eu trabalho",
    headline: "Um processo simples e bem executado.",
    description:
      "Meu processo é o mesmo em qualquer contexto: entender bem o problema, organizar a execução e manter clareza nas decisões. IA entra como ferramenta dentro desse processo — não como atalho para contorná-lo.",
    steps: [
      {
        number: "01",
        title: "Entender o problema",
        body: "Antes de pensar em solução, eu busco entender o problema com clareza: contexto, impacto, trade-offs e o que de fato merece prioridade.",
      },
      {
        number: "02",
        title: "Definir o plano",
        body: "Transformo a ambição em um plano executável: escopo, riscos, responsáveis, métricas e o que faz sentido deixar de fora.",
      },
      {
        number: "03",
        title: "Executar com profundidade",
        body: "Entro na arquitetura, dados, integrações e detalhes técnicos para garantir que a visão do produto continue boa quando vira entrega.",
      },
      {
        number: "04",
        title: "Revisar com cuidado",
        body: "Faço revisão de qualidade, documentação e decisões importantes para manter consistência e reduzir ruído operacional.",
      },
      {
        number: "05",
        title: "Entregar e aprender",
        body: "A entrega fecha um ciclo e abre outro: feedback, acompanhamento e aprendizado claro para melhorar a próxima decisão.",
      },
    ],
    guardrailsLabel: "Princípios de trabalho",
    guardrails: [
      "Problema bem definido antes da solução",
      "IA com contexto, revisão e responsabilidade",
      "Decisões técnicas explicadas de forma clara",
      "Documentação útil para o time",
      "Qualidade e consistência acima de pressa",
    ],
  },
};

const OperatingSystemSection = () => {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <section
      id="system"
      aria-label={c.eyebrow}
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <span className="eyebrow mb-6">{c.eyebrow}</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">{c.headline}</h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{c.description}</p>
        </div>

        <div className="space-y-5">
          {c.steps.map((step) => (
            <article
              key={step.number}
              className="panel grid gap-5 p-6 md:grid-cols-[88px_1fr] md:p-8"
            >
              <div>
                <span className="block font-mono text-sm uppercase tracking-[0.22em] text-primary">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="mb-3 font-serif text-3xl text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </article>
          ))}

          <aside className="panel p-6 md:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-primary">
              {c.guardrailsLabel}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {c.guardrails.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-border/80 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OperatingSystemSection;
