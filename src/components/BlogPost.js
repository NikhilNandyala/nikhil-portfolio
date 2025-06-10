import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/blog.json";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

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
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <article className="prose prose-lg text-gray-700">{post.content}</article>
      <div className="mt-12">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

