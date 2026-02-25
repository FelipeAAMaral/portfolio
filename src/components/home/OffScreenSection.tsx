/**
 * OffScreenSection — "Fora da Tela" / The Human Element.
 * Goal: "Culture Add" for FAANG. Shows resilience, curiosity, and passion.
 * Elegant nods to trekking, travel, and Palmeiras (SEP).
 */
const OffScreenSection = () => {
    const items = [
        {
            icon: "↑",
            theme: "Trekking",
            label: "Resiliência",
            body: "Aprecio a disciplina da altitude. O trekking em montanhas me ensinou que a vista mais limpa só vem depois da subida mais difícil e do planejamento meticuloso. Trago essa resiliência para projetos de longo prazo.",
        },
        {
            icon: "→",
            theme: "Viagens",
            label: "Curiosidade",
            body: "Curioso por padrão. Minhas viagens não são apenas pausas, são estudos de campo antropológicos. Entender contextos culturais diversos é pré-requisito para construir produtos globais.",
        },
        {
            icon: "♦",
            theme: "Paixão",
            label: "SEP",
            body: "Movido a paixão intensa. A mesma energia que dedico à estratégia, eu reservo para a arquibancada (SEP). Entender o que move o comportamento humano irracional e leal é uma aula de psicologia do usuário.",
        },
    ];

    return (
        <section
            id="offscreen"
            aria-label="Fora da Tela — O elemento humano"
            className="py-24 md:py-32 border-b border-border bg-surface"
        >
            <div className="container">
                <p className="text-xs font-mono tracking-widest uppercase text-primary mb-4">
                    Off-Screen
                </p>
                <h2 className="font-serif text-display-md font-bold text-foreground leading-tight mb-4">
                    Fora da Tela
                </h2>
                <p className="text-muted-foreground text-lg mb-16 max-w-lg">
                    O equilíbrio alimenta a performance. Minha abordagem ao produto é informada pelo que vivo fora do escritório.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
                    {items.map((item) => (
                        <article key={item.theme} className="py-8 md:py-0 md:px-10 first:pl-0 last:pr-0">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-primary font-serif text-2xl leading-none" aria-hidden="true">
                                    {item.icon}
                                </span>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">{item.theme}</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {item.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffScreenSection;
