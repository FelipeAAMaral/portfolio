
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
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
  t: () => '',
});

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: LanguageType;
}

export const LanguageProvider = ({ children, initialLanguage = 'en' }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageType>(initialLanguage);

  // Helper function to get nested properties using dot notation
  const getNestedValue = (obj: any, path: string): string => {
    const keys = path.split('.');
    return keys.reduce((o, key) => (o && o[key] !== undefined ? o[key] : ''), obj);
  };

  // Translation function
  const t = (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    if (!translation && process.env.NODE_ENV !== 'production') {
      console.warn(`Translation key "${key}" not found in ${language}`);
    }
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
