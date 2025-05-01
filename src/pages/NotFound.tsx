
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16">
      <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {language === 'en' 
          ? "Oops! Page not found" 
          : "Oops! Página não encontrada"}
      </p>
      <p className="text-center max-w-md mb-10">
        {language === 'en' 
          ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." 
          : "A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível."}
      </p>
      <Button asChild>
        <Link to="/">
          {language === 'en' ? "Return to Home" : "Voltar para o Início"}
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
