const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M22 7.5c0 0-2 .8-3.7 3.2-1.7 2.4-3.4 6.8-4.7 8.3-1.3 1.5-2.2 1.3-2.6-1.2C10.5 15.3 9.4 8.7 7.7 5.7 6 2.7 3.2 2.7.5 4.7l-.5 1.1s2.5-.5 3.7 1.9c1.2 2.4 2.8 9.3 3.5 12.3.7 3 2.3 2.8 3.5.7 1.2-2.1 4.7-9.5 5.2-11 0 0 .5-1.5-1.1-1.3l-1 .2.5-1.2C17 7.4 20.8 5 22 7.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Portfolio", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Locations", href: "/locations" },
      { label: "Case Studies", href: "/projects#case-studies" },
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
                className="inline-block size-2.5 rounded-full bg-accent dot-glow animate-blink-dot"
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
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-accent"
                >
                  {icon}
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
