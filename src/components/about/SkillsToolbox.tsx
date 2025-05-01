
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Users } from "lucide-react";

const SkillsToolbox = () => {
  const { language } = useLanguage();
  
  return (
    <section className="mb-16 bg-muted/30 py-10 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'en' ? '🛠️ Skills & Toolbox' : '🛠️ Habilidades & Ferramentas'}
          </h2>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  {language === 'en' ? 'Languages & Tech' : 'Linguagens & Tech'}
                </h3>
                <p className="text-muted-foreground">Python, FastAPI, HTMX, Keycloak, Docker</p>
              </CardContent>
            </Card>
            
            {/* Analytics & Ops */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  {language === 'en' ? 'Analytics & Ops' : 'Analytics & Operações'}
                </h3>
                <p className="text-muted-foreground">PostHog, Google Data Studio, Notion, Miro</p>
              </CardContent>
            </Card>
            
            {/* Product */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  {language === 'en' ? 'Product' : 'Produto'}
                </h3>
                <p className="text-muted-foreground">Strategy, discovery, OKRs, UX, growth loops</p>
              </CardContent>
            </Card>
            
            {/* Leadership */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {language === 'en' ? 'Leadership' : 'Liderança'}
                </h3>
                <p className="text-muted-foreground">Coaching, cross-functional alignment, hiring, storytelling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsToolbox;
