// src/pages/PostDetailCF.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '@/lib/contentful';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import {
  BLOCKS,
  INLINES,
  MARKS,
} from '@contentful/rich-text-types';
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
      .then((res) => {
        if (res.items.length > 0 && res.items[0].fields) {
          setPost(res.items[0].fields);
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setNotFound(true);
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="container py-16 animate-fade-in text-center">
        <p className="text-lg">{t('blog.notFound') || 'Post not found.'}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-16 animate-fade-in text-center">
        <p className="text-lg animate-pulse">{t('blog.loading') || 'Loading…'}</p>
      </div>
    );
  }

  // derive cover URL (add 'https:' if needed)
  const coverUrl =
    post.coverImage?.fields.file.url?.startsWith('//')
      ? `https:${post.coverImage.fields.file.url}`
      : post.coverImage?.fields.file.url ||
        'https://source.unsplash.com/qlcVpZqzcEc/800x400';

  // rich-text rendering options to style code blocks and inline code
  const options: Options = {
    renderMark: {
      [MARKS.CODE]: (text) => (
        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p className="mb-6">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <h3 className="text-xl font-medium mt-6 mb-3">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="list-disc ml-6 mb-6">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <ol className="list-decimal ml-6 mb-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => (
        <li className="mb-2">{children}</li>
      ),
      [BLOCKS.CODE]: (_node) => {
        const code = _node.content[0]?.value || '';
        return (
          <pre className="bg-gray-800 text-gray-100 p-4 rounded mb-6 overflow-x-auto font-mono text-sm">
            <code>{code}</code>
          </pre>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      ),
    },
  };

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
        })}
        {post.author && ` — ${post.author}`}
      </p>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-lg italic text-gray-700 mb-8">{post.excerpt}</p>
      )}

      {/* Body */}
      <div className="prose prose-lg max-w-none">
        {documentToReactComponents(post.body, options)}
      </div>
    </article>
  );
}
