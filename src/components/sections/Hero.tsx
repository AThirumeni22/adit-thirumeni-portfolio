import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { personal } from '../../data/content'
import { staggerContainer } from '../motion/variants'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section id="about" aria-label="About" className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
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
        </motion.div>
      </div>
    </section>
  )
}
