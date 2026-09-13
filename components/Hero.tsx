/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-start px-6 pt-12 pb-20">
      <div className="w-full">
       
        <h1 className="max-w-5xl text-5xl font-bold leading-none tracking-tighter text-[var(--color-ink)] sm:text-6xl lg:text-6xl">
         Hi, I'm Smaran Maharjan, 
         <br></br>
         A software developer focused on building useful, practical things.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-normal text-[var(--color-muted)] sm:text-lg md:text-xl">
          Software development · Web development · Problem solving
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] dark:hover:bg-[var(--color-accent)] dark:text-[var(--color-ink)]"
          >
            View my work ↓
          </a>

        </div>

        <div className="mt-11 flex flex-wrap gap-x-12 gap-y-6 text-sm text-[var(--color-muted)]">
          <p>
            <span className="font-medium text-[var(--color-ink)]">
              Education
            </span>
            <br />
            Tribhuvan University · BCA
          </p>

          <p>
            <span className="font-medium text-[var(--color-ink)]">
              Focus
            </span>
            <br />
            Web Development
          </p>

          <p>
            <span className="font-medium text-[var(--color-ink)]">
              Based in
            </span>
            <br />
            Kathmandu, Nepal
          </p>
        </div>
      </div>
    </section>
  );
}