import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    eyebrow: "Profile",
    headline: "Where I tend to contribute most.",
    description: "I perform best in challenges that demand clarity, depth, and sense of priority.",
    goodLabel: "Contexts where I contribute most",
    badLabel: "Contexts where there's likely a better fit",
    beyondLabel: "Beyond the role",
    goodFit: [
      "B2B SaaS or AI-native teams with a product at a growth or maturity inflection",
      "Contexts where strategy and technical depth need to talk to each other",
      "Operations with legacy, compliance, complex GTM, or many stakeholders",
      "Challenges that demand responsible use of AI in real product work",
    ],
    badFit: [
      "Feature factories without clear product ownership",
      "Projects that treat AI as a showcase, not a tool",
      "Teams that fully separate product from technical reality",
      "Environments where documentation, testing, and review are seen as friction",
    ],
    beyond:
      "Travel, mountains, and football have reinforced three traits I also bring to work: consistency, reading context well, and energy for long-term projects.",
  },

  pt: {
    eyebrow: "Perfil",
    headline: "Onde eu costumo contribuir melhor.",
    description:
      "Eu costumo render melhor em desafios que pedem clareza, profundidade e senso de prioridade.",
    goodLabel: "Contextos em que costumo contribuir mais",
    badLabel: "Contextos em que talvez haja encaixe melhor",
    beyondLabel: "Além do cargo",
    goodFit: [
      "Times B2B SaaS ou AI-native com produto em momento de evolução",
      "Contextos em que estratégia e detalhe técnico precisam conversar",
      "Operações com legado, compliance, GTM complexo ou muitos stakeholders",
      "Desafios que pedem uso responsável de IA no trabalho real",
    ],
    badFit: [
      "Feature factory sem ownership claro de produto",
      "Projetos que tratam IA só como vitrine",
      "Times que separam totalmente produto da realidade técnica",
      "Ambientes em que documentação, testes e revisão são vistos como atrito",
    ],
    beyond:
      "Viagens, montanha e futebol sempre reforçaram três traços que também levo para o trabalho: constância, leitura de contexto e energia para projetos de longo prazo.",
  },
};

const FitSection = () => {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <section
      id="fit"
      aria-label={c.eyebrow}
      className="border-b border-border bg-surface/55 py-24 md:py-32"
    >
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow mb-6">{c.eyebrow}</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">{c.headline}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{c.description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="panel p-6 md:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              {c.goodLabel}
            </p>
            <div className="space-y-3">
              {c.goodFit.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-border/80 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="panel p-6 md:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              {c.badLabel}
            </p>
            <div className="space-y-3">
              {c.badFit.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-border/80 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-5 panel p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            {c.beyondLabel}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {c.beyond}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FitSection;
