
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
            {t('nav.blog')}
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
          <Link to="/about" className="animated-link">
            {t('nav.aboutMe')}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="flex items-center gap-1.5">
                {language === 'en' ? (
                  <span className="flex items-center">
                    <img 
                      src="https://flagcdn.com/w20/us.png" 
                      width="20" 
                      height="15" 
                      alt="US Flag"
                      className="rounded-sm mr-1.5"
                    />
                    <span className="sr-only">English</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <img 
                      src="https://flagcdn.com/w20/br.png" 
                      width="20" 
                      height="15" 
                      alt="Brazilian Flag"
                      className="rounded-sm mr-1.5"
                    />
                    <span className="sr-only">Português</span>
                  </span>
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
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border py-4 z-50 animate-fade-in">
            <nav className="container flex flex-col space-y-4">
              <Link to="/" className="py-2" onClick={toggleMenu}>
                {t('nav.home')}
              </Link>
              <Link to="/blog" className="py-2" onClick={toggleMenu}>
                {t('nav.blog')}
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
              <Link to="/about" className="py-2" onClick={toggleMenu}>
                {t('nav.aboutMe')}
              </Link>
              
              <div className="flex items-center gap-3 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => { setLanguage('en'); toggleMenu(); }}
                  className={`flex items-center gap-2 ${language === 'en' ? 'border-primary text-primary' : ''}`}
                >
                  <img 
                    src="https://flagcdn.com/w20/us.png" 
                    width="20" 
                    height="15" 
                    alt="US Flag"
                    className="rounded-sm"
                  />
                  <span>English</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => { setLanguage('pt'); toggleMenu(); }}
                  className={`flex items-center gap-2 ${language === 'pt' ? 'border-primary text-primary' : ''}`}
                >
                  <img 
                    src="https://flagcdn.com/w20/br.png" 
                    width="20" 
                    height="15" 
                    alt="Brazilian Flag"
                    className="rounded-sm"
                  />
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
