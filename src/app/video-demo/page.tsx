"use client";

import { useRef, useState } from "react";

// Public test video (1MB, has audio).
const SAMPLE = "https://www.w3schools.com/html/mov_bbb.mp4";

export default function VideoDemoPage() {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const [stateA, setStateA] = useState("Autoplaying muted on load");
  const [stateB, setStateB] = useState("Waiting for hover");

  // Option A: autoplay muted on load, unmute on hover, mute on leave.
  function aEnter() {
    if (!videoA.current) return;
    videoA.current.muted = false;
    videoA.current.play().catch(() => {});
    setStateA("Hover detected — sound on");
  }
  function aLeave() {
    if (!videoA.current) return;
    videoA.current.muted = true;
    setStateA("Mouse left — sound off");
  }

  // Option B: paused on load, hover plays with sound and restarts each time.
  function bEnter() {
    if (!videoB.current) return;
    videoB.current.muted = false;
    videoB.current.currentTime = 0;
    videoB.current
      .play()
      .then(() => setStateB("Hover detected — playing with sound"))
      .catch(() => setStateB("Browser blocked the play. Click anywhere on the page first, then hover again."));
  }
  function bLeave() {
    if (!videoB.current) return;
    videoB.current.pause();
    setStateB("Mouse left — paused");
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1
        className="text-3xl font-bold text-[#0D0D0F] sm:text-4xl"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Video behaviour — choose one
      </h1>
      <p className="mt-4 text-base leading-7 text-[#6B6A8F]">
        Try both videos below in your own browser. The status line under
        each one tells you what the page is doing. Pick the one you prefer,
        then I&apos;ll wire it up for your real video.
      </p>

      <div className="mt-12">
        <h2
          className="text-xl font-bold text-[#0D0D0F]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Option A: Autoplays muted, unmutes on hover
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#6B6A8F]">
          Video starts playing automatically without sound the moment the
          page loads. Hover the video to enable sound. Move the mouse away
          to mute it again.
        </p>
        <video
          ref={videoA}
          src={SAMPLE}
          autoPlay
          muted
          playsInline
          onMouseEnter={aEnter}
          onMouseLeave={aLeave}
          className="mt-4 w-full rounded-2xl shadow-2xl"
        />
        <p className="mt-2 text-xs font-semibold text-[#7C6AF7]">
          Status: {stateA}
        </p>
      </div>

      <div className="mt-16">
        <h2
          className="text-xl font-bold text-[#0D0D0F]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Option B: Stays still until you hover, then plays with sound
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#6B6A8F]">
          Video stays paused on its first frame when the page loads. Hover
          the video to play it (with sound). Move the mouse away to pause.
        </p>
        <video
          ref={videoB}
          src={SAMPLE}
          muted
          playsInline
          onMouseEnter={bEnter}
          onMouseLeave={bLeave}
          className="mt-4 w-full rounded-2xl shadow-2xl"
        />
        <p className="mt-2 text-xs font-semibold text-[#7C6AF7]">
          Status: {stateB}
        </p>
      </div>

      <div className="mt-16 rounded-2xl border border-[#E5E4F0] bg-[#F5F4FF] p-6">
        <p className="text-sm leading-6 text-[#6B6A8F]">
          <strong className="text-[#0D0D0F]">A note on Option B:</strong>{" "}
          if you just arrived on the page and haven&apos;t clicked anywhere,
          your browser may silently refuse to play the video with sound.
          Click anywhere on the page once, then try the hover again. This
          is the browser restriction we mentioned, not a bug in the page.
        </p>
      </div>
    </section>
  );
}
