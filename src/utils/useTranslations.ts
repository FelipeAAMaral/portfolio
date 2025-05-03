

import { translations } from '../i18n';
import { useState, useEffect } from 'react';

export type LanguageType = 'en' | 'pt';

const getNestedValue = (obj: any, path: string): string => {
  const keys = path.split('.');
  let result = keys.reduce((o, key) => (o && o[key] !== undefined ? o[key] : undefined), obj);
  
  if (typeof result !== 'string') {
    console.warn(`Translation for "${path}" is not a string or is missing`);
    return path;
  }
  
  return result;
};

export function useTranslations(initialLanguage: LanguageType = 'en') {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>(initialLanguage);
  
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'pt')) {
      setCurrentLanguage(storedLanguage as LanguageType);
    }
  }, []);
  
  const translate = (key: string): string => {
    if (!translations[currentLanguage]) {
      console.error(`Translations for language "${currentLanguage}" not found`);
      return key;
    }

    try {
      const translation = getNestedValue(translations[currentLanguage], key);
      
      if (translation === key || !translation) {
        if (currentLanguage !== 'en') {
          const enTranslation = getNestedValue(translations['en'], key);
          if (enTranslation && enTranslation !== key) {
            return enTranslation;
          }
        }
        console.warn(`Translation key "${key}" not found in ${currentLanguage}`);
        return key;
      }
      return translation;
    } catch (error) {
      console.error(`Error getting translation for key "${key}":`, error);
      return key;
    }
  };

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

export function getClientTranslations(language: LanguageType = 'en') {
  return (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    if (!translation || translation === key) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Translation key "${key}" not found in ${language}`);
      }
      return key;
    }
    return translation;
  };
}
