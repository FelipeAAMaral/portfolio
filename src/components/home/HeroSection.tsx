import { ArrowRight } from "lucide-react";

const proofPoints = [
  "Pontotel desde 2015",
  "De desenvolvimento à liderança de produto",
  "Start, PMF, growth e maturidade",
  "Hoje aprofundando IA aplicada a produto",
];

const operatingContext = [
  "Head of Product na Pontotel",
  "Trajetória construída entre desenvolvimento e produto",
  "Hearken como iniciativa em construção",
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-label="Apresentação de Felipe Amaral"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 opacity-70 soft-grid" aria-hidden="true" />

      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-16 py-24 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="eyebrow mb-8">Produto · tecnologia · execução</span>

          <h1 className="mb-8 max-w-4xl font-serif text-display-xl text-foreground">
            Construindo produto com{" "}
            <span className="text-gradient-primary">visão, profundidade e continuidade.</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Sou Felipe Amaral. Estou na Pontotel desde 2015, com uma trajetória que começou em
            desenvolvimento e depois seguiu para a criação e liderança da área de produto.
            Hoje, além desse trabalho, tenho dedicado parte do meu foco a IA aplicada a produto.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            {proofPoints.map((item) => (
              <span key={item} className="proof-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="btn-accent">
              Ver trajetória
              <ArrowRight size={16} />
            </a>
            <a href="#system" className="btn-ghost">
              Como eu trabalho
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="panel overflow-hidden">
            <img
              src="/assets-img/9b58c456-6538-4179-9b48-28e9ca475eaf.png"
              alt="Felipe Amaral em ambiente natural na Patagônia"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="panel mt-4 p-6">
            <div className="mb-4">
              <span className="eyebrow before:w-5">Hoje</span>
            </div>

            <div className="space-y-3">
              {operatingContext.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 block h-2 w-2 rounded-full bg-primary/80" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 border-t border-border/80 pt-4 text-sm leading-relaxed text-foreground/86">
              O Hearken entra aqui como um espaço de estudo e construção pública, sem tratar ideia
              como produto pronto antes da hora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
