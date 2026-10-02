import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li'
  y?: number
}

export function RevealOnScroll({
  children,
  delay = 0,
  className,
  as = 'div',
  y = 24,
}: RevealOnScrollProps) {
  const prefersReduced = usePrefersReducedMotion()

  const variants: Variants = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{ duration: prefersReduced ? 0.01 : 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
