
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
  console.log("[LanguageProvider] Initializing with language:", initialLanguage);
  const [language, setLanguage] = useState<LanguageType>(initialLanguage);
  
  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem('language');
      console.log("[LanguageProvider] Stored language from localStorage:", storedLanguage);
      if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'pt')) {
        setLanguage(storedLanguage as LanguageType);
        console.log("[LanguageProvider] Setting language from localStorage:", storedLanguage);
      }
    } catch (e) {
      console.error("[LanguageProvider] Error accessing localStorage:", e);
    }
  }, []);

  const handleLanguageChange = (newLang: LanguageType) => {
    try {
      localStorage.setItem('language', newLang);
      setLanguage(newLang);
      console.log(`[LanguageProvider] Language changed to ${newLang}`);
    } catch (e) {
      console.error("[LanguageProvider] Error setting language in localStorage:", e);
      setLanguage(newLang); // Still update state even if localStorage fails
    }
  };

  // Define translation function directly in the context
  const translate = (key: string): string => {
    if (!translations[language]) {
      console.error(`[LanguageProvider] Translations for language "${language}" not found`);
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
        console.warn(`[LanguageProvider] Translation key "${key}" not found in ${language}`);
        return key;
      }
      return translation;
    } catch (error) {
      console.error(`[LanguageProvider] Error getting translation for key "${key}":`, error);
      return key;
    }
  };

  console.log("[LanguageProvider] Current language:", language);
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    console.error("[useLanguage] LanguageContext must be used within a LanguageProvider");
    return { language: 'en', setLanguage: () => {}, t: (key: string) => key };
  }
  return context;
};
