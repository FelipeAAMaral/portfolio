import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const quickLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/felipeaamaral/" },
  { label: "GitHub", href: "https://github.com/FelipeAAMaral" },
  { label: "Substack", href: "https://substack.com/@felipeaamaral" },
];

const content = {
  en: {
    eyebrow: "Background",
    headline: "Foundation, trajectory, and current focus.",
    description:
      "These points help explain where my product intuition comes from and where I've been directing my work and learning over the past few years.",
    cards: [
      {
        title: "Technical foundation",
        body: "Computer Science degree from ICMC-USP and exchange at Queen Mary University of London.",
      },
      {
        title: "10 years at Pontotel",
        body: "A trajectory that started in software development and evolved into founding and leading the product function.",
      },
      {
        title: "Current focus",
        body: "Building AI-native product capabilities in practice — through Hearken, public writing, and hands-on experimentation.",
      },
    ],
    linksLabel: "Find me at",
    linksHeadline: "Where to follow my work.",
    linksDescription:
      "LinkedIn for career updates, GitHub for code, and Substack for product thinking and building in public.",
  },

  pt: {
    eyebrow: "Contexto",
    headline: "Base, trajetória e foco atual.",
    description:
      "Esses pontos ajudam a entender de onde vem meu repertório e para onde tenho direcionado meu trabalho e estudo nos últimos anos.",
    cards: [
      {
        title: "Base técnica",
        body: "Formação em Ciência da Computação no ICMC-USP e intercâmbio na Queen Mary University of London.",
      },
      {
        title: "Pontotel desde 2015",
        body: "Uma trajetória que começou em desenvolvimento e evoluiu para criação e liderança da área de produto.",
      },
      {
        title: "Foco atual",
        body: "Construindo capacidades AI-native de produto na prática — através do Hearken, escrita pública e experimentação real.",
      },
    ],
    linksLabel: "Links principais",
    linksHeadline: "Onde me acompanhar.",
    linksDescription:
      "LinkedIn para trajetória, GitHub para código e Substack para escrita e build in public.",
  },
};

const SignalsSection = () => {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <section
      id="signals"
      aria-label={c.eyebrow}
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow mb-6">{c.eyebrow}</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">{c.headline}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{c.description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {c.cards.map((card) => (
              <article key={card.title} className="panel p-6 md:p-7">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  {card.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>

          <aside className="panel soft-grid p-6 md:p-7">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              {c.linksLabel}
            </p>
            <h3 className="mb-4 font-serif text-4xl text-foreground">{c.linksHeadline}</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {c.linksDescription}
            </p>

            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-[1.1rem] border border-border/80 bg-card/90 px-4 py-4 text-sm transition-colors duration-200 hover:bg-background"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={15} className="text-primary" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SignalsSection;
