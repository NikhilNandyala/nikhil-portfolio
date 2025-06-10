import React from "react";
import content from "../data/content.json";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="flex flex-col items-center justify-center py-16 bg-white shadow">
        <img
          src="/profile.jpg"
          alt={content.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
        />
        <h1 className="text-3xl font-bold mt-4">{content.name}</h1>
        <p className="text-lg text-gray-600">{content.title}</p>
        <a
          href={`mailto:${content.email}`}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Reach Out
        </a>
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
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{content.about}</p>
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="space-y-6">
            {content.testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
                <footer className="mt-2 text-sm text-gray-500">– {testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="text-center text-sm text-gray-500 py-8">
        <p>
          Contact me: <a href={`mailto:${content.email}`} className="text-blue-600 hover:underline">{content.email}</a>
        </p>
        <p>© {new Date().getFullYear()} {content.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

