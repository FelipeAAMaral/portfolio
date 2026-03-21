import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    eyebrow: "About",
    headline: "The full story.",
    intro: "I'm Felipe Amaral — a product and technology leader with over 10 years building software. My career took me from software engineering to product leadership, giving me a rare combination of technical depth and business vision.",

    facts: (age: number) => [
      { label: "Age", value: `${age}` },
      { label: "From", value: "Araraquara, SP · Brazil" },
      { label: "Education", value: "CS · ICMC-USP + Queen Mary London" },
      { label: "Current role", value: "Head of Product · Pontotel" },
      { label: "Countries visited", value: "28+" },
    ],

    workEyebrow: "Work",
    workHeadline: "10 years. One company. An entire product org built from scratch.",
    workParagraphs: [
      "Currently Head of Product at Pontotel, a B2B HRTech SaaS company in Latin America, where I lead a 17-person product organization. I'm responsible for data-driven product management, Go-to-Market strategy, and cross-functional leadership across engineering, design, and commercial teams.",
      "Outside of Pontotel, I'm building Hearken — a product analytics tool born from a decade of PM frustrations. Disconnected surveys, response limits, event tracking too complex for real teams. Building it in public, from zero, because I believe great product leaders need skin in the game.",
    ],

    educationEyebrow: "Education",
    educationHeadline: "Built on strong technical foundations.",
    usp: {
      label: "2010 – 2015",
      title: "ICMC · Universidade de São Paulo",
      body: "Computer Science degree at one of Brazil's most rigorous technical universities. The foundation for everything that came after — from writing production code to understanding complex system architecture.",
    },
    qm: {
      label: "2013 – 2014 · Exchange",
      title: "Queen Mary University of London",
      body: "Academic exchange that opened my perspective to global product thinking. Living and studying in London shaped how I approach building products for international markets.",
    },

    rootsEyebrow: "Roots",
    rootsHeadline: "From the interior of São Paulo to the world.",
    rootsBody: "I grew up in Araraquara — a city in the interior of São Paulo state that taught me the value of consistency and long-term thinking. From there I went to São Carlos for university, then São Paulo for work, and eventually the world for everything else.",

    personalEyebrow: "Beyond work",
    personalHeadline: "Football, travel, and the belief that context shapes everything.",
    palmeiras: {
      label: "Palmeiras",
      title: "Lifelong Palmeiras supporter",
      body: "Not just a fan — the kind that plans vacations around matches. Watching Palmeiras compete on the world stage has taken me to places I'd never have visited otherwise. Football as a reason to explore.",
    },
    travel: {
      label: "28+ countries",
      title: "Travel as a way of thinking",
      body: "I've visited more than 28 countries — and each one changed how I think about product, users, and context. The best product decisions I've made came from understanding that what works in one market rarely works exactly the same way in another.",
    },

    photosEyebrow: "Moments",
  },

  pt: {
    eyebrow: "Sobre",
    headline: "A história completa.",
    intro: "Sou Felipe Amaral — líder de produto e tecnologia com mais de 10 anos construindo software. Minha carreira me levou da engenharia de software à liderança de produto, me dando uma combinação rara de profundidade técnica e visão de negócio.",

    facts: (age: number) => [
      { label: "Idade", value: `${age}` },
      { label: "De", value: "Araraquara, SP · Brasil" },
      { label: "Formação", value: "CC · ICMC-USP + Queen Mary London" },
      { label: "Cargo atual", value: "Head de Produto · Pontotel" },
      { label: "Países visitados", value: "28+" },
    ],

    workEyebrow: "Carreira",
    workHeadline: "10 anos. Uma empresa. Uma área de produto construída do zero.",
    workParagraphs: [
      "Atualmente Head de Produto na Pontotel, empresa de HRTech B2B SaaS na América Latina, onde lidero uma organização de produto de 17 pessoas. Sou responsável por gestão de produto orientada a dados, estratégia de Go-to-Market e liderança cross-functional entre times de engenharia, design e comercial.",
      "Fora da Pontotel, estou construindo o Hearken — uma ferramenta de product analytics nascida de uma década de frustrações como PM. Pesquisas desconectadas, limites de resposta, event tracking complexo demais para times reais. Construindo em público, do zero, porque acredito que grandes líderes de produto precisam ter skin in the game.",
    ],

    educationEyebrow: "Formação",
    educationHeadline: "Construído sobre bases técnicas sólidas.",
    usp: {
      label: "2010 – 2015",
      title: "ICMC · Universidade de São Paulo",
      body: "Graduação em Ciências da Computação em uma das universidades técnicas mais rigorosas do Brasil. A base para tudo que veio depois — de escrever código de produção a entender arquiteturas de sistemas complexos.",
    },
    qm: {
      label: "2013 – 2014 · Intercâmbio",
      title: "Queen Mary University of London",
      body: "Intercâmbio que abriu minha perspectiva para o pensamento global de produto. Viver e estudar em Londres moldou como abordo a construção de produtos para mercados internacionais.",
    },

    rootsEyebrow: "Origens",
    rootsHeadline: "Do interior de São Paulo para o mundo.",
    rootsBody: "Cresci em Araraquara — uma cidade no interior paulista que me ensinou o valor da constância e do pensamento de longo prazo. De lá fui para São Carlos pela universidade, depois São Paulo pelo trabalho, e eventualmente o mundo pelo resto.",

    personalEyebrow: "Além do trabalho",
    personalHeadline: "Futebol, viagem e a certeza de que contexto muda tudo.",
    palmeiras: {
      label: "Palmeiras",
      title: "Palmeirense de coração",
      body: "Não só torcedor — do tipo que planeja férias em volta de jogos. Ver o Palmeiras competir no cenário mundial já me levou a lugares que jamais visitaria de outra forma. Futebol como motivo para explorar.",
    },
    travel: {
      label: "28+ países",
      title: "Viagem como forma de pensar",
      body: "Já visitei mais de 28 países — e cada um mudou como penso sobre produto, usuários e contexto. As melhores decisões de produto que tomei vieram de entender que o que funciona em um mercado raramente funciona exatamente igual em outro.",
    },

    photosEyebrow: "Momentos",
  },
};

