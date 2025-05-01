
import { Instagram, Linkedin, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-xl mb-2">Portfolio</h3>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Building memorable digital experiences' 
                : 'Construindo experiências digitais memoráveis'}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Medium"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            {language === 'en' 
              ? '© 2025 Felipe Amaral. All rights reserved.' 
              : '© 2025 Felipe Amaral. Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
