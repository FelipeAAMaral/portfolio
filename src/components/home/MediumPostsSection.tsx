// src/components/MediumPostsSection.tsx
import React, { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useMediumPosts, MediumPost } from "@/lib/useMediumPosts";
import { useContentfulPosts, CFPost } from "@/lib/useContentfulPosts";

type CardData = {
  id: string;
  title: string;
  date: string;
  category: "Medium" | "Blog";
  link: string;
};

const MediumPostsSection: React.FC = () => {
  const { language } = useLanguage();

  const title = language === 'en' ? "Latest writing" : "Últimos artigos";
  const viewAll = language === 'en' ? "Read on Medium →" : "Ler no Medium →";
  const loadingMsg = language === 'en' ? "Loading articles…" : "Carregando artigos…";
  const errorMsg = language === 'en' ? "Could not load posts." : "Erro ao carregar posts.";

  const { posts: mediumPosts, loading: loadingMD, error: errorMD } = useMediumPosts();
  const { posts: cfPosts, loading: loadingCF, error: errorCF } = useContentfulPosts();

  const cards: CardData[] = useMemo(() => {
    if (loadingMD || loadingCF || errorMD || errorCF) return [];
    return mediumPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4)
      .map<CardData>(p => ({
        id: p.slug,
        title: p.title,
        date: new Date(p.date).toLocaleDateString(language === 'en' ? 'en-US' : 'pt-BR', {
          year: 'numeric', month: 'short', day: 'numeric'
        }),
        category: "Medium",
        link: p.url,
      }));
  }, [cfPosts, mediumPosts, loadingCF, loadingMD, errorCF, errorMD, language]);

  if (loadingCF || loadingMD) {
    return (
      <section className="py-20 border-t border-border">
        <div className="container">
          <p className="text-muted-foreground animate-pulse">{loadingMsg}</p>
        </div>
      </section>
    );
  }

  if (errorCF || errorMD || cards.length === 0) {
    // Graceful fallback — don't show section if no posts
    return null;
  }

  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-display-md font-bold text-foreground">
            {title}
          </h2>
          <a
            href="https://medium.com/@amaral.felipeaugusto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            {viewAll}
          </a>
        </div>

        {/* Post list — no images, editorial style */}
        <div className="divide-y divide-border">
          {cards.map((c, i) => (
            <a
              key={c.id}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 gap-6 hover:bg-surface -mx-4 px-4 rounded-sm transition-colors duration-200"
            >
              <div className="flex items-center gap-6 min-w-0">
                <span className="text-xs font-mono text-muted-foreground w-5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                    {c.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="tag hidden sm:inline-block">{c.category}</span>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediumPostsSection;
