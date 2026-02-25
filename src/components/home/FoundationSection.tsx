/**
 * FoundationSection — Academic rigor. Clean and direct.
 */
const FoundationSection = () => {
    return (
        <section
            id="foundation"
            aria-label="Fundação Acadêmica — ICMC USP e Queen Mary University of London"
            className="py-24 md:py-32 border-b border-border"
        >
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
                    {/* Left */}
                    <div className="md:sticky md:top-28">
                        <p className="text-xs font-mono tracking-widest uppercase text-primary mb-4">
                            Fundação
                        </p>
                        <h2 className="font-serif text-display-md font-bold text-foreground leading-tight">
                            O pensamento estruturado começa na base.
                        </h2>
                    </div>

                    {/* Right — two universities */}
                    <div className="divide-y divide-border">
                        <article aria-label="Universidade de São Paulo — ICMC" className="pb-10">
                            <div className="flex items-start gap-5 mb-4">
                                <div className="w-10 h-10 rounded-sm bg-surface border border-border flex items-center justify-center shrink-0">
                                    <span className="font-serif font-bold text-primary text-sm">U</span>
                                </div>
                                <div>
                                    <a
                                        href="https://www.icmc.usp.br/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-foreground hover:text-primary transition-colors"
                                    >
                                        ICMC — Universidade de São Paulo
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-0.5">Bacharelado em Ciência da Computação</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-15">
                                Ciência da Computação. Onde aprendi a pensar algoritmicamente.
                            </p>
                        </article>

                        <article aria-label="Queen Mary University of London" className="pt-10">
                            <div className="flex items-start gap-5 mb-4">
                                <div className="w-10 h-10 rounded-sm bg-surface border border-border flex items-center justify-center shrink-0">
                                    <span className="font-serif font-bold text-secondary text-sm">Q</span>
                                </div>
                                <div>
                                    <a
                                        href="https://www.qmul.ac.uk/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-foreground hover:text-primary transition-colors"
                                    >
                                        Queen Mary University of London
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-0.5">Intercâmbio Acadêmico · Londres, UK</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Onde expandi a visão para o mercado global.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationSection;
