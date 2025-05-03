// src/components/MediumPostsSection.tsx
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "@/components/FeatureCard";
import { useMediumPosts, MediumPost } from "@/lib/useMediumPosts";
import { useContentfulPosts, CFPost } from "@/lib/useContentfulPosts";

function getRandomItems<T>(arr: T[], count: number): T[] {
  const copy = [...arr];
  const picked: T[] = [];
  while (picked.length < count && copy.length > 0) {
    const idx = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(idx, 1)[0]);
  }
  return picked;
}

type CardData = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Medium" | "Blog";
  link: string;
};

const MediumPostsSection: React.FC = () => {
  const { t } = useLanguage();

  // Load from both sources
  const { posts: mediumPosts, loading: loadingMD, error: errorMD } = useMediumPosts();
  const { posts: cfPosts, loading: loadingCF, error: errorCF } = useContentfulPosts();

  // Pick 1 Contentful and 2 Medium at random
  const cards: CardData[] = useMemo(() => {
    if (loadingMD || loadingCF || errorMD || errorCF) return [];

    const oneCF = getRandomItems(cfPosts, 1).map<CardData>(p => ({
      id: p.slug,
      title: p.title,
      description: p.excerpt,
      image: p.image,
      category: "Blog",
      link: p.url,
    }));

    const twoMD = getRandomItems(mediumPosts, 2).map<CardData>(p => {
      const thumb = Array.isArray(p.image) && p.image.length > 0
        ? p.image[0]
        : "https://source.unsplash.com/qlcVpZqzcEc/800x400";

      return {
        id: p.guid,
        title: p.title,
        description: p.excerpt,
        image: thumb,
        category: "Medium",
        link: p.link,
      };
    });

    // Combine and shuffle
    const combined = [...oneCF, ...twoMD];
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }
    return combined;
  }, [cfPosts, mediumPosts, loadingCF, loadingMD, errorCF, errorMD]);

  // Loading state
  if (loadingCF || loadingMD) {
    return (
      <section className="py-16 bg-background">
        <div className="container text-center">
          <p className="animate-pulse text-lg">{t("medium.loading")}</p>
        </div>
      </section>
    );
  }

  // Error state
  if (errorCF || errorMD) {
    return (
      <section className="py-16 bg-background">
        <div className="container text-center">
          <p>{t("medium.error")}</p>
          <Button variant="outline" className="mt-4" asChild>
            <a
              href="https://medium.com/@amaral.felipeaugusto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("medium.visitProfile")}
            </a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("medium.latestPosts")}
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://medium.com/@amaral.felipeaugusto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work.viewAll")}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(c => (
            <FeatureCard
              key={`${c.category}-${c.id}`} // ensure unique keys
              title={c.title}
              description={c.description}
              image={c.image}
              category={c.category}
              link={c.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediumPostsSection;
