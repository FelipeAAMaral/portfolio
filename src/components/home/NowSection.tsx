import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    eyebrow: "Now",
    headline: "What I'm focused on right now.",
    doing: {
      label: "What I'm doing",
      items: [
        {
          title: "Head of Product · Pontotel",
          body: "Leading a 17-person product org through our next growth phase. Current focus: AI-native features in HRTech and further maturing our squad model.",
        },
        {
          title: "Building Hearken",
          body: "Starting from zero — designing the problem space, validating pain points, and writing about it publicly. Follow the build on Substack.",
        },
        {
          title: "Writing & mentoring",
          body: "Publishing on Substack about product thinking, building AI products, and the eng-to-PM path. Also mentoring PMs and engineers in transition.",
        },
      ],
    },
    looking: {
      label: "What I'm open to",
      items: [
        {
          title: "International product leadership roles",
          body: "Head of Product or VP Product at a B2B SaaS or AI-native company. Preferably Series A–C, where the org-building work still matters.",
        },
        {
          title: "Remote-first or relocation",
          body: "Open to fully remote positions or relocation to Europe or North America. Based in Brazil (UTC−3).",
        },
        {
          title: "Advisory & fractional work",
          body: "Selectively open to advisory roles for early-stage companies navigating the engineering-to-product transition.",
        },
      ],
    },
    cta: {
      label: "Want to connect?",
      body: "If your company is building something in B2B SaaS or AI and you think there's a fit — I'd love to hear about it.",
      primary: "Get in touch",
      secondary: "View my Substack",
    },
  },

  pt: {
    eyebrow: "Agora",
    headline: "No que estou focado agora.",
    doing: {
      label: "O que estou fazendo",
      items: [
        {
          title: "Head de Produto · Pontotel",
          body: "Liderando um time de produto com 17 pessoas na próxima fase de crescimento. Foco atual: features AI-native em HRTech e maturação do modelo de squads.",
        },
        {
          title: "Construindo o Hearken",
          body: "Partindo do zero — desenhando o espaço do problema, validando dores e escrevendo sobre isso em público. Acompanhe a construção no Substack.",
        },
        {
          title: "Escrevendo e mentorando",
          body: "Publicando no Substack sobre pensamento de produto, construção de produtos AI e a transição de eng para PM. Também mentoro PMs e engenheiros em transição.",
        },
      ],
    },
    looking: {
      label: "O que estou aberto a explorar",
      items: [
        {
          title: "Lideranças de produto internacionais",
          body: "Head of Product ou VP Product em empresa de B2B SaaS ou AI-native. Preferencialmente Series A–C, onde o trabalho de construção de organização ainda importa.",
        },
        {
          title: "Remoto ou relocação",
          body: "Aberto a posições 100% remotas ou relocação para Europa ou América do Norte. Baseado no Brasil (UTC−3).",
        },
        {
          title: "Advisory e trabalho fracionado",
          body: "Seletivamente aberto a papéis de advisory em empresas em estágio inicial navegando a transição de engenharia para produto.",
        },
      ],
    },
    cta: {
      label: "Quer conversar?",
      body: "Se sua empresa está construindo algo em B2B SaaS ou AI e você acha que há encaixe — adoraria ouvir sobre isso.",
      primary: "Entre em contato",
      secondary: "Ver meu Substack",
    },
  },
};

const NowSection = () => {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <section
      id="now"
      aria-label={c.eyebrow}
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow mb-6">{c.eyebrow}</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">{c.headline}</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* What I'm doing */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              {c.doing.label}
            </p>
            {c.doing.items.map((item) => (
              <article
                key={item.title}
                className="panel p-6"
              >
                <p className="mb-2 font-sans text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>

          {/* What I'm open to */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              {c.looking.label}
            </p>
            {c.looking.items.map((item) => (
              <article
                key={item.title}
                className="panel p-6 border-primary/20"
              >
                <p className="mb-2 font-sans text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 panel bg-surface/55 p-8 md:p-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">
            {c.cta.label}
          </p>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {c.cta.body}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-accent">
              {c.cta.primary}
              <ArrowRight size={16} />
            </a>
            <a
              href="https://substack.com/@felipeaamaral"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {c.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowSection;
