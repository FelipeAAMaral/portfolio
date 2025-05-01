
import { createContext, useContext, useState, ReactNode } from 'react';

type LanguageType = 'en' | 'pt';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'hero.greeting': 'Hello, I\'m',
    'hero.intro': 'I build and design digital experiences',
    'about.title': 'About Me',
    'about.description': 'I am a passionate professional who loves to create impactful digital solutions. With years of experience in the industry, I focus on delivering high-quality work that meets client needs and exceeds expectations.',
    'work.title': 'Selected Work',
    'work.viewAll': 'View All',
    'blog.title': 'Latest Posts',
    'blog.readMore': 'Read More',
    'contact.title': 'Get in Touch',
    'contact.description': 'Have a project in mind? Let\'s work together to create something amazing.',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'speaking.title': 'Speaking',
    'speaking.intro': 'I speak at conferences and events about web development, design, and career growth.',
    'mentorship.title': 'Mentorship',
    'mentorship.intro': 'I offer mentorship for those looking to grow in their tech careers.',
  },
  pt: {
    'hero.greeting': 'Olá, eu sou',
    'hero.intro': 'Eu construo e desenho experiências digitais',
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um profissional apaixonado que adora criar soluções digitais impactantes. Com anos de experiência na indústria, foco em entregar trabalhos de alta qualidade que atendam às necessidades dos clientes e superem expectativas.',
    'work.title': 'Trabalhos Selecionados',
    'work.viewAll': 'Ver Todos',
    'blog.title': 'Posts Recentes',
    'blog.readMore': 'Leia Mais',
    'contact.title': 'Entre em Contato',
    'contact.description': 'Tem um projeto em mente? Vamos trabalhar juntos para criar algo incrível.',
    'contact.name': 'Seu Nome',
    'contact.email': 'Endereço de Email',
    'contact.message': 'Sua Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'speaking.title': 'Palestras',
    'speaking.intro': 'Eu falo em conferências e eventos sobre desenvolvimento web, design e crescimento profissional.',
    'mentorship.title': 'Mentoria',
    'mentorship.intro': 'Ofereço mentoria para quem busca crescimento em suas carreiras tech.',
  }
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
