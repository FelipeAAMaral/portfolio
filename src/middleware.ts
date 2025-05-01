
import type { MiddlewareHandler } from 'astro';
import type { LanguageType } from './utils/useTranslations';

export const onRequest: MiddlewareHandler = async ({ request, cookies, redirect }, next) => {
  // Check URL for language parameter
  const url = new URL(request.url);
  const langParam = url.searchParams.get('lang') as LanguageType | null;
  
  // If language parameter is provided, set it in a cookie
  if (langParam && (langParam === 'en' || langParam === 'pt')) {
    cookies.set('language', langParam, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    
    // Remove the lang parameter from the URL and redirect
    url.searchParams.delete('lang');
    return redirect(url.pathname + url.search);
  }
  
  // If no language cookie exists, set default to 'en'
  if (!cookies.has('language')) {
    cookies.set('language', 'en', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }
  
  return next();
};
