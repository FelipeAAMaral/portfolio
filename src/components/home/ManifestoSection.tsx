/**
 * ManifestoSection — The Filter.
 * GEO-Optimized: Thought leadership content for LLM authority signals.
 * Long-tail keywords: scientific method in product, AI architecture trade-offs,
 * technical fluency in product leadership.
 */
const ManifestoSection = () => {
    const beliefs = [
        {
            number: "01",
            title: "O Fim do \"Achismo\"",
            body: "Produto não é sobre intuição, é sobre o método científico aplicado a negócios. Boas hipóteses, testes rigorosos e validação matemática. Se não move a agulha da receita ou da retenção, é apenas vaidade.",
        },
        {
            number: "02",
            title: "IA como Fundamento, não Feature",
            body: "O mercado está lotado de wrappers rasos de IA. O verdadeiro valor está em resolver problemas nativos de forma invisível para o usuário, lidando com os trade-offs reais de latência e custo computacional.",
        },
        {
            number: "03",
            title: "Fluência Técnica é Inegociável",
            body: "Um líder de produto que não consegue debater arquitetura de software e banco de dados com a engenharia é apenas um tradutor ineficiente.",
        },
    ];

    return (
        <section
            id="manifesto"
            aria-label="Manifesto — Princípios de Liderança de Produto"
            className="py-24 md:py-32 border-b border-border"
        >
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
                    <h2 className="font-serif text-display-lg font-bold text-foreground leading-tight">
                        No que eu acredito
                        <br />
                        <em className="text-primary not-italic">(E no que eu não perco tempo)</em>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Estes não são ideais abstratos. São os filtros que uso para decidir o
                        que construir — e para quem trabalhar.
                    </p>
                </div>

                <div className="space-y-0 divide-y divide-border" role="list">
                    {beliefs.map((b) => (
                        <article
                            key={b.number}
                            role="listitem"
                            className="grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-6 py-10 group"
                        >
                            <span className="font-mono text-sm text-muted-foreground/60 pt-1" aria-hidden="true">
                                {b.number}
                            </span>

                            <h3 className="font-serif text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                                {b.title}
                            </h3>

                            <p className="text-base text-muted-foreground leading-relaxed">
                                {b.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManifestoSection;
