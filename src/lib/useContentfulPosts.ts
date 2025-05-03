// src/lib/useContentfulPosts.ts
import { useEffect, useState } from "react";
import { client } from "./contentful";

export interface CFPost {
  type: "contentful";
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  content?: string;
  author?: string;
}

export function useContentfulPosts() {
  const [posts, setPosts] = useState<CFPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    client
      .getEntries({ 
        content_type: "blogPost",
        order: ["-sys.createdAt"],
        include: 2
      })
      .then((response) => {
        console.log('Contentful response:', response);
        const items = response.items.map((item: any): CFPost => ({
          type: "contentful",
          slug: item.fields.slug,
          title: item.fields.title,
          date: item.fields.publishDate,
          excerpt: item.fields.excerpt || 
            (item.fields.content?.content?.[0]?.content?.[0]?.value?.slice(0, 200) + "...") || 
            "No excerpt available",
          image: item.fields.image?.fields?.file?.url
            ? `https:${item.fields.image.fields.file.url}`
            : undefined,
          content: item.fields.content ? JSON.stringify(item.fields.content) : undefined,
          author: item.fields.author?.fields?.name
        }));
        console.log('Processed Contentful posts:', items);
        setPosts(items);
      })
      .catch((err) => {
        console.error('Error fetching Contentful posts:', err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
}
