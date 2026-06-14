const socials = [
  { label: "Instagram", short: "IG" },
  { label: "YouTube", short: "YT" },
  { label: "LinkedIn", short: "IN" },
  { label: "Vimeo", short: "VM" },
]

const columns = [
  {
    title: "Studio",
    links: ["Work", "About", "Approach", "Careers"],
  },
  {
    title: "Services",
    links: ["Commercials", "Documentary", "Branded Content", "Post & Color"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      {/* thin spectrum accent line */}
      <div
        aria-hidden="true"
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.82 0.062 17), oklch(0.85 0.09 60), oklch(0.86 0.08 120), oklch(0.8 0.08 230), oklch(0.82 0.062 17))",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#top"
              className="flex items-center gap-2 text-xl font-semibold tracking-tight"
            >
              <span
                className="inline-block size-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              MERIDIAN
            </a>
            <p className="mt-4 max-w-xs text-balance leading-relaxed text-muted-foreground">
              An independent film &amp; production studio making cinematic work
              for brands worldwide.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className="md:col-span-2" aria-label={col.title}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/90 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Follow
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, short }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border font-mono text-xs transition-colors hover:bg-secondary"
                >
                  {short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Meridian Studio. All rights reserved.</p>
          <p className="font-mono text-xs uppercase tracking-[0.15em]">
            New York · London · Reykjavík
          </p>
        </div>
      </div>
    </footer>
  )
}
