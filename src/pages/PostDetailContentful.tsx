import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function PostDetailCF() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;
    client
      .getEntries({
        content_type: "post",
        "fields.slug": slug,
        limit: 1,
      })
      .then((res) => {
        if (res.items.length > 0) {
          setPost(res.items[0].fields);
        } else {
          setPost({ title: "Not found", publishDate: "", author: "", body: { content: [] } });
        }
      })
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return <p className="container py-16 text-center">Loading…</p>;
  }

  return (
    <article className="container py-16 prose">
      <h1>{post.title}</h1>
      <p className="text-sm text-muted-foreground">
        {new Date(post.publishDate).toLocaleDateString()} — {post.author}
      </p>
      <div>{documentToReactComponents(post.body)}</div>
    </article>
  );
}
