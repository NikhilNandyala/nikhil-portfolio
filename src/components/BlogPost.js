import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    import(`../blog/${slug}.md`)
      .then((res) => {
        const raw = res.default;
        const { data, content } = matter(raw);
        setMeta(data);
        setContent(content);
      })
      .catch(() => {
        setContent("# 404: Blog Not Found");
        setMeta({ title: "Not Found" });
      });
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{meta.date}</p>
      <ReactMarkdown className="prose prose-lg text-gray-800">{content}</ReactMarkdown>
    </div>
  );
}

