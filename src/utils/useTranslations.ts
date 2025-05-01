
import { translations } from '../i18n';

export type LanguageType = 'en' | 'pt';

// Function to get nested object properties by dot notation
const getNestedValue = (obj: any, path: string): string => {
  const keys = path.split('.');
  return keys.reduce((o, key) => (o && o[key] !== undefined ? o[key] : ''), obj);
};

// Create a translation function that works in Astro context
export function useTranslations(language: LanguageType = 'en') {
  // Return a function that gets translations based on key
  return (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    if (!translation && process.env.NODE_ENV !== 'production') {
      console.warn(`Translation key "${key}" not found in ${language}`);
    }
    return translation || key;
  };
}

// For client components, we need a wrapper to access the current language
export function getClientTranslations() {
  return (key: string, language: LanguageType = 'en'): string => {
    const translation = getNestedValue(translations[language], key);
    if (!translation && process.env.NODE_ENV !== 'production') {
      console.warn(`Translation key "${key}" not found in ${language}`);
    }
    return translation || key;
  };
}
