import { Download, FileText } from 'lucide-react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { RevealOnScroll } from '../motion/RevealOnScroll'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function Resume() {
  return (
    <SectionWrapper id="resume" eyebrow="Resume" title="Full CV, in one PDF">
      <RevealOnScroll>
        <Card className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <FileText size={22} />
            </span>
            <div>
              <p className="font-medium text-ink">Adityan_Thirumeni_Resume.pdf</p>
              <p className="text-sm text-ink-soft">Education, projects, skills and experience in full detail.</p>
            </div>
          </div>
          <Button href="/resume.pdf" download>
            Download resume <Download size={16} />
          </Button>
        </Card>
      </RevealOnScroll>
    </SectionWrapper>
  )
}
