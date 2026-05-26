"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Standalone brand intro animation.
 *
 * Geometry comes from the Qualivio brand guidelines v1.1: ring at (140,135)
 * r=65, tail (190,180) -> (210,204), stroke-width 18, round linecap, on a
 * 300x300 canvas. The ring and tail are drawn via stroke-dashoffset
 * animations; the wordmark letters fade in one by one.
 *
 * Audio is a soft G major triad chime synthesised on the fly with the Web
 * Audio API, so there is no external sound file and no extra build asset.
 * Browsers block audio without a user gesture, so a small "sound on" toggle
 * sits in the corner; clicking it (re)plays the animation with sound.
 */

const RING_CIRCUMFERENCE = 2 * Math.PI * 65; // ~408.4
const TAIL_LENGTH_VISUAL = 49.24; // per brand spec, includes round-linecap caps

// Animation timeline (seconds). Keep in sync with CSS animation-delays below.
const T_RING_START = 0.25;
const T_RING_DUR = 0.85;
const T_TAIL_START = T_RING_START + T_RING_DUR - 0.05; // 1.05s
const T_TAIL_DUR = 0.35;
const T_PULSE = T_TAIL_START + T_TAIL_DUR + 0.05; // 1.45s
const T_WORD_START = T_PULSE + 0.05; // 1.5s
const T_WORD_LETTER_STEP = 0.07;
const T_END = T_WORD_START + 8 * T_WORD_LETTER_STEP + 0.5; // ~2.56s

const WORD = "QUALIVIO";

export default function IntroPage() {
  const [runKey, setRunKey] = useState(0); // bump to replay
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playChime = () => {
    try {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtxRef.current) audioCtxRef.current = new Ctx();
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      // G major triad: G5 (783.99), B5 (987.77), D6 (1174.66). Soft attack,
      // long gentle decay. Layered subtle low pad at G4 for warmth.
      const notes = [
        { freq: 392.0, gain: 0.05, delay: 0.0 }, // G4 pad
        { freq: 783.99, gain: 0.18, delay: 0.0 }, // G5
        { freq: 987.77, gain: 0.14, delay: 0.06 }, // B5
        { freq: 1174.66, gain: 0.12, delay: 0.12 }, // D6
      ];

      const master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);

      for (const n of notes) {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = n.freq;
        const start = now + n.delay;
        g.gain.setValueAtTime(0, start);
        g.gain.linearRampToValueAtTime(n.gain, start + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, start + 1.8);
        osc.connect(g);
        g.connect(master);
        osc.start(start);
        osc.stop(start + 2);
      }
    } catch {
      // No-op if Web Audio is unavailable.
    }
  };

  const replay = () => {
    setRunKey((k) => k + 1);
    // Defer audio so it lines up roughly with the ring/tail reveal.
    setTimeout(playChime, T_RING_START * 1000);
  };

  // Auto-play visuals on first mount, but no audio (browsers block).
  useEffect(() => {
    // nothing to do; CSS animations run on mount of the keyed element below
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0D0D0F]">
      {/* Ambient gradient haze */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C6AF7]/15 blur-[80px]" />
        <div className="absolute left-[18%] top-[18%] h-[200px] w-[200px] rounded-full bg-[#F7B731]/10 blur-[60px]" />
        <div className="absolute right-[15%] bottom-[20%] h-[200px] w-[200px] rounded-full bg-[#4ECDC4]/10 blur-[60px]" />
      </div>

      {/* The animation runs on the keyed wrapper; bumping runKey restarts it */}
      <div
        key={runKey}
        className="intro-stage relative z-10 flex flex-col items-center"
      >
        <svg
          width="220"
          height="220"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="intro-q"
          aria-label="Qualivio Q mark"
        >
          <circle
            className="intro-ring"
            cx="140"
            cy="135"
            r="65"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <line
            className="intro-tail"
            x1="190"
            y1="180"
            x2="210"
            y2="204"
            stroke="#FFFFFF"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </svg>

        <div
          className="intro-word mt-10 flex gap-[0.06em] text-4xl font-bold tracking-[0.18em] text-[#E8E6FF] sm:text-5xl sm:tracking-[0.24em]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          aria-label="Qualivio"
        >
          {WORD.split("").map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className="intro-letter inline-block"
              style={{
                animationDelay: `${T_WORD_START + i * T_WORD_LETTER_STEP}s`,
              }}
            >
              {ch}
            </span>
          ))}
        </div>

        <div
          className="intro-tagline mt-6 max-w-[90vw] text-center text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#F7B731] sm:text-xs sm:tracking-[0.3em]"
          style={{ animationDelay: `${T_END - 0.2}s` }}
        >
          Pharmacovigilance · Quality Assurance | Life Sciences
        </div>
      </div>

      {/* Sound + replay controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={replay}
          className="rounded-full border border-[#2E2E36] bg-[#1A1A1E]/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#E8E6FF] backdrop-blur-sm transition-colors hover:border-[#7C6AF7] hover:text-white"
          aria-label="Replay intro with sound"
        >
          ▶ Replay with sound
        </button>
      </div>

      {/* Animation CSS lives here so the timeline is colocated with the page */}
      <style>{`
        .intro-ring {
          stroke-dasharray: ${RING_CIRCUMFERENCE};
          stroke-dashoffset: ${RING_CIRCUMFERENCE};
          animation: q-draw-ring ${T_RING_DUR}s ${T_RING_START}s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .intro-tail {
          stroke-dasharray: ${TAIL_LENGTH_VISUAL};
          stroke-dashoffset: ${TAIL_LENGTH_VISUAL};
          animation: q-draw-tail ${T_TAIL_DUR}s ${T_TAIL_START}s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .intro-q {
          animation: q-pulse 1.4s ${T_PULSE}s ease-out 1;
          transform-origin: 50% 50%;
        }
        .intro-letter {
          opacity: 0;
          transform: translateY(8px);
          animation: word-in 0.5s ease-out forwards;
        }
        .intro-tagline {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }
        @keyframes q-draw-ring {
          to { stroke-dashoffset: 0; }
        }
        @keyframes q-draw-tail {
          to { stroke-dashoffset: 0; }
        }
        @keyframes q-pulse {
          0%   { filter: drop-shadow(0 0 20px rgba(124,106,247,0.35)); transform: scale(1); }
          30%  { filter: drop-shadow(0 0 40px rgba(124,106,247,0.7)); transform: scale(1.04); }
          100% { filter: drop-shadow(0 0 20px rgba(124,106,247,0.35)); transform: scale(1); }
        }
        .intro-q {
          filter: drop-shadow(0 0 20px rgba(124,106,247,0.35));
        }
        @keyframes word-in {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .intro-ring, .intro-tail, .intro-q, .intro-letter, .intro-tagline {
            animation: none;
          }
          .intro-ring, .intro-tail { stroke-dashoffset: 0; }
          .intro-letter, .intro-tagline { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
