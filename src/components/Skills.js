import { motion } from "framer-motion";

const skills = [
  "Azure",
  "Terraform",
  "PowerShell",
  "App Gateway",
  "Intune",
  "CI/CD",
  "Kubernetes",
  "Virtual WAN",
  "NSG",
  "ARM/Bicep",
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}


