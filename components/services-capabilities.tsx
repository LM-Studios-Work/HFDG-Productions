"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FilmCorners, RecordDot } from "@/components/film-ui";
import { ServiceIcon } from "@/components/service-icons";
import { serviceDetails, type ServiceDetail } from "@/lib/site-data";

/** The full capability breakdown as an accordion list.
 *  Every item expands inline — works identically on mobile and desktop.
 *  Reads the URL hash on mount so hero links open the right item. */
export function ServicesCapabilities() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // On mount / hash change / custom event — open the matching service
  useEffect(() => {
    const activateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const match = serviceDetails.find((s) => s.slug === hash);
      if (match) setOpenSlug(match.slug);
    };

    const activateFromEvent = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      setOpenSlug(slug);
    };

    activateFromHash();
    window.addEventListener("hashchange", activateFromHash);
    window.addEventListener("open-service", activateFromEvent);
    return () => {
      window.removeEventListener("hashchange", activateFromHash);
      window.removeEventListener("open-service", activateFromEvent);
    };
  }, []);

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section
      ref={sectionRef}
      id="services-list"
      className="scroll-mt-20 border-t-2 border-foreground"
    >
      {/* Section header */}
      <div className="mx-auto max-w-[1600px] px-5 pt-12 lg:px-8 lg:pt-16">
        <h2 className="max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
          What we make.
        </h2>
      </div>

      {/* Accordion list */}
      <div className="mx-auto mt-14 max-w-[1600px] border-t-2 border-foreground lg:mt-16">
        <ul>
          {serviceDetails.map((s, i) => {
            const isOpen = openSlug === s.slug;
            return (
              <AccordionItem
                key={s.slug}
                s={s}
                isOpen={isOpen}
                isLast={i === serviceDetails.length - 1}
                onToggle={() => toggle(s.slug)}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function AccordionItem({
  s,
  isOpen,
  isLast,
  onToggle,
}: {
  s: ServiceDetail;
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!panelRef.current) return;
    setHeight(isOpen ? panelRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <li
      id={s.slug}
      className={`scroll-mt-24 border-b-2 border-foreground ${isLast ? "border-b-0" : ""}`}
    >
      {/* Row button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${s.slug}`}
        className={`group flex w-full items-center gap-4 px-5 py-5 text-left transition-colors lg:px-8 lg:py-6 ${
          isOpen ? "bg-card" : "hover:bg-card/60"
        }`}
      >
        {/* Accent rail */}
        <span
          aria-hidden="true"
          className={`h-9 w-0.5 shrink-0 transition-colors ${
            isOpen ? "bg-accent" : "bg-transparent"
          }`}
        />

        {/* Index */}
        <span
          className={`font-mono text-sm font-bold tabular-nums transition-colors ${
            isOpen ? "text-accent" : "text-muted-foreground"
          }`}
        >
          {s.index}
        </span>

        {/* Icon */}
        <span
          className={`shrink-0 transition-colors ${
            isOpen ? "text-accent" : "text-foreground/70 group-hover:text-foreground"
          }`}
        >
          <ServiceIcon slug={s.slug} size={26} animate={isOpen} />
        </span>

        {/* Title */}
        <span className="min-w-0 flex-1">
          <span
            className={`block font-heading text-xl font-extrabold uppercase leading-none tracking-tight transition-colors md:text-2xl ${
              isOpen ? "text-foreground" : "text-foreground/85 group-hover:text-foreground"
            }`}
          >
            {s.title}
          </span>
        </span>

        {/* Chevron */}
        <ChevronDown
          className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180 text-accent" : "rotate-0"
          }`}
        />
      </button>

      {/* Expandable panel */}
      <div
        id={`panel-${s.slug}`}
        role="region"
        aria-labelledby={s.slug}
        style={{ height, overflow: "hidden", transition: "height 300ms ease" }}
      >
        <div ref={panelRef} className="border-t-2 border-foreground">
          <ServiceDetailPanel s={s} />
        </div>
      </div>
    </li>
  );
}

/** Detail content shown inside the expanded accordion row. */
function ServiceDetailPanel({ s }: { s: ServiceDetail }) {
  return (
    <div className="svc-panel-in flex flex-col gap-8 px-5 py-10 lg:flex-row lg:items-start lg:gap-16 lg:px-8 lg:py-14">
      {/* Left — icon viewfinder */}
      <div className="w-full shrink-0 lg:w-72">
        <div className="relative flex aspect-[4/3] w-full items-center justify-center border-2 border-foreground/15 bg-background lg:aspect-square">
          <FilmCorners size={20} inset={12} thickness={2} />
          <ServiceIcon slug={s.slug} size={100} className="text-accent" animate />
        </div>
      </div>

      {/* Right — copy + deliverables */}
      <div className="flex flex-col gap-6">
        {/* Ledger header */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="flex items-center gap-2.5">
            <RecordDot />
            <span>
              Svc <span className="text-foreground">{s.index}</span> / 07
            </span>
          </span>
          <span>{s.bestFor}</span>
        </div>

        <div>
          <h3 className="font-heading text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-4xl">
            {s.title}
          </h3>
          <p className="mt-3 max-w-xl text-pretty text-lg font-semibold leading-snug text-foreground">
            {s.tagline}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {s.description}
          </p>
        </div>

        {/* Deliverables */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            What you get
          </p>
          <ul className="mt-3 flex flex-wrap gap-2.5">
            {s.deliverables.map((d) => (
              <li
                key={d}
                className="flex items-center gap-2 border border-foreground/15 bg-card px-3 py-1.5"
              >
                <span className="size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                <span className="text-sm leading-none text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-2 border-b border-accent pb-0.5 font-mono text-xs uppercase tracking-widest text-accent transition-opacity hover:opacity-70"
        >
          Book a consult →
        </a>
      </div>
    </div>
  );
}
