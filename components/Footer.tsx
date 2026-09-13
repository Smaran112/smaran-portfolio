export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>© {new Date().getFullYear()} Smaran Maharjan</p>

        <p>
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}