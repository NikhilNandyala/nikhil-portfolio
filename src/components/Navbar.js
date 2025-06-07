export default function Navbar() {
  return (
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
  );
}

