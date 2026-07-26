"use client"

import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { VolumeX, Volume2, X, Maximize2 } from "lucide-react"

interface InteractiveVideoStripProps {
  videoUrl: string
  title?: string
}

export function InteractiveVideoStrip({ videoUrl, title }: InteractiveVideoStripProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // iOS Safari autoplay setup
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    video.setAttribute("muted", "")
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")

    const attemptPlay = () => {
      if (video && video.paused) {
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {})
        }
      }
    }

    attemptPlay()
    video.addEventListener("canplay", attemptPlay)
    video.addEventListener("loadedmetadata", attemptPlay)

    const resumeOnGesture = () => attemptPlay()
    window.addEventListener("touchstart", resumeOnGesture, { passive: true })
    window.addEventListener("scroll", resumeOnGesture, { passive: true })
    window.addEventListener("click", resumeOnGesture, { passive: true })

    return () => {
      video.removeEventListener("canplay", attemptPlay)
      video.removeEventListener("loadedmetadata", attemptPlay)
      window.removeEventListener("touchstart", resumeOnGesture)
      window.removeEventListener("scroll", resumeOnGesture)
      window.removeEventListener("click", resumeOnGesture)
    }
  }, [videoUrl])

  // Handle mute toggle at bottom right
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    const nextMuted = !isMuted
    video.muted = nextMuted
    setIsMuted(nextMuted)
  }

  // Handle escape key to close modal
  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen])

  // Pause background strip video when modal opens, resume when modal closes
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isModalOpen) {
      video.pause()
      video.muted = true
    } else {
      video.muted = isMuted
      video.play().catch(() => {})
    }
  }, [isModalOpen, isMuted])

  return (
    <>
      {/* Clickable video ribbon container */}
      <div
        onClick={() => {
          const video = videoRef.current
          if (video) {
            video.pause()
            video.muted = true
          }
          setIsModalOpen(true)
        }}
        className="group relative w-full h-full cursor-pointer overflow-hidden bg-card"
        role="button"
        tabIndex={0}
        aria-label={`View full screen video for ${title || "project"}`}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          title={title}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Subtle hover prompt in center */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20">
          <div className="flex items-center gap-2 rounded-full border border-white/30 bg-black/60 px-4 py-2 backdrop-blur-md text-white shadow-lg">
            <Maximize2 className="size-4" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">View Mode</span>
          </div>
        </div>

        {/* Small mute button at bottom right */}
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:border-white hover:bg-black/80 md:bottom-6 md:right-6 shadow-md"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="size-4 text-white/80" />
          ) : (
            <Volume2 className="size-4 text-accent" />
          )}
        </button>
      </div>

      {/* View Mode Full Screen Lightbox Modal */}
      {mounted &&
        isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-lg animate-in fade-in duration-300"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:border-white hover:bg-white hover:text-black shadow-lg"
              aria-label="Close modal"
            >
              <X className="size-6" />
            </button>

            {/* Modal content container */}
            <div
              className="relative flex flex-col items-center max-w-7xl w-full max-h-[88vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[80vh] rounded-sm shadow-2xl bg-black object-contain"
              />
              {title && (
                <div className="mt-4 flex items-center justify-between w-full px-2">
                  <span className="font-heading text-lg md:text-xl font-extrabold uppercase tracking-tight text-white">
                    {title}
                  </span>
                  <span className="hidden md:inline-block font-mono text-xs text-white/50 uppercase tracking-widest">
                    Press ESC to close
                  </span>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