const getAge = () => {
  const today = new Date();
  const birthday = new Date(1991, 4, 21); // May 21, 1991
  let age = today.getFullYear() - birthday.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
  if (!hasBirthdayPassed) age--;
  return age;
};

const About = () => {
  const { language } = useLanguage();
  const c = content[language];
  const age = getAge();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="border-b border-border py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">{c.eyebrow}</p>
            <h1 className="font-serif text-display-lg text-foreground mb-8 leading-tight">
              {c.headline}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">{c.intro}</p>

            <div className="flex flex-wrap gap-3">
              {c.facts(age).map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.1rem] border border-border/80 bg-background/70 px-4 py-3"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="panel overflow-hidden w-56">
              <div className="aspect-[3/4]">
                <img
                  src="/assets-img/foto-perfil.jpg"
                  alt="Felipe Amaral"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work */}
      <div className="border-b border-border py-20 md:py-24">
        <div className="container max-w-3xl">
          <span className="eyebrow mb-6">{c.workEyebrow}</span>
          <h2 className="font-serif text-display-md text-foreground mb-8">{c.workHeadline}</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {c.workParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="border-b border-border bg-surface/55 py-20 md:py-24">
        <div className="container">
          <span className="eyebrow mb-6">{c.educationEyebrow}</span>
          <h2 className="font-serif text-display-md text-foreground mb-10">{c.educationHeadline}</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="panel p-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary mb-4">
                {c.usp.label}
              </p>
              <h3 className="font-serif text-3xl text-foreground mb-4">{c.usp.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.usp.body}</p>
            </article>

            <article className="panel p-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-secondary mb-4">
                {c.qm.label}
              </p>
              <h3 className="font-serif text-3xl text-foreground mb-4">{c.qm.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.qm.body}</p>
            </article>
          </div>
        </div>
      </div>

      {/* Roots */}
      <div className="border-b border-border py-20 md:py-24">
        <div className="container max-w-3xl">
          <span className="eyebrow mb-6">{c.rootsEyebrow}</span>
          <h2 className="font-serif text-display-md text-foreground mb-6">{c.rootsHeadline}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{c.rootsBody}</p>
        </div>
      </div>

      {/* Personal */}
      <div className="border-b border-border bg-surface/55 py-20 md:py-24">
        <div className="container">
          <span className="eyebrow mb-6">{c.personalEyebrow}</span>
          <h2 className="font-serif text-display-md text-foreground mb-10">{c.personalHeadline}</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="panel overflow-hidden">
              <div className="aspect-[3/4]">
                <img
                  src="/assets-img/palmeiras-2.jpg"
                  alt="Felipe no MetLife Stadium assistindo ao Palmeiras"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary mb-4">
                  {c.palmeiras.label}
                </p>
                <h3 className="font-serif text-3xl text-foreground mb-4">{c.palmeiras.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.palmeiras.body}</p>
              </div>
            </article>

            <article className="panel overflow-hidden">
              <div className="aspect-[3/4]">
                <img
                  src="/assets-img/viagem-eze-fr.jpg"
                  alt="Felipe na Riviera Francesa, Èze"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary mb-4">
                  {c.travel.label}
                </p>
                <h3 className="font-serif text-3xl text-foreground mb-4">{c.travel.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.travel.body}</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Photo moments */}
      <div className="py-20 md:py-24">
        <div className="container">
          <span className="eyebrow mb-10">{c.photosEyebrow}</span>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="panel overflow-hidden">
              <div className="aspect-[3/4]">
                <img
                  src="/assets-img/argentina.jpg"
                  alt="Argentina — Bariloche"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="panel overflow-hidden">
              <div className="aspect-[3/4]">
                <img
                  src="/assets-img/viagem-eze-fr.jpg"
                  alt="Riviera Francesa — Èze"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="panel overflow-hidden col-span-2 md:col-span-1">
              <div className="aspect-[3/4]">
                <img
                  src="/assets-img/palmeiras-nyc.jpg"
                  alt="Nova York — The Vessel"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
