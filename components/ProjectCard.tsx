type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="border-t border-black/15 dark:border-white/15 py-10">
      <div className="grid gap-8 md:grid-cols-[120px_1fr]">

        {}
        <p className="text-sm font-medium text-black/40 dark:text-white/40">
          {number}
        </p>

        {}
        <div>
          <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h3>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/60 dark:text-white/60">
            {description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-black/15 px-3 py-1 text-xs font-medium dark:border-white/15"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href="#"
            className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-50"
          >
            View project →
          </a>
        </div>

      </div>
    </article>
  );
}