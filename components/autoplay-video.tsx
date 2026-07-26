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

    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    video.autoplay = true

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Silently handle autoplay prevention or temporary load delays
      })
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
