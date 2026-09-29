"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Timer } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function OfertaPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center relative overflow-hidden py-20 px-6">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 w-max shadow-inner backdrop-blur-sm mb-6">
            <Timer className="w-4 h-4 text-red-400" />
            <span className="text-xs font-bold tracking-widest text-red-400 uppercase">
              Promoção Única até 15 de Outubro de 2026
            </span>
          </motion.div>
          <motion.h1 variants={fadeUpVariants} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Sua Landing Page de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-blue-400">Alta Conversão</span>
          </motion.h1>
          <motion.p variants={fadeUpVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
            Um investimento único para transformar seus cliques no Google Ads em clientes reais todos os dias.
          </motion.p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          className="w-full max-w-md relative group"
        >
          {/* Card Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-[#0d1117] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
            
            <h3 className="text-2xl font-bold text-white mb-2">Projeto Completo</h3>
            <p className="text-gray-400 text-sm mb-8">Design Premium + Copywriting Persuasivo + Alta Velocidade</p>
            
            <div className="mb-8 w-full relative">
              <span className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500/50 -rotate-6"></span>
              <p className="text-gray-500 font-medium text-xl line-through">De R$ 1.497</p>
            </div>
            
            <div className="mb-2">
              <span className="text-gray-400 mr-2">por apenas</span>
              <div className="flex items-start justify-center gap-1 mt-2 text-white">
                <span className="text-2xl font-bold mt-2">R$</span>
                <span className="text-7xl font-black tracking-tighter">797</span>
              </div>
            </div>
            
            <div className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full font-bold text-sm mb-10 border border-emerald-500/20">
              ou em até 10x sem juros
            </div>

            <ul className="flex flex-col gap-4 text-left w-full mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-light)] shrink-0 mt-0.5" />
                <span className="text-gray-300">Design exclusivo e focado no seu cliente ideal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-light)] shrink-0 mt-0.5" />
                <span className="text-gray-300">Copywriting persuasivo gatilhos mentais</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-light)] shrink-0 mt-0.5" />
                <span className="text-gray-300">Otimização máxima de velocidade (SEO)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-light)] shrink-0 mt-0.5" />
                <span className="text-gray-300">Botão de WhatsApp rastreável para métricas</span>
              </li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?phone=5541987495188&text=Ol%C3%A1%2C%20Matheus%21%20Quero%20fazer%20meu%20site%20com%20a%20promo%C3%A7%C3%A3o%21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,211,102,0.4)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 w-full translate-x-[-100%] skew-x-12 group-hover:animate-shimmer" />
              <FaWhatsapp className="w-6 h-6" />
              Quero Garantir Meu Desconto
            </a>
            
            <div className="mt-6 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Satisfação garantida ou seu dinheiro de volta.
              </div>
              <p className="text-[11px] text-gray-500/80 leading-relaxed max-w-xs text-center">
                * O valor médio de R$ 797 cobre nossa estrutura validada de alta conversão. O investimento final pode sofrer variações de acordo com a complexidade, integrações ou recursos específicos desejados para o seu projeto.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
