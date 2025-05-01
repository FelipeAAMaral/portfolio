
import { translations } from '../i18n';
import { useState, useEffect } from 'react';

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

// Create a translation function for React components
export function useTranslations(initialLanguage: LanguageType = 'en') {
  // Get language from localStorage if available, otherwise use passed language
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>(initialLanguage);
  
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'pt')) {
      setCurrentLanguage(storedLanguage as LanguageType);
    }
  }, []);
  
  // Define the translation function
  const translate = (key: string): string => {
    // First, check if the current language translations exist
    if (!translations[currentLanguage]) {
      console.error(`Translations for language "${currentLanguage}" not found`);
      return key;
    }

    try {
      const translation = getNestedValue(translations[currentLanguage], key);
      if (!translation || translation === '') {
        // If translation is empty or not found, try to fallback to English
        if (currentLanguage !== 'en') {
          const enTranslation = getNestedValue(translations['en'], key);
          if (enTranslation && enTranslation !== '') {
            return enTranslation;
          }
        }
        console.warn(`Translation key "${key}" not found in ${currentLanguage}`);
        return key; // Return key as fallback
      }
      return translation;
    } catch (error) {
      console.error(`Error getting translation for key "${key}":`, error);
      return key;
    }
  };

  // Handle language change
  const handleLanguageChange = (newLang: LanguageType) => {
    localStorage.setItem('language', newLang);
    setCurrentLanguage(newLang);
  };

  return {
    t: translate,
    language: currentLanguage,
    setLanguage: handleLanguageChange
  };
}

// For client components that need direct access to translations
export function getClientTranslations(language: LanguageType = 'en') {
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
