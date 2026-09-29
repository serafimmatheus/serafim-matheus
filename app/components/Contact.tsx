import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Quote 
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 lg:px-8 mb-20 scroll-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Left Column - Call to action */}
        <div className="flex flex-col gap-4">
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
              href="https://wa.me/5541987495188"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-light)] hover:shadow-[0_0_20px_rgba(109,40,217,0.4)] group"
            >
              Falar pelo WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Middle Column - Value Prop */}
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 relative flex flex-col justify-between">
          <Quote className="absolute top-6 left-6 h-8 w-8 text-[var(--accent)]/30" />
          <div className="pt-8">
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "Minha taxa de conversão estava estagnada. O Matheus refez a página focando inteiramente no cliente final, e os resultados dobraram na primeira semana de campanha."
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-emerald-900/50 overflow-hidden flex-shrink-0 flex items-center justify-center">
              <span className="text-emerald-400 font-bold text-xs">CS</span>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm">Cliente Satisfeito</h4>
              <p className="text-xs text-gray-400">Diretor Comercial</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Info & Socials */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Meus Contatos
          </span>
          <div className="flex gap-4">
            <Link href="https://wa.me/5541987495188" target="_blank" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366] transition-all">
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
        </div>
      </div>
    </section>
  );
}
