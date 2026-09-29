"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botão depois que descer a Hero
      if (window.scrollY > 300) {
        // Verificar se a sessão de contato está visível
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          // Se a sessão de contato estiver entrando na tela (subtraindo 100px pra dar margem)
          if (rect.top <= window.innerHeight - 50) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
           setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Checar logo de cara
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5541987495188&text=Ol%C3%A1%2C%20Matheus%2C%20eu%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-transform hover:scale-110 active:scale-95 border-2 border-white/20 group"
          >
            <FaWhatsapp className="w-8 h-8 md:w-9 md:h-9 ml-[1px] mb-[1px] transition-transform group-hover:rotate-12" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
