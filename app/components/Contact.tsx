"use client";

import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Quote 
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 lg:px-8 py-12 md:py-20 scroll-mt-28">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
      >
        {/* Left Column - Call to action */}
        <motion.div variants={fadeUpVariants} className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent-light)]">
            Dê o Próximo Passo
          </span>
          <h2 className="text-3xl font-bold text-white leading-tight">
            Pronto para multiplicar <br/> as suas vendas?
          </h2>
          <p className="text-gray-400 text-sm">
            Seu tráfego pago precisa de um destino que converta. Vamos bater um papo no WhatsApp e desenhar a melhor estratégia para o seu negócio.
          </p>
          <div className="mt-4 w-full">
            <Link
              href="https://wa.me/5541987495188?text=Ol%C3%A1%2C%20Matheus%2C%20eu%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-light)] hover:shadow-[0_0_20px_rgba(109,40,217,0.4)] group"
            >
              Falar pelo WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>



        {/* Right Column - Contact Info & Socials */}
        <motion.div variants={fadeUpVariants} className="flex flex-col gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Meus Contatos
          </span>
          <div className="flex gap-4">
            <Link href="https://wa.me/5541987495188?text=Ol%C3%A1%2C%20Matheus%2C%20eu%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366] transition-all">
              <FaWhatsapp className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/matheus-serafim-753893a7" target="_blank" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all">
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:matheus18serafim@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
              <Mail className="h-5 w-5 text-[var(--accent)] group-hover:scale-110 transition-transform" />
              <span className="text-sm">matheus18serafim@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
