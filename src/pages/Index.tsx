
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();

  // Sample featured works
  const featuredWorks = [
    {
      id: 1,
      title: "Responsive Web Design Patterns",
      description: "An exploration of modern responsive design techniques and best practices for web applications.",
      image: "https://source.unsplash.com/random/800x600/?webdesign",
      category: "Blog",
      link: "/blog/responsive-web-design"
    },
    {
      id: 2,
      title: "Career Growth in Tech",
      description: "Strategies and insights for growing your career in the tech industry based on my experience.",
      image: "https://source.unsplash.com/random/800x600/?career",
      category: "Mentorship",
      link: "/mentorship"
    },
    {
      id: 3,
      title: "Building Accessible Web Apps",
      description: "My talk on creating web applications that are accessible to everyone, showcasing practical techniques.",
      image: "https://source.unsplash.com/random/800x600/?accessibility",
      category: "Speaking",
      link: "/speaking"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-palmeiras-light text-primary px-4 py-1 rounded-full text-sm font-medium mb-2">
                {t('hero.greeting')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                John Doe
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
                    alt="Profile" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('about.title')}</h2>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-lg">
                {t('about.description')}
              </p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
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

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('contact.title')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.description')}
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
