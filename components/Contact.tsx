export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <div className="border-t border-black/15 dark:border-white/15 pt-16">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
          05 / Contact
        </p>

        <h2 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Let's build something.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60 dark:text-white/60">
          Have a project, opportunity, or just want to say hello?
          I'd be happy to hear from you.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="https://wa.me/9779762421690"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
          >
            WhatsApp ↗
          </a>

          <a
            href="mailto:mrsmaran123@gmail.com"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
          >
            Email me ↗
          </a>

          <a
            href="https://github.com/Smaran112"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:hover:bg-white dark:hover:text-black"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/smaran-maharjan-213b92424/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:hover:bg-white dark:hover:text-black"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>
    </section>
  );
}