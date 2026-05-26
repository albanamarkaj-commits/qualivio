"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Brand intro animation.
 *
 * Sequence:
 *   1. The word "Qualivio" types itself out letter by letter, with a soft
 *      mechanical keystroke synthesised per character.
 *   2. The blinking caret fades after typing completes.
 *   3. The Q mark draws itself above the wordmark (ring then tail), using
 *      the v1.1 brand geometry (ring at 140,135 r=65; tail 190,180 to
 *      210,204; stroke 18, round linecap on a 300x300 canvas).
 *   4. A G-major triad chime lands on the moment the mark is complete,
 *      together with a subtle glow pulse.
 *   5. The gold tagline fades in.
 *
 * Audio is synthesised on the fly with the Web Audio API (no external
 * asset). Browsers block audio without a user gesture, so the first play
 * is gated behind a centred Play button.
 */

const WORD = "Qualivio";
const RING_CIRCUMFERENCE = 2 * Math.PI * 65; // ~408.4
const TAIL_LENGTH_VISUAL = 49.24; // per brand spec, includes round-linecap caps

// Animation timeline (seconds). All downstream timings derive from these.
const T_TYPE_START = 0.35;
const T_TYPE_STEP = 0.12;
const T_TYPE_DONE = T_TYPE_START + WORD.length * T_TYPE_STEP;
const T_CARET_FADE = T_TYPE_DONE + 0.4;
const T_CARET_FADE_DUR = 0.4;
const T_RING_START = T_CARET_FADE + 0.15;
const T_RING_DUR = 0.85;
const T_TAIL_START = T_RING_START + T_RING_DUR - 0.05;
const T_TAIL_DUR = 0.35;
const T_CHIME = T_TAIL_START + T_TAIL_DUR + 0.05;
const T_TAGLINE = T_CHIME + 0.35;
const T_END = T_TAGLINE + 0.8;

function getAudioCtx(ref: React.MutableRefObject<AudioContext | null>) {
  if (typeof window === "undefined") return null;
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext;
  if (!Ctx) return null;
  if (!ref.current) ref.current = new Ctx();
  return ref.current;
}

function scheduleKeystroke(ctx: AudioContext, when: number) {
  const duration = 0.06;
  const sampleRate = ctx.sampleRate;
  const buffer = ctx.createBuffer(1, Math.floor(sampleRate * duration), sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    const envelope = 1 - i / data.length;
    data[i] = (Math.random() * 2 - 1) * envelope;
  }

  const src = ctx.createBufferSource();
  src.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 2200 + Math.random() * 1400;
  filter.Q.value = 1.4;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, when);
  gain.gain.linearRampToValueAtTime(0.09, when + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);

  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(when);
  src.stop(when + duration + 0.02);
}

function scheduleChime(ctx: AudioContext, when: number) {
  const notes = [
    { freq: 392.0, gain: 0.05, delay: 0.0 },
    { freq: 783.99, gain: 0.18, delay: 0.0 },
    { freq: 987.77, gain: 0.14, delay: 0.06 },
    { freq: 1174.66, gain: 0.12, delay: 0.12 },
  ];
  const master = ctx.createGain();
  master.gain.value = 0.9;
  master.connect(ctx.destination);

  for (const n of notes) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = n.freq;
    const start = when + n.delay;
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(n.gain, start + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, start + 1.8);
    osc.connect(g);
    g.connect(master);
    osc.start(start);
    osc.stop(start + 2);
  }
}

function scheduleSoundtrack(ctx: AudioContext) {
  const now = ctx.currentTime + 0.05;
  for (let i = 0; i < WORD.length; i++) {
    scheduleKeystroke(ctx, now + T_TYPE_START + i * T_TYPE_STEP);
  }
  scheduleChime(ctx, now + T_CHIME);
}

