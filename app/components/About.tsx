import { Handshake, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export function About() {
  const stats = [
    {
      icon: <Zap className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "100%",
      label: "Foco no Resultado",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "50+",
      label: "Páginas Entregues",
    },
    {
      icon: <Handshake className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "Parceria",
      label: "Com os Clientes",
    },
    {
      icon: <Target className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "Conversão",
      label: "Como Objetivo Primário",
    },
  ];

  return (
    <section id="about" className="container mx-auto px-6 lg:px-8 scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent-light)]">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            Transformando cliques <br />
            em clientes reais.
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
            Muito prazer, sou Matheus. Meu objetivo não é apenas entregar um site bonito, mas sim construir uma ferramenta que trabalhe para o seu negócio.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
            Entendo a realidade de quem anuncia no Google Ads: cada clique custa caro. Por isso, desenvolvo landing pages pensadas milimetricamente para prender a atenção do seu visitante, gerar confiança e facilitar a entrada em contato. O design, os textos e a velocidade da página são totalmente voltados para conversão.
          </p>
          <div className="w-full">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--accent-light)] mt-4 shadow-[0_0_30px_rgba(109,40,217,0.2)] hover:shadow-[0_0_40px_rgba(109,40,217,0.4)]"
            >
              Quero um Orçamento
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
                <h3 className="text-2xl font-bold text-white mb-1">
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
