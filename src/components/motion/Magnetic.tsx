import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface MagneticProps {
  children: ReactNode
  className?: string
  lift?: number
}

export function Magnetic({ children, className, lift = -6 }: MagneticProps) {
  const prefersReduced = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      whileHover={prefersReduced ? undefined : { y: lift, scale: 1.01 }}
      whileTap={prefersReduced ? undefined : { scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
