
import { translations } from '../i18n';

export type LanguageType = 'en' | 'pt';

// Function to get nested object properties by dot notation
const getNestedValue = (obj: any, path: string): string => {
  const keys = path.split('.');
  let result = keys.reduce((o, key) => (o && o[key] !== undefined ? o[key] : ''), obj);
  
  // If result is not a string (e.g., undefined, null, or an object), return empty string
  if (typeof result !== 'string') {
    console.warn(`Translation for "${path}" is not a string or is missing`);
    return String(path);
  }
  
  return result;
};

// Create a translation function that works in Astro context
export function useTranslations(language: LanguageType = 'en') {
  // Return a function that gets translations based on key
  return (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    if (!translation || translation === key) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Translation key "${key}" not found in ${language}`);
      }
      return key; // Return key as fallback
    }
    return translation;
  };
}

// For client components, we need a wrapper to access the current language
export function getClientTranslations() {
  return (key: string, language: LanguageType = 'en'): string => {
    const translation = getNestedValue(translations[language], key);
    if (!translation || translation === key) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Translation key "${key}" not found in ${language}`);
      }
      return key; // Return key as fallback
    }
    return translation;
  };
}
