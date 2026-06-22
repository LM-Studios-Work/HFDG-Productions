"use client";

import { useRef } from "react";

export function ContactPageHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[50vh] md:min-h-[60vh] flex-col items-center justify-center overflow-hidden px-5 py-24 lg:px-8"
      aria-label="Contact Hero"
    >
      <div className="relative z-10 flex w-full max-w-[1600px] flex-col md:block items-center md:items-start text-center md:text-left">
        <h1 className="max-w-6xl text-pretty font-heading text-[2.75rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out fill-mode-both">
          Let's build
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Something Great.</span>
            <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/90 md:bottom-2 md:h-5" aria-hidden="true" />
          </span>
        </h1>
        <p className="mt-10 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out delay-200 fill-mode-both">
          Tell us about your project, your timeline, and your vision. Our team will get back to you within two business days to arrange a consultation.
        </p>
      </div>
    </section>
  );
}
