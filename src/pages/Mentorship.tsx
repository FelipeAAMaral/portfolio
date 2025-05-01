
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";

const Mentorship = () => {
  const { t, language } = useLanguage();

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
          {t('mentorship.title')}
        </h1>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-12">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              {t('mentorship.passion')}
            </p>
            <p className="mb-6">
              {t('mentorship.experience')}
            </p>
            <p>
              {t('mentorship.approach')}
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
          {t('mentorship.journey')}
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
          {t('mentorship.growing')}
        </h2>
        
        <div className="bg-muted/30 rounded-xl p-8 mb-10">
          <p className="mb-6">
            {t('mentorship.advice1')}
          </p>
          <p>
            {t('mentorship.advice2')}
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-8">
          {t('mentorship.interested')}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="md:w-1/3">
            <p className="mb-4">
              {t('mentorship.offer')}
            </p>
            <p className="text-muted-foreground">
              {t('mentorship.fillForm')}
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
