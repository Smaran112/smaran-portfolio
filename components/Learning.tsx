type LearningItem = {
  number: string;
  title: string;
  status: "Learning" | "Building" | "Exploring";
  description: string;
};

const learningItems: LearningItem[] = [
  {
    number: "01",
    title: "Web Development",
    status: "Building",
    description:
      "Building projects with React and Next.js while improving my understanding of modern frontend development, component structure, and full-stack applications.",
  },
  {
    number: "02",
    title: "Backend & Databases",
    status: "Learning",
    description:
      "Learning backend fundamentals and database design through coursework and personal projects using PHP, Laravel, and MySQL.",
  },
  {
    number: "03",
    title: "Software Testing & QA",
    status: "Exploring",
    description:
      "Learning the fundamentals of software testing and QA, including how to find issues, test applications, and build more reliable software.",
  },
];

export default function Learning() {
  return (
    <section
      id="learning"
      className="mx-auto max-w-6xl px-6 py-10"
    >
      {/* Section heading */}
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Currently Learning
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
          Still learning, always building.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          I&apos;m still early in my development journey, so I focus on
          learning by building and experimenting. These are the areas I&apos;m
          currently spending most of my time on.
        </p>
      </div>

      {/* Learning items */}
      <div>
        {learningItems.map((item) => (
          <article
            key={item.number}
            className="grid gap-4 border-t border-[var(--color-border)] py-10 md:grid-cols-[120px_1fr]"
          >
            {/* Number */}
            <p className="text-sm font-medium text-[var(--color-muted)]">
              {item.number}
            </p>

            <div>
              {/* Title + Status */}
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] md:text-3xl">
                  {item.title}
                </h3>

                <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
                  {item.status}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 max-w-2xl leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}