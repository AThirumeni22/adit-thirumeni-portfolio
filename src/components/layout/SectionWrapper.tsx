import type { ReactNode } from 'react'
import { RevealOnScroll } from '../motion/RevealOnScroll'

interface SectionWrapperProps {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, eyebrow, title, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} aria-label={title} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <RevealOnScroll>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-medium text-ink sm:text-4xl">{title}</h2>
        </RevealOnScroll>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
