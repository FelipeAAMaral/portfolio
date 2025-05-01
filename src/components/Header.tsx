
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const { language, setLanguage } = useLanguage();
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
            {language === 'en' ? 'Home' : 'Início'}
          </Link>
          <Link to="/blog" className="animated-link">
            Blog
          </Link>
          <Link to="/speaking" className="animated-link">
            {language === 'en' ? 'Speaking' : 'Palestras'}
          </Link>
          <Link to="/mentorship" className="animated-link">
            {language === 'en' ? 'Mentorship' : 'Mentoria'}
          </Link>
          <Link to="/contact" className="animated-link">
            {language === 'en' ? 'Contact' : 'Contato'}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-4 w-4" />
                <span className="ml-2">{language === 'en' ? 'EN' : 'PT'}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('pt')}>
                Português
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border py-4 z-50 animate-fade-in">
            <nav className="container flex flex-col space-y-4">
              <Link to="/" className="py-2" onClick={toggleMenu}>
                {language === 'en' ? 'Home' : 'Início'}
              </Link>
              <Link to="/blog" className="py-2" onClick={toggleMenu}>
                Blog
              </Link>
              <Link to="/speaking" className="py-2" onClick={toggleMenu}>
                {language === 'en' ? 'Speaking' : 'Palestras'}
              </Link>
              <Link to="/mentorship" className="py-2" onClick={toggleMenu}>
                {language === 'en' ? 'Mentorship' : 'Mentoria'}
              </Link>
              <Link to="/contact" className="py-2" onClick={toggleMenu}>
                {language === 'en' ? 'Contact' : 'Contato'}
              </Link>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => { setLanguage('en'); toggleMenu(); }}
                  className={language === 'en' ? 'border-primary text-primary' : ''}
                >
                  English
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => { setLanguage('pt'); toggleMenu(); }}
                  className={language === 'pt' ? 'border-primary text-primary' : ''}
                >
                  Português
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
