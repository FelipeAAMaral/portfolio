import { useLocalPosts } from "../lib/useLocalPosts";
import { LocalPost } from "../pages/Blog";

export default function BlogLocal() {
  const posts = useLocalPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                <a href={post.url} className="hover:text-blue-600">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
