export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Section heading */}
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
          04 / About
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          A little about me.
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Main introduction */}
        <div>
          <p className="text-xl leading-relaxed">
            I'm Smaran Maharjan, a BCA student at Tribhuvan University
            interested in software development and building practical
            applications.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-black/60 dark:text-white/60">
            I enjoy learning by actually building things. From web
            applications and database systems to exploring new technologies,
            I'm focused on developing my skills through real projects.
          </p>
        </div>

        {/* Details */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
          <div className="border-t border-black/15 dark:border-white/15 pt-4">
            <p className="text-sm text-black/40 dark:text-white/40">
              Education
            </p>

            <p className="mt-2 font-medium">
              Bachelor of Computer Applications
            </p>

            <p className="text-black/60 dark:text-white/60">
              Ratna Rajyalaxmi Multiple Campus, Tribhuvan University
            </p>
             <p className="mt-2 font-medium">
              +2/Higher Secondary Education
            </p>

            <p className="text-black/60 dark:text-white/60">
              ViswaNiketan Higher Secondary School
            </p>

          </div>

          <div className="border-t border-black/15 dark:border-white/15 pt-4">
            <p className="text-sm text-black/40 dark:text-white/40">
              Interests
            </p>

            <p className="mt-2 font-medium">
              Software Development
            </p>

            <p className="text-black/60 dark:text-white/60">
              Web Development · Problem Solving
            </p>
          </div>

          <div className="border-t border-black/15 dark:border-white/15 pt-4">
            <p className="text-sm text-black/40 dark:text-white/40">
              Currently
            </p>

            <p className="mt-2 font-medium">
              Learning & Building
            </p>

            <p className="text-black/60 dark:text-white/60">
              Exploring modern web technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}