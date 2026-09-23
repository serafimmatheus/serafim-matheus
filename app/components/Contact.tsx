import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Quote 
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Left Column - Call to action */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent-light)]">
            Vamos Trabalhar Juntos
          </span>
          <h2 className="text-3xl font-bold text-white leading-tight">
            Tem um projeto em mente?
          </h2>
          <p className="text-gray-400 text-sm">
            Estou sempre aberto a discutir novos projetos, ideias e oportunidades. 
            Vamos criar algo incrível juntos!
          </p>
          <div className="mt-4">
            <Link
              href="mailto:hello@matheusserafim.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-light)] hover:shadow-[0_0_20px_rgba(109,40,217,0.4)] group"
            >
              Entrar em Contato
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Middle Column - Testimonial */}
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 relative flex flex-col justify-between">
          <Quote className="absolute top-6 left-6 h-8 w-8 text-[var(--accent)]/30" />
          <div className="pt-8">
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "Matheus é um desenvolvedor excepcional que entrega com alta 
              qualidade e pontualidade. Sua atenção aos detalhes e habilidade 
              para resolver problemas são impressionantes."
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
              {/* Fallback avatar */}
              <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-indigo-500" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Sarah Johnson</h4>
              <p className="text-xs text-gray-400">CEO, TechStart</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Info & Socials */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Siga-me
          </span>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--accent)] transition-all">
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all">
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-all">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] transition-all">
              <FaInstagram className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:hello@matheusserafim.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
              <Mail className="h-5 w-5 text-[var(--accent)] group-hover:scale-110 transition-transform" />
              <span className="text-sm">hello@matheusserafim.com</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
              <Phone className="h-5 w-5 text-[var(--accent)] group-hover:scale-110 transition-transform" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
