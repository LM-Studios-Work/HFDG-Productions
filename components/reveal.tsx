"use client"

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react"

/**
 * Subtle scroll-reveal wrapper using Intersection Observer (zero deps).
 *
 * Usage:
 *   <Reveal>              — default fade-up (20px)
 *   <Reveal delay={0.1}>  — staggered
 *   <Reveal direction="left">  — slide from left
 *
 * Animations are intentionally quiet:
 *   - Short translate (16-20px)
 *   - Quick duration (0.6s)
 *   - Runs once, never replays
 *   - Works WITH the heavy Lenis scroll, not against it
 */

type Direction = "up" | "down" | "left" | "right" | "none"

const transforms: Record<Direction, string> = {
  up:    "translateY(20px)",
  down:  "translateY(-20px)",
  left:  "translateX(30px)",
  right: "translateX(-30px)",
  none:  "none",
}

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  amount?: number
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  amount = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1"
      el.style.transform = "none"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionProperty = "opacity, transform"
          el.style.transitionDuration = `${duration}s`
          el.style.transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1)"
          el.style.transitionDelay = `${delay}s`
          el.style.opacity = "1"
          el.style.transform = "none"
          observer.unobserve(el)
        }
      },
      { threshold: amount }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, duration, amount])

  const initialStyle: CSSProperties = {
    opacity: 0,
    transform: transforms[direction],
  }

  return (
    <div ref={ref} className={className} style={initialStyle}>
      {children}
    </div>
  )
}

/**
 * Stagger container — wraps children so each <RevealItem> inside
 * gets a progressive delay automatically.
 */
export function RevealGroup({
  children,
  stagger = 0.08,
  className = "",
}: {
  children: ReactNode
  stagger?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      container.querySelectorAll<HTMLElement>("[data-reveal-item]").forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = container.querySelectorAll<HTMLElement>("[data-reveal-item]")
          items.forEach((el, i) => {
            el.style.transitionProperty = "opacity, transform"
            el.style.transitionDuration = "0.5s"
            el.style.transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1)"
            el.style.transitionDelay = `${i * stagger}s`
            el.style.opacity = "1"
            el.style.transform = "none"
          })
          observer.unobserve(container)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

/**
 * A child item designed to be used inside <RevealGroup>.
 * It gets its delay from the parent's stagger timing.
 */
export function RevealItem({
  children,
  direction = "up",
  className = "",
}: {
  children: ReactNode
  direction?: Direction
  className?: string
}) {
  const initialStyle: CSSProperties = {
    opacity: 0,
    transform: transforms[direction],
  }

  return (
    <div data-reveal-item className={className} style={initialStyle}>
      {children}
    </div>
  )
}
