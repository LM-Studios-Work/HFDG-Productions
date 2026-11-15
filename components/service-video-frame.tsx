"use client";

import React, { useEffect, useRef, useState } from "react";
import { VolumeX, Volume2 } from "lucide-react";
import { FilmCorners } from "@/components/film-ui";

interface ServiceVideoFrameProps {
  videoUrl: string;
  title: string;
  isOpen: boolean;
}

export function ServiceVideoFrame({ videoUrl, title, isOpen }: ServiceVideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // iOS Safari & general autoplay setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const attemptPlay = () => {
      if (video && video.paused && isOpen) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    };

    if (isOpen) {
      attemptPlay();
    } else {
      video.pause();
    }

    video.addEventListener("canplay", attemptPlay);
    video.addEventListener("loadedmetadata", attemptPlay);

    const resumeOnGesture = () => {
      if (isOpen) attemptPlay();
    };

    window.addEventListener("touchstart", resumeOnGesture, { passive: true });
    window.addEventListener("scroll", resumeOnGesture, { passive: true });
    window.addEventListener("click", resumeOnGesture, { passive: true });

    return () => {
      video.removeEventListener("canplay", attemptPlay);
      video.removeEventListener("loadedmetadata", attemptPlay);
      window.removeEventListener("touchstart", resumeOnGesture);
      window.removeEventListener("scroll", resumeOnGesture);
      window.removeEventListener("click", resumeOnGesture);
    };
  }, [videoUrl, isOpen]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div
      className="group relative flex aspect-video w-full items-center justify-center overflow-hidden border-2 border-foreground/15 bg-zinc-950"
      aria-label={title}
    >
      {/* Corner Brackets matching the original square frame */}
      <FilmCorners
        size={20}
        inset={12}
        thickness={2}
        className="pointer-events-none z-20 text-white/60"
      />

      {/* Video: 16:9 rectangle, automatic playback on loop, no sound */}
      <video
        ref={videoRef}
        src={videoUrl}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="size-full object-cover"
      />

      {/* Subtle mute/unmute button */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-2.5 right-2.5 z-20 flex size-7 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/90"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="size-3 text-white/70" />
        ) : (
          <Volume2 className="size-3 text-accent" />
        )}
      </button>
    </div>
  );
}
