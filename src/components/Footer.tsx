
import { Linkedin, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <footer id="cta" className="border-t border-border">

      {/* Big CTA */}
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-mono tracking-widest uppercase text-primary mb-6">
            Vamos conversar
          </p>
          <h2 className="font-serif text-display-lg font-bold text-foreground leading-tight mb-6">
            Vamos construir o próximo.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Pronto para desafios que exigem profundidade técnica e visão estratégica.
          </p>

          {/* Contact links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/felipeaamaral/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:amaral.felipeaugusto@gmail.com"
              className="btn-ghost"
            >
              <Mail size={16} />
              amaral.felipeaugusto@gmail.com
            </a>
            <a
              href="https://hearken.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Globe size={16} />
              Hearken.app
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-5 flex flex-wrap justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Felipe Amaral</span>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <img
              src={language === 'en' ? "https://flagcdn.com/w20/us.png" : "https://flagcdn.com/w20/br.png"}
              width="16" height="12" alt=""
              className="rounded-sm"
            />
            {language === 'en' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
