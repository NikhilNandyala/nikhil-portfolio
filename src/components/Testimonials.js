export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
      <div className="space-y-6">
        <blockquote className="bg-white p-6 rounded-xl shadow-md">
          <p className="italic text-gray-700">"Nikhil is one of the most reliable Azure architects I’ve worked with."</p>
          <footer className="mt-2 text-sm text-gray-500">– Senior DevOps Engineer, Calpine</footer>
        </blockquote>
        <blockquote className="bg-white p-6 rounded-xl shadow-md">
          <p className="italic text-gray-700">"His automation-first mindset transformed our deployment pipelines."</p>
          <footer className="mt-2 text-sm text-gray-500">– Cloud Operations Manager, XYZ Solutions</footer>
        </blockquote>
      </div>
    </section>
  );
}

