import React from "react";
import { useParams, Link } from "../lib/router";
import ReactMarkdown from "../lib/markdown";
import { getPostBySlug } from "../data/blogService";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-600">404 - Blog Not Found</h1>
        <Link to="/" className="text-blue-500 underline mt-4 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
        <span>{post.date}</span>
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <article className="prose prose-lg max-w-none text-gray-700">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      <div className="mt-12">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

