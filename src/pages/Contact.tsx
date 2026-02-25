
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";
import { Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();

  const tagline = language === 'en' ? "Got an idea?" : "Tem uma ideia?";
  const headline = language === 'en' ? "Let's talk." : "Vamos conversar.";
  const body = language === 'en'
    ? "Whether it's a product challenge, a mentorship conversation, or just a chat — I'm always happy to connect."
    : "Seja um desafio de produto, uma conversa de mentoria ou apenas um papo — fico feliz em conectar.";
  const responseNote = language === 'en'
    ? "I typically respond within 48 hours."
    : "Costumo responder em até 48 horas.";

  return (
    <div className="container py-20 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left — copy */}
        <div className="md:sticky md:top-28">
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            {tagline}
          </p>
          <h1 className="font-serif text-display-xl font-bold text-foreground mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-sm">
            {body}
          </p>

          {/* Social links */}
          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/in/felipeaamaral/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
            >
              <div className="w-9 h-9 border border-border rounded-sm flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                <Linkedin size={16} />
              </div>
              <span className="text-sm">linkedin.com/in/felipeaamaral</span>
            </a>
            <a
              href="https://medium.com/@amaral.felipeaugusto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group"
            >
              <div className="w-9 h-9 border border-border rounded-sm flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                <Globe size={16} />
              </div>
              <span className="text-sm">medium.com/@amaral.felipeaugusto</span>
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-8">{responseNote}</p>
        </div>

        {/* Right — form */}
        <div>
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;
