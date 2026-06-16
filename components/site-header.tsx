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

/** The HFDG logo mark — viewfinder brackets + wordmark, DGC-style */
function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="HFDG Productions home">
      {/* Bracketed logo — thin corner brackets with blinking red dot */}
      <span className="relative flex items-center justify-center">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8 text-foreground">
          {/* TL bracket */}
          <path d="M2 9 L2 2 L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          {/* TR bracket */}
          <path d="M23 2 L30 2 L30 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          {/* BL bracket */}
          <path d="M2 23 L2 30 L9 30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          {/* BR bracket */}
          <path d="M23 30 L30 30 L30 23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          {/* Red dot — always blinking */}
          <circle cx="16" cy="16" r="4" className="fill-accent animate-blink-dot" />
        </svg>
      </span>
      {/* Wordmark */}
      <span className="font-heading text-base font-extrabold uppercase tracking-[0.1em] transition-colors group-hover:text-accent">
        HFDG
        <span className="ml-1 font-sans text-[10px] font-normal normal-case tracking-normal text-muted-foreground">
          Productions
        </span>
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
    <>
      <header className="fixed top-3 sm:top-6 left-0 right-0 w-full z-50">
        <div className="bg-transparent">
          <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-5 lg:px-8">
            <Logo />

            <nav className="hidden flex-1 max-w-3xl mx-12 lg:mx-20 items-center justify-between md:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-accent dot-glow animate-blink-dot" aria-hidden="true" />
                Get in touch
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
      </header>

      {/* Mobile menu — fixed overlay so it never pushes page content down */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-background pt-16 md:hidden">
          <nav className="flex flex-col border-t-2 border-foreground px-5 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-2xl font-extrabold uppercase tracking-tight last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-extrabold uppercase tracking-tight text-accent-foreground"
            >
              Get in touch
              <ArrowRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
