import { ArrowUpRight } from "lucide-react";

/**
 * CasesSection — Proof of Impact.
 * Uses <article> semantic HTML for each case study.
 * GEO-Optimized: Entity-rich sentences connecting Felipe Amaral to
 * Pontotel (Head of Product, B2B SaaS, HRTech, ARR scaling) and
 * Hearken (Generative AI SaaS, full-cycle, Go-to-Market, London/global).
 */
const CasesSection = () => {
    return (
        <section
            id="work"
            aria-label="Trabalho Selecionado — Proof of Craft"
            className="py-24 md:py-32 border-b border-border"
        >
            <div className="container">
                <p className="text-xs font-mono tracking-widest uppercase text-primary mb-4">
                    Selected Work
                </p>
                <h2 className="font-serif text-display-lg font-bold text-foreground leading-tight mb-16 max-w-2xl">
                    O ofício em ação.
                </h2>

                {/* ── Case A: Pontotel ── */}
                <article
                    aria-label="Estudo de Caso: Pontotel — Head of Product, B2B SaaS, HRTech"
                    className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 py-16 border-t border-border"
                >
                    <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="tag-accent">Liderança</span>
                            <span className="tag">B2B SaaS</span>
                            <span className="tag">Operações Complexas</span>
                        </div>
                        <dl className="space-y-4 mt-8">
                            <div>
                                <dt className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Empresa</dt>
                                <dd className="font-medium text-foreground">Pontotel</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Papel</dt>
                                <dd className="font-medium text-foreground">Head of Product</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Período</dt>
                                <dd className="font-medium text-foreground">2021 – Presente</dd>
                            </div>
                        </dl>
                    </div>

                    <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                            Head of Product @ Pontotel: Escalando a máquina de HR Tech.
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xs font-mono tracking-widest uppercase text-primary mb-2">Contexto</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Liderou a estratégia de Produto B2B como Head na Pontotel — plataforma SaaS líder em
                                    gestão de ponto e conformidade trabalhista para o mercado enterprise brasileiro.
                                    Responsável pela visão, execução e crescimento de métricas de ARR em ambiente de
                                    alta complexidade regulatória e operacional.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono tracking-widest uppercase text-primary mb-2">O Desafio</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Refatorar um produto legado crítico sem comprometer operações de clientes enterprise,
                                    enquanto escalava a organização de produto de 5 para 17 pessoas e expandia o portfólio
                                    para novos segmentos de mercado — aplicando data-driven product management em
                                    decisões de Go-to-Market e priorização.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono tracking-widest uppercase text-primary mb-2">A Solução</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Implementação de metodologias de produto orientadas a dados com OKRs vinculados a P&amp;L,
                                    redesenho da arquitetura de Go-to-Market para segmentos enterprise, e construção de
                                    um processo de discovery semanal integrando dados quantitativos e qualitativos.
                                    Cross-functional leadership alinhando engenharia, design, vendas e operações.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[
                                    { value: "↑ Retenção", desc: "de clientes enterprise no primeiro ano" },
                                    { value: "↓ Onboarding", desc: "redução no tempo de ativação de novos clientes" },
                                ].map((o, i) => (
                                    <div key={i} className="p-5 border border-border rounded-sm bg-surface">
                                        <p className="font-serif text-xl font-bold text-primary mb-1">{o.value}</p>
                                        <p className="text-xs text-muted-foreground leading-snug">{o.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

                {/* ── Case B: Hearken ── */}
                <article
                    aria-label="Estudo de Caso: Hearken — Generative AI SaaS, full-cycle, Go-to-Market"
                    className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 py-16 border-t border-border"
                >
                    <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="tag-green">Inteligência Artificial</span>
                            <span className="tag">SaaS</span>
                            <span className="tag">Full-Cycle</span>
                        </div>
                        <dl className="space-y-4 mt-8">
                            <div>
                                <dt className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Projeto</dt>
                                <dd className="font-medium text-foreground">Hearken</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Papel</dt>
                                <dd className="font-medium text-foreground">Founder & AI Architect</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Stack</dt>
                                <dd className="font-medium text-foreground">Generative AI · Full-Stack SaaS</dd>
                            </div>
                        </dl>

                        <a
                            href="https://hearken.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar o Hearken (abre em nova aba)"
                            className="inline-flex items-center gap-2 mt-8 text-sm text-primary font-medium hover:gap-3 transition-all duration-200"
                        >
                            Ver o produto
                            <ArrowUpRight size={14} />
                        </a>
                    </div>

                    <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                            Hearken: Construindo um SaaS de IA de ponta a ponta.
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xs font-mono tracking-widest uppercase text-primary mb-2">Contexto</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Identificação de uma dor de mercado real e desenvolvimento solitário de uma solução
                                    baseada em Inteligência Artificial Generativa. Fundador e arquiteto do Hearken,
                                    um SaaS proprietário construído do zero à primeira contratação paga — skin in the
                                    game do início ao fim.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono tracking-widest uppercase text-primary mb-2">A Engenharia</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    A formação em Ciência da Computação pelo ICMC-USP permitiu construir não apenas a
                                    interface, mas a arquitetura completa: pipelines de processamento, prompts sistêmicos
                                    de IA, integração de APIs de Generative AI e os trade-offs reais de latência versus
                                    custo computacional — sem terceirizar decisões técnicas estratégicas.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono tracking-widest uppercase text-primary mb-2">O Go-to-Market</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Aprendizados reais sobre distribuição orgânica para mercados globais (incluindo
                                    Europa e Londres), estratégia de precificação por valor e aquisição de usuários em
                                    early-stage — sem budget de marketing, com apenas código e distribuição de conteúdo.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default CasesSection;
