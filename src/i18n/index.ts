
import { createContext, useContext } from 'react';

// Define types for our i18n system
export type LanguageType = 'en' | 'pt';

export interface I18nContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => string;
}

export const translations = {
  en: {
    'hero.greeting': 'Hello, I\'m',
    'hero.intro': 'Tech and product leader with 10+ years in software',
    'about.title': 'About Me',
    'about.description': 'I am a tech and product leader with over 10 years of experience in the software industry. My journey has taken me from writing code to leading cross-functional teams and shaping the future of HRTech solutions in Latin America.',
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
    'speaking.intro': 'I speak at conferences and events about product development, leadership, and tech strategy.',
    'mentorship.title': 'Mentorship',
    'mentorship.intro': 'I offer mentorship for those looking to grow in their tech and product careers.',
    'about.career': 'My Career Journey',
    'about.career.engineer': 'From Software Engineer to Product Strategist',
    'about.career.product': 'Head of Product at Pontotel',
    'about.skills': 'Skills & Toolbox',
    'about.philosophy': 'My Product Philosophy',
    'about.cpo': 'On the Path to CPO',
    'about.more': 'A Bit More About Me',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.speaking': 'Speaking',
    'nav.mentorship': 'Mentorship',
    'nav.contact': 'Contact',
    'nav.aboutMe': 'About me',
    'footer.tagline': 'Building memorable digital experiences',
    'footer.copyright': '© 2025 Felipe Amaral. All rights reserved.',
    'about.buildTogether': 'Let\'s Build Together',
    'about.buildTogether.description': 'Thanks for reading my story. Whether you\'re building a product, scaling a team, or navigating your own journey, I\'m always open to exchange ideas and collaborate.',
    'about.buildTogether.cta': 'Get in Touch',
  },
  pt: {
    'hero.greeting': 'Olá, eu sou',
    'hero.intro': 'Líder de tecnologia e produto com mais de 10 anos em software',
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um líder de tecnologia e produto com mais de 10 anos de experiência na indústria de software. Minha jornada me levou da escrita de código à liderança de equipes multifuncionais e à moldagem do futuro das soluções de HRTech na América Latina.',
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
    'speaking.intro': 'Eu falo em conferências e eventos sobre desenvolvimento de produtos, liderança e estratégia de tecnologia.',
    'mentorship.title': 'Mentoria',
    'mentorship.intro': 'Ofereço mentoria para quem busca crescimento em suas carreiras tech e de produto.',
    'about.career': 'Minha Jornada Profissional',
    'about.career.engineer': 'De Engenheiro de Software a Estrategista de Produto',
    'about.career.product': 'Head de Produto na Pontotel',
    'about.skills': 'Habilidades & Ferramentas',
    'about.philosophy': 'Minha Filosofia de Produto',
    'about.cpo': 'No Caminho para CPO',
    'about.more': 'Um Pouco Mais Sobre Mim',
    'nav.home': 'Início',
    'nav.blog': 'Blog',
    'nav.speaking': 'Palestras',
    'nav.mentorship': 'Mentoria',
    'nav.contact': 'Contato',
    'nav.aboutMe': 'Sobre mim',
    'footer.tagline': 'Construindo experiências digitais memoráveis',
    'footer.copyright': '© 2025 Felipe Amaral. Todos os direitos reservados.',
    'about.buildTogether': 'Vamos Construir Juntos',
    'about.buildTogether.description': 'Obrigado por ler minha história. Se você está construindo um produto, escalando uma equipe ou navegando em sua própria jornada, estou sempre aberto para trocar ideias e colaborar.',
    'about.buildTogether.cta': 'Entre em Contato',
  }
};

// Create an empty context as a placeholder
export const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Hook to use our translations
export const useI18n = () => useContext(I18nContext);
