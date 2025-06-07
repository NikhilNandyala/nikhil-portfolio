export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {['Azure', 'Terraform', 'PowerShell', 'App Gateway', 'Intune', 'CI/CD'].map(skill => (
          <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

