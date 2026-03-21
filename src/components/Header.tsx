import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const labels = {
  en: {
    about: "About",
    blog: "Blog",
    mentorship: "Mentorship",
    speaking: "Speaking",
    contact: "Contact",
    cta: "Get in touch",
    menuOpen: "Open menu",
  },
  pt: {
    about: "Sobre",
    blog: "Blog",
    mentorship: "Mentoria",
    speaking: "Palestras",
    contact: "Contato",
    cta: "Conversar",
    menuOpen: "Abrir menu",
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const l = labels[language];

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const toggleLanguage = () => setLanguage(language === "en" ? "pt" : "en");

  const navLinks = [
    { href: "/about", label: l.about },
    { href: "/blog", label: l.blog },
    { href: "/mentoria", label: l.mentorship },
    { href: "/palestras", label: l.speaking },
    { href: "/contact", label: l.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="text-lg font-medium tracking-tight text-foreground transition-colors hover:text-primary"
          onClick={closeMenu}
        >
          Felipe Amaral
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-foreground/68 transition-colors duration-200 hover:text-foreground"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 rounded-full border border-border/80 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            aria-label={language === "en" ? "Switch to Portuguese" : "Mudar para inglês"}
          >
            <span className={language === "pt" ? "text-foreground" : "text-muted-foreground/50"}>PT</span>
            <span className="text-border">·</span>
            <span className={language === "en" ? "text-foreground" : "text-muted-foreground/50"}>EN</span>
          </button>

          <Link to="/contact" className="btn-accent !px-5 !py-2.5">
            {l.cta}
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={toggleMenu}
          aria-label={l.menuOpen}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border/80 bg-background/95 md:hidden">
          <nav className="container flex flex-col gap-3 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full border border-border/70 px-4 py-3 text-sm text-foreground/75"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-1 flex items-center gap-3">
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex-1 rounded-full border border-border/70 px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
              >
                {language === "en" ? "PT · EN" : "EN · PT"}
              </button>
              <Link to="/contact" className="btn-accent flex-1" onClick={closeMenu}>
                {l.cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
