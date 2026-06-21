"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ProjectsHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Create a parallax effect on the hero text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[70vh] md:min-h-[85vh] flex-col items-center justify-center overflow-hidden px-5 py-24 lg:px-8"
      aria-label="Projects Hero"
    >
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex w-full max-w-[1600px] flex-col md:block items-center md:items-start text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl text-pretty font-heading text-[2.5rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]"
        >
          Our <br className="hidden md:block" />
          <span className="text-foreground">Portfolio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-12 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          A curated selection of our finest corporate, real estate, commercial, and music video productions. Driven by story, crafted with precision.
        </motion.p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll to explore</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  )
}
