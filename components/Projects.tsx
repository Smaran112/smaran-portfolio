import ProjectCard from "@/components/ProjectCard";

type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export default function Projects() {
  const projects: Project[] = []; // Add project objects here later

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      {/* Section heading */}
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Selected Work
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
          Things I&apos;ve built.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          A collection of projects I&apos;m building while learning and
          developing my skills through hands-on practice.
        </p>
      </div>

      {/* Projects */}
      {projects.length > 0 ? (
        <div>
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              {...project}
            />
          ))}
        </div>
      ) : (
        <div className="border-t border-[var(--color-border)] py-16 text-center">
          <p className="text-lg font-medium text-[var(--color-ink)]">
            Projects are currently in progress.
          </p>

          <p className="mt-2 text-sm text-[var(--color-muted)]">
            I&apos;m working on practical projects and will add them here as
            they take shape.
          </p>
        </div>
      )}
    </section>
  );
}