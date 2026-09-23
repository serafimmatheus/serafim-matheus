export function Skills() {
  const skills = [
    { name: "HTML", percent: 95, icon: "E" },
    { name: "CSS", percent: 90, icon: "3" },
    { name: "JavaScript", percent: 90, icon: "JS" },
    { name: "React.js", percent: 85, icon: "⚛" },
    { name: "Next.js", percent: 80, icon: "N" },
    { name: "TypeScript", percent: 85, icon: "TS" },
    { name: "Node.js", percent: 80, icon: "⬢" },
    { name: "Tailwind CSS", percent: 90, icon: "〰" },
    { name: "Git", percent: 85, icon: "♦" },
  ];

  return (
    <section id="skills" className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-sm font-bold uppercase tracking-wider text-[var(--accent-light)] mb-3">
          My Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Technologies I Master
        </h2>
        <div className="h-1 w-20 bg-[var(--accent)] rounded-full mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-3 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center font-bold text-[var(--accent-light)] shadow-sm">
                  {skill.icon}
                </div>
                <span className="font-semibold text-white">{skill.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-400">
                {skill.percent}%
              </span>
            </div>
            {/* Progress Bar Container */}
            <div className="h-2 w-full rounded-full bg-[var(--card-bg)] overflow-hidden border border-[var(--card-border)]">
              {/* Progress Bar Fill */}
              <div
                className="h-full rounded-full bg-[var(--accent)] transition-all duration-1000 ease-out group-hover:bg-[var(--accent-light)] relative"
                style={{ width: `${skill.percent}%` }}
              >
                <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
