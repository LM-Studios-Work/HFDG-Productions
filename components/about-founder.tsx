import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const defaultTeam: {
  name: string
  role: string
  photoUrl?: string
  tint: string
}[] = [
  {
    name: "HFDG Founder",
    role: "Director · DP",
    photoUrl: undefined,
    tint: "bg-accent/60",
  },
  {
    name: "Lead Editor",
    role: "Post Production",
    photoUrl: undefined,
    tint: "bg-foreground/40",
  },
  {
    name: "Camera Operator",
    role: "Director of Photography",
    photoUrl: undefined,
    tint: "bg-foreground/30",
  },
]

const fallbackTints = ["bg-accent/60", "bg-foreground/40", "bg-foreground/30", "bg-accent/40"]

export function AboutFounder({ teamMembers = [] }: { teamMembers?: { name: string; role: string; photoUrl?: string }[] }) {
  // Merge CMS team with defaults so users can replace placeholders one by one
  const team = defaultTeam.map((member, index) => {
    const cmsMember = teamMembers[index];
    if (cmsMember) {
      return {
        ...member,
        ...cmsMember,
        // keep the default tint
      };
    }
    return member;
  });
  if (teamMembers.length > defaultTeam.length) {
    team.push(...teamMembers.slice(defaultTeam.length).map(m => ({ ...m, tint: fallbackTints[0] })));
  }

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

        <RevealGroup stagger={0.12} className="mt-14 w-full">
          <ul className="grid grid-cols-2 gap-6 lg:flex lg:flex-nowrap lg:overflow-x-auto lg:pb-8 lg:snap-x lg:snap-mandatory lg:scrollbar-none lg:-mx-8 lg:px-8">
            {team.map((member, i) => (
              <RevealItem 
                key={`${member.name}-${i}`} 
                className="lg:w-[350px] lg:shrink-0 lg:snap-start"
              >
                <li className="group">
                  {/* Portrait with duotone wash overlay */}
                  <div className="relative overflow-hidden border-2 border-foreground bg-card">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-[#111111]">
                      {member.photoUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="size-full flex items-center justify-center opacity-10">
                           {/* Solid colour fallback pattern */}
                        </div>
                      )}
                    </div>

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
