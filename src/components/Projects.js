import { motion } from "framer-motion";

const projectData = [
  {
    title: "SPY Options Predictor",
    description: "Built an ML model using XGBoost/LSTM deployed in Azure Kubernetes Service.",
  },
  {
    title: "Azure Inventory Dashboard",
    description: "Aggregates Azure services across subscriptions with visual architecture diagrams.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-white">
      <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 px-4">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-bold text-blue-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


