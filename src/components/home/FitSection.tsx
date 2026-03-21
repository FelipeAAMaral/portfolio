const goodFit = [
  "Times B2B SaaS ou AI-native com produto em momento de evolução",
  "Contextos em que estratégia e detalhe técnico precisam conversar",
  "Operações com legado, compliance, GTM complexo ou muitos stakeholders",
  "Desafios que pedem uso responsável de IA no trabalho real",
];

const badFit = [
  "Feature factory sem ownership claro de produto",
  "Projetos que tratam IA só como vitrine",
  "Times que separam totalmente produto da realidade técnica",
  "Ambientes em que documentação, testes e revisão são vistos como atrito",
];

const FitSection = () => {
  return (
    <section
      id="fit"
      aria-label="Oportunidades em que Felipe Amaral gera mais valor"
      className="border-b border-border bg-surface/55 py-24 md:py-32"
    >
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow mb-6">Perfil</span>
          <h2 className="mb-5 font-serif text-display-lg text-foreground">
            Onde eu costumo contribuir melhor.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Eu costumo render melhor em desafios que pedem clareza, profundidade e senso de
            prioridade.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="panel p-6 md:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Contextos em que costumo contribuir mais
            </p>
            <div className="space-y-3">
              {goodFit.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-border/80 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="panel p-6 md:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Contextos em que talvez haja encaixe melhor
            </p>
            <div className="space-y-3">
              {badFit.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-border/80 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-5 panel p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Além do cargo</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Acho que uma visão mais pessoal ajuda, desde que ela diga algo real sobre a forma de
            trabalhar. No meu caso, viagens, montanha e futebol sempre reforçaram três traços que
            também levo para o trabalho: constância, leitura de contexto e energia para projetos
            de longo prazo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FitSection;
