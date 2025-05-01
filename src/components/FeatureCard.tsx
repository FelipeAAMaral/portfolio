
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const FeatureCard = ({ title, description, image, category, link }: FeatureCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="text-sm uppercase text-muted-foreground mb-1">{category}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link to={link}>{t('blog.readMore')}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
