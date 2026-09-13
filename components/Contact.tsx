
export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-[var(--color-border)] pt-16">
        {/* Section Label */}
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Contact
        </p>

        {/* Heading */}
        <h2 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-[var(--color-ink)] md:text-7xl">
          Let&apos;s build something.
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          Have a project, opportunity, or just want to say hello? I&apos;d be
          happy to hear from you.
        </p>

        {/* Contact Links */}
        <div className="mt-12 flex flex-col gap-8">

          {/* Email */}
          <a
            href="mailto:mrsmaran123@gmail.com"
            className="group w-fit"
          >
            <div className="flex items-center gap-3 text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              <span className="text-base font-medium">Email</span>
            </div>

            <p className="ml-8 mt-1 text-sm text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-ink)]">
              mrsmaran123@gmail.com
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9779762421690"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit"
          >
            <div className="flex items-center gap-3 text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.1-4.1A8.5 8.5 0 1 1 20.5 11.5Z" />
                <path d="M8.5 8.5c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.5.6c-.1.1-.1.3 0 .5.5.8 1.2 1.5 2 2 .2.1.4.1.5 0l.6-.5c.2-.1.4-.1.6 0l1.6.7c.2.1.3.3.3.5v.5c0 .3 0 .6-.4.8-.4.2-1 .3-1.5.1-1.2-.4-2.4-1.1-3.4-2.1-1-1-1.7-2.2-2.1-3.4-.2-.5-.1-1.1.1-1.5Z" />
              </svg>

              <span className="text-base font-medium">WhatsApp</span>
            </div>

            <p className="ml-8 mt-1 text-sm text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-ink)]">
              +977 9762421690
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Smaran112"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit"
          >
            <div className="flex items-center gap-3 text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>

              <span className="text-base font-medium">GitHub</span>
            </div>

            <p className="ml-8 mt-1 text-sm text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-ink)]">
              github.com/Smaran112
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/smaran-maharjan-213b92424/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit"
          >
            <div className="flex items-center gap-3 text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0Z" />
              </svg>

              <span className="text-base font-medium">LinkedIn</span>
            </div>

            <p className="ml-8 mt-1 text-sm text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-ink)]">
              linkedin.com/in/smaran-maharjan-213b92424/
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}

