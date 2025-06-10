import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
    const files = require
      .context("../blog", false, /\.md$/)
      .keys()
      .map((filename) => {
       const file = require(`!!raw-loader!../blog/${filename.replace("./", "")}`).default;
       const slug = filename.replace("./", "").replace(".md", "");
       const { data } = matter(file);
       return {
          slug,
          title: data.title,
          date: data.date,
          summary: data.summary,
    };
  });

      setPosts(files);
    }

    loadPosts();
  }, []);

  return (
    <section className="py-12 max-w-4xl mx-auto px-4" id="blog">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.summary}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 mt-2 inline-block"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

