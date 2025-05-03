// src/lib/useContentfulPosts.ts
import { createClient, EntryCollection, Entry } from 'contentful';
import { useState, useEffect } from 'react';

export interface CFPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author?: string;
  url: string;
}

interface PostFields {
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  image: { 
    fields: {
      file: {
        url: string;
      };
    };
  } | null;
  author?: string;
}

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID!,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN!,
});

export function useContentfulPosts(): {
  posts: CFPost[];
  loading: boolean;
  error: Error | null;
} {
  const [posts, setPosts] = useState<CFPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res: EntryCollection<PostFields> = await client.getEntries<PostFields>({
          content_type: 'post',
          order: '-sys.createdAt',
        });

        const items: CFPost[] = res.items.map((item: Entry<PostFields>) => {
          const f = item.fields;
          // Build excerpt fallback from content
          let excerpt = f.excerpt ?? '';
          if (!excerpt && typeof f.content === 'string') {
            const text = f.content.replace(/<[^>]*>/g, '').trim();
            const sentences = text.split(/[\.\n]/).filter(s => s.trim().length > 0);
            excerpt = sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '...' : '');
          }

          // Determine image URL (or fallback)
          const defaultImage = '../assets-img/sincerely-media-qlcVpZqzcEc-unsplash.jpg';

          return {
            slug: f.slug,
            title: f.title,
            date: item.sys.createdAt,
            excerpt,
            image: defaultImage,
            author: f.author,
            url: `/blog/cf/${f.slug}`,
          };
        });

        setPosts(items);
      } catch (e) {
        console.error('Contentful fetch error:', e);
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return { posts, loading, error };
}
