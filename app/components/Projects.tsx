"use client";

import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Projects() {
  const projects = [
    {
      id: "01",
      title: "Jardinagem Cardoso",
      description: "Landing page desenvolvida para captação de orçamentos rápidos e diretos.",
      image: "/projects/jardinagem-cardoso.vercel.app.png",
      link: "https://jardinagem-cardoso.vercel.app",
      isImage: true,
      conversion: "Alta Conversão"
    },
    {
      id: "02",
      title: "Seven Marcenaria",
      description: "Vitrine digital para produtos de alto valor agregado com foco em requinte.",
      image: "/projects/seven-marcenaria.vercel.app.png",
      link: "https://seven-marcenaria.vercel.app",
      isImage: true,
      conversion: "Lead Qualificado"
    },
    {
      id: "03",
      title: "Auto Garage",
      description: "Página otimizada para agendamentos imediatos via WhatsApp.",
      image: "/projects/auto-garage-oficina.vercel.app.png",
      link: "https://auto-garage-oficina.vercel.app",
      isImage: true,
      conversion: "Agendamentos Diários"
    },
    {
      id: "04",
      title: "Alemão Oficina de Garagem",
      description: "Visual forte e persuasivo para transmitir confiança e autoridade local.",
      image: "/projects/alemao-oficina-de-garagem.vercel.app.png",
      link: "https://alemao-oficina-de-garagem.vercel.app",
      isImage: true,
      conversion: "Autoridade Local"
    },
    {
      id: "05",
      title: "VB Auto Center",
      description: "Design projetado para celular, pensando no público que busca emergência no Google Ads.",
      image: "/projects/vb-auto-center.vercel.app.png",
      link: "https://vb-auto-center.vercel.app",
      isImage: true,
      conversion: "Foco Mobile"
    },
    {
      id: "06",
      title: "Modern Home Interior",
      description: "Layout limpo focado 100% nas fotos do produto, aumentando o desejo do cliente.",
      image: "/projects/modern-home-interior.vercel.app.png",
      link: "https://modern-home-interior.vercel.app",
      isImage: true,
      conversion: "Impacto Visual"
    },
    {
      id: "07",
      title: "Kombosa do Amigão",
      description: "Identidade visual vibrante para captar atenção rápida e direta para eventos.",
      image: "/projects/www.kombosadoamigao.com.br.png",
      link: "https://www.kombosadoamigao.com.br",
      isImage: true,
      conversion: "Atenção Direta"
    }
  ];

  return (
    <section id="models" className="container mx-auto px-6 lg:px-8 scroll-mt-28">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex flex-col items-center text-center mb-16"
      >
        <motion.span variants={fadeUpVariants} className="text-sm font-bold uppercase tracking-widest text-[var(--accent-light)] mb-4">
          Comprovado na Prática
        </motion.span>
        <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Modelos que já estão gerando <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-blue-400">Resultados</span>
        </motion.h2>
        <motion.div variants={fadeUpVariants} className="h-1.5 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full mt-8" />
        <motion.p variants={fadeUpVariants} className="mt-6 text-gray-400 max-w-2xl text-lg">
          Não adivinho o que funciona. Eu uso estruturas validadas no Google Ads para o seu segmento.
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-10 md:gap-0">
        {projects.map((project, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariants}
            key={project.id}
            className={`w-full md:w-[48%] group rounded-3xl border border-[var(--card-border)] bg-[#0d1117]/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(109,40,217,0.3)] hover:border-[var(--accent)]/60 flex flex-col relative ${
              index % 2 === 0 ? 'md:self-start' : 'md:self-end'
            } ${index > 0 ? 'md:-mt-40' : ''}`}
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
              <div className="absolute top-5 right-5 z-20">
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">{project.conversion}</span>
                </div>
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
                className="inline-flex items-center justify-center gap-2 text-sm font-bold bg-white/5 hover:bg-[var(--accent)] border border-white/10 px-4 py-3 rounded-xl text-white transition-all group/link w-full"
              >
                Ver Landing Page Completa
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
