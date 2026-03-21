const operatingSteps = [
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
];

const guardrails = [
  "Problema bem definido antes da solução",
  "IA com contexto, revisão e responsabilidade",
  "Decisões técnicas explicadas de forma clara",
  "Documentação útil para o time",
  "Qualidade e consistência acima de pressa",
];

const OperatingSystemSection = () => {
  return (
    <section
      id="system"
      aria-label="Workflow agentic de Felipe Amaral"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <span className="eyebrow mb-6">Como eu trabalho</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">
            Um processo simples e bem executado.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Meu processo é o mesmo em qualquer contexto: entender bem o problema, organizar a
            execução e manter clareza nas decisões. IA entra como ferramenta dentro desse processo.
          </p>
        </div>

        <div className="space-y-5">
          {operatingSteps.map((step) => (
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
              Princípios de trabalho
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {guardrails.map((item) => (
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
