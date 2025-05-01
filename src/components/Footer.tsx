
import { Instagram, Linkedin, Globe, Flag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-xl mb-2">Portfolio</h3>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
                  {language === 'en' ? (
                    <Flag className="h-4 w-4" fill="#B31942" stroke="#0A3161" />
                  ) : (
                    <Flag className="h-4 w-4" fill="#009c3b" stroke="#ffdf00" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="flex items-center gap-2">
                  <Flag className="h-3.5 w-3.5" fill="#B31942" stroke="#0A3161" />
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('pt')} className="flex items-center gap-2">
                  <Flag className="h-3.5 w-3.5" fill="#009c3b" stroke="#ffdf00" />
                  <span>Português</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
