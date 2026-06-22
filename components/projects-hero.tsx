"use client";

import { useRef } from "react";

export function ProjectsHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[70vh] md:min-h-[85vh] flex-col items-center justify-center overflow-hidden px-5 py-24 lg:px-8"
      aria-label="Projects Hero"
    >
      <div className="relative z-10 flex w-full max-w-[1600px] flex-col md:block items-center md:items-start text-center md:text-left">
        <h1 className="max-w-6xl text-pretty font-heading text-[2.5rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem] animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out fill-mode-both">
          Our <br className="hidden md:block" />
          <span className="text-foreground">Portfolio</span>
        </h1>
        <p className="mt-12 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out delay-200 fill-mode-both">
          A curated selection of our finest corporate, real estate, commercial, and music video productions. Driven by story, crafted with precision.
        </p>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in fade-in duration-1000 delay-1000 fill-mode-both">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll to explore</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
