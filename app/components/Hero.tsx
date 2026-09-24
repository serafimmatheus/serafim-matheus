import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-6 lg:px-8 pt-20 pb-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 w-max shadow-inner backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-light)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-light)]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-[var(--accent-light)] uppercase">
              Disponível para Projetos
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-white tracking-tight">
            Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-blue-400">Matheus</span>
            <br />
            <span className="opacity-90">Engenheiro de Software</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl leading-relaxed font-light">
            Desenvolvo aplicações web escaláveis e arquiteturas baseadas em 
            <strong className="text-white font-medium"> Inteligência Artificial Generativa</strong> para automação de processos complexos.
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-4">
            <Link
              href="#projects"
              className="group relative flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-8 py-4 font-bold text-white transition-all hover:bg-[var(--accent-light)] shadow-[0_0_40px_rgba(109,40,217,0.3)] hover:shadow-[0_0_60px_rgba(109,40,217,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Meu Trabalho
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-12 group-hover:animate-shimmer" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
            >
              Baixar CV
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="mt-10 pt-10 border-t border-white/10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">
              Stack Principal
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "AI", "Tailwind"].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-sm font-semibold text-gray-300 hover:text-white hover:border-[var(--accent)]/50 transition-colors shadow-sm cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative w-full h-[600px] flex justify-center items-center perspective-[1000px]">
          {/* Decorative Elements */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[var(--accent)] to-blue-500 opacity-20 blur-[100px] animate-pulse" />
          
          {/* Profile Image Main */}
          <div className="relative z-10 w-[350px] h-[450px] rounded-3xl border border-white/10 bg-[#0d1117] shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
              alt="Matheus Serafim"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/20 to-transparent" />
          </div>

          {/* Floating Code Card Overlapping */}
          <div className="absolute bottom-10 -left-10 z-20 w-full max-w-[320px] rounded-2xl border border-white/10 bg-[#0d1117]/90 backdrop-blur-xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-700 hover:-translate-y-2">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--accent)] to-blue-400" />
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <p className="text-[10px] text-gray-500 font-mono tracking-wider">profile.ts</p>
            </div>
            <pre className="text-xs font-mono text-gray-300 leading-relaxed overflow-x-auto">
              <code>
                <span className="text-fuchsia-400">const</span> me = {"{"}
                <br />
                {"  "}role: <span className="text-emerald-400">"Engineer"</span>,
                <br />
                {"  "}passion: <span className="text-emerald-400">"Gen AI"</span>,
                <br />
                {"  "}status: <span className="text-amber-300">"Deploying"</span>
                <br />
                {"}"};
              </code>
            </pre>
          </div>
          
          {/* Secondary Floating Element */}
          <div className="absolute top-10 -right-5 z-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Projetos Concluídos</p>
                <p className="text-base text-white font-bold">+20 Entregues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
