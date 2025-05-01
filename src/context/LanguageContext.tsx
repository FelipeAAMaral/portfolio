
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { translations } from '../i18n';

export type LanguageType = 'en' | 'pt';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: LanguageType;
}

// Function to get nested object properties by dot notation
const getNestedValue = (obj: any, path: string): string => {
  const keys = path.split('.');
  let result = keys.reduce((o, key) => (o && o[key] !== undefined ? o[key] : undefined), obj);
  
  if (typeof result !== 'string') {
    console.warn(`Translation for "${path}" is not a string or is missing`);
    return path;
  }
  
  return result;
};

export const LanguageProvider = ({ children, initialLanguage = 'en' }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageType>(initialLanguage);
  
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'pt')) {
      setLanguage(storedLanguage as LanguageType);
    }
  }, []);

  const handleLanguageChange = (newLang: LanguageType) => {
    localStorage.setItem('language', newLang);
    setLanguage(newLang);
    console.log(`Language changed to ${newLang}`);
  };

  // Define translation function directly in the context
  const translate = (key: string): string => {
    if (!translations[language]) {
      console.error(`Translations for language "${language}" not found`);
      return key;
    }

    try {
      const translation = getNestedValue(translations[language], key);
      
      if (translation === key || !translation) {
        // Fallback to English
        if (language !== 'en') {
          const enTranslation = getNestedValue(translations['en'], key);
          if (enTranslation && enTranslation !== key) {
            return enTranslation;
          }
        }
        console.warn(`Translation key "${key}" not found in ${language}`);
        return key;
      }
      return translation;
    } catch (error) {
      console.error(`Error getting translation for key "${key}":`, error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
