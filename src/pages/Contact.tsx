
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";
import { Instagram, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="container py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-12">
        {t('contact.title')}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">
            {t('contact.letsConnect')}
          </h2>
          
          <p className="mb-6">
            {t('contact.interested')}
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="bg-muted/50 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <Linkedin size={18} />
              </div>
              <a 
                href="https://linkedin.com/in/felipeaamaral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/felipeaamaral
              </a>
            </div>
            
            <div className="flex items-center">
              <div className="bg-muted/50 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <Globe size={18} />
              </div>
              <a 
                href="https://medium.com/@amaral.felipeaugusto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                medium.com/@amaral.felipeaugusto
              </a>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {t('contact.response')}
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
