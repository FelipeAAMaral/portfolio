import { useEffect, useState } from 'react';
import { extractImgSrcs } from './utils';

export interface MediumPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  url: string;
}

export function useMediumPosts(): {
  posts: MediumPost[];
  loading: boolean;
  error: Error | null;
} {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const RSS2JSON = 'https://api.rss2json.com/v1/api.json?rss_url=';
        const feedUrl = encodeURIComponent(
          'https://medium.com/feed/@amaral.felipeaugusto'
        );
        const response = await fetch(`${RSS2JSON}${feedUrl}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch Medium feed: ${response.status}`);
        }
        const data = await response.json();
        if (!data.items) {
          throw new Error('Invalid feed format');
        }

        const items: MediumPost[] = data.items.map((item: any, index: number) => {
          const url: string = item.link;
          const slug = new URL(url).pathname.split('/').pop() || `medium-${index}`;
          const rawExcerpt = item.description
            .replace(/<[^>]+>/g, '')
            .trim();
          return {
            id: index,
            slug,
            title: item.title,
            author: item.author,
            excerpt: rawExcerpt.length > 200 ? rawExcerpt.slice(0, 200) + '...' : rawExcerpt,
            date: item.pubDate,
            image: extractImgSrcs(item.content)[0] || 'https://unsplash.com/pt-br/fotografias/ilustracao-da-cor-verde-e-amarela-qlcVpZqzcEc',
            url,
          };
        });

        if (!cancelled) {
          setPosts(items);
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading, error };
}
