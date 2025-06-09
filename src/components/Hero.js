import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white shadow-inner">
      <motion.img
        src="/profile.jpg"
        alt="Venkata Nikhil Nandyala"
        className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4 border-4 border-white object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl font-extrabold text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Venkata Nikhil Nandyala
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Cloud Solutions Architect
      </motion.p>
      <motion.a
        href="mailto:nndevunix@gmail.com"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Reach Out
      </motion.a>
    </section>
  );
}

