import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";

export function Navbar() {
  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Blog", href: "#" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Code2 className="h-8 w-8 text-[var(--accent-light)] transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold tracking-tight text-white">
            Code<span className="font-medium text-gray-300">Craft</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              {link.name === "Início" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[var(--accent)] rounded-full" />
              )}
              {link.name !== "Início" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all group-hover:w-full rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Link
            href="#contact"
            className="group flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-light)] hover:shadow-[0_0_20px_rgba(109,40,217,0.4)]"
          >
            Vamos Conversar
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
