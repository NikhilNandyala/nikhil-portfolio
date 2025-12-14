import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "./lib/router";
import content from "./data/content.json";
import BlogPost from "./components/BlogPost";
import { getAllPosts } from "./data/blogService";
import AdminPage from "./components/AdminPage";

function HomePage() {
  const blogPosts = getAllPosts();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/pexels-goumbik-574071.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <header className="flex flex-col items-center justify-center py-16 shadow">
          <img
            src="/profile.jpg"
            alt={content.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          />
          <h1 className="text-3xl font-bold mt-4 text-white">{content.name}</h1>
          <p className="text-lg text-gray-300">{content.title}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href={`mailto:${content.email}`}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-center"
            >
              Reach Out
            </a>
            <Link
              to="/admin"
              className="px-6 py-2 bg-white text-blue-700 rounded-full hover:bg-blue-50 border border-blue-200 text-center"
            >
              CMS Admin
            </Link>
          </div>
        </header>

        <nav className="bg-white shadow sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap justify-around text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <Link to="/admin" className="hover:text-blue-600">
              Admin
            </Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-12 text-white">
          <section id="about" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="leading-relaxed">{content.about}</p>
          </section>

          <section id="experience" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6">
              {content.experience?.map((role, index) => (
                <div key={index} className="bg-white bg-opacity-90 text-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-blue-800">{role.title}</h3>
                      <p className="text-sm text-gray-600">{role.company}</p>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">
                      {role.period}
                    </span>
                  </div>
                  {role.highlights?.length > 0 && (
                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-700">
                      {role.highlights.map((item, highlightIndex) => (
                        <li key={highlightIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              {content.education?.map((edu, index) => (
                <div key={index} className="bg-white bg-opacity-90 text-gray-800 p-5 rounded-xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">{edu.degree}</h3>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-700 mt-1">{edu.details}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start md:self-center">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {content.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="projects" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="space-y-6">
              {content.projects.map((project, index) => (
                <div key={index} className="bg-white bg-opacity-90 text-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-blue-800 mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="testimonials" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
            <div className="space-y-6">
              {content.testimonials.map((testimonial, index) => (
                <blockquote key={index} className="bg-white bg-opacity-90 text-gray-800 p-6 rounded-xl shadow-md">
                  <p className="italic">"{testimonial.quote}"</p>
                  <footer className="mt-2 text-sm text-gray-500">– {testimonial.author}</footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section id="blog" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
            {blogPosts.length === 0 ? (
              <p className="text-gray-300">No published posts yet. Check back soon!</p>
            ) : (
              <div className="space-y-6">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.slug} className="p-6 bg-white bg-opacity-90 text-gray-800 rounded-lg shadow">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <p className="mt-2">{post.summary}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 mt-2 inline-block hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section id="admin" className="mb-12">
            <div className="bg-white bg-opacity-90 text-gray-900 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-2">Admin console</h2>
              <p className="text-sm text-gray-700">
                Manage the site content from a password-protected dashboard. Use the admin login to update resume details,
                validate <code>content.json</code>, and review published blog posts without touching code.
              </p>
              <Link
                to="/admin"
                className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                Go to admin login
              </Link>
            </div>
          </section>
        </main>

        <footer id="contact" className="text-center text-sm text-gray-300 py-8">
          <p>
            Contact me: <a href={`mailto:${content.email}`} className="text-blue-300 hover:underline">{content.email}</a>
          </p>
          <p>© {new Date().getFullYear()} {content.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
