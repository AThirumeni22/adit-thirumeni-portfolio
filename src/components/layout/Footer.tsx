import { personal } from '../../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-ink-soft sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p>Built with React, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  )
}
