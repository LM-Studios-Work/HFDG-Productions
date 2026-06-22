"use client"

import { useState } from "react"
import { ArrowRight, BarChart3, ChevronDown, Target, Trophy } from "lucide-react"
import { Reveal } from "@/components/reveal"

type CaseStudy = {
  id: string
  client: string
  title: string
  category: string
  metrics: {
    label: string
    value: string
    icon: React.ReactNode
  }[]
  challenge: string
  solution: string
  impact: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    client: "Acme FinTech",
    title: "Series B Announcement Film",
    category: "Corporate",
    metrics: [
      { label: "Funding Closed", value: "$45M", icon: <Trophy className="size-4" /> },
      { label: "Timeframe", value: "30 Days", icon: <Target className="size-4" /> },
      { label: "Views", value: "1.2M+", icon: <BarChart3 className="size-4" /> },
    ],
    challenge: "Acme FinTech needed a compelling narrative to present to top-tier investors. A standard pitch deck wasn't enough to convey their disruptive technology and market traction.",
    solution: "We produced a high-energy, documentary-style brand film that humanized the founders and visually explained their complex algorithm through dynamic 3D motion graphics.",
    impact: "The video became the centerpiece of their roadshow. They successfully closed a $45M Series B funding round within 30 days of the video's release, oversubscribed by 20%."
  },
  {
    id: "cs-2",
    client: "Lumina Residences",
    title: "Pre-construction Sales Campaign",
    category: "Real Estate",
    metrics: [
      { label: "Pre-sold Units", value: "85%", icon: <Trophy className="size-4" /> },
      { label: "ROI on Video", value: "400%", icon: <BarChart3 className="size-4" /> },
      { label: "Engagement", value: "+210%", icon: <Target className="size-4" /> },
    ],
    challenge: "Lumina needed to sell luxury condos before construction even started. Buyers were hesitant to commit without seeing the physical space.",
    solution: "We crafted a cinematic lifestyle video blending live-action talent in aspirational settings with hyper-realistic architectural renderings, selling the future lifestyle.",
    impact: "The campaign generated unprecedented demand, resulting in 85% of units being pre-sold before the foundation was poured, drastically reducing their marketing spend timeline."
  }
]

type AccordionKey = "challenge" | "solution" | "impact"

const ACCORDION_ITEMS: { key: AccordionKey; label: string; isHighlight?: boolean }[] = [
  { key: "challenge", label: "The Challenge" },
  { key: "solution", label: "Our Solution" },
  { key: "impact", label: "The Impact", isHighlight: true },
]

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [openItem, setOpenItem] = useState<AccordionKey | null>("challenge")
  const isEven = index % 2 === 0

  const toggle = (key: AccordionKey) => {
    setOpenItem(prev => (prev === key ? null : key))
  }

  return (
    <Reveal>
      <div
        className={`flex flex-col gap-12 lg:gap-20 ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Visual Placeholder Side */}
        <div className="w-full lg:w-1/2">
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-secondary/30 border border-white/5 flex flex-col items-center justify-center p-8 text-center">
            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Center number badge */}
            <div className="relative size-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <span className="font-heading text-3xl font-bold text-white/30">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="relative font-heading text-2xl font-bold uppercase text-white/30 tracking-wider">
              {study.category}
            </h3>
            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-white/20 mt-2">Case Study</p>

            {/* Category Badge */}
            <div className="absolute top-6 left-6 inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-4 py-1.5 border border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-white">{study.category}</span>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex w-full flex-col justify-center lg:w-1/2">
          <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
            Client: {study.client}
          </p>
          <h3 className="font-heading text-3xl font-extrabold uppercase text-white sm:text-4xl mb-10">
            {study.title}
          </h3>

          {/* Metrics Row */}
          <div className="mb-10 grid grid-cols-3 gap-4 border-y border-white/10 py-8">
            {study.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-muted-foreground flex items-center gap-2">
                  {metric.icon}
                  <span className="font-mono text-[10px] uppercase tracking-wider">{metric.label}</span>
                </div>
                <p className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* Expandable Story Blocks */}
          <div className="space-y-2">
            {ACCORDION_ITEMS.map(({ key, label, isHighlight }) => {
              const isOpen = openItem === key
              const content = study[key]

              return (
                <div
                  key={key}
                  className={`overflow-hidden rounded-lg border transition-colors duration-200 ${
                    isHighlight
                      ? "border-accent/30 bg-gradient-to-r from-accent/10 to-transparent"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <button
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span
                      className={`text-sm font-bold uppercase tracking-widest ${
                        isHighlight ? "text-accent" : "text-white"
                      }`}
                    >
                      {label}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-white/40 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`px-5 pb-5 leading-relaxed ${
                          isHighlight ? "text-white/90 font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
              Discuss your project <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function ProjectsCaseStudies() {
  return (
    <section id="case-studies" className="bg-black py-24 sm:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="mb-20 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-blink-dot" />
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">Real-World Impact</span>
            </div>
            <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl">
              Beyond the <br className="hidden sm:block"/> Visuals
            </h2>
            <p className="mt-6 text-xl text-muted-foreground text-balance">
              A portfolio shows what we produced. A case study shows what that work achieved. We don't just make pretty pictures; we solve business problems and drive measurable results.
            </p>
          </div>
        </Reveal>

        {/* Case Studies List */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
