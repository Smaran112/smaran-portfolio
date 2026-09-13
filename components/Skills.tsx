const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend & Database",
    skills: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Programming",
    skills: ["C", "C#", "Java", "Python"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "XAMPP"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      {/* Section heading */}
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Skills
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
          Technologies I work with.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          Technologies I&apos;ve worked with through coursework, personal
          projects, and hands-on learning.
        </p>
      </div>

      {/* Skill groups */}
      <div className="grid border-t border-[var(--color-border)] md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border-b border-[var(--color-border)] py-8 md:px-6 md:first:border-r"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              {group.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-lg font-medium text-[var(--color-ink)]"
                >
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