const principles = [
  {
    no: "01",
    title: "Mission",
    body: "To make films that actually move the needle — footage that sells units, closes rounds and earns attention, not just awards.",
  },
  {
    no: "02",
    title: "Vision",
    body: "To be the studio brands across Africa and the Middle East call first when the film has to be right — and the standard everyone else gets measured against.",
  },
  {
    no: "03",
    title: "Values",
    body: "Craft over compromise. Small crew, full ownership. Every frame earns its place. We deliver when we say we will, and we never phone it in.",
  },
]

/** About — Mission / Vision / Values as a bordered three-up grid. */
export function AboutValues() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-bold text-accent">003</span> — What we stand on
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              The rules we shoot by.
            </h2>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border-2 border-foreground bg-foreground md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="flex flex-col bg-background p-8 lg:p-10">
              <span className="font-mono text-sm font-bold text-accent">{p.no}</span>
              <h3 className="mt-6 font-heading text-3xl font-extrabold uppercase tracking-tight">
                {p.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
