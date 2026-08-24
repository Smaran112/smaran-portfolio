import ProjectCard from "@/components/ProjectCard";

type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export default function Projects() {
  const projects: Project[] = []; // add project objects here later

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">

      {/* Section heading */}
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
          02 / Selected Work
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Things I've built.
        </h2>
      </div>

      {/* Projects */}
      {projects.length > 0 ? (
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      ) : (
        <div className="border-t border-black/15 dark:border-white/15 py-16 text-center">
          <p className="text-lg font-medium text-black/60 dark:text-white/60">
            Projects in progress — check back soon.
          </p>
          <p className="mt-2 text-sm text-black/40 dark:text-white/40">
            I'm currently building things worth showing.
          </p>
        </div>
      )}

    </section>
  );
}