// src/lib/useLocalPosts.ts
import { useEffect, useState } from "react";
import matter from "gray-matter";

export interface LocalPost {
  type: "local";
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  // if you have an image field in frontmatter, add it here
}

export function useLocalPosts() {
  const [posts, setPosts] = useState<LocalPost[]>([]);

  useEffect(() => {
    const modules = import.meta.glob<string>("/src/content/blog/*.md", {
      as: "raw",
    });
    Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const raw = await resolver();
        const { data, content } = matter(raw);
        return {
          type: "local" as const,
          slug: path
            .split("/")
            .pop()!
            .replace(/\.md$/, ""),
          title: data.title as string,
          date: data.date as string,
          excerpt:
            (data.excerpt as string) ||
            content
              .trim()
              .substring(0, 200)
              .replace(/\n/g, " ") + "...",
        };
      })
    ).then((all) => {
      setPosts(
        all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      );
    });
  }, []);

  return posts;
}
