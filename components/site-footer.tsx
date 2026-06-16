const socials = [
  { label: "Instagram", short: "IG" },
  { label: "YouTube", short: "YT" },
  { label: "LinkedIn", short: "IN" },
  { label: "Vimeo", short: "VM" },
]

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Portfolio", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Locations", href: "/locations" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Corporate Video", href: "/services" },
      { label: "Real Estate Media", href: "/services" },
      { label: "Commercial Production", href: "/services" },
      { label: "Music Video", href: "/services" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground">
      <div className="mx-auto max-w-[1600px] px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#top"
              className="flex items-center gap-2 font-heading text-2xl font-extrabold uppercase tracking-tight"
            >
              <span
                className="inline-block size-2.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              HFDG Productions
            </a>
            <p className="mt-4 max-w-xs text-balance leading-relaxed text-muted-foreground">
              A video production studio making corporate, real estate and
              commercial work for brands across Africa and the Middle East.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className="md:col-span-2" aria-label={col.title}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/90 transition-colors hover:text-accent"
                    >
                      {link.label}
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
          <p>© {new Date().getFullYear()} HFDG Productions. All rights reserved.</p>
          <p className="font-mono text-xs uppercase tracking-[0.15em]">
            Johannesburg · Jeddah · Lagos
          </p>
        </div>
      </div>
    </footer>
  )
}
