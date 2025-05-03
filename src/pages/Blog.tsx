// src/pages/Blog.tsx
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalPosts, LocalPost } from '@/lib/useLocalPosts';
import { useContentfulPosts, CFPost } from '@/lib/useContentfulPosts';
import { useMediumPosts, MediumPost } from '@/lib/useMediumPosts';

type BlogPost =
  | (LocalPost & { source: 'local' })
  | (CFPost & { source: 'contentful' })
  | (MediumPost & { source: 'medium' });

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const localPosts = useLocalPosts();
  const { posts: contentfulPosts, loading: loadingCF, error: errorCF } = useContentfulPosts();
  const { posts: mediumPosts, loading: loadingMD, error: errorMD } = useMediumPosts();

  const posts: BlogPost[] = useMemo(() => {
    return [
      ...localPosts.map(p => ({ ...p, source: 'local' as const })),
      ...contentfulPosts.map(p => ({ ...p, source: 'contentful' as const })),
      ...mediumPosts.map(p => ({ ...p, source: 'medium' as const })),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [localPosts, contentfulPosts, mediumPosts]);

  if (loadingCF || loadingMD) {
    return (
      <div className="container py-16 animate-fade-in text-center">
        <p className="animate-pulse text-lg">{t('blog.loading') || 'Loading posts...'}</p>
      </div>
    );
  }
  if (errorCF) console.error('Contentful error:', errorCF);
  if (errorMD) console.error('Medium error:', errorMD);

  return (
    <div className="container py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">{t('blog.title') || 'Blog'}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => {
          const isMedium = post.source === 'medium';
          const badgeText = isMedium ? 'Medium' : 'Blog';
          const badgeClasses = isMedium
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800';

          const thumbnail =
            post.image ||
            "public/assets-img/sincerely-media-qlcVpZqzcEc-unsplash.jpg";

          const goDetail = () => {
            if (post.source === 'local') navigate(`/blog/${post.slug}`);
            else if (post.source === 'contentful') navigate(`/blog/cf/${post.slug}`);
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
                  })} {' - '}{post.author}
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
        })}
      </div>
    </div>
  );
};

export default Blog;
