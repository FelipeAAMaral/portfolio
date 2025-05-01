
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, GraduationCap, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { t, language } = useLanguage();

  // Sample featured works
  const featuredWorks = [
    {
      id: 1,
      title: "Product Strategy in HRTech",
      description: "An exploration of modern product strategy techniques and best practices for HRTech companies.",
      image: "https://source.unsplash.com/random/800x600/?product",
      category: "Blog",
      link: "/blog/product-strategy"
    },
    {
      id: 2,
      title: "Career Growth in Product",
      description: "Strategies and insights for growing your career in product management based on my experience.",
      image: "https://source.unsplash.com/random/800x600/?career",
      category: "Mentorship",
      link: "/mentorship"
    },
    {
      id: 3,
      title: "Building Efficient Product Teams",
      description: "My talk on creating product teams that are efficient and deliver value, showcasing practical techniques.",
      image: "https://source.unsplash.com/random/800x600/?team",
      category: "Speaking",
      link: "/speaking"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-palmeiras-light text-primary px-4 py-1 rounded-full text-sm font-medium mb-2">
                {t('hero.greeting')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Felipe Amaral
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {t('hero.intro')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">
                    {t('contact.title')}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">
                    {t('about.title')}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-palmeiras-green/20 to-primary/30 blur"></div>
                <div className="relative aspect-square overflow-hidden rounded-lg border bg-card">
                  <img 
                    src="https://source.unsplash.com/random/600x600/?person" 
                    alt="Felipe Amaral" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <span>Scroll for more</span>
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Overview Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🌟 {language === 'en' ? 'Professional Overview' : 'Visão Profissional'}</h2>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-lg">
                {language === 'en' ? 
                  "Hi, I'm Felipe Amaral — a tech and product leader with over 10 years of experience in the software industry. My journey has taken me from writing code to leading cross-functional teams and shaping the future of HRTech solutions in Latin America." 
                  : 
                  "Olá, eu sou Felipe Amaral — um líder de tecnologia e produto com mais de 10 anos de experiência na indústria de software. Minha jornada me levou da escrita de código à liderança de equipes multifuncionais e à moldagem do futuro das soluções de HRTech na América Latina."}
              </p>
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    {language === 'en' ? 'Download Resume' : 'Baixar Currículo'}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {language === 'en' ? 'My Career Journey' : 'Minha Jornada Profissional'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* From Software Engineer to Product */}
            <div className="bg-card p-6 rounded-xl shadow-sm border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-palmeiras-light/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {language === 'en' ? 'From Software Engineer to Product Strategist' : 'De Engenheiro de Software a Estrategista de Produto'}
                </h3>
              </div>
              <p>
                {language === 'en' ? 
                  "I started my career as a Software Engineer, spending 5 years building robust systems, integrating APIs, and solving real-world technical challenges. Over time, I found myself increasingly drawn to user problems, product discovery, and strategic decision-making — which led to my transition into Product." 
                  : 
                  "Comecei minha carreira como Engenheiro de Software, passando 5 anos construindo sistemas robustos, integrando APIs e resolvendo desafios técnicos do mundo real. Com o tempo, me vi cada vez mais atraído por problemas de usuários, descoberta de produtos e tomada de decisões estratégicas — o que levou à minha transição para Produto."}
              </p>
            </div>
            
            {/* Head of Product Role */}
            <div className="bg-card p-6 rounded-xl shadow-sm border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-palmeiras-light/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {language === 'en' ? 'Head of Product at Pontotel' : 'Head de Produto na Pontotel'}
                </h3>
              </div>
              <p className="mb-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* What I've Built Section */}
      <section className="py-16 bg-background">
        <div className="container">
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
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  {language === 'en' ? 
                    "Structured the entire Product department from scratch" 
                    : 
                    "Estruturei todo o departamento de Produto do zero"}
                </li>
                <li>
                  {language === 'en' ? 
                    "Implemented career frameworks, performance evaluations, and onboarding journeys" 
                    : 
                    "Implementei frameworks de carreira, avaliações de desempenho e jornadas de onboarding"}
                </li>
                <li>
                  {language === 'en' ? 
                    "Adopted Shape Up and product analytics with PostHog" 
                    : 
                    "Adotei Shape Up e analytics de produto com PostHog"}
                </li>
                <li>
                  {language === 'en' ? 
                    "Introduced AI-assisted processes to improve efficiency" 
                    : 
                    "Introduzi processos assistidos por IA para melhorar a eficiência"}
                </li>
                <li>
                  {language === 'en' ? 
                    "Led initiatives in mobile UX, API integration, and compliance automation" 
                    : 
                    "Liderei iniciativas em UX mobile, integração de APIs e automação de compliance"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {language === 'en' ? '🛠️ Skills & Toolbox' : '🛠️ Habilidades & Ferramentas'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Technical Skills */}
            <div className="bg-card p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5" />
                {language === 'en' ? 'Technical' : 'Técnico'}
              </h3>
              <div className="space-y-2">
                <p>Python, FastAPI, HTMX</p>
                <p>Keycloak, Docker</p>
              </div>
            </div>
            
            {/* Analytics & Ops */}
            <div className="bg-card p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5" />
                {language === 'en' ? 'Analytics & Ops' : 'Analytics & Operações'}
              </h3>
              <div className="space-y-2">
                <p>PostHog, Google Data Studio</p>
                <p>Notion, Miro</p>
              </div>
            </div>
            
            {/* Product */}
            <div className="bg-card p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                {language === 'en' ? 'Product' : 'Produto'}
              </h3>
              <div className="space-y-2">
                <p>Strategy, Discovery, OKRs</p>
                <p>UX, Growth Loops</p>
              </div>
            </div>
            
            {/* Leadership */}
            <div className="bg-card p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                {language === 'en' ? 'Leadership' : 'Liderança'}
              </h3>
              <div className="space-y-2">
                <p>Coaching, Cross-functional Alignment</p>
                <p>Hiring, Storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CPO Path Section */}
      <section className="py-16 bg-background">
        <div className="container">
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
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  {language === 'en' ? 
                    "Deepening my financial and business acumen" 
                    : 
                    "Aprofundar meu conhecimento financeiro e de negócios"}
                </li>
                <li>
                  {language === 'en' ? 
                    "Learning from founders, C-levels, and top product minds" 
                    : 
                    "Aprender com fundadores, C-levels e grandes mentes de produto"}
                </li>
                <li>
                  {language === 'en' ? 
                    "Investing in team development and culture" 
                    : 
                    "Investir no desenvolvimento de equipe e cultura"}
                </li>
                <li>
                  {language === 'en' ? 
                    "Sharing my journey through writing and mentoring" 
                    : 
                    "Compartilhar minha jornada através da escrita e mentoria"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {language === 'en' ? '💡 My Product Philosophy' : '💡 Minha Filosofia de Produto'}
              </h2>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                  <p>
                    {language === 'en' ? 
                      "Focus on outcomes, not outputs" 
                      : 
                      "Foco em resultados, não em entregas"}
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                  <p>
                    {language === 'en' ? 
                      "Empower small, autonomous teams" 
                      : 
                      "Capacitar equipes pequenas e autônomas"}
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                  <p>
                    {language === 'en' ? 
                      "Use frameworks like Shape Up to balance strategy and delivery" 
                      : 
                      "Usar frameworks como Shape Up para equilibrar estratégia e entrega"}
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                  <p>
                    {language === 'en' ? 
                      "Embrace data-informed decisions without losing sight of intuition" 
                      : 
                      "Abraçar decisões informadas por dados sem perder de vista a intuição"}
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 bg-card hover:shadow-md transition-all">
                  <p>
                    {language === 'en' ? 
                      "Build with purpose, clarity, and user empathy" 
                      : 
                      "Construir com propósito, clareza e empatia pelo usuário"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">{t('work.title')}</h2>
            <Button variant="ghost" asChild size="sm">
              <Link to="/portfolio">{t('work.viewAll')}</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorks.map((work) => (
              <FeatureCard 
                key={work.id}
                title={work.title}
                description={work.description}
                image={work.image}
                category={work.category}
                link={work.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* More About Me Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {language === 'en' ? '✍️ A Bit More About Me' : '✍️ Um Pouco Mais Sobre Mim'}
              </h2>
            </div>
            <div className="md:w-2/3 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                  <p>
                    {language === 'en' ? 
                      "I publish reflections on product leadership on Medium" 
                      : 
                      "Publico reflexões sobre liderança de produto no Medium"}
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary flex-shrink-0" />
                  <p>
                    {language === 'en' ? 
                      "I built my portfolio website using Astro and Netlify, with bilingual content" 
                      : 
                      "Construí meu site de portfólio usando Astro e Netlify, com conteúdo bilíngue"}
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                  <p>
                    {language === 'en' ? 
                      "I'm a big fan of Palmeiras and green color palettes 💚" 
                      : 
                      "Sou um grande fã do Palmeiras e paletas de cores verdes 💚"}
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <p>
                    {language === 'en' ? 
                      "I believe the best products start with a genuine interest in helping people" 
                      : 
                      "Acredito que os melhores produtos começam com um interesse genuíno em ajudar as pessoas"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('contact.title')}</h2>
              <p className="text-muted-foreground mb-8">
                {language === 'en' ? 
                  "Thanks for reading my story. Whether you're building a product, scaling a team, or navigating your own journey, I'm always open to exchange ideas and collaborate." 
                  : 
                  "Obrigado por ler minha história. Se você está construindo um produto, escalando uma equipe ou navegando em sua própria jornada, estou sempre aberto para trocar ideias e colaborar."}
              </p>
            </div>
            <div className="md:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
