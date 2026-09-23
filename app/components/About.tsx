import { Calendar, Code2, Smile, Trophy } from "lucide-react";
import Link from "next/link";

export function About() {
  const stats = [
    {
      icon: <Calendar className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "5+",
      label: "Anos de Experiência",
    },
    {
      icon: <Code2 className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "50+",
      label: "Projetos Concluídos",
    },
    {
      icon: <Smile className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "30+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: <Trophy className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "100%",
      label: "Satisfação",
    },
  ];

  return (
    <section id="about" className="container mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent-light)]">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            Especialista em IA <br />
            e Engenharia de Software
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-lg">
            Engenheiro de Software com 5 anos de experiência desenvolvendo aplicações escaláveis com TypeScript, Node.js, React e PostgreSQL. Especializado na arquitetura e integração de sistemas baseados em Inteligência Artificial Generativa, implementando pipelines de RAG com busca vetorial (pgvector), conectores padronizados via Model Context Protocol (MCP) e orquestração de agentes autônomos.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-lg">
            Foco em confiabilidade de sistemas, observabilidade, redução de custos de inferência e design de arquiteturas de software resilientes.
          </p>
          <div>
            <Link
              href="#about-more"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--card-border)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--card-bg)]"
            >
              Saiba Mais Sobre Mim
            </Link>
          </div>
        </div>

        {/* Right Content - Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-all hover:border-[var(--accent)]/50 hover:shadow-[0_0_30px_rgba(109,40,217,0.15)]"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center transition-transform group-hover:scale-110">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
