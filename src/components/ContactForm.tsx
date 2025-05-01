
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>();
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    toast.success(t('contact.success'));
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">
          {language === 'en' ? 'Reach Out for Mentorship & Networking' : 'Entre em Contato para Mentoria e Networking'}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {language === 'en' 
            ? 'Share your interests, questions, or ideas for collaboration. I\'m open to connecting with product professionals, tech enthusiasts, and anyone interested in the HRTech space.'
            : 'Compartilhe seus interesses, perguntas ou ideias para colaboração. Estou aberto a me conectar com profissionais de produto, entusiastas de tecnologia e qualquer pessoa interessada no espaço de HRTech.'}
        </p>
      </div>
      
      <div className="space-y-2">
        <Input
          placeholder={language === 'en' ? "Your Name" : "Seu Nome"}
          {...register('name', { required: language === 'en' ? 'Name is required' : 'Nome é obrigatório' })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Input
          type="email"
          placeholder={language === 'en' ? "Your Email" : "Seu Email"}
          {...register('email', { 
            required: language === 'en' ? 'Email is required' : 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: language === 'en' ? 'Invalid email address' : 'Endereço de email inválido'
            }
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Textarea
          placeholder={language === 'en' 
            ? "How can I help? (Mentorship, networking, speaking opportunity, etc.)" 
            : "Como posso ajudar? (Mentoria, networking, oportunidade de palestra, etc.)"}
          rows={5}
          {...register('message', { 
            required: language === 'en' ? 'Message is required' : 'Mensagem é obrigatória' 
          })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting 
          ? (language === 'en' ? 'Sending...' : 'Enviando...') 
          : (language === 'en' ? 'Send Message' : 'Enviar Mensagem')}
      </Button>
    </form>
  );
};

export default ContactForm;
