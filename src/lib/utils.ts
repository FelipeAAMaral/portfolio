
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts image sources from HTML content
 */
export function extractImgSrcs(htmlContent: string): string[] {
  if (!htmlContent) return [];
  
  const imgRegex = /<img.*?src="(.*?)".*?>/g;
  const matches = [...htmlContent.matchAll(imgRegex)];
  return matches.map(match => match[1]);
}

/**
 * Formats a date string to a localized format
 */
export function formatDate(dateString: string, locale: string = 'en-US'): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Truncates a string to a specified length and adds ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
