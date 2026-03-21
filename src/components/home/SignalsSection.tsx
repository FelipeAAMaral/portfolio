import { ArrowUpRight } from "lucide-react";

const signalCards = [
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
    body: "Aprofundar IA aplicada a produto de forma prática, com construção pública e aprendizado contínuo.",
  },
];

const quickLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipeaamaral/",
  },
  {
    label: "GitHub",
    href: "https://github.com/FelipeAAMaral",
  },
  {
    label: "Substack em breve",
  },
];

const SignalsSection = () => {
  return (
    <section
      id="signals"
      aria-label="Formação, contexto profissional e links"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow mb-6">Contexto</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">
            Base, trajetória e foco atual.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Esses pontos ajudam a entender de onde vem meu repertório e para onde tenho direcionado
            meu trabalho e estudo nos últimos anos.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {signalCards.map((card) => (
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
              Links principais
            </p>
            <h3 className="mb-4 font-serif text-4xl text-foreground">Onde me acompanhar.</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              LinkedIn para trajetória, GitHub para código e Substack como futuro espaço principal
              para escrita e build in public.
            </p>

            <div className="space-y-3">
              {quickLinks.map((link) =>
                link.href ? (
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
                ) : (
                  <div
                    key={link.label}
                    className="flex items-center justify-between rounded-[1.1rem] border border-border/80 bg-card/90 px-4 py-4 text-sm text-muted-foreground"
                  >
                    <span>{link.label}</span>
                  </div>
                ),
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SignalsSection;
