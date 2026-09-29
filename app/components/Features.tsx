"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, MousePointerClick, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const floatingVariants: any = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function Features() {
  return (
    <section className="container mx-auto px-6 lg:px-8 py-20 overflow-hidden">
      
      {/* --- Feature 1: Design focado em conversão --- */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
        {/* Left: Visual Composition */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] flex justify-center items-center"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 to-blue-500/20 rounded-full blur-[100px] -z-10" />
          
          {/* Main Mockup */}
          <div className="relative w-full max-w-[350px] aspect-[9/16] bg-[#0d1117] rounded-3xl border-4 border-gray-800 overflow-hidden shadow-2xl rotate-[-5deg] z-10 transition-transform hover:rotate-0 duration-500">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 flex justify-center items-center">
              <div className="w-12 h-1.5 bg-gray-900 rounded-full" />
            </div>
            <div className="w-full h-full relative mt-6">
              <Image 
                src="/projects/vb-auto-center.vercel.app.png" 
                alt="Mockup Celular" 
                fill 
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div variants={floatingVariants} animate="animate" className="absolute top-10 left-0 sm:left-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg rotate-12 z-20">
            <MousePointerClick className="w-8 h-8 text-[var(--accent-light)]" />
          </motion.div>
          
          <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: "1s" }} className="absolute bottom-10 right-0 sm:right-10 w-20 h-20 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 backdrop-blur-md flex items-center justify-center shadow-lg -rotate-12 z-20">
            <Zap className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Estrutura Focada em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-blue-400">Conversão</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-gray-400 text-lg leading-relaxed">
            Desenvolvemos landing pages exclusivas para o seu negócio, integrando design moderno, <strong>gatilhos mentais</strong> e facilidade de navegação para maximizar suas vendas.
          </motion.p>
          <motion.p variants={fadeUpVariants} className="text-gray-400 text-lg leading-relaxed">
            Transforme o tráfego do seu Google Ads em leads qualificados com uma página preparada estruturalmente para convencer o visitante a entrar em contato com você na hora.
          </motion.p>
          <motion.div variants={fadeUpVariants} className="mt-4">
            <Link
              href="https://wa.me/5541987495188"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-4 font-bold text-white transition-all hover:bg-[var(--accent-light)] shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_50px_rgba(109,40,217,0.5)] group w-full sm:w-auto"
            >
              <FaWhatsapp className="w-5 h-5" />
              QUERO UMA PÁGINA PROFISSIONAL
            </Link>
          </motion.div>
        </motion.div>
      </div>


      {/* --- Feature 2: Velocidade da Luz --- */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 relative">
        {/* Background Big Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] sm:text-[25rem] font-black text-white/[0.02] pointer-events-none select-none z-0">
          90+
        </div>

        {/* Left: Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10"
        >
          <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Seu site na <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Velocidade da luz</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-gray-400 text-lg leading-relaxed">
            Desenvolvemos sites <strong className="text-white">rápidos e otimizados</strong>, alcançando notas de 90 ou mais no Google PageSpeed. 
          </motion.p>
          <motion.p variants={fadeUpVariants} className="text-gray-400 text-lg leading-relaxed">
            Garantimos fluidez instantânea tanto em smartphones quanto em computadores, evitando que o seu cliente desista e vá para o concorrente porque a página demorou a carregar.
          </motion.p>
          <motion.div variants={fadeUpVariants} className="mt-4">
            <div className="flex items-center gap-4 text-emerald-400 font-bold bg-emerald-400/10 border border-emerald-400/20 px-6 py-3 rounded-xl w-max">
              <Gauge className="w-6 h-6" />
              <span>Alta Performance Garantida</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Visual Composition */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] flex justify-center items-center z-10"
        >
          {/* Main Mockup Desktop */}
          <div className="relative w-full max-w-[500px] aspect-[16/10] bg-[#0d1117] rounded-xl border border-gray-700 overflow-hidden shadow-2xl flex flex-col">
            <div className="h-8 bg-gray-900 border-b border-gray-700 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="w-full flex-1 relative">
              <Image 
                src="/projects/seven-marcenaria.vercel.app.png" 
                alt="Mockup Desktop" 
                fill 
                className="object-cover object-top"
              />
            </div>
          </div>
          
          {/* Speed Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
            className="absolute -right-4 sm:-right-8 -bottom-4 w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-4 border-[#0d1117] flex flex-col items-center justify-center shadow-xl z-20"
          >
            <span className="text-3xl font-black text-white leading-none">99</span>
            <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">Mobile</span>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
