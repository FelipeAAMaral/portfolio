import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const mainLinks = isHome
    ? [
        { href: "#work", label: "Trajetória", anchor: true },
        { href: "#system", label: "Processo", anchor: true },
        { href: "#signals", label: "Contexto", anchor: true },
        { href: "#fit", label: "Perfil", anchor: true },
      ]
    : [
        { href: "/", label: "Home", anchor: false },
        { href: "/about", label: "Sobre", anchor: false },
        { href: "/mentoria", label: "Mentoria", anchor: false },
        { href: "/palestras", label: "Palestras", anchor: false },
        { href: "/contact", label: "Contato", anchor: false },
      ];

  const ctaLink = { href: isHome ? "#cta" : "/contact", label: "Conversar", anchor: isHome };

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      closeMenu();
      return;
    }

    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

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
          {mainLinks.map((link) =>
            link.anchor ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorClick(event, link.href)}
                className="text-sm text-foreground/68 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-foreground/68 transition-colors duration-200 hover:text-foreground"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          {ctaLink.anchor ? (
            <a
              href={ctaLink.href}
              onClick={(event) => handleAnchorClick(event, ctaLink.href)}
              className="btn-accent !px-5 !py-2.5"
            >
              {ctaLink.label}
            </a>
          ) : (
            <Link to={ctaLink.href} className="btn-accent !px-5 !py-2.5">
              {ctaLink.label}
            </Link>
          )}
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menu"
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
            {mainLinks.map((link) =>
              link.anchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleAnchorClick(event, link.href)}
                  className="rounded-full border border-border/70 px-4 py-3 text-sm text-foreground/75"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-full border border-border/70 px-4 py-3 text-sm text-foreground/75"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ),
            )}

            {ctaLink.anchor ? (
              <a
                href={ctaLink.href}
                onClick={(event) => handleAnchorClick(event, ctaLink.href)}
                className="btn-accent mt-2"
              >
                {ctaLink.label}
              </a>
            ) : (
              <Link to={ctaLink.href} className="btn-accent mt-2" onClick={closeMenu}>
                {ctaLink.label}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
