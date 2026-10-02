import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface AnimatedCounterProps {
  value: number
  className?: string
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const prefersReduced = usePrefersReducedMotion()
  const [display, setDisplay] = useState(() => (prefersReduced ? value : 0))

  const motionValue = useMotionValue(prefersReduced ? value : 0)
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 })

  useEffect(() => {
    if (!prefersReduced && isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value, prefersReduced])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(Math.round(latest))
    })
    return unsubscribe
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
    </span>
  )
}
