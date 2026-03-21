const pontotelReceipts = [
  { value: "2015 -> hoje", label: "uma trajetória longa dentro da mesma empresa" },
  { value: "Dev -> Produto", label: "visão construída dos dois lados da entrega" },
  { value: "Start -> Growth", label: "experiência nas diferentes fases da startup" },
];

const pontotelJourney = [
  {
    phase: "2015 · Desenvolvimento",
    body: "Entrei na Pontotel em uma fase inicial e participei, junto com o time, da construção da base técnica do produto.",
  },
  {
    phase: "Start e PMF",
    body: "Vivi o período em que a prioridade era construir, aprender rápido com o mercado e ajustar a direção do produto com a empresa ainda encontrando seu encaixe.",
  },
  {
    phase: "Growth",
    body: "Com a operação ganhando escala, ficou mais claro o peso de temas como priorização, consistência da experiência e conexão entre entrega e valor de negócio.",
  },
  {
    phase: "Criação da área de produto",
    body: "A necessidade de uma frente de produto mais estruturada apareceu nesse contexto. Participei dessa construção e depois assumi a liderança da área.",
  },
  {
    phase: "Hoje",
    body: "Como Head of Product, carrego a perspectiva de quem acompanhou a empresa em diferentes fases e entende como produto, tecnologia e operação se cruzam no dia a dia.",
  },
];

const currentFocus = [
  { value: "Em construção", label: "Hearken como iniciativa, não como case fechado" },
  { value: "Build in public", label: "escrita como parte do processo de aprendizado" },
  { value: "Foco atual", label: "aprofundar IA aplicada a produto com prática real" },
];

const CasesSection = () => {
  return (
    <section
      id="work"
      aria-label="Trajetória e foco atual"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow mb-6">Trajetória</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">
            Uma carreira construída por fases.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            O que melhor representa minha experiência é a combinação entre profundidade técnica,
            evolução de produto e participação contínua em diferentes momentos de uma mesma empresa.
          </p>
        </div>

        <div className="space-y-8">
          <article className="panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.45fr]">
              <div className="soft-grid border-b border-border/80 p-8 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="tag-accent">Pontotel</span>
                  <span className="tag">HRTech</span>
                  <span className="tag">B2B SaaS</span>
                </div>

                <h3 className="mb-4 font-serif text-4xl text-foreground">Pontotel, de 2015 até hoje</h3>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  A minha história na Pontotel não é sobre um único cargo. É sobre ter acompanhado,
                  ao lado do time, a evolução da empresa desde a base técnica até a liderança de produto.
                </p>

                <div className="space-y-3">
                  {pontotelReceipts.map((item) => (
                    <div
                      key={item.label}
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
                  {pontotelJourney.map((item) => (
                    <div key={item.phase} className="grid gap-2 border-b border-border/70 pb-5 last:border-b-0 last:pb-0">
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

          <article className="panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.45fr]">
              <div className="soft-grid border-b border-border/80 p-8 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="tag-green">Foco atual</span>
                  <span className="tag">IA aplicada</span>
                  <span className="tag">Build in public</span>
                </div>

                <h3 className="mb-4 font-serif text-4xl text-foreground">Hearken e meu caminho em IA</h3>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  O Hearken hoje é uma iniciativa em construção. Mais do que apresentar isso como um
                  produto pronto, prefiro tratá-lo como um espaço para estudar, construir e publicar
                  aprendizados de forma honesta.
                </p>

                <div className="space-y-3">
                  {currentFocus.map((item) => (
                    <div
                      key={item.label}
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
                  <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                      O ponto de partida
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Meu interesse por IA é real, mas ainda em fase de aprofundamento. Quero que
                      essa parte da minha trajetória seja construída com prática e não só com discurso.
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                      Como eu quero fazer
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Usando o Hearken como iniciativa de build in public e levando parte desse
                      processo para escrita pública, com o Substack como próximo passo natural.
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                      O objetivo
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Sair do interesse genérico por IA e construir repertório próprio em produto,
                      operação e uso prático da tecnologia ao longo do tempo.
                    </p>
                  </div>
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
