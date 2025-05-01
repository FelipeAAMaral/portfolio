
import { useLanguage } from "@/context/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
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

  // Fetch Medium posts
  const fetchMediumPosts = async () => {
    try {
      // Using RSS2JSON service to convert Medium feed to JSON
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@amaral.felipeaugusto`
      );
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error("Error fetching Medium posts:", error);
      return [];
    }
  };

  const { data: mediumPosts = [], isLoading, error } = useQuery({
    queryKey: ['medium-posts'],
    queryFn: fetchMediumPosts,
  });

  // Function to strip HTML tags from text
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  // Process medium posts for display
  const processedPosts = mediumPosts.slice(0, 3).map(post => ({
    id: post.guid,
    title: post.title,
    description: stripHtml(post.description).substring(0, 120) + '...',
    image: post.thumbnail || "https://source.unsplash.com/random/800x600/?writing",
    category: "Medium",
    link: post.link
  }));

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

      {/* Brief Introduction */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">🌟 {language === 'en' ? 'Quick Intro' : 'Breve Introdução'}</h2>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-lg">
                {language === 'en' ? 
                  "Hi, I'm Felipe Amaral — a tech and product leader with over 10 years of experience in software. Currently, I'm the Head of Product at Pontotel, a B2B HRTech company where I lead a 17-person product organization." 
                  : 
                  "Olá, eu sou Felipe Amaral — um líder de tecnologia e produto com mais de 10 anos de experiência em software. Atualmente, sou Head de Produto na Pontotel, uma empresa B2B de HRTech onde lidero uma organização de produto de 17 pessoas."}
              </p>
              <p className="text-lg">
                {language === 'en' ? 
                  "My journey has taken me from coding to leading cross-functional teams and shaping the future of HRTech solutions in Latin America." 
                  : 
                  "Minha jornada me levou da codificação à liderança de equipes multifuncionais e à moldagem do futuro das soluções de HRTech na América Latina."}
              </p>
              <div className="pt-4">
                <Button variant="default" asChild>
                  <Link to="/about">
                    {language === 'en' ? 'Learn more about me' : 'Saiba mais sobre mim'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-muted/30">
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

      {/* Medium Blog Posts */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {language === 'en' ? 'My Latest Medium Posts' : 'Meus Posts Recentes no Medium'}
            </h2>
            <Button variant="ghost" asChild size="sm">
              <a href="https://medium.com/@amaral.felipeaugusto" target="_blank" rel="noopener noreferrer">
                {language === 'en' ? 'View All' : 'Ver Todos'}
              </a>
            </Button>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p>
                {language === 'en' ? 'Loading latest posts...' : 'Carregando posts recentes...'}
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p>
                {language === 'en' ? 
                  'Could not load Medium posts at this time. Please check back later.' : 
                  'Não foi possível carregar os posts do Medium no momento. Por favor, volte mais tarde.'}
              </p>
              <Button className="mt-4" variant="outline" asChild>
                <a href="https://medium.com/@amaral.felipeaugusto" target="_blank" rel="noopener noreferrer">
                  {language === 'en' ? 'Visit Medium Profile' : 'Visitar Perfil no Medium'}
                </a>
              </Button>
            </div>
          ) : processedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedPosts.map((post) => (
                <FeatureCard 
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  category={post.category}
                  link={post.link}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p>
                {language === 'en' ? 'No posts found.' : 'Nenhum post encontrado.'}
              </p>
              <Button className="mt-4" variant="outline" asChild>
                <a href="https://medium.com/@amaral.felipeaugusto" target="_blank" rel="noopener noreferrer">
                  {language === 'en' ? 'Visit Medium Profile' : 'Visitar Perfil no Medium'}
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
