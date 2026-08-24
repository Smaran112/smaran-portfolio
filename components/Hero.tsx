export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-20">
      <div className="w-full">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
          BCA Student · Software Developer
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
          I build practical software
          <br />
          and keep learning.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/60 dark:text-white/60 sm:text-lg md:text-xl">
          I'm Smaran Maharjan, a BCA student exploring software development,
          web technologies, and QA — turning what I learn into things I can
          actually build and use.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
          >
            View my work ↓
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-black hover:text-white dark:border-white/15 dark:hover:bg-white dark:hover:text-black"
          >
            GitHub ↗
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 text-sm text-black/50 dark:text-white/50">
          <p>
            <span className="font-medium text-black dark:text-white">
              Education
            </span>
            <br />
            Tribhuvan University · BCA
          </p>

          <p>
            <span className="font-medium text-black dark:text-white">
              Focus
            </span>
            <br />
            Web Development
          </p>

          <p>
            <span className="font-medium text-black dark:text-white">
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