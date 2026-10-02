import type { Variants } from 'framer-motion'

export function staggerContainer(stagger = 0.1): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  }
}
