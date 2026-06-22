"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export function LoadingScreen() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (pathname !== "/") return;
    
    setPhase("loading");
    setProgress(0);

    let currentProgress = 0;
    let timer: NodeJS.Timeout;

    const incrementProgress = () => {
      const isComplete = document.readyState === "complete";
      // If complete, target is 100. If still loading, cap at 85.
      const targetProgress = isComplete ? 100 : 85;
      
      if (currentProgress < targetProgress) {
        // Random step between 1 and 4
        const step = Math.floor(Math.random() * 4) + 1;
        currentProgress = Math.min(currentProgress + step, targetProgress);
        setProgress(currentProgress);
      }

      if (currentProgress < 100) {
        timer = setTimeout(incrementProgress, isComplete ? 30 : 60);
      } else {
        // Pause briefly at 100% fully covered in red, then reveal
        setTimeout(() => {
          setPhase("revealing");
          setTimeout(() => {
            setPhase("done");
          }, 1600); // Wait for the reveal animation to finish before unmounting
        }, 400);
      }
    };

    timer = setTimeout(incrementProgress, 50);

    const handleLoad = () => {
      // The interval will pick up the 'complete' state automatically
    };
    
    if (document.readyState !== "complete") {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [pathname]);

  if (pathname !== "/") return null;
  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Black Background & Counter (hidden once revealing starts) */}
      {phase === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c0c0c]">
          <div className="relative z-10 flex h-32 w-72 items-center justify-center sm:h-48 sm:w-[480px]">
            {/* Top Left Bracket */}
            <div className="absolute left-0 top-0 h-6 w-6 border-l-[3px] border-t-[3px] border-white sm:h-8 sm:w-8"></div>

            {/* Bottom Left Bracket */}
            <div className="absolute bottom-0 left-0 h-6 w-6 border-b-[3px] border-l-[3px] border-white sm:h-8 sm:w-8"></div>

            {/* Bottom Right Bracket */}
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-[3px] border-r-[3px] border-white sm:h-8 sm:w-8"></div>

            {/* Top Right: Red Dot */}
            <div
              className="absolute right-0 top-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)] animate-pulse"
            ></div>

            {/* Percentage Text */}
            <div 
              className="font-heading text-4xl font-extrabold tracking-wider text-white sm:text-6xl"
              style={{
                fontStretch: "expanded",
                textShadow: "0 0 20px rgba(255,255,255,0.2)"
              }}
            >
              {progress}%
            </div>
          </div>
        </div>
      )}

      {/* Red Columns Overlay */}
      <div className="absolute inset-0 z-50 flex h-full w-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-full w-1/5 flex justify-center">
            <div
              className="h-full w-full bg-[#E51A1A]"
              style={{
                transform: `scaleX(${phase === "revealing" ? 0 : (progress >= 80 ? 1.05 : 0)})`,
                transformOrigin: "center",
                transitionProperty: "transform",
                transitionDuration: phase === "revealing" ? "1.1s" : "0.8s",
                transitionTimingFunction: phase === "revealing" ? "cubic-bezier(0.8, 0, 0.2, 1)" : "cubic-bezier(0.6, 0.05, -0.01, 0.9)",
                transitionDelay: phase === "revealing" ? `${i * 0.08}s` : "0s"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
