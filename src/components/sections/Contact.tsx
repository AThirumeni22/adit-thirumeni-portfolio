import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { contact } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'
import { RevealOnScroll } from '../motion/RevealOnScroll'
import { Card } from '../ui/Card'

interface ContactRowProps {
  icon: ReactNode
  label: string
  value: string
  copyable?: boolean
}

function ContactRow({ icon, label, value, copyable }: ContactRowProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
          {icon}
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-ink-soft">{label}</p>
          <p className="text-ink">{value}</p>
        </div>
      </div>
      {copyable && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label.toLowerCase()}`}
          className="relative flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? 'check' : 'copy'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </motion.span>
          </AnimatePresence>
        </button>
      )}
    </div>
  )
}

export function Contact() {
  return (
    <SectionWrapper id="contact" eyebrow="Contact" title="Let's talk">
      <RevealOnScroll>
        <Card className="max-w-xl">
          <p className="text-ink-soft">
            Looking for an internship or junior analyst role? I'd be glad to hear from you.
          </p>
          <div className="mt-2 divide-y divide-line">
            <ContactRow icon={<Mail size={16} />} label="Email" value={contact.email} copyable />
            <ContactRow icon={<Phone size={16} />} label="Phone" value={contact.phone} copyable />
            <ContactRow icon={<MapPin size={16} />} label="Location" value={contact.location} />
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            <Mail size={16} /> Send an email
          </a>
        </Card>
      </RevealOnScroll>
    </SectionWrapper>
  )
}
