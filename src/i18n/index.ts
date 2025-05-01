
import { createContext, useContext } from 'react';
import enTranslations from './en.json';
import ptTranslations from './pt.json';

// Define types for our i18n system
export type LanguageType = 'en' | 'pt';

export interface I18nContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => string;
}

// Export translations for use in the context provider
export const translations = {
  en: enTranslations,
  pt: ptTranslations
};

// Create an empty context as a placeholder
export const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Hook to use our translations
export const useI18n = () => useContext(I18nContext);
