import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations } from "../i18n";

export type LanguageType = "en" | "pt";

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => string;
}

interface TranslationTree {
  [key: string]: string | TranslationTree;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: LanguageType;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  t: (key) => key,
});

const getNestedValue = (obj: TranslationTree, path: string): string => {
  const result = path
    .split(".")
    .reduce<string | TranslationTree | undefined>((current, key) => {
      if (!current || typeof current === "string") {
        return undefined;
      }

      return current[key];
    }, obj);

  return typeof result === "string" ? result : path;
};

export const LanguageProvider = ({
  children,
  initialLanguage = "pt",
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageType>(initialLanguage);

  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage === "en" || storedLanguage === "pt") {
        setLanguage(storedLanguage);
      }
    } catch {
      // Ignore storage failures and keep the default language.
    }
  }, []);

  const handleLanguageChange = (newLanguage: LanguageType) => {
    if (newLanguage === language) return;

    const apply = () => {
      try {
        localStorage.setItem("language", newLanguage);
      } catch {
        // Ignore storage failures.
      }
      setLanguage(newLanguage);
    };

    if ("startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void })
        .startViewTransition(apply);
    } else {
      apply();
    }
  };

  const translate = (key: string): string => {
    const selectedLanguage = translations[language] as TranslationTree | undefined;
    if (!selectedLanguage) {
      return key;
    }

    const value = getNestedValue(selectedLanguage, key);
    if (value !== key || language === "en") {
      return value;
    }

    return getNestedValue(translations.en as TranslationTree, key);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleLanguageChange, t: translate }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
