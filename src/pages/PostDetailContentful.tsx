// src/pages/PostDetailCF.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useLanguage } from '@/context/LanguageContext';

interface CFFields {
  title: string;
  publishDate: string;
  author?: string;
  excerpt?: string;
  coverImage?: { fields: { file: { url: string } } };
  body: any;
}

export default function PostDetailCF() {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<CFFields | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      return;
    }
    client
      .getEntries<CFFields>({
        content_type: 'post',
        'fields.slug': slug,
        limit: 1,
      })
      .then(res => {
        if (res.items.length > 0 && res.items[0].fields) {
          setPost(res.items[0].fields);
        } else {
          setNotFound(true);
        }
      })
      .catch(err => {
        console.error(err);
        setNotFound(true);
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="container py-16 animate-fade-in text-center">
        <p className="text-lg">
          {t('blog.notFound') || 'Post not found.'}
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-16 animate-fade-in text-center">
        <p className="text-lg animate-pulse">
          {t('blog.loading') || 'Loading…'}
        </p>
      </div>
    );
  }

  // derive cover URL (add 'https:' if needed)
  const coverUrl = 'public/assets-img/sincerely-media-qlcVpZqzcEc-unsplash.jpg';

  return (
    <article className="container py-16 animate-fade-in">
      {/* Cover Image */}
      <div className="w-full overflow-hidden rounded-lg mb-8">
        <img
          src={coverUrl}
          alt={post.title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Date & Author */}
      <p className="text-sm text-muted-foreground mb-6">
        {new Date(post.publishDate).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        {post.author && `— ${post.author}`}
      </p>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-lg italic text-gray-700 mb-8">
          {post.excerpt}
        </p>
      )}

      {/* Body */}
      <div className="prose prose-lg max-w-none">
        {documentToReactComponents(post.body)}
      </div>
    </article>
  );
}
