export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-black/15 dark:border-white/15 pt-8 text-sm text-black/40 dark:text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Smaran Maharjan</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}