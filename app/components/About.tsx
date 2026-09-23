import { Calendar, Code2, Smile, Trophy } from "lucide-react";
import Link from "next/link";

export function About() {
  const stats = [
    {
      icon: <Calendar className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "4+",
      label: "Years Experience",
    },
    {
      icon: <Code2 className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "50+",
      label: "Projects Completed",
    },
    {
      icon: <Smile className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "30+",
      label: "Happy Clients",
    },
    {
      icon: <Trophy className="h-6 w-6 text-[var(--accent-light)]" />,
      value: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section id="about" className="container mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent-light)]">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            I'm passionate about <br />
            creating digital solutions
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-lg">
            With 4+ years of experience in web development, I help businesses
            and individuals bring their ideas to life through clean, efficient,
            and user-friendly code.
          </p>
          <div>
            <Link
              href="#about-more"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--card-border)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--card-bg)]"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        {/* Right Content - Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-all hover:border-[var(--accent)]/50 hover:shadow-[0_0_30px_rgba(109,40,217,0.15)]"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center transition-transform group-hover:scale-110">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
