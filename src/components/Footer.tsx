import { Github, Linkedin, Mail, Mic, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="cta" className="border-t border-border">
      <div className="container py-24 md:py-28">
        <div className="max-w-4xl">
          <span className="eyebrow mb-6">Contato</span>
          <h2 className="mb-6 font-serif text-display-lg text-foreground">
            Se você está construindo produto em um contexto mais exigente, vamos conversar.
          </h2>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Especialmente em desafios que pedem alinhamento entre estratégia, tecnologia e
            execução. Também estou disponível para mentorias e palestras.
          </p>

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
            <a href="mailto:amaral.felipeaugusto@gmail.com" className="btn-ghost">
              <Mail size={16} />
              E-mail
            </a>
            <a
              href="https://github.com/FelipeAAMaral"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={16} />
              GitHub
            </a>
            <Link to="/mentoria" className="btn-ghost">
              <Users size={16} />
              Mentoria
            </Link>
            <Link to="/palestras" className="btn-ghost">
              <Mic size={16} />
              Palestras
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-5 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-5">
            <span>© {new Date().getFullYear()} Felipe Amaral</span>
            <Link to="/about" className="transition-colors hover:text-foreground">
              Sobre
            </Link>
            <Link to="/blog" className="transition-colors hover:text-foreground">
              Blog
            </Link>
            <Link to="/contact" className="transition-colors hover:text-foreground">
              Contato
            </Link>
            <Link to="/mentoria" className="transition-colors hover:text-foreground">
              Mentoria
            </Link>
            <Link to="/palestras" className="transition-colors hover:text-foreground">
              Palestras
            </Link>
          </div>

          <span className="font-mono uppercase tracking-[0.18em]">
            Produto · tecnologia · execução
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
