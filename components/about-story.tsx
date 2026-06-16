/** About — The Story. */
export function AboutStory() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

        {/* Left — sticky label */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Our story
            </p>
            <h2 className="mt-4 text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              How we
              <br />
              got here.
            </h2>
            <p className="mt-6 max-w-xs leading-relaxed text-muted-foreground">
              No agency middlemen. No committee edits. Filmmakers who learned
              the craft the long way.
            </p>
          </div>
        </div>

        {/* Right — prose */}
        <div className="lg:col-span-8">
          <div className="max-w-3xl space-y-7 text-lg leading-relaxed text-foreground/90">
            <p>
              HFDG started with one person who refused to put the camera down.
              Over a decade of shooting everything from weddings to feature sets,
              our founder learned that the difference between footage and a{" "}
              <span className="text-accent font-semibold">film</span> is never
              the gear. It is the eye, the patience, and the story you choose
              to tell.
            </p>
            <p>
              We learned lighting on real estate shoots where every room had to
              feel like home. We learned pacing on corporate films where a
              founder had ninety seconds to win an investor. We learned
              restraint on commercials where every frame was paid for and every
              second counted.
            </p>
            <p>
              Today HFDG is a small, deliberate crew of directors, shooters and
              editors. The person who shoots your film is the person who cares
              about it in the edit. That is how you get work that feels made,
              not manufactured.
            </p>
            <p>
              We shoot out of{" "}
              <span className="font-semibold text-foreground">Jeddah</span> and{" "}
              <span className="font-semibold text-foreground">Johannesburg</span>,
              working with real estate developers, corporate brands and creative
              entrepreneurs across Africa and the Middle East.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
