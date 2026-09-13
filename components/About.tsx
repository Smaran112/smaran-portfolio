export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      {/* Section heading */}
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
          About
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
          A little about me.
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Main introduction */}
        <div>
          <p className="text-xl leading-relaxed text-[var(--color-ink)]">
            I&apos;m Smaran, a BCA student and aspiring software developer
            who likes learning by building.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
            I&apos;m interested in creating practical software, especially
            web applications, and understanding what happens behind the
            interface from the frontend and backend to databases and the
            logic that connects everything together.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
            Most of what I know has come from experimenting, breaking things,
            fixing them, and building again. I&apos;m still figuring out where
            I want to specialize, but for now I&apos;m focused on becoming a
            better developer one project at a time.
          </p>
        </div>

        {/* Details */}
        <div className="grid gap-8">
          {/* Education */}
          <div className="border-t border-[var(--color-border)] pt-4">
            <p className="text-sm text-[var(--color-muted)]">
              Education
            </p>

            <div className="mt-4">
              <p className="font-medium text-[var(--color-ink)]">
                Bachelor of Computer Applications
              </p>

              <p className="mt-1 text-[var(--color-muted)]">
                Ratna Rajyalaxmi Multiple Campus, Tribhuvan University
              </p>
            </div>

            <div className="mt-5">
              <p className="font-medium text-[var(--color-ink)]">
                +2 / Higher Secondary Education
              </p>

              <p className="mt-1 text-[var(--color-muted)]">
                ViswaNiketan Higher Secondary School
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="border-t border-[var(--color-border)] pt-4">
            <p className="text-sm text-[var(--color-muted)]">
              Interests
            </p>

            <p className="mt-2 font-medium text-[var(--color-ink)]">
              Software Development
            </p>

            <p className="mt-1 text-[var(--color-muted)]">
              Web Development · Problem Solving
            </p>
          </div>

          {/* Currently */}
          <div className="border-t border-[var(--color-border)] pt-4">
            <p className="text-sm text-[var(--color-muted)]">
              Currently
            </p>

            <p className="mt-2 font-medium text-[var(--color-ink)]">
              Learning &amp; Building
            </p>

            <p className="mt-1 text-[var(--color-muted)]">
              Exploring modern web technologies and building practical
              projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}