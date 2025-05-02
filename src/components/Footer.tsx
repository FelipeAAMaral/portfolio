
import { Instagram, Linkedin, Globe } from "lucide-react";
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
            <h3 className="font-semibold text-xl mb-2">Felipe Amaral</h3>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/felipeaamaral/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://medium.com/@amaral.felipeaugusto" 
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
                    <img 
                      src="https://flagcdn.com/w20/us.png" 
                      width="20" 
                      height="15" 
                      alt="US Flag"
                      className="rounded-sm"
                    />
                  ) : (
                    <img 
                      src="https://flagcdn.com/w20/br.png" 
                      width="20" 
                      height="15" 
                      alt="Brazilian Flag"
                      className="rounded-sm"
                    />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="flex items-center gap-2">
                  <img 
                    src="https://flagcdn.com/w20/us.png" 
                    width="20" 
                    height="15" 
                    alt="US Flag"
                    className="rounded-sm"
                  />
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('pt')} className="flex items-center gap-2">
                  <img 
                    src="https://flagcdn.com/w20/br.png" 
                    width="20" 
                    height="15" 
                    alt="Brazilian Flag"
                    className="rounded-sm"
                  />
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
