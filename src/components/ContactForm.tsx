import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import emailjs from "emailjs-com";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_portfolio"; // Your service ID from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = "template_contact"; // Your template ID from EmailJS dashboard
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || "your_emailjs_public_key"; // Your EmailJS Public Key

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>();
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for the email
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        subject: "[Contato Portfolio]",
        to_email: "amaral.felipeaugusto@gmail.com"
      };
      
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log('Email sent successfully:', data);
      toast.success(t('contact.success'));
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(t('contact.error') || 'Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">
          {t('contact.reachOut')}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {t('contact.shareInterests')}
        </p>
      </div>
      
      <div className="space-y-2">
        <Input
          placeholder={t('contact.name')}
          {...register('name', { required: t('contact.nameRequired') })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Input
          type="email"
          placeholder={t('contact.email')}
          {...register('email', { 
            required: t('contact.emailRequired'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('contact.emailInvalid')
            }
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Textarea
          placeholder={t('contact.howHelp')}
          rows={5}
          {...register('message', { 
            required: t('contact.messageRequired')
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
        {isSubmitting ? t('contact.sending') : t('contact.send')}
      </Button>
    </form>
  );
};

export default ContactForm;
