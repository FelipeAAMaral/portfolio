
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";
import { Instagram, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="container py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-12">
        {language === 'en' ? "Contact Me" : "Entre em Contato"}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">
            {language === 'en' ? "Let's Connect" : "Vamos Conectar"}
          </h2>
          
          <p className="mb-6">
            {language === 'en'
              ? "Have a question, project idea, or just want to say hello? I'd love to hear from you. Fill out the form or reach out through any of the channels below."
              : "Tem uma pergunta, ideia de projeto ou só quer dizer olá? Gostaria muito de receber sua mensagem. Preencha o formulário ou entre em contato através de qualquer um dos canais abaixo."}
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="bg-muted/50 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <Instagram size={18} />
              </div>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @portfolioaccount
              </a>
            </div>
            
            <div className="flex items-center">
              <div className="bg-muted/50 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <Linkedin size={18} />
              </div>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/portfolio
              </a>
            </div>
            
            <div className="flex items-center">
              <div className="bg-muted/50 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <Globe size={18} />
              </div>
              <a 
                href="https://medium.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                medium.com/@portfolio
              </a>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {language === 'en' 
              ? "I typically respond to messages within 24-48 hours."
              : "Normalmente respondo mensagens em 24-48 horas."}
          </p>
        </div>
        
        <div className="md:w-2/3">
          <div className="bg-card shadow-sm border rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
