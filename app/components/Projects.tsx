import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      id: "01",
      title: "Jardinagem Cardoso",
      description: "Landing page para serviços de paisagismo e jardinagem.",
      image: "/projects/jardinagem-cardoso.vercel.app.png",
      link: "https://jardinagem-cardoso.vercel.app",
      isImage: true,
    },
    {
      id: "02",
      title: "Seven Marcenaria",
      description: "Site institucional para marcenaria sob medida de alto padrão.",
      image: "/projects/seven-marcenaria.vercel.app.png",
      link: "https://seven-marcenaria.vercel.app",
      isImage: true,
    },
    {
      id: "03",
      title: "Auto Garage",
      description: "Plataforma para oficina mecânica com serviços e agendamentos.",
      image: "/projects/auto-garage-oficina.vercel.app.png",
      link: "https://auto-garage-oficina.vercel.app",
      isImage: true,
    },
    {
      id: "04",
      title: "Alemão Oficina de Garagem",
      description: "Site moderno para serviços automotivos e reparos.",
      image: "/projects/alemao-oficina-de-garagem.vercel.app.png",
      link: "https://alemao-oficina-de-garagem.vercel.app",
      isImage: true,
    },
    {
      id: "05",
      title: "VB Auto Center",
      description: "Auto center especializado com catálogo de serviços.",
      image: "/projects/vb-auto-center.vercel.app.png",
      link: "https://vb-auto-center.vercel.app",
      isImage: true,
    },
    {
      id: "06",
      title: "Modern Home Interior",
      description: "Portfólio de design de interiores e arquitetura.",
      image: "/projects/modern-home-interior.vercel.app.png",
      link: "https://modern-home-interior.vercel.app",
      isImage: true,
    },
    {
      id: "07",
      title: "Kombosa do Amigão",
      description: "Landing page para food truck e eventos.",
      image: "/projects/www.kombosadoamigao.com.br.png",
      link: "https://www.kombosadoamigao.com.br",
      isImage: true,
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-[var(--accent-light)] mb-4">
          Projetos em Destaque
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Alguns dos meus trabalhos
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full mt-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl border border-[var(--card-border)] bg-[#0d1117]/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(109,40,217,0.3)] hover:border-[var(--accent)]/60 flex flex-col relative"
          >
            {/* Project Image */}
            <div
              className="w-full h-56 relative overflow-hidden flex items-center justify-center bg-gray-900"
              style={!project.isImage ? { background: project.image } : {}}
            >
              {project.isImage && (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                />
              )}
              <div className="absolute top-5 left-5 text-white/90 font-black text-lg drop-shadow-md z-10 bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
                {project.id}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/20 to-transparent opacity-90 z-0" />
            </div>

            {/* Project Details */}
            <div className="p-8 flex flex-col flex-1 relative z-10 -mt-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-base text-gray-400 flex-1 mb-8 leading-relaxed">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-light)] hover:text-white transition-colors group/link w-max"
              >
                Visitar Site
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
