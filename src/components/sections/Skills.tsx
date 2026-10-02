import { skills } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'
import { RevealOnScroll } from '../motion/RevealOnScroll'
import { Badge } from '../ui/Badge'

export function Skills() {
  return (
    <SectionWrapper id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="space-y-6">
        {skills.map((group, index) => (
          <RevealOnScroll key={group.category} delay={index * 0.08}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-ink-soft">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
