
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
  const { t } = useLanguage();
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
      <div className="space-y-2">
        <Input
          placeholder={t('contact.name')}
          {...register('name', { required: 'Name is required' })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Input
          type="email"
          placeholder={t('contact.email')}
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Textarea
          placeholder={t('contact.message')}
          rows={5}
          {...register('message', { required: 'Message is required' })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : t('contact.send')}
      </Button>
    </form>
  );
};

export default ContactForm;
