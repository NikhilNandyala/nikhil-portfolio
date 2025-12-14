import React, { useEffect, useState } from "react";
import content from "../data/content.json";
import { getAllPosts } from "../data/blogService";

const DEFAULT_PASSCODE = process.env.REACT_APP_ADMIN_PASSCODE || "admin123";

function downloadJsonFile(data) {
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "content.json";
  link.click();
  URL.revokeObjectURL(url);
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => window.localStorage.getItem("adminAuthed") === "true"
  );
  const [passcode, setPasscode] = useState("");
  const [rawContent, setRawContent] = useState(() => JSON.stringify(content, null, 2));
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      window.localStorage.setItem("adminAuthed", "true");
    } else {
      window.localStorage.removeItem("adminAuthed");
    }
  }, [isAuthenticated]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (passcode.trim() === DEFAULT_PASSCODE) {
      setIsAuthenticated(true);
      setPasscode("");
      setError("");
    } else {
      setError("Invalid admin passcode. Please try again.");
    }
  };

  const handleValidateJson = () => {
    try {
      JSON.parse(rawContent);
      setStatus("Content JSON looks valid. You can download it to replace src/data/content.json.");
      setError("");
    } catch (err) {
      setError(`Content JSON is invalid: ${err.message}`);
      setStatus("");
    }
  };

  const handleDownload = () => {
    try {
      const parsed = JSON.parse(rawContent);
      downloadJsonFile(JSON.stringify(parsed, null, 2));
      setStatus("Downloaded updated content.json. Replace the file in src/data/ and commit changes.");
      setError("");
    } catch (err) {
      setError(`Content JSON is invalid: ${err.message}`);
      setStatus("");
    }
  };

  const handleReset = () => {
    setRawContent(JSON.stringify(content, null, 2));
    setStatus("Reset to the repository content file.");
    setError("");
  };

  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <header className="flex flex-col gap-3 mb-8">
          <h1 className="text-3xl font-bold">Admin Console</h1>
          <p className="text-gray-600">
            Use this page to log in and manage the site content safely. The default passcode is
            set via <code className="bg-gray-200 px-1 rounded">REACT_APP_ADMIN_PASSCODE</code> or falls back
            to <span className="font-mono">admin123</span>.
          </p>
        </header>

        {!isAuthenticated ? (
          <div className="bg-white shadow rounded-lg p-6 max-w-xl">
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="admin-passcode">
                  Admin Passcode
                </label>
                <input
                  id="admin-passcode"
                  type="password"
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter the configured passcode"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Log In
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            <section className="bg-white shadow rounded-lg p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">Content JSON Editor</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Edit the site content below, then download <code>content.json</code> and replace
                    <code className="ml-1">src/data/content.json</code> in your repo. Commit and push to publish.
                  </p>
                </div>
                <button
                  className="text-sm text-red-600 hover:underline"
                  onClick={() => setIsAuthenticated(false)}
                >
                  Log Out
                </button>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="content-json">
                  content.json
                </label>
                <textarea
                  id="content-json"
                  className="w-full border border-gray-300 rounded-lg p-3 font-mono text-sm h-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={rawContent}
                  onChange={(e) => setRawContent(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={handleValidateJson}
                >
                  Validate JSON
                </button>
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={handleDownload}
                >
                  Download updated file
                </button>
                <button
                  type="button"
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                  onClick={handleReset}
                >
                  Reset to repository values
                </button>
              </div>
              {status && <p className="text-sm text-green-700 mt-3">{status}</p>}
              {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            </section>

            <section className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold">Published blog posts</h2>
              <p className="text-gray-600 text-sm mt-1">
                Blog articles live in <code>src/blog</code> as Markdown files. Update front matter for title, date,
                summary, and tags. Add new files to publish additional posts.
              </p>
              <div className="mt-4 divide-y divide-gray-200 border border-gray-200 rounded-lg">
                {posts.length === 0 && <p className="p-4 text-gray-500">No posts found. Add a Markdown file under src/blog.</p>}
                {posts.map((post) => (
                  <div key={post.slug} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <p className="font-semibold text-gray-800">{post.title}</p>
                      <p className="text-sm text-gray-500">{post.slug}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{post.date}</span>
                      {post.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
