import { stats } from "@/lib/site-data"

export function StudioStatement() {
  return (
    <section
      id="studio"
      className="scroll-mt-20 border-t border-border px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          002 — The studio
        </p>

        <p className="mt-8 max-w-5xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl md:leading-[1.1]">
          We&apos;re a small team of obsessive filmmakers who believe craft
          still matters. No bloated crews, no committee edits — just{" "}
          <span className="text-muted-foreground">
            people who care about every frame
          </span>{" "}
          and the story behind it.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-6 md:p-8">
              <p className="text-4xl font-semibold tracking-tight md:text-5xl">
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
