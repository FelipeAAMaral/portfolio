// src/lib/useContentfulPosts.ts
import { useEffect, useState } from "react";
import { client } from "./contentful";

export interface CFPost {
  type: "cf";
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

export function useContentfulPosts() {
  const [posts, setPosts] = useState<CFPost[]>([]);

  useEffect(() => {
    client
      .getEntries<any>({ content_type: "post", order: "-fields.publishDate" })
      .then((response) => {
        const items = response.items.map((item) => ({
          type: "cf" as const,
          slug: item.fields.slug,
          title: item.fields.title,
          date: item.fields.publishDate,
          excerpt:
            item.fields.excerpt ||
            item.fields.body.content[0].content[0].value.slice(0, 200) + "...",
          image: item.fields.image?.fields.file.url
            ? `https:${item.fields.image.fields.file.url}`
            : undefined,
        }));
        setPosts(items);
      });
  }, []);

  return posts;
}
