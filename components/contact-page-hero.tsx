"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ContactPageHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[50vh] md:min-h-[60vh] flex-col items-center justify-center overflow-hidden px-5 py-24 lg:px-8"
      aria-label="Contact Hero"
    >
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex w-full max-w-[1600px] flex-col md:block items-center md:items-start text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl text-pretty font-heading text-[2.75rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Let's build
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Something Great.</span>
            <span
              className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/90 md:bottom-2 md:h-5"
              aria-hidden="true"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          Tell us about your project, your timeline, and your vision. Our team will get back to you within two business days to arrange a consultation.
        </motion.p>
      </motion.div>
    </section>
  )
}
