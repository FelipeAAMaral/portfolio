import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    eyebrow: "Work",
    headline: "A career built through compounding decisions.",
    subheadline:
      "What best represents my experience is the combination of technical depth, product evolution, and continuous participation across every stage of the same company.",

    pontotel: {
      tags: ["Pontotel", "HRTech", "B2B SaaS"],
      title: "Pontotel, 2015 – present",
      description:
        "My story at Pontotel isn't about a single role. It's about building the product function from the ground up — starting as a developer and ending up as the person who designed how the company ships product.",
      receipts: [
        { value: "10x", label: "delivery throughput — from 2 projects/semester to 26/year" },
        { value: "NPS 30→50+", label: "from passive zone to active promoters" },
        { value: "−70%", label: "reduction in support tickets" },
        { value: "0→17", label: "product team built from scratch" },
      ],
      journey: [
        {
          phase: "2015 · Software Engineer",
          body: "Joined Pontotel in early stage. Led the integrations architecture with payroll systems and built the first public APIs (FastAPI) that enabled third-party integrations — decisions that shaped the technical foundation for years.",
        },
        {
          phase: "2020 · Founded the Product Area",
          body: "Identified the need for a structured product function. Started with myself and 2 designers — defined processes, rituals, and product culture from zero.",
        },
        {
          phase: "2021 · Scaled the PM Function",
          body: "Grew the team by hiring PMs and POs. Introduced formal discovery, roadmap ownership, and a clear separation between sustaining work and strategic product development.",
        },
        {
          phase: "2023 · DDD Squad Structure",
          body: "Reorganized teams around business contexts (Domain-Driven Design). Each squad — PM, PO, QA, UX — owns the full product lifecycle for its domain. The shift ended the sustain/feature split and unlocked 10x throughput.",
        },
        {
          phase: "Today · Head of Product",
          body: "Leading a 17-person product org. My edge is carrying the perspective of someone who has been in the room at every stage — from writing the first lines of code to designing the org that ships them.",
        },
      ],
    },

    hearken: {
      tags: ["Hearken", "AI · SaaS", "Building in public"],
      title: "Hearken",
      description:
        "After 10 years as a PM, I kept hitting the same walls: disconnected research, survey response limits, event tracking tools too complex for the team to actually use. Hearken is my attempt to fix that.",
      focus: [
        { value: "The problem", label: "Surveys disconnected from analytics. Event tracking too complex. No unified picture of user behavior." },
        { value: "The bet", label: "A PostHog-accessible alternative — connected research and tracking in one place, without the setup overhead." },
        { value: "Right now", label: "Building in public. Following the same process I've refined over 10 years of product work." },
      ],
      columns: [
        {
          label: "The starting point",
          body: "10 years as a PM gave me a very specific frustration. I'm building Hearken because I know the problem firsthand — not because it looked like a good market.",
        },
        {
          label: "How I'm building",
          body: "Public from day one. Every decision, dead end, and pivot will be documented on Substack. The build process is the content.",
        },
        {
          label: "The goal",
          body: "A tool that actually fits how small product teams work — lightweight enough to adopt, powerful enough to matter.",
        },
      ],
    },
  },

  pt: {
    eyebrow: "Trajetória",
    headline: "Uma carreira construída por fases.",
    subheadline:
      "O que melhor representa minha experiência é a combinação entre profundidade técnica, evolução de produto e participação contínua nos diferentes momentos de uma mesma empresa.",

    pontotel: {
      tags: ["Pontotel", "HRTech", "B2B SaaS"],
      title: "Pontotel, 2015 – hoje",
      description:
        "Minha história na Pontotel não é sobre um único cargo. É sobre construir a área de produto do zero — começando como desenvolvedor e chegando até quem desenhou como a empresa entrega produto.",
      receipts: [
        { value: "10x", label: "throughput de entrega — de 2 projetos/semestre para 26/ano" },
        { value: "NPS 30→50+", label: "da zona passiva para promotores ativos" },
        { value: "−70%", label: "redução em tickets de suporte" },
        { value: "0→17", label: "time de produto construído do zero" },
      ],
      journey: [
        {
          phase: "2015 · Engenheiro de Software",
          body: "Entrei na Pontotel em fase inicial. Liderei a arquitetura de integrações com sistemas de folha de pagamento e construí as primeiras APIs públicas (FastAPI) para integração com terceiros — decisões que moldaram a base técnica por anos.",
        },
        {
          phase: "2020 · Criação da Área de Produto",
          body: "Identifiquei a necessidade de uma frente de produto estruturada. Comecei com eu mesmo e 2 designers — defini processos, rituais e cultura de produto do zero.",
        },
        {
          phase: "2021 · Crescimento da Função de PM",
          body: "Cresci o time contratando PMs e POs. Introduzi discovery formal, ownership de roadmap e separação clara entre sustentação e desenvolvimento estratégico de produto.",
        },
        {
          phase: "2023 · Estrutura de Squads por DDD",
          body: "Reorganizei os times em torno de contextos de negócio (Domain-Driven Design). Cada squad — PM, PO, QA, UX — é dono do ciclo completo de produto do seu domínio. A mudança encerrou a lógica de sustentação/funcionalidade e desbloqueou 10x de throughput.",
        },
        {
          phase: "Hoje · Head of Product",
          body: "Liderando um time de produto com 17 pessoas. Meu diferencial é carregar a perspectiva de quem esteve em todas as fases — desde escrever as primeiras linhas de código até desenhar o time que as entrega.",
        },
      ],
    },

    hearken: {
      tags: ["Hearken", "IA · SaaS", "Build in public"],
      title: "Hearken",
      description:
        "Depois de 10 anos como PM, sempre esbarrei nos mesmos problemas: pesquisas desconectadas do analytics, limites de resposta, ferramentas de event tracking complexas demais para o time usar de verdade. O Hearken é minha tentativa de resolver isso.",
      focus: [
        { value: "O problema", label: "Pesquisas desconectadas do analytics. Event tracking complexo. Nenhuma visão unificada do comportamento do usuário." },
        { value: "A aposta", label: "Uma alternativa mais acessível ao PostHog — pesquisa e tracking conectados em um lugar só, sem o overhead de setup." },
        { value: "Agora", label: "Construindo em público. Seguindo o mesmo processo que refinei em 10 anos de trabalho de produto." },
      ],
      columns: [
        {
          label: "O ponto de partida",
          body: "10 anos como PM me deram uma frustração bem específica. Estou construindo o Hearken porque conheço o problema de dentro — não porque pareceu um bom mercado.",
        },
        {
          label: "Como estou construindo",
          body: "Público desde o dia um. Cada decisão, beco sem saída e pivô será documentado no Substack. O processo de construção é o conteúdo.",
        },
        {
          label: "O objetivo",
          body: "Uma ferramenta que realmente se encaixa na forma como times de produto pequenos trabalham — leve o suficiente para adotar, poderosa o suficiente para importar.",
        },
      ],
    },
  },
};

