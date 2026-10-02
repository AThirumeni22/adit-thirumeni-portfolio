import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { education } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'
import { RevealOnScroll } from '../motion/RevealOnScroll'
import { Card } from '../ui/Card'

export function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <SectionWrapper id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((entry, index) => {
          const isOpen = openIndex === index
          const hasCoursework = entry.coursework.length > 0

          return (
            <RevealOnScroll key={entry.institution} delay={index * 0.1}>
              <Card className="h-full">
                <p className="text-sm font-medium uppercase tracking-wide text-accent">{entry.dateRange}</p>
                <h3 className="mt-2 text-xl font-medium text-ink">{entry.degree}</h3>
                <p className="mt-1 text-ink-soft">{entry.institution}</p>

                {entry.thesis && (
                  <div className="mt-4 rounded-xl bg-paper-soft p-4">
                    <p className="text-sm font-medium text-ink">Thesis: "{entry.thesis.title}"</p>
                    <p className="mt-1 text-sm text-ink-soft">{entry.thesis.description}</p>
                  </div>
                )}

                {hasCoursework && (
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between text-left text-sm font-medium text-ink"
                    >
                      Relevant coursework
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="mt-3 space-y-3 overflow-hidden"
                        >
                          {entry.coursework.map((item) => (
                            <li key={item} className="text-sm leading-relaxed text-ink-soft">
                              {item}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Card>
            </RevealOnScroll>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
