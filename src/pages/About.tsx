
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, GraduationCap, Users, ArrowRight } from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  
  return (
    <div className="container py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">
        {language === 'en' ? 'About Me' : 'Sobre Mim'}
      </h1>

      {/* Professional Overview Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">🌟 {language === 'en' ? 'Professional Overview' : 'Visão Profissional'}</h2>
          </div>
          <div className="md:w-2/3 space-y-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-palmeiras-green/20 to-primary/30 blur"></div>
              <div className="relative aspect-square md:aspect-video overflow-hidden rounded-lg border bg-card">
                <img 
                  src="https://source.unsplash.com/random/800x800/?professional" 
                  alt="Felipe Amaral" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg">
              {language === 'en' ? 
                "Hi, I'm Felipe Amaral — a tech and product leader with over 10 years of experience in the software industry. My journey has taken me from writing code to leading cross-functional teams and shaping the future of HRTech solutions in Latin America." 
                : 
                "Olá, eu sou Felipe Amaral — um líder de tecnologia e produto com mais de 10 anos de experiência na indústria de software. Minha jornada me levou da escrita de código à liderança de equipes multifuncionais e à moldagem do futuro das soluções de HRTech na América Latina."}
            </p>
          </div>
        </div>
      </section>

      {/* Career Journey Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'en' ? '🧠 Career Journey' : '🧠 Jornada Profissional'}
            </h2>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Engineer to Product */}
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-1 bg-gradient-to-r from-palmeiras-green to-primary"></div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-palmeiras-light/20">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      {language === 'en' ? 'From Engineer to Product' : 'De Engenheiro a Produto'}
                    </h3>
                  </div>
                  <p className="mb-3">
                    {language === 'en' ? 
                      "I started my career as a Software Engineer, spending 5 years building robust systems, integrating APIs, and solving real-world technical challenges." 
                      : 
                      "Comecei minha carreira como Engenheiro de Software, passando 5 anos construindo sistemas robustos, integrando APIs e resolvendo desafios técnicos do mundo real."}
                  </p>
                  <p>
                    {language === 'en' ? 
                      "Over time, I found myself increasingly drawn to user problems, product discovery, and strategic decision-making — which led to my transition into Product." 
                      : 
                      "Com o tempo, me vi cada vez mais atraído por problemas de usuários, descoberta de produtos e tomada de decisões estratégicas — o que levou à minha transição para Produto."}
                  </p>
                </CardContent>
              </Card>
              
              {/* Head of Product */}
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-1 bg-gradient-to-r from-palmeiras-green to-primary"></div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-palmeiras-light/20">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      {language === 'en' ? 'Head of Product at Pontotel' : 'Head de Produto na Pontotel'}
                    </h3>
                  </div>
                  <p className="mb-3">
                    {language === 'en' ? 
                      "For the past 5 years, I've been the Head of Product at Pontotel, a B2B HRTech company focused on time & attendance and people management solutions." 
                      : 
                      "Nos últimos 5 anos, tenho sido Head de Produto na Pontotel, uma empresa B2B de HRTech focada em soluções de ponto eletrônico e gestão de pessoas."}
                  </p>
                  <p>
                    {language === 'en' ? 
                      "I lead a 17-person product org, including Product Owners, Managers, UX Designers, and QA Analysts. Our platform supports hundreds of companies across Brazil and LATAM." 
                      : 
                      "Lidero uma organização de produto de 17 pessoas, incluindo Product Owners, Managers, UX Designers e Analistas de QA. Nossa plataforma suporta centenas de empresas em todo o Brasil e América Latina."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What I've Built Section */}
      <section className="mb-16 bg-muted/30 py-10 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'en' ? '🏗️ What I\'ve Built and Led' : '🏗️ O Que Construí e Liderei'}
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-6">
              {language === 'en' ? 
                "At Pontotel, I've:" 
                : 
                "Na Pontotel, eu:"}
            </p>
            <ul className="space-y-4">
              {[
                language === 'en' ? "Structured the entire Product department from scratch" : "Estruturei todo o departamento de Produto do zero",
                language === 'en' ? "Implemented career frameworks, performance evaluations, and onboarding journeys" : "Implementei frameworks de carreira, avaliações de desempenho e jornadas de onboarding",
                language === 'en' ? "Adopted Shape Up and product analytics with PostHog" : "Adotei Shape Up e analytics de produto com PostHog",
                language === 'en' ? "Introduced AI-assisted processes to improve efficiency" : "Introduzi processos assistidos por IA para melhorar a eficiência",
                language === 'en' ? "Led initiatives in mobile UX, API integration, and compliance automation" : "Liderei iniciativas em UX mobile, integração de APIs e automação de compliance",
                language === 'en' ? "Organized product teams as \"UGBs\", inspired by Roman military units, with clear roles and focus areas" : "Organizei equipes de produto como \"UGBs\", inspiradas em unidades militares romanas, com funções e áreas de foco claras"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 bg-card p-3 rounded-lg border hover:shadow-sm transition-all">
                  <span className="text-primary font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'en' ? '💡 My Product Philosophy' : '💡 Minha Filosofia de Produto'}
            </h2>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                language === 'en' ? "Focus on outcomes, not outputs" : "Foco em resultados, não em entregas",
                language === 'en' ? "Empower small, autonomous teams" : "Capacitar equipes pequenas e autônomas",
                language === 'en' ? "Use frameworks like Shape Up to balance strategy and delivery" : "Usar frameworks como Shape Up para equilibrar estratégia e entrega",
                language === 'en' ? "Embrace data-informed decisions without losing sight of intuition" : "Abraçar decisões informadas por dados sem perder de vista a intuição",
                language === 'en' ? "Build with purpose, clarity, and user empathy" : "Construir com propósito, clareza e empatia pelo usuário"
              ].map((item, index) => (
                <div key={index} className="border rounded-lg p-5 bg-card hover:shadow-md transition-all flex items-center">
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16 bg-muted/30 py-10 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'en' ? '🛠️ Skills & Toolbox' : '🛠️ Habilidades & Ferramentas'}
            </h2>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Technical Skills */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    {language === 'en' ? 'Languages & Tech' : 'Linguagens & Tech'}
                  </h3>
                  <p className="text-muted-foreground">Python, FastAPI, HTMX, Keycloak, Docker</p>
                </CardContent>
              </Card>
              
              {/* Analytics & Ops */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    {language === 'en' ? 'Analytics & Ops' : 'Analytics & Operações'}
                  </h3>
                  <p className="text-muted-foreground">PostHog, Google Data Studio, Notion, Miro</p>
                </CardContent>
              </Card>
              
              {/* Product */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {language === 'en' ? 'Product' : 'Produto'}
                  </h3>
                  <p className="text-muted-foreground">Strategy, discovery, OKRs, UX, growth loops</p>
                </CardContent>
              </Card>
              
              {/* Leadership */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {language === 'en' ? 'Leadership' : 'Liderança'}
                  </h3>
                  <p className="text-muted-foreground">Coaching, cross-functional alignment, hiring, storytelling</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CPO Path Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'en' ? '🎯 On the Path to CPO' : '🎯 No Caminho para CPO'}
            </h2>
          </div>
          <div className="md:w-2/3 space-y-4">
            <p className="text-lg">
              {language === 'en' ? 
                "I'm actively working toward becoming a Chief Product Officer (CPO). This includes:" 
                : 
                "Estou trabalhando ativamente para me tornar um Chief Product Officer (CPO). Isso inclui:"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                language === 'en' ? "Deepening my financial and business acumen" : "Aprofundar meu conhecimento financeiro e de negócios",
                language === 'en' ? "Learning from founders, C-levels, and top product minds" : "Aprender com fundadores, C-levels e grandes mentes de produto",
                language === 'en' ? "Investing in team development and culture" : "Investir no desenvolvimento de equipe e cultura",
                language === 'en' ? "Sharing my journey through writing and mentoring" : "Compartilhar minha jornada através da escrita e mentoria"
              ].map((item, index) => (
                <div key={index} className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More About Me Section */}
      <section className="mb-16 bg-muted/30 py-10 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'en' ? '✍️ A Bit More About Me' : '✍️ Um Pouco Mais Sobre Mim'}
            </h2>
          </div>
          <div className="md:w-2/3 space-y-4">
            <ul className="space-y-3">
              {[
                { icon: <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />, text: language === 'en' ? "I publish reflections on product leadership on Medium" : "Publico reflexões sobre liderança de produto no Medium" },
                { icon: <Code className="h-5 w-5 text-primary flex-shrink-0" />, text: language === 'en' ? "I built my portfolio website using Astro and Netlify, with bilingual content" : "Construí meu site de portfólio usando Astro e Netlify, com conteúdo bilíngue" },
                { icon: <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />, text: language === 'en' ? "I'm a big fan of Palmeiras and green color palettes 💚" : "Sou um grande fã do Palmeiras e paletas de cores verdes 💚" },
                { icon: <Users className="h-5 w-5 text-primary flex-shrink-0" />, text: language === 'en' ? "I believe the best products start with a genuine interest in helping people" : "Acredito que os melhores produtos começam com um interesse genuíno em ajudar as pessoas" }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border hover:shadow-sm transition-all">
                  {item.icon}
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Let's Build Together */}
      <section className="mt-12 bg-card border p-8 rounded-xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            {language === 'en' ? '🤝 Let\'s Build Together' : '🤝 Vamos Construir Juntos'}
          </h2>
          <p className="text-lg mb-8">
            {language === 'en' ? 
              "Thanks for reading my story. Whether you're building a product, scaling a team, or navigating your own journey, I'm always open to exchange ideas and collaborate." 
              : 
              "Obrigado por ler minha história. Se você está construindo um produto, escalando uma equipe ou navegando em sua própria jornada, estou sempre aberto para trocar ideias e colaborar."}
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors">
            {language === 'en' ? 'Get in Touch' : 'Entre em Contato'}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
