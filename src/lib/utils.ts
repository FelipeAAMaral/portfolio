import matter from 'gray-matter';

/**
 * Combines class names, filtering out falsy values.
 * @param classes - A list of class names or falsy values.
 * @returns A single string of class names.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Extracts all `src` URLs from <img> tags within the provided HTML string.
 * @param html - The HTML content to scan for <img> tags.
 * @returns An array of image URLs found in src attributes.
 */
export function extractImgSrcs(html: string): string[] {
  // Browser environment: use DOMParser
  if (typeof window !== 'undefined' && typeof window.DOMParser === 'function') {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return Array.from(doc.images)
      .map(img => img.src)
      .filter(src => !!src);
  }

  // Fallback for non-browser (Node.js): regex-based extraction
  const srcList: string[] = [];
  const imgTagRegex = /<img[^>]+src=["']?([^"'>]+)["']?[^>]*>/gi;
  let match: RegExpExecArray | null;
  while ((match = imgTagRegex.exec(html)) !== null) {
    srcList.push(match[1]);
  }
  return srcList;
}

/**
 * Metadata extracted from a Markdown file frontmatter.
 */
export interface MarkdownMeta {
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
}

/**
 * Parses frontmatter metadata from a Markdown string.
 * @param raw - The raw Markdown content including frontmatter.
 * @returns An object containing title, date, excerpt, and image URL.
 */
export function parseMarkdownMeta(raw: string): MarkdownMeta {
  const { data } = matter(raw);
  return {
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string | undefined,
    image: data.image as string | undefined,
  };
}

// Conversion helper: map Contentful post shape to Medium-like post shape
import type { CFPost } from '@/lib/useContentfulPosts';
import type { MediumPost } from '@/lib/useMediumPosts';

/**
 * Converts a Contentful post into the shape expected for Medium-like posts.
 * @param post - The contentful post object
 * @returns A MediumPost object
 */
export function convertCFToMedium(post: CFPost): MediumPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    image: post.image,
    url: post.url,
  };
}
