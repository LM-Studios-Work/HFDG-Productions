import { stats } from "@/lib/site-data"

export function StudioStatement() {
  return (
    <section
      id="studio"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          002 — The studio
        </p>

        <p className="mt-8 max-w-5xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-[1.05]">
          We&apos;re a tight crew of directors, shooters and editors who believe
          craft still matters. No bloated teams, no committee edits — just{" "}
          <span className="text-muted-foreground">
            people who care about every frame
          </span>{" "}
          and the story behind it.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border-2 border-foreground bg-foreground md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-6 md:p-8">
              <p className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
