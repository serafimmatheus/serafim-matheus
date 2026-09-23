import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      id: "01",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX.",
      image: "linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)",
    },
    {
      id: "02",
      title: "Task Management App",
      description: "Collaborative task management application.",
      image: "linear-gradient(135deg, #e0e7ff 0%, #818cf8 100%)",
    },
    {
      id: "03",
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard.",
      image: "linear-gradient(135deg, #111827 0%, #065f46 100%)",
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent-light)] mb-3">
          Projetos em Destaque
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Alguns dos meus trabalhos recentes
        </h2>
        <div className="h-1 w-20 bg-[var(--accent)] rounded-full mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[var(--accent)]/50 flex flex-col"
          >
            {/* Project Image Placeholder */}
            <div
              className="w-full h-48 relative overflow-hidden"
              style={{ background: project.image }}
            >
              <div className="absolute top-4 left-4 text-white/50 font-bold text-sm">
                {project.id}
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 flex-1 mb-6">
                {project.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-light)] hover:text-white transition-colors"
              >
                Ver Projeto <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--card-border)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--card-border)]" />
      </div>
    </section>
  );
}
