import { projects } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'
import { AnimatedCounter } from '../motion/AnimatedCounter'
import { Magnetic } from '../motion/Magnetic'
import { RevealOnScroll } from '../motion/RevealOnScroll'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

export function Projects() {
  return (
    <SectionWrapper id="projects" eyebrow="Projects & Research" title="Selected work">
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 0.08}>
            <Magnetic>
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-accent">
                      {project.type} · {project.year}
                    </p>
                    <h3 className="mt-1 text-xl font-medium text-ink sm:text-2xl">{project.title}</h3>
                    <p className="mt-1 text-ink-soft">{project.description}</p>
                  </div>

                  {project.stat && (
                    <div className="text-right">
                      <p className="font-display text-3xl text-ink">
                        <AnimatedCounter value={project.stat.value} />
                      </p>
                      <p className="text-xs text-ink-soft">{project.stat.label}</p>
                    </div>
                  )}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-soft" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {project.stack && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                )}
              </Card>
            </Magnetic>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
