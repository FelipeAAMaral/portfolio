
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16">
      <h1 className="text-6xl font-bold text-primary mb-6">{t('notFound.title')}</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {t('notFound.message')}
      </p>
      <p className="text-center max-w-md mb-10">
        {t('notFound.description')}
      </p>
      <Button asChild>
        <Link to="/">
          {t('notFound.returnHome')}
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
