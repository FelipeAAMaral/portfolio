
import { createContext, useContext, ReactNode } from 'react';
import { useTranslations, LanguageType } from '../utils/useTranslations';

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
  const { language, setLanguage, t } = useTranslations(initialLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
