"use client"

import { useRef, useState, useEffect } from "react"
import { Reveal } from "@/components/reveal"
import { X } from "lucide-react"

const defaultShots = [
  { imageUrl: "/placeholder.svg?height=900&width=720&query=film+crew+setting+up+camera", description: "Crew setting up a camera rig on location" },
  { imageUrl: "/placeholder.svg?height=900&width=900&query=cinematographer+checking+monitor", description: "Cinematographer checking the monitor on set" },
  { imageUrl: "/placeholder.svg?height=900&width=900&query=drone+aerial+shoot+over+city", description: "Aerial drone shoot over a city skyline" },
  { imageUrl: "/placeholder.svg?height=900&width=1800&query=editor+color+grading+suite", description: "Editor in the color grading suite" },
]

export function AboutGallery({ gallery = [] }: { gallery?: { imageUrl: string; description?: string }[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [selectedImage, setSelectedImage] = useState<{ imageUrl: string; description?: string } | null>(null)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const maxScroll = scrollWidth - clientWidth
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
      setScrollProgress(progress)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setHasDragged(false)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    
    if (Math.abs(x - startX) > 5) {
      setHasDragged(true)
    }

    const walk = (x - startX) * 1.5 // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  // Close modal on Escape key and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  useEffect(() => {
    handleScroll()
    window.addEventListener("resize", handleScroll)
    return () => window.removeEventListener("resize", handleScroll)
  }, [])

  // Merge CMS images with defaults so users can replace placeholders one by one
  const images = defaultShots.map((shot, index) => {
    return gallery[index] ? gallery[index] : shot;
  });
  if (gallery.length > defaultShots.length) {
    images.push(...gallery.slice(defaultShots.length));
  }

  return (
    <section className="scroll-mt-20 border-t-2 border-foreground px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                On set
              </p>
              <h2 className="mt-4 max-w-2xl text-pretty font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                Behind the frame.
              </h2>
            </div>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              The work that makes the film look effortless.
            </p>
          </div>
        </Reveal>

        {/* ── HORIZONTAL SCROLLING BENTO LAYOUT ── */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`mt-14 w-full overflow-x-auto pb-4 scrollbar-none flex -mx-5 px-5 lg:-mx-8 lg:px-8 ${
            isDragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"
          }`}
        >
          <div className="grid grid-rows-2 grid-flow-col-dense auto-cols-[60vw] sm:auto-cols-[300px] md:auto-cols-[350px] lg:auto-cols-[400px] gap-4 h-[60vh] min-h-[400px] max-h-[800px] w-max shrink-0">
            {images.map((s, i) => {
              // Perfect tessellation pattern for 2-row horizontal grid
              const patternIndex = i % 6
              let spanClass = "row-span-1 col-span-1"

              if (patternIndex === 0) {
                spanClass = "row-span-2 col-span-2"
              } else if (patternIndex === 3) {
                spanClass = "row-span-1 col-span-2"
              }

              return (
                <Reveal key={i} delay={(i % 6) * 0.05} className={`${spanClass} snap-center`}>
                  <div 
                    className="group relative overflow-hidden border-2 border-foreground bg-card h-full w-full cursor-pointer"
                    onClick={() => {
                      if (!hasDragged) setSelectedImage(s)
                    }}
                  >
                    <div className="w-full h-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.imageUrl}
                        alt={s.description || "Behind the scenes"}
                        draggable={false}
                        className={`size-full object-cover transition-transform duration-700 ease-out ${
                          isDragging ? "" : "group-hover:scale-[1.04]"
                        }`}
                      />
                    </div>
                    {/* Hover overlay for description */}
                    {s.description && (
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                        <p className="font-heading text-xl font-bold uppercase tracking-tight text-foreground">
                          {s.description}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* ── SCROLL PROGRESS BAR ── */}
        <div className="mt-8 flex justify-center px-5 lg:mt-12">
          <div className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-muted lg:max-w-md">
            <div
              className="h-full rounded-full bg-foreground transition-all duration-150 ease-out"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>
        </div>

        {/* ── IMAGE MODAL ── */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute right-6 top-6 p-2 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div 
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden border-2 border-foreground bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.description || "Expanded view"} 
                className="max-h-[85vh] w-auto object-contain"
              />
              {selectedImage.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-background/95 p-4 text-center border-t-2 border-foreground">
                  <p className="font-heading text-xl font-bold uppercase tracking-tight text-foreground">
                    {selectedImage.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
