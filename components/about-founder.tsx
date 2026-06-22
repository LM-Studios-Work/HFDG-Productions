import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const team = [
  {
    name: "HFDG Founder",
    role: "Director · DP",
    query: "cinematic+director+portrait+studio+dark+background+moody",
    tint: "bg-accent/60",
  },
  {
    name: "Lead Editor",
    role: "Post Production",
    query: "filmmaker+editor+portrait+studio+neutral",
    tint: "bg-foreground/40",
  },
  {
    name: "Camera Operator",
    role: "Director of Photography",
    query: "cinematographer+portrait+studio+on+set",
    tint: "bg-foreground/30",
  },
]

/** About — Team grid. Duotone-washed portraits, 2-col mobile, 3-col desktop. */
export function AboutFounder() {
  return (
    <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The team
          </p>
          <h2 className="mt-4 text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
            Who we are.
          </h2>
        </Reveal>

        <RevealGroup stagger={0.12} className="mt-14">
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.name}>
                <li className="group">
                  {/* Portrait with duotone wash overlay */}
                  <div className="relative overflow-hidden border-2 border-foreground bg-card">
                    <div className="aspect-[3/4] w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/placeholder.svg?height=800&width=600&query=${member.query}`}
                        alt={member.name}
                        className="size-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    {/* duotone colour wash — accent tint */}
                    <div
                      className={`absolute inset-0 mix-blend-multiply ${member.tint} transition-opacity duration-300 group-hover:opacity-80`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Name + role */}
                  <div className="mt-4">
                    <p className="font-heading text-xl font-extrabold uppercase tracking-tight">
                      {member.name}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </li>
              </RevealItem>
            ))}
          </ul>
        </RevealGroup>
      </div>
    </section>
  )
}
