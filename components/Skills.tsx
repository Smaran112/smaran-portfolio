const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["PHP", "MySQL", "Laravel"],
  },
  {
    title: "Languages",
    skills: ["C", "C#", "Java", "Python"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "XAMPP"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
          03 / Skills
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Technologies I work with.
        </h2>
      </div>

      <div className="grid border-t border-black/15 dark:border-white/15 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border-b border-black/15 py-8 dark:border-white/15 md:px-6 md:first:border-r md:dark:border-white/15"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black/50 dark:text-white/50">
              {group.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-lg font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}