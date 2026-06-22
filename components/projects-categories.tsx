"use client"

import { useState } from "react"

import { ArrowUpRight } from "lucide-react"

type Project = {
  id: string
  title: string
  client: string
}

type Category = {
  id: string
  label: string
  description: string
  projects: Project[]
}

const CATEGORIES: Category[] = [
  {
    id: "corporate",
    label: "Corporate",
    description: "Brand films and internal communications that articulate vision and build trust.",
    projects: [
      { id: "corp-1", title: "Global Summit Opening", client: "TechCorp Inc." },
      { id: "corp-2", title: "Brand Anthem", client: "Stellar Logistics" },
      { id: "corp-3", title: "Investor Pitch Video", client: "Apex Ventures" },
    ]
  },
  {
    id: "real-estate",
    label: "Real Estate",
    description: "Cinematic property tours and lifestyle videos that sell the dream, not just the space.",
    projects: [
      { id: "re-1", title: "The Azure Residences", client: "Horizon Dev" },
      { id: "re-2", title: "Downtown Penthouse", client: "Luxury Listings" },
      { id: "re-3", title: "Oasis Villas", client: "Desert Properties" },
    ]
  },
  {
    id: "commercial",
    label: "Commercial",
    description: "High-end broadcast and digital commercials that capture attention and drive action.",
    projects: [
      { id: "com-1", title: "Summer Collection", client: "Vogue Apparel" },
      { id: "com-2", title: "Energy Drink Launch", client: "Pulse Beverage" },
      { id: "com-3", title: "Tech Wearables", client: "Nova Tech" },
    ]
  },
  {
    id: "music-videos",
    label: "Music Videos",
    description: "Visually striking narratives and performances that elevate the artist's sound.",
    projects: [
      { id: "mv-1", title: "Midnight Echo", client: "The Synthetics" },
      { id: "mv-2", title: "Neon Streets", client: "J. Blaze" },
      { id: "mv-3", title: "Acoustic Sessions", client: "Sarah Jane" },
    ]
  }
]

export function ProjectsCategories() {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id)

  const activeData = CATEGORIES.find(c => c.id === activeCategory)!

  return (
    <section className="bg-background py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              Categories
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our diverse expertise spans across multiple disciplines. Select a category below to view our specialized portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:gap-4 bg-secondary/50 p-2 rounded-full border border-border">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-full bg-foreground transition-all duration-300"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Content Grid */}
        <div className="min-h-[600px]">
            <div
              key={activeCategory}
              className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
            >
              {/* Category Intro */}
              <div className="border-l-2 border-accent pl-6 py-2">
                <h3 className="text-2xl font-bold uppercase tracking-wide">{activeData.label}</h3>
                <p className="mt-2 max-w-2xl text-muted-foreground">{activeData.description}</p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {activeData.projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg bg-secondary border border-border aspect-[4/5] cursor-pointer flex flex-col justify-between p-6 sm:p-8 hover:bg-secondary/80 transition-all duration-300 animate-in fade-in zoom-in-95 fill-mode-both"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-mono text-xs uppercase tracking-widest text-accent">
                        {project.client}
                      </p>
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:text-background">
                        <ArrowUpRight className="size-5" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-heading text-3xl font-extrabold uppercase text-foreground">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>

      </div>
    </section>
  )
}
