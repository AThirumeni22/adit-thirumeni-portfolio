import type { ReactNode } from 'react'
import { RevealOnScroll } from '../motion/RevealOnScroll'

interface TimelineItemProps {
  eyebrow: string
  title: string
  subtitle: string
  children: ReactNode
  isLast?: boolean
  delay?: number
}

export function TimelineItem({ eyebrow, title, subtitle, children, isLast, delay = 0 }: TimelineItemProps) {
  return (
    <RevealOnScroll as="li" delay={delay} className="relative pl-10 sm:pl-14">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-paper" />
      {!isLast && <span className="absolute left-[5px] top-5 bottom-[-1.5rem] w-px bg-line" />}
      <p className="text-sm font-medium uppercase tracking-wide text-accent">{eyebrow}</p>
      <h3 className="mt-1 text-xl font-medium text-ink sm:text-2xl">{title}</h3>
      <p className="mt-0.5 text-sm text-ink-soft">{subtitle}</p>
      <div className="mt-4 text-ink-soft">{children}</div>
    </RevealOnScroll>
  )
}
