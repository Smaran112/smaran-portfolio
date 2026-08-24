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
      "Deepening my React and Next.js skills by building real projects like this portfolio, and learning to structure full-stack applications properly.",
  },
  {
    number: "02",
    title: "Databases & Backend",
    status: "Learning",
    description:
      "Studying database design and backend fundamentals through coursework and personal practice with MySQL and PHP.",
  },
  {
    number: "03",
    title: "Software Testing & QA",
    status: "Exploring",
    description:
      "Getting familiar with QA principles and testing practices as part of my broader interest in building reliable software.",
  },
];

export default function Learning() {
  return (
    <section id="learning" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
          01 / Currently Learning
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Still learning, always building.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60 dark:text-white/60">
          I don't have a portfolio of finished projects yet — I'm early in my
          journey. Here's what I'm actively working on and studying right now.
        </p>
      </div>

      <div>
        {learningItems.map((item) => (
          <article
            key={item.number}
            className="grid gap-4 border-t border-black/15 dark:border-white/15 py-10 md:grid-cols-[120px_1fr]"
          >
            <p className="text-sm font-medium text-black/40 dark:text-white/40">
              {item.number}
            </p>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {item.title}
                </h3>

                <span className="rounded-full border border-black/15 px-3 py-1 text-xs font-medium text-black/60 dark:border-white/15 dark:text-white/60">
                  {item.status}
                </span>
              </div>

              <p className="mt-3 max-w-2xl text-black/60 dark:text-white/60">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}