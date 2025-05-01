
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";

const Mentorship = () => {
  const { language } = useLanguage();

  const careerPath = [
    {
      id: 1,
      year: "2015-2017",
      position: language === 'en' ? "Junior Web Developer" : "Desenvolvedor Web Júnior",
      company: "TechStart Inc.",
      description: language === 'en'
        ? "Started my career building responsive websites and learning the fundamentals of front-end development."
        : "Iniciei minha carreira construindo sites responsivos e aprendendo os fundamentos do desenvolvimento front-end."
    },
    {
      id: 2,
      year: "2017-2019",
      position: language === 'en' ? "Web Developer" : "Desenvolvedor Web",
      company: "Digital Solutions Ltd.",
      description: language === 'en'
        ? "Focused on creating interactive web applications using modern JavaScript frameworks like React."
        : "Focado na criação de aplicações web interativas usando frameworks JavaScript modernos como React."
    },
    {
      id: 3,
      year: "2019-2022",
      position: language === 'en' ? "Senior Front-End Developer" : "Desenvolvedor Front-End Sênior",
      company: "WebCraft Agency",
      description: language === 'en'
        ? "Led development of complex web applications, mentored junior developers, and implemented best practices."
        : "Liderou o desenvolvimento de aplicações web complexas, orientou desenvolvedores juniores e implementou melhores práticas."
    },
    {
      id: 4,
      year: "2022-Present",
      position: language === 'en' ? "Lead Developer & Mentor" : "Desenvolvedor Líder & Mentor",
      company: "InnoTech Solutions",
      description: language === 'en'
        ? "Currently leading development teams and providing mentorship both internally and to the wider tech community."
        : "Atualmente liderando equipes de desenvolvimento e fornecendo mentoria tanto internamente quanto para a comunidade tech mais ampla."
    }
  ];

  return (
    <div className="container py-16 animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">
          {language === 'en' ? "Mentorship" : "Mentoria"}
        </h1>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-12">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              {language === 'en' 
                ? "I'm passionate about helping others grow in their tech careers through personalized mentorship that focuses on both technical skills and career development."
                : "Sou apaixonado por ajudar outros a crescerem em suas carreiras tech através de mentoria personalizada focada tanto em habilidades técnicas quanto em desenvolvimento de carreira."}
            </p>
            <p className="mb-6">
              {language === 'en'
                ? "With years of experience in the industry, I provide guidance on navigating the tech landscape, developing in-demand skills, and finding your unique path to success."
                : "Com anos de experiência na indústria, forneço orientação sobre como navegar no panorama tecnológico, desenvolver habilidades em demanda e encontrar seu caminho único para o sucesso."}
            </p>
            <p>
              {language === 'en'
                ? "My mentorship approach is tailored to your individual goals, whether you're just starting out, looking to advance in your current role, or considering a career pivot within tech."
                : "Minha abordagem de mentoria é adaptada aos seus objetivos individuais, seja você apenas começando, procurando avançar em sua função atual ou considerando uma mudança de carreira dentro da tecnologia."}
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/800x600/?mentorship" 
                alt={language === 'en' ? "Mentorship session" : "Sessão de mentoria"} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 inline-block border-b-2 border-primary pb-2">
          {language === 'en' ? "My Professional Journey" : "Minha Jornada Profissional"}
        </h2>
        
        <div className="space-y-12">
          {careerPath.map((step) => (
            <div key={step.id} className="relative pl-8 md:pl-0">
              {/* Timeline dot and line for desktop */}
              <div className="hidden md:block absolute left-[200px] top-2 w-3 h-3 rounded-full bg-primary"></div>
              <div className="hidden md:block absolute left-[201.5px] top-5 bottom-0 w-0 border-l-2 border-dashed border-muted"></div>
              
              {/* Timeline dot for mobile */}
              <div className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-primary"></div>
              <div className="md:hidden absolute left-1.5 top-5 bottom-0 w-0 border-l-2 border-dashed border-muted"></div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[200px] font-mono text-muted-foreground mb-2 md:mb-0">
                  {step.year}
                </div>
                <div className="md:pl-10">
                  <h3 className="text-xl font-semibold">{step.position}</h3>
                  <p className="text-primary mb-3">{step.company}</p>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          {language === 'en' ? "For Those Looking to Grow" : "Para Aqueles Que Buscam Crescer"}
        </h2>
        
        <div className="bg-muted/30 rounded-xl p-8 mb-10">
          <p className="mb-6">
            {language === 'en'
              ? "If you're looking to grow in your tech career, I believe the most important qualities are curiosity, persistence, and a willingness to continuously learn. The tech industry is always evolving, and those who succeed are those who adapt and grow with it."
              : "Se você busca crescer em sua carreira tech, acredito que as qualidades mais importantes são curiosidade, persistência e disposição para aprender continuamente. A indústria tech está sempre evoluindo, e aqueles que têm sucesso são os que se adaptam e crescem com ela."}
          </p>
          <p>
            {language === 'en'
              ? "My advice is to focus not just on technical skills, but also on communication, collaboration, and understanding the business context of your work. This holistic approach will set you apart and open more doors as your career progresses."
              : "Meu conselho é focar não apenas em habilidades técnicas, mas também em comunicação, colaboração e compreensão do contexto de negócios do seu trabalho. Essa abordagem holística irá destacá-lo e abrir mais portas conforme sua carreira avança."}
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-8">
          {language === 'en' ? "Interested in Mentorship?" : "Interessado em Mentoria?"}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="md:w-1/3">
            <p className="mb-4">
              {language === 'en'
                ? "I offer personalized mentorship based on your specific goals and needs. Whether you're looking for guidance on technical skills, career decisions, or professional development, I'm here to help."
                : "Ofereço mentoria personalizada com base em seus objetivos e necessidades específicos. Seja você procurando orientação sobre habilidades técnicas, decisões de carreira ou desenvolvimento profissional, estou aqui para ajudar."}
            </p>
            <p className="text-muted-foreground">
              {language === 'en'
                ? "Fill out the form with some details about what you're looking for, and I'll get back to you to discuss how we might work together."
                : "Preencha o formulário com alguns detalhes sobre o que você está procurando, e entrarei em contato para discutir como podemos trabalhar juntos."}
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

export default Mentorship;
