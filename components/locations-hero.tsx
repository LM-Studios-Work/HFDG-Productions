"use client"

export function LocationsHero() {
  return (
    <section id="top" className="scroll-mt-20 px-5 pt-28 pb-16 lg:px-8 lg:pt-36 lg:pb-24 border-b-2 border-foreground">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-4xl">
          <h1 className="text-pretty font-heading text-[2.75rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            One Crew.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Global Reach.</span>
              <span
                className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/90 md:bottom-2 md:h-5"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-10 max-w-xl text-xl font-semibold leading-snug text-foreground">
            Based in Johannesburg, Jeddah, and Lagos, we operate across Africa and the Middle East.
          </p>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Wherever the project demands, our crew scales to meet it. Here's where we shoot.
          </p>
        </div>
      </div>
    </section>
  )
}
