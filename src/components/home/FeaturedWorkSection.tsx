
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "@/components/FeatureCard";

const FeaturedWorkSection = () => {
  const { t } = useLanguage();

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
  );
};

export default FeaturedWorkSection;
