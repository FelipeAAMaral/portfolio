
import enTranslations from './en.json';
import ptTranslations from './pt.json';

// Define types for our i18n system
export type LanguageType = 'en' | 'pt';

// Export translations for use in the context provider
export const translations = {
  en: enTranslations,
  pt: ptTranslations
};
