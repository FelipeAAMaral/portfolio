
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-4 border-b border-border">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">Felipe Amaral</Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="animated-link">
            {t('nav.home')}
          </Link>
          <Link to="/blog" className="animated-link">
            Blog
          </Link>
          <Link to="/speaking" className="animated-link">
            {t('nav.speaking')}
          </Link>
          <Link to="/mentorship" className="animated-link">
            {t('nav.mentorship')}
          </Link>
          <Link to="/contact" className="animated-link">
            {t('nav.contact')}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="flex items-center gap-1.5">
                {language === 'en' ? (
                  <span className="flex items-center">
                    <Flag className="h-4 w-4" fill="#B31942" stroke="#0A3161" />
                    <span className="ml-1.5">EN</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Flag className="h-4 w-4" fill="#009c3b" stroke="#ffdf00" />
                    <span className="ml-1.5">PT</span>
                  </span>
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
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border py-4 z-50 animate-fade-in">
            <nav className="container flex flex-col space-y-4">
              <Link to="/" className="py-2" onClick={toggleMenu}>
                {t('nav.home')}
              </Link>
              <Link to="/blog" className="py-2" onClick={toggleMenu}>
                Blog
              </Link>
              <Link to="/speaking" className="py-2" onClick={toggleMenu}>
                {t('nav.speaking')}
              </Link>
              <Link to="/mentorship" className="py-2" onClick={toggleMenu}>
                {t('nav.mentorship')}
              </Link>
              <Link to="/contact" className="py-2" onClick={toggleMenu}>
                {t('nav.contact')}
              </Link>
              
              <div className="flex items-center gap-3 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => { setLanguage('en'); toggleMenu(); }}
                  className={`flex items-center gap-2 ${language === 'en' ? 'border-primary text-primary' : ''}`}
                >
                  <Flag className="h-3.5 w-3.5" fill="#B31942" stroke="#0A3161" />
                  <span>English</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => { setLanguage('pt'); toggleMenu(); }}
                  className={`flex items-center gap-2 ${language === 'pt' ? 'border-primary text-primary' : ''}`}
                >
                  <Flag className="h-3.5 w-3.5" fill="#009c3b" stroke="#ffdf00" />
                  <span>Português</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
