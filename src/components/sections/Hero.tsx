import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { personal } from '../../data/content'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { staggerContainer } from '../motion/variants'
import { Button } from '../ui/Button'

const sparklinePoints = '0,70 40,55 80,62 120,38 160,46 200,20 240,30 280,10'

function Sparkline() {
  const prefersReduced = usePrefersReducedMotion()

  return (
    <svg
      viewBox="0 0 280 90"
      className="h-28 w-full max-w-xs text-accent sm:h-36 sm:max-w-sm"
      fill="none"
      aria-hidden="true"
    >
      <motion.polyline
        points={sparklinePoints}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={prefersReduced ? { opacity: 1 } : { pathLength: 0, opacity: 0.4 }}
        animate={prefersReduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      />
      {!prefersReduced && (
        <motion.circle
          r={4}
          fill="var(--color-accent)"
          initial={{ offsetDistance: '0%', opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.3 }}
          cx={280}
          cy={10}
        />
      )}
    </svg>
  )
}

export function Hero() {
  return (
    <section id="about" aria-label="About" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.12)}>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            {personal.location}
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-3xl text-4xl font-medium leading-tight text-ink sm:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 text-xl text-ink-soft sm:text-2xl"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects">
              View projects <ArrowRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary">
              <Mail size={16} /> Get in touch
            </Button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 1 }}
            className="mt-16"
          >
            <Sparkline />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
