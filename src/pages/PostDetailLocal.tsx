import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";

interface Frontmatter {
  title: string;
  date: string;
  author?: string;
}

export default function PostDetailLocal() {
  const { slug } = useParams<{ slug: string }>();
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return setNotFound(true);

    const modules = import.meta.glob<string>(
      "../content/blog/*.md",
      { as: "raw" }
    );
    
    const importPath = `../content/blog/${slug}.md`;
    const loader = (modules as Record<string, () => Promise<string>>)[importPath];

      if (!loader) {
      return setNotFound(true);
    }

    loader()
      .then((raw) => {
        const { data, content } = matter(raw);
        setFrontmatter(data as Frontmatter);
        setContent(content);
      })
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return <p className="container py-16 text-center">Post not found.</p>;
  }
  if (!frontmatter || content === null) {
    return <p className="container py-16 text-center">Loading…</p>;
  }

  return (
    <article className="container py-16 prose">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-muted-foreground">
        {new Date(frontmatter.date).toLocaleDateString()}{" "}
        {frontmatter.author && `— ${frontmatter.author}`}
      </p>
      {content.split("\n\n").map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </article>
  );
}
