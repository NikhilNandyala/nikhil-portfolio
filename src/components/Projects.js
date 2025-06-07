export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-bold">SPY Options Predictor</h3>
          <p className="text-gray-600">Built an ML model using XGBoost/LSTM deployed in Azure Kubernetes Service.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-bold">Azure Inventory Dashboard</h3>
          <p className="text-gray-600">Aggregates Azure services across subscriptions with visual architecture diagrams.</p>
        </div>
      </div>
    </section>
  );
}

