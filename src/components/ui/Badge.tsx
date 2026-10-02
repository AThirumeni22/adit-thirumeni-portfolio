import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center rounded-full border border-line bg-paper px-4 py-1.5 text-sm text-ink-soft"
      whileHover={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  )
}
