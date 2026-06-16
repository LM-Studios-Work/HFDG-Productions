import { services } from "@/lib/site-data"

export function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              003 — What we do
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
              From the first idea to the final frame.
            </h2>
          </div>
          <p className="max-w-sm text-balance leading-relaxed text-muted-foreground">
            One team across pre-production, shoot and post. Nothing gets
            lost in the handoff.
          </p>
        </div>

        <div className="mt-14 border-t-2 border-foreground">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group grid grid-cols-1 gap-4 border-b border-border py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:items-baseline md:px-4"
            >
              <span className="font-mono text-sm text-muted-foreground md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-2xl font-extrabold uppercase tracking-tight md:col-span-4 md:text-3xl">
                {service.title}
              </h3>
              <p className="max-w-xl leading-relaxed text-muted-foreground md:col-span-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