const CasesSection = () => {
  const { t, language } = useLanguage();
  const c = content[language];

  return (
    <section
      id="work"
      aria-label={c.eyebrow}
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow mb-6">{c.eyebrow}</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">{c.headline}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{c.subheadline}</p>
        </div>

        <div className="space-y-8">
          {/* Pontotel Case */}
          <article className="panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.45fr]">
              <div className="soft-grid border-b border-border/80 p-8 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex flex-wrap gap-2">
                  {c.pontotel.tags.map((tag, i) => (
                    <span key={tag} className={i === 0 ? "tag-accent" : "tag"}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-4 font-serif text-4xl text-foreground">{c.pontotel.title}</h3>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  {c.pontotel.description}
                </p>

                <div className="space-y-3">
                  {c.pontotel.receipts.map((item) => (
                    <div
                      key={item.value}
                      className="rounded-[1.2rem] border border-border/80 bg-background/70 p-4"
                    >
                      <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="space-y-6">
                  {c.pontotel.journey.map((item) => (
                    <div
                      key={item.phase}
                      className="grid gap-2 border-b border-border/70 pb-5 last:border-b-0 last:pb-0"
                    >
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                        {item.phase}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Hearken Case */}
          <article className="panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.45fr]">
              <div className="soft-grid border-b border-border/80 p-8 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex flex-wrap gap-2">
                  {c.hearken.tags.map((tag, i) => (
                    <span key={tag} className={i === 0 ? "tag-green" : "tag"}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-4 font-serif text-4xl text-foreground">{c.hearken.title}</h3>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  {c.hearken.description}
                </p>

                <div className="space-y-3">
                  {c.hearken.focus.map((item) => (
                    <div
                      key={item.value}
                      className="rounded-[1.2rem] border border-border/80 bg-background/70 p-4"
                    >
                      <p className="font-mono text-sm uppercase tracking-[0.18em] text-secondary">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="grid gap-8 md:grid-cols-3">
                  {c.hearken.columns.map((col) => (
                    <div key={col.label}>
                      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                        {col.label}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{col.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
