
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "@/components/FeatureCard";

const MediumPostsSection = () => {
  const { language } = useLanguage();

  // Fetch Medium posts
  const fetchMediumPosts = async () => {
    try {
      // Using RSS2JSON service to convert Medium feed to JSON
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@amaral.felipeaugusto`
      );
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error("Error fetching Medium posts:", error);
      return [];
    }
  };

  const { data: mediumPosts = [], isLoading, error } = useQuery({
    queryKey: ['medium-posts'],
    queryFn: fetchMediumPosts,
  });

  // Function to strip HTML tags from text
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  // Process medium posts for display
  const processedPosts = mediumPosts.slice(0, 3).map(post => ({
    id: post.guid,
    title: post.title,
    description: stripHtml(post.description).substring(0, 120) + '...',
    image: post.thumbnail || "https://source.unsplash.com/random/800x600/?writing",
    category: "Medium",
    link: post.link
  }));

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === 'en' ? 'My Latest Medium Posts' : 'Meus Posts Recentes no Medium'}
          </h2>
          <Button variant="ghost" asChild size="sm">
            <a href="https://medium.com/@amaral.felipeaugusto" target="_blank" rel="noopener noreferrer">
              {language === 'en' ? 'View All' : 'Ver Todos'}
            </a>
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p>
              {language === 'en' ? 'Loading latest posts...' : 'Carregando posts recentes...'}
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p>
              {language === 'en' ? 
                'Could not load Medium posts at this time. Please check back later.' : 
                'Não foi possível carregar os posts do Medium no momento. Por favor, volte mais tarde.'}
            </p>
            <Button className="mt-4" variant="outline" asChild>
              <a href="https://medium.com/@amaral.felipeaugusto" target="_blank" rel="noopener noreferrer">
                {language === 'en' ? 'Visit Medium Profile' : 'Visitar Perfil no Medium'}
              </a>
            </Button>
          </div>
        ) : processedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processedPosts.map((post) => (
              <FeatureCard 
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                category={post.category}
                link={post.link}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p>
              {language === 'en' ? 'No posts found.' : 'Nenhum post encontrado.'}
            </p>
            <Button className="mt-4" variant="outline" asChild>
              <a href="https://medium.com/@amaral.felipeaugusto" target="_blank" rel="noopener noreferrer">
                {language === 'en' ? 'Visit Medium Profile' : 'Visitar Perfil no Medium'}
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediumPostsSection;
