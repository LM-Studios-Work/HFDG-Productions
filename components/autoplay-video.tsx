"use client"

import React, { useEffect, useRef } from "react"

interface AutoPlayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  title?: string
  className?: string
}

export function AutoPlayVideo({ src, title, className, ...props }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // iOS Safari requires explicit DOM attributes for muted & playsinline
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
          playPromise.catch(() => {
            // Silently handle iOS Low Power Mode or gesture requirement
          })
        }
      }
    }

    // Try playing immediately and as soon as metadata/frames are ready
    attemptPlay()
    video.addEventListener("canplay", attemptPlay)
    video.addEventListener("loadedmetadata", attemptPlay)

    // iOS Safari fallback: if OS blocks autoplay on load, start playback
    // on the very first touch, scroll, or click gesture on the device
    const resumeOnGesture = () => {
      attemptPlay()
    }

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
  }, [src])

  return (
    <video
      ref={videoRef}
      src={src}
      title={title}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      {...props}
    />
  )
}
