type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="border-t border-[var(--color-border)] py-10">
      <div className="grid gap-8 md:grid-cols-[120px_1fr]">
        {/* Project number */}
        <p className="text-sm font-medium text-[var(--color-muted)]">
          {number}
        </p>

        {/* Project details */}
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            {title}
          </h3>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            {description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-ink)]"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Project link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm font-medium text-[var(--color-ink)] underline underline-offset-4 transition-opacity hover:opacity-50"
            >
              View project ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}