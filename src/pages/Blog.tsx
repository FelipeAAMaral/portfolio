
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

// Define the blog post interface
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

const Blog = () => {
  const { t } = useLanguage();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Sample blog posts - in a real implementation, this would fetch from TinaCMS
    const posts = [
      {
        id: 1,
        title: "Responsive Web Design Patterns",
        excerpt: "An exploration of modern responsive design techniques and best practices for web applications.",
        date: "2025-04-15",
        image: "https://source.unsplash.com/random/800x600/?webdesign",
        url: "/blog/responsive-web-design"
      },
      {
        id: 2,
        title: "Building Accessible Web Applications",
        excerpt: "How to ensure your web applications are accessible to all users, including those with disabilities.",
        date: "2025-04-01",
        image: "https://source.unsplash.com/random/800x600/?accessibility",
        url: "/blog/accessibility"
      },
      {
        id: 3,
        title: "The Future of Web Development",
        excerpt: "Exploring emerging trends and technologies that are shaping the future of web development.",
        date: "2025-03-20",
        image: "https://source.unsplash.com/random/800x600/?future",
        url: "/blog/future-web-development"
      },
      {
        id: 4,
        title: "Optimizing Performance in React Applications",
        excerpt: "Techniques and best practices for improving the performance of your React applications.",
        date: "2025-03-05",
        image: "https://source.unsplash.com/random/800x600/?performance",
        url: "/blog/react-performance"
      }
    ];

    setBlogPosts(posts);
  }, []);

  return (
    <div className="container py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <p className="text-lg mb-12">
        {t('blog.languageIntro')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString()}</p>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <a 
                href={post.url} 
                className="text-primary hover:underline inline-flex items-center"
              >
                {t('blog.readMore')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-8">
          {t('blog.moreArticles')}
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://medium.com/@amaral.felipeaugusto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-lg transition"
          >
            {t('blog.checkMedium')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;