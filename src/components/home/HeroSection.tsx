/**
 * HeroSection — FAANG/Apple positioning.
 * Elegant, minimalist. No metrics bar — let the cases speak.
 */
const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-label="Apresentação — Felipe Amaral, Head of Product & AI Builder"
      className="min-h-[92vh] flex flex-col justify-center py-28 md:py-36 border-b border-border"
    >
      <div className="container max-w-4xl">
        {/* Label */}
        <p className="text-xs font-mono tracking-widest uppercase text-primary mb-10">
          Head of Product & AI Builder
        </p>

        {/* H1 — the statement */}
        <h1 className="font-serif text-display-xl font-bold text-foreground leading-tight mb-6">
          Simplicidade
          <br />
          <em className="not-italic text-primary">na complexidade.</em>
        </h1>

        {/* H2 — the elaboration */}
        <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-14 max-w-2xl font-normal">
          Liderando produtos que unem o rigor da Ciência da Computação à estratégia de negócios global.
        </h2>

        {/* Single CTA */}
        <a href="#work" className="btn-accent">
          Ver o trabalho selecionado
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
