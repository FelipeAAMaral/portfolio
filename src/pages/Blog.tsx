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
  const { posts: contentfulPosts, loading: loadingContentful } = useContentfulPosts();
  const { posts: mediumPosts, loading: loadingMedium } = useMediumPosts();

  const posts: BlogPost[] = useMemo(() => {
    const taggedPosts: BlogPost[] = [
      ...localPosts.map(p => ({ ...p, source: 'local' as const })),
      ...contentfulPosts.map(p => ({ ...p, source: 'contentful' as const })),
      ...mediumPosts.map(p => ({ ...p, source: 'medium' as const })),
    ];
    return taggedPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [localPosts, contentfulPosts, mediumPosts]);

  if (loadingContentful || loadingMedium) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="inline-block animate-pulse text-lg">Loading posts…</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12">{t('blog.title') || 'Blog'}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => {
          const isMedium = post.source === 'medium';
          const badgeText = isMedium ? 'Medium' : 'Blog';
          const badgeClasses = isMedium
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800';
          const thumbnail = post.image ||
            `https://source.unsplash.com/featured/800x400?${encodeURIComponent(post.title)}`;

          return (
            <article
              key={`${post.source}-${post.slug}`}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Badge */}
              <div
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${badgeClasses}`}
              >
                {badgeText}
              </div>

              {/* Content */}
              <div className="p-6">
                <h2
                  className="text-xl font-semibold mb-2 line-clamp-2 cursor-pointer hover:text-blue-600"
                  onClick={() => {
                    if (isMedium) return;
                    const path = post.source === 'contentful'
                      ? `/blog/cf/${post.slug}`
                      : `/blog/${post.slug}`;
                    navigate(path);
                  }}
                >
                  {post.title}
                </h2>
                <time className="block text-gray-500 text-sm mb-4">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </time>
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                {isMedium ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {t('blog.readMore')}
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l6 6a1
                           1 0 010 1.414l-6 6a1 1 0
                           01-1.414-1.414L14.586
                           11H3a1 1 0 110-2h11.586l-4.293-4.293
                           a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      const path = post.source === 'contentful'
                        ? `/blog/cf/${post.slug}`
                        : `/blog/${post.slug}`;
                      navigate(path);
                    }}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {t('blog.readMore')}
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l6 6a1
                           1 0 010 1.414l-6 6a1 1 0
                           01-1.414-1.414L14.586
                           11H3a1 1 0 110-2h11.586l-4.293-4.293
                           a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
