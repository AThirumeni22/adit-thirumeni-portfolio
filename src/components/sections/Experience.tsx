import { experience } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'
import { TimelineItem } from '../ui/TimelineItem'

export function Experience() {
  return (
    <SectionWrapper id="experience" eyebrow="Work Experience" title="Where I've worked">
      <ul className="space-y-8">
        {experience.map((entry, index) => (
          <TimelineItem
            key={entry.company}
            eyebrow={entry.dateRange}
            title={entry.role}
            subtitle={entry.company}
            isLast={index === experience.length - 1}
            delay={index * 0.1}
          >
            <ul className="space-y-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed sm:text-base">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-soft" />
                  {bullet}
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </ul>
    </SectionWrapper>
  )
}
