
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // On home page, use anchor links for sections
  const mainLinks = isHome
    ? [
      { href: "#craft", label: "O Ofício", anchor: true },
      { href: "#work", label: "Trabalho", anchor: true },
      { href: "#foundation", label: "Formação", anchor: true },
      { href: "#offscreen", label: "Fora da Tela", anchor: true },
    ]
    : [
      { href: "/", label: "Home", anchor: false },
      { href: "/blog", label: "Blog", anchor: false },
      { href: "/contact", label: "Contato", anchor: false },
    ];

  const ctaLink = { href: isHome ? "#cta" : "/contact", label: "Fале comigo", anchor: isHome };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex justify-between items-center h-16">

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl font-bold text-foreground tracking-tight hover:text-primary transition-colors"
          onClick={closeMenu}
        >
          Felipe Amaral
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.anchor ? (e) => handleAnchorClick(e, link.href) : undefined}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA + Lang */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={ctaLink.href}
            onClick={ctaLink.anchor ? (e) => handleAnchorClick(e as React.MouseEvent<HTMLAnchorElement>, ctaLink.href) : undefined}
            className="btn-accent !py-2 !px-4 text-sm"
          >
            Fale comigo
          </a>
          <button
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className="flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground transition-colors"
          >
            <img
              src={language === 'en' ? "https://flagcdn.com/w20/us.png" : "https://flagcdn.com/w20/br.png"}
              width="18"
              height="13"
              alt={language === 'en' ? "EN" : "PT"}
              className="rounded-sm"
            />
            <span className="font-mono text-xs">{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border z-50 animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.anchor ? (e) => handleAnchorClick(e, link.href) : closeMenu}
                className="text-base font-medium py-1 text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaLink.href}
              onClick={ctaLink.anchor ? (e) => handleAnchorClick(e as React.MouseEvent<HTMLAnchorElement>, ctaLink.href) : closeMenu}
              className="btn-accent w-fit !py-2 !px-4 text-sm mt-2"
            >
              Fale comigo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
