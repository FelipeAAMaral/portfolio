
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";

const Speaking = () => {
  const { t, language } = useLanguage();

  const speakingEvents = [
    {
      id: 1,
      title: language === 'en' ? "Web Accessibility in 2025" : "Acessibilidade Web em 2025",
      event: "TechConf 2025",
      date: "2025-06-15",
      location: language === 'en' ? "San Francisco, CA" : "São Francisco, CA",
      description: language === 'en' 
        ? "A comprehensive talk on making web applications accessible to all users, including practical techniques and tools."
        : "Uma palestra abrangente sobre como tornar aplicações web acessíveis a todos os usuários, incluindo técnicas e ferramentas práticas."
    },
    {
      id: 2,
      title: language === 'en' ? "The Future of React Development" : "O Futuro do Desenvolvimento com React",
      event: "ReactWorld 2025",
      date: "2025-04-20",
      location: language === 'en' ? "Berlin, Germany" : "Berlim, Alemanha",
      description: language === 'en'
        ? "Exploring upcoming features, best practices, and performance optimizations in React development."
        : "Explorando recursos futuros, melhores práticas e otimizações de desempenho no desenvolvimento com React."
    },
    {
      id: 3,
      title: language === 'en' ? "Career Paths in Modern Web Development" : "Caminhos de Carreira no Desenvolvimento Web Moderno",
      event: language === 'en' ? "Career Tech Summit" : "Cúpula de Carreiras em Tecnologia",
      date: "2024-11-10",
      location: language === 'en' ? "Tokyo, Japan" : "Tóquio, Japão",
      description: language === 'en'
        ? "Discussing various career paths and growth opportunities in the rapidly evolving field of web development."
        : "Discutindo vários caminhos de carreira e oportunidades de crescimento no campo em rápida evolução do desenvolvimento web."
    }
  ];

  return (
    <div className="container py-16 animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">{t('speaking.title')}</h1>
        <p className="text-lg mb-8 max-w-3xl">
          {t('speaking.intro')}
        </p>
        
        <div className="aspect-[21/9] overflow-hidden rounded-xl mb-12">
          <img 
            src="https://source.unsplash.com/random/1200x600/?conference" 
            alt="Speaking at conference" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="prose max-w-none">
          <p>
            {language === 'en' 
              ? "I'm passionate about sharing knowledge and experiences with the tech community through speaking engagements at conferences, meetups, and webinars. My talks focus on web development, design patterns, accessibility, and career growth in the tech industry."
              : "Sou apaixonado por compartilhar conhecimento e experiências com a comunidade tech através de palestras em conferências, meetups e webinars. Minhas palestras focam em desenvolvimento web, padrões de design, acessibilidade e crescimento de carreira na indústria tech."}
          </p>
          <p>
            {language === 'en'
              ? "With years of experience in the field, I bring practical insights and real-world examples to my presentations, making complex topics accessible and engaging for audiences of all levels."
              : "Com anos de experiência na área, trago insights práticos e exemplos do mundo real para minhas apresentações, tornando tópicos complexos acessíveis e envolventes para audiências de todos os níveis."}
          </p>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 border-b pb-4">
          {t('speaking.events')}
        </h2>
        
        <div className="space-y-10">
          {speakingEvents.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row gap-6 border-b pb-10">
              <div className="md:w-1/4 font-mono">
                <p className="text-primary font-medium">{new Date(event.date).toLocaleDateString()}</p>
                <p className="text-muted-foreground">{event.location}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.event}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-8">
          {t('speaking.interested')}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <p className="text-muted-foreground mb-6">
              {t('speaking.available')}
            </p>
          </div>
          <div className="md:w-2/3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;