export default function IntroPage() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [runKey, setRunKey] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showReplay, setShowReplay] = useState(false);

  const start = () => {
    setHasStarted(true);
    setShowReplay(false);
    setRunKey((k) => k + 1);
    const ctx = getAudioCtx(audioCtxRef);
    if (ctx) {
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      scheduleSoundtrack(ctx);
    }
  };

  useEffect(() => {
    if (!hasStarted) return;
    const t = setTimeout(() => setShowReplay(true), T_END * 1000);
    return () => clearTimeout(t);
  }, [runKey, hasStarted]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0D0D0F]">
      {/* Ambient gradient haze */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C6AF7]/15 blur-[80px]" />
        <div className="absolute left-[18%] top-[18%] h-[200px] w-[200px] rounded-full bg-[#F7B731]/10 blur-[60px]" />
        <div className="absolute right-[15%] bottom-[20%] h-[200px] w-[200px] rounded-full bg-[#4ECDC4]/10 blur-[60px]" />
      </div>

      {/* The animation stage. Hidden until the user clicks Play so the
          curtain doesn't reveal letters that haven't been typed yet.
          runKey remounts the wrapper to restart every CSS animation. */}
      <div
        key={runKey}
        className={`intro-stage relative z-10 flex flex-col items-center transition-opacity duration-500 ${
          hasStarted ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!hasStarted}
      >
        {/* Q mark */}
        <svg
          width="200"
          height="200"
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

        {/* Wordmark — types out letter by letter, caret follows */}
        <div
          className="intro-word mt-8 flex items-baseline text-4xl font-bold tracking-tight text-[#E8E6FF] sm:text-5xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          aria-label="Qualivio"
        >
          {WORD.split("").map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className="intro-letter inline-block"
              style={{ animationDelay: `${T_TYPE_START + i * T_TYPE_STEP}s` }}
            >
              {ch}
            </span>
          ))}
          <span className="intro-caret ml-[2px] inline-block h-[1em] w-[3px] translate-y-[0.1em] bg-[#E8E6FF]" />
        </div>

        {/* Tagline */}
        <div className="intro-tagline mt-8 max-w-[90vw] text-center text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#F7B731] sm:text-xs sm:tracking-[0.3em]">
          Pharmacovigilance · Quality Assurance | Life Sciences
        </div>
      </div>

      {/* First-load Play button — required by browser audio autoplay rules */}
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

      <style>{`
        /* CSS animation timings mirror the JS constants above so audio and
           visuals stay in sync. */
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
          filter: drop-shadow(0 0 0 rgba(124,106,247,0));
          animation: q-glow 1.4s ${T_CHIME - 0.05}s ease-out forwards;
          transform-origin: 50% 50%;
        }
        .intro-letter {
          opacity: 0;
          transform: translateY(2px);
          animation: letter-pop 0.08s ease-out forwards;
        }
        .intro-caret {
          /* One combined animation: blink steadily until T_CARET_FADE, then
             fade out cleanly. Avoids fighting between two animations on the
             same property. */
          opacity: 0;
          animation: caret-life ${T_CARET_FADE + T_CARET_FADE_DUR}s linear forwards;
        }
        .intro-tagline {
          opacity: 0;
          animation: tagline-in 0.7s ${T_TAGLINE}s ease-out forwards;
        }

        @keyframes q-draw-ring { to { stroke-dashoffset: 0; } }
        @keyframes q-draw-tail { to { stroke-dashoffset: 0; } }
        @keyframes q-glow {
          0%   { filter: drop-shadow(0 0 0 rgba(124,106,247,0));   transform: scale(1); }
          25%  { filter: drop-shadow(0 0 36px rgba(124,106,247,0.75)); transform: scale(1.05); }
          100% { filter: drop-shadow(0 0 20px rgba(124,106,247,0.4));  transform: scale(1); }
        }
        @keyframes letter-pop {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes caret-life {
          /* The caret needs to appear right at T_TYPE_START, blink during
             typing, then fade. Computed positions assume a 0.55s blink. */
          0%, 16%   { opacity: 0; }       /* before typing starts (T_TYPE_START / total) */
          17%       { opacity: 1; }
          25%, 33%  { opacity: 0; }
          34%, 42%  { opacity: 1; }
          43%, 51%  { opacity: 0; }
          52%, 60%  { opacity: 1; }
          61%, 69%  { opacity: 0; }
          70%, 78%  { opacity: 1; }       /* typing done — hold for a beat */
          85%       { opacity: 1; }
          100%      { opacity: 0; transform: scaleY(0.5); }
        }
        @keyframes tagline-in { to { opacity: 1; } }

        @media (prefers-reduced-motion: reduce) {
          .intro-ring, .intro-tail, .intro-q, .intro-letter, .intro-caret, .intro-tagline {
            animation: none;
          }
          .intro-ring, .intro-tail { stroke-dashoffset: 0; }
          .intro-letter, .intro-tagline { opacity: 1; transform: none; }
          .intro-caret { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
