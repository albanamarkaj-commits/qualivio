"use client";

import { useRef } from "react";

/**
 * A thin, full-width video strip that sits above the homepage hero.
 *
 * Behaviour (Option A):
 *  - Autoplays muted on page load (allowed by every modern browser)
 *  - Unmutes the moment the cursor enters the strip
 *  - Mutes again as soon as the cursor leaves
 *  - No visible play button or controls
 */
export function HeroVideoBanner({
  src = "/intro.mp4",
  height = "h-[200px]",
}: {
  src?: string;
  height?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  function enter() {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    // If the video already played to the end during autoplay, restart so
    // the visitor actually gets to hear the soundtrack from the top.
    if (v.ended) v.currentTime = 0;
    void v.play().catch(() => {
      // Some browsers (notably Safari) refuse to unmute without prior
      // user interaction. Silently stay muted in that case.
      v.muted = true;
    });
  }

  function leave() {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
  }

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      className={`relative w-full overflow-hidden bg-[#0D0D0F] ${height}`}
    >
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="h-full w-full object-cover"
      />
    </div>
  );
}
