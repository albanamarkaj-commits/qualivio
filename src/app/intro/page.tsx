"use client";

import { useRef, useState } from "react";

/**
 * Brand intro page.
 *
 * The visual + audio is the same MP4 that the marketing team uploads to
 * LinkedIn (rendered from marketing/intro-video/ via Remotion), so the
 * website and social channels show identical content. A Play button is
 * shown on first load because browsers block autoplay with sound until
 * the user gestures.
 */

const VIDEO_URL = "/intro.mp4";

export default function IntroPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [showReplay, setShowReplay] = useState(false);

  const start = () => {
    setHasStarted(true);
    setShowReplay(false);
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.play().catch(() => {
      // Some browsers still block unmuted autoplay even after a gesture.
      // Fall back to muted playback so visuals still run.
      v.muted = true;
      v.play().catch(() => {});
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        playsInline
        preload="auto"
        onEnded={() => setShowReplay(true)}
        className={`h-full w-full object-contain transition-opacity duration-500 ${
          hasStarted ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Qualivio brand intro"
      />

      {!hasStarted && (
        <button
          type="button"
          onClick={start}
          className="absolute z-30 flex items-center gap-3 rounded-full border border-[#2E2E36] bg-[#1A1A1E]/80 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-[#E8E6FF] backdrop-blur-md transition-all hover:border-[#7C6AF7] hover:bg-[#1A1A1E] hover:text-white"
          aria-label="Play intro with sound"
        >
          <span className="text-base">▶</span>
          <span>Play with sound</span>
        </button>
      )}

      {hasStarted && showReplay && (
        <button
          type="button"
          onClick={start}
          className="absolute bottom-8 right-8 z-20 rounded-full border border-[#2E2E36] bg-[#1A1A1E]/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#E8E6FF] backdrop-blur-sm transition-colors hover:border-[#7C6AF7] hover:text-white"
          aria-label="Replay intro"
        >
          ▶ Replay
        </button>
      )}
    </div>
  );
}
