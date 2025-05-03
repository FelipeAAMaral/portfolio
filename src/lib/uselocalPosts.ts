import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import { parseMarkdownMeta } from './utils';

export interface LocalPost {
  type: 'local';
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  url: string;
  content?: string;
}

export function useLocalPosts(): LocalPost[] {
  const [posts, setPosts] = useState<LocalPost[]>([]);

  useEffect(() => {
    const modules = import.meta.glob<string>('../content/blog/*.md', { as: 'raw' });
    Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const content = await resolver();
        const { data, content: markdown } = matter(content);
        const slug = path.split('/').pop()?.replace('.md', '') || '';
        const meta = parseMarkdownMeta(content);
        return {
          type: 'local' as const,
          slug,
          title: data.title as string,
          excerpt: data.excerpt as string || markdown.slice(0, 200) + '...',
          date: data.date as string,
          image: data.image as string || 'https://unsplash.com/pt-br/fotografias/ilustracao-da-cor-verde-e-amarela-qlcVpZqzcEc',
          url: `/blog/local/${slug}`,
          content: markdown
        };
      })
    )
      .then((loaded) => {
        setPosts(
          loaded.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        );
      })
      .catch(error => {
        console.error('Error loading local posts:', error);
      });
  }, []);

  return posts;
}
