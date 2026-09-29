import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-6 lg:px-8 pt-16 pb-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 w-max shadow-inner backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-light)]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-[var(--accent-light)] uppercase">
              Vagas Abertas para Projetos
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-white tracking-tight">
            Landing Pages que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-blue-400">Convertem</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl leading-relaxed font-light">
            Olá, sou o <strong className="text-white font-medium">Matheus Serafim</strong>. Crio páginas de alta performance focadas em transformar os visitantes do seu Google Ads em <strong className="text-white font-medium">clientes reais</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mt-4 w-full">
            <Link
              href="#models"
              className="w-full sm:w-auto group relative flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-8 py-4 font-bold text-white transition-all hover:bg-[var(--accent-light)] shadow-[0_0_40px_rgba(109,40,217,0.3)] hover:shadow-[0_0_60px_rgba(109,40,217,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Modelos de Sucesso
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-12 group-hover:animate-shimmer" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
            >
              Falar no WhatsApp
            </Link>
          </div>

          <div className="mt-10 pt-10 border-t border-white/10">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-light)]" />
                Design Persuasivo
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-light)]" />
                Alta Velocidade
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-light)]" />
                Foco no Google Ads
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative w-full h-[600px] flex justify-center items-center perspective-[1000px]">
          {/* Decorative Elements */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[var(--accent)] to-blue-500 opacity-20 blur-[100px]" />
          
          {/* Profile Image Main */}
          <div className="relative z-10 w-full md:w-[600px] h-[500px] md:h-[700px] transition-transform duration-700 hover:scale-[1.02] flex items-end justify-center">
            <Image
              src="/perfil-hero.png"
              alt="Matheus Serafim"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
            {/* Bottom fade to hide hard crop */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
          </div>

          {/* Floating Metric Card */}
          <div className="absolute bottom-8 left-4 md:bottom-10 md:-left-10 z-20 w-[calc(100%-32px)] md:w-full max-w-[280px] rounded-2xl border border-white/10 bg-[#0d1117]/90 backdrop-blur-xl p-4 md:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-700 hover:-translate-y-2">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--accent)] to-blue-400" />
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium">Conversão Média</p>
                <p className="text-lg md:text-xl text-white font-bold tracking-tight">+35%</p>
              </div>
            </div>
          </div>
          
          {/* Secondary Floating Element */}
          <div className="absolute top-4 right-4 md:top-10 md:-right-5 z-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 md:p-4 shadow-2xl scale-90 md:scale-100 origin-top-right">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[var(--accent-light)]" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium">Entregas no Prazo</p>
                <p className="text-sm md:text-base text-white font-bold">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
