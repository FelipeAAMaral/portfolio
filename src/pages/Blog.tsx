// src/pages/Blog.tsx
import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useContentfulPosts, CFPost } from '@/lib/useContentfulPosts';
import { useMediumPosts, MediumPost } from '@/lib/useMediumPosts';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type BlogPost =
  | (CFPost & { source: 'contentful' })
  | (MediumPost & { source: 'medium' });

type OrderOption = 'date' | 'views' | 'reads';

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState<OrderOption>('date');

  // Reset to first page when ordering changes
  useEffect(() => {
    setCurrentPage(1);
  }, [orderBy]);

  const { posts: contentfulPosts, loading: loadingCF, error: errorCF } = useContentfulPosts();
  const { posts: mediumPosts, loading: loadingMD, error: errorMD } = useMediumPosts();

  // Get all posts with ordering
  const allPosts = useMemo(() => {
    const mediumPostsWithSource = mediumPosts
      .map(p => ({ ...p, source: 'medium' as const }));
    const contentfulPostsWithSource = contentfulPosts
      .map(p => ({ ...p, source: 'contentful' as const }));
    
    const posts = [...mediumPostsWithSource, ...contentfulPostsWithSource];

    // Sort based on selected order
    return [...posts].sort((a, b) => {
      switch (orderBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'views':
          const viewsA = (a as any).views || Math.floor(Math.random() * 1000);
          const viewsB = (b as any).views || Math.floor(Math.random() * 1000);
          return viewsB - viewsA;
        case 'reads':
          const readsA = (a as any).reads || Math.floor(Math.random() * 1000);
          const readsB = (b as any).reads || Math.floor(Math.random() * 1000);
          return readsB - readsA;
        default:
          return 0;
      }
    });
  }, [contentfulPosts, mediumPosts, orderBy]);

  // Calculate pagination
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    return allPosts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE
    );
  }, [allPosts, currentPage]);

  if (loadingCF || loadingMD) {
    return (
      <div className="container py-16 animate-fade-in text-center">
        <p className="animate-pulse text-lg">{t('blog.loading') || 'Loading posts...'}</p>
      </div>
    );
  }
  if (errorCF) console.error('Contentful error:', errorCF);
  if (errorMD) console.error('Medium error:', errorMD);

  const renderPost = (post: BlogPost) => {
    const isMedium = post.source === 'medium';
    const badgeText = isMedium ? 'Medium' : 'Blog';
    const badgeClasses = isMedium
      ? 'bg-green-100 text-green-800'
      : 'bg-blue-100 text-blue-800';

    const thumbnail =
      post.image ||
      "public/assets-img/sincerely-media-qlcVpZqzcEc-unsplash.jpg";

    const goDetail = () => {
      if (post.source === 'contentful') navigate(`/blog/cf/${post.slug}`);
    };

    return (
      <article
        key={`${post.source}-${post.slug}`}
        className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
      >
        <div className="h-48 w-full overflow-hidden">
          <img
            src={thumbnail}
            alt={post.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h2
            className="text-xl font-semibold mb-2 line-clamp-2 cursor-pointer hover:text-blue-600"
            onClick={!isMedium ? goDetail : undefined}
          >
            {post.title}
          </h2>
          <time className="block text-gray-500 text-sm mb-4">
            {new Date(post.date).toLocaleDateString(undefined, {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
            {'author' in post && post.author && ` - ${post.author}`}
          </time>
          <p className="text-gray-700 mb-6 line-clamp-3 flex-1">{post.excerpt}</p>

          <div className="mt-auto">
            {isMedium ? (
              <a
                href={(post as MediumPost).url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                {t('blog.readMore')}
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1
                       1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293
                       a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            ) : (
              <button
                onClick={goDetail}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                {t('blog.readMore')}
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1
                       1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293
                       a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          <span
            className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${badgeClasses}`}
          >
            {badgeText}
          </span>
        </div>
      </article>
    );
  };

  return (
    <div className="container py-16 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">{t('blog.title') || 'Blog'}</h1>
        <Select value={orderBy} onValueChange={(value: OrderOption) => setOrderBy(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Order by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Latest Posts</SelectItem>
            <SelectItem value="views">Most Viewed</SelectItem>
            <SelectItem value="reads">Most Read</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map(renderPost)}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="flex items-center px-4">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Blog;
