
import enTranslations from './en.json';
import ptTranslations from './pt.json';

// Export translations for use in the context provider
export const translations = {
  en: enTranslations,
  pt: ptTranslations
};

export type LanguageType = 'en' | 'pt';
