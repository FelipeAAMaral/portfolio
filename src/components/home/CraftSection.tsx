/**
 * CraftSection — "O Ofício" / The Craft.
 * Replaces Manifesto. Signals alignment with high-bar engineering cultures (Apple, FAANG).
 * Focus: simplicity, technical depth, outcome over output.
 */
const CraftSection = () => {
    const blocks = [
        {
            number: "01",
            title: "Sobre Simplicidade",
            body: "O difícil não é adicionar features, é saber o que remover. Acredito em produtos que resolvem problemas complexos com interfaces enganosamente simples.",
        },
        {
            number: "02",
            title: "Sobre Profundidade Técnica",
            body: "A visão estratégica não sobrevive sem a realidade técnica. Minha base em computação me permite mergulhar na arquitetura, no banco de dados e nos modelos de IA para garantir que a promessa do produto seja tecnicamente viável.",
        },
        {
            number: "03",
            title: "Sobre Impacto, não Volume",
            body: "Não me impressiono com a quantidade de lançamentos, mas com o impacto mensurável que eles geram na vida do usuário e no P&L da empresa.",
        },
    ];

    return (
        <section
            id="craft"
            aria-label="O Ofício — Filosofia de trabalho"
            className="py-24 md:py-32 border-b border-border"
        >
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
                    {/* Left — sticky label */}
                    <div className="md:sticky md:top-28">
                        <p className="text-xs font-mono tracking-widest uppercase text-primary mb-4">
                            The Craft
                        </p>
                        <h2 className="font-serif text-display-md font-bold text-foreground leading-tight">
                            O Ofício
                        </h2>
                    </div>

                    {/* Right — three blocks */}
                    <div className="divide-y divide-border">
                        {blocks.map((b) => (
                            <article key={b.number} className="py-10 first:pt-0">
                                <div className="flex items-baseline gap-4 mb-3">
                                    <span className="font-mono text-xs text-muted-foreground/60">{b.number}</span>
                                    <h3 className="font-serif text-xl font-bold text-foreground">{b.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed pl-8">{b.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CraftSection;
