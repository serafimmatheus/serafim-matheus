"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Layout, Code, Rocket } from "lucide-react";

const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Process() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Briefing e Imersão",
      description: "Entendemos a fundo o seu negócio, público-alvo e os objetivos da sua campanha."
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Copy Persuasiva",
      description: "Criação de textos focados em prender a atenção e quebrar objeções."
    },
    {
      icon: <Layout className="w-6 h-6 text-white" />,
      title: "Design de Conversão",
      description: "Layout premium focado em guiar os olhos do visitante direto para o CTA."
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Desenvolvimento",
      description: "Programação otimizada para carregamento ultrarrápido e perfeito no mobile."
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Entrega e Lançamento",
      description: "Configuração de domínio, pixels de rastreio e pronto para escalar no Google Ads."
    }
  ];

  return (
    <section id="process" className="container mx-auto px-6 lg:px-8 py-20 scroll-mt-28">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex flex-col items-center text-center mb-20"
      >
        <motion.span variants={fadeUpVariants} className="text-sm font-bold uppercase tracking-widest text-[var(--accent-light)] mb-4">
          Como Funciona
        </motion.span>
        <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          O processo por trás dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-blue-400">Resultados</span>
        </motion.h2>
        <motion.div variants={fadeUpVariants} className="h-1.5 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full mt-8" />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative"
      >
        {/* Horizontal Line for Desktop */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-[var(--card-border)] -z-10" />
        
        {/* Vertical Line for Mobile/Tablet */}
        <div className="block lg:hidden absolute top-0 left-6 bottom-0 w-0.5 bg-[var(--card-border)] -z-10" />

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              variants={fadeUpVariants}
              key={index}
              className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 relative group flex-1"
            >
              {/* Number Indicator & Icon Container */}
              <div className="relative shrink-0">
                {/* Connecting Line active state (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-[var(--accent)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out z-0" style={{ width: "calc(100% + 24px)" }} />
                )}
                
                <div className="w-12 h-12 lg:w-24 lg:h-24 rounded-full bg-[#0d1117] border border-[var(--card-border)] flex items-center justify-center relative z-10 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_30px_rgba(109,40,217,0.4)] group-hover:scale-110">
                  <div className="absolute inset-1 rounded-full bg-[var(--accent)]/10" />
                  <div className="relative z-20 scale-75 lg:scale-100">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 lg:top-0 lg:right-0 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[var(--accent)] flex items-center justify-center font-bold text-xs lg:text-sm text-white shadow-lg border-2 border-[#0d1117]">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 pt-1 lg:pt-4">
                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-[var(--accent-light)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
