import { clients } from "@/lib/site-data"

export function ClientMarquee() {
  const row = [...clients, ...clients]

  return (
    <section className="border-y border-border py-10">
      <p className="px-6 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground lg:px-10">
        Trusted by teams around the world
      </p>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16">
          {row.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap text-2xl font-semibold tracking-tight text-muted-foreground md:text-3xl"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
