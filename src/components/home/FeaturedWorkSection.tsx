
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

type WorkItem = {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  link: string;
  external?: boolean;
};

const FeaturedWorkSection = () => {
  const { language } = useLanguage();

  const title = language === 'en' ? "What I write about" : "Sobre o que escrevo";
  const viewAll = language === 'en' ? "All writing →" : "Ver tudo →";

  const works: WorkItem[] = language === 'en'
    ? [
      {
        title: "Product Strategy in HRTech",
        description: "Exploring modern product strategy for workforce management — from roadmap to outcomes.",
        category: "Strategy",
        categoryColor: "bg-terra text-white",
        link: "/blog",
      },
      {
        title: "Growing a Product Team",
        description: "Lessons from scaling a 17-person product org — structures, rituals, and pitfalls.",
        category: "Leadership",
        categoryColor: "bg-forest text-white",
        link: "/blog",
      },
      {
        title: "From Engineer to CPO",
        description: "The career path that takes you from writing code to shaping entire product visions.",
        category: "Career",
        categoryColor: "bg-ink text-white",
        link: "/blog",
      },
    ]
    : [
      {
        title: "Estratégia de Produto em HRTech",
        description: "Explorando estratégia de produto moderna para gestão de pessoas — do roadmap aos resultados.",
        category: "Estratégia",
        categoryColor: "bg-terra text-white",
        link: "/blog",
      },
      {
        title: "Crescendo um Time de Produto",
        description: "Aprendizados de escalar uma org de produto de 17 pessoas — estruturas e rituais.",
        category: "Liderança",
        categoryColor: "bg-forest text-white",
        link: "/blog",
      },
      {
        title: "De Engenheiro a CPO",
        description: "O caminho de carreira que vai de escrever código a moldar visões de produto.",
        category: "Carreira",
        categoryColor: "bg-ink text-white",
        link: "/blog",
      },
    ];

  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-display-md font-bold text-foreground">
            {title}
          </h2>
          <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
            {viewAll}
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <Link
              key={i}
              to={w.link}
              className="group block p-6 bg-surface hover:bg-muted border border-border rounded-sm transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`tag text-xs ${w.categoryColor} border-0`}>
                  {w.category}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2 leading-tight">
                {w.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {w.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
