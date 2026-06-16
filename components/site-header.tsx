"use client"

import { useEffect, useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#approach" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "#contact" },
]

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="HFDG Productions — home">
      <span className="grid grid-cols-2 gap-px rounded-md border-2 border-foreground p-1 leading-none">
        <span className="flex size-3.5 items-center justify-center rounded-[2px] bg-accent text-[9px] font-extrabold text-accent-foreground">H</span>
        <span className="flex size-3.5 items-center justify-center rounded-[2px] bg-foreground text-[9px] font-extrabold text-background">F</span>
        <span className="flex size-3.5 items-center justify-center rounded-[2px] bg-foreground text-[9px] font-extrabold text-background">D</span>
        <span className="flex size-3.5 items-center justify-center rounded-[2px] bg-accent text-[9px] font-extrabold text-accent-foreground">G</span>
      </span>
      <span className="font-heading text-lg font-extrabold uppercase tracking-tight">
        HFDG
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b-2 border-foreground bg-background">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-base font-extrabold uppercase tracking-tight text-foreground transition-colors hover:text-accent"
            >
              Get in touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border-2 border-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b-2 border-foreground bg-background md:hidden">
          <nav className="flex flex-col px-5 py-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-2xl font-extrabold uppercase tracking-tight last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-extrabold uppercase tracking-tight text-accent-foreground"
            >
              Get in touch
              <ArrowRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
