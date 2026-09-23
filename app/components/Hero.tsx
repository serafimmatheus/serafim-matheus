import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-6 lg:px-8 pt-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] w-max">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-light)]">
              I'm a Web Developer
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
            Hi, I'm <span className="text-[var(--accent-light)]">Alex</span>
            <br />I build things for the web.
          </h1>

          <p className="text-lg text-gray-400 max-w-xl">
            I'm a passionate web developer specializing in building
            exceptional digital experiences with modern technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--accent-light)] hover:shadow-[0_0_20px_rgba(109,40,217,0.4)]"
            >
              View My Work
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-center gap-2 rounded-lg border border-[var(--card-border)] bg-transparent px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--card-bg)]"
            >
              Download CV
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
              Technologies I Work With
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Tech Icons Placeholders - Using small rounded squares for now */}
              {["HTML", "CSS", "JS", "TS", "React", "Node", "Git"].map((tech) => (
                <div
                  key={tech}
                  className="w-10 h-10 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-xs font-bold text-gray-400"
                  title={tech}
                >
                  {tech.substring(0, 2)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative w-full h-[500px] flex justify-center items-center">
          {/* Big Purple Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[var(--accent)]/20 blur-[100px]" />
          
          {/* Floating Code Card */}
          <div className="relative z-10 w-full max-w-sm rounded-xl border border-[var(--card-border)] bg-[#0d1117]/90 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-xs text-gray-500 font-mono ml-2">developer.ts</p>
            </div>
            <pre className="text-sm font-mono text-gray-300">
              <code>
                <span className="text-pink-400">const</span> developer = {"{"}
                <br />
                {"  "}name: <span className="text-green-400">"Alex"</span>,
                <br />
                {"  "}skills: [
                <span className="text-green-400">"React"</span>, <span className="text-green-400">"Next.js"</span>
                ],
                <br />
                {"  "}passion: <span className="text-green-400">"Building"</span>
                <br />
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
