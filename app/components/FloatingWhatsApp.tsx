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
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <Link
            href="https://wa.me/5541987495188"
            target="_blank"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-transform hover:scale-110 active:scale-95 border-2 border-white/20"
          >
            <FaWhatsapp className="w-8 h-8 ml-[1px] mb-[1px]" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
