/**
 * Synthesises the "elegant bell click" sound used at the moment the Q
 * mark completes in the intro animation, and writes it to
 * public/audio/bell-click.wav so Remotion can include it as a static
 * audio asset during MP4 rendering.
 *
 * The synthesis mirrors the runtime Web Audio implementation in
 * src/app/intro/page.tsx (scheduleLogoClick):
 *   - 8 ms highpassed noise transient (the "click" character)
 *   - A6 (1760 Hz) sine, peak 0.20, decays over 800 ms
 *   - E7 (2637 Hz) sine fifth, peak 0.07, decays over 550 ms
 */

import fs from "node:fs/promises";

const SAMPLE_RATE = 44100;
const DURATION = 1.0; // seconds
const TOTAL_SAMPLES = Math.floor(SAMPLE_RATE * DURATION);

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

// Mix a sine wave with linear attack + exponential decay envelope into the buffer.
function addSine(buf, freq, peakGain, attackSec, decayEndSec) {
  const attackSamples = Math.floor(attackSec * SAMPLE_RATE);
  const decayEndSamples = Math.floor(decayEndSec * SAMPLE_RATE);
  const omega = (2 * Math.PI * freq) / SAMPLE_RATE;
  for (let i = 0; i < decayEndSamples && i < TOTAL_SAMPLES; i++) {
    let env;
    if (i < attackSamples) {
      env = (i / attackSamples) * peakGain;
    } else {
      // Exponential decay from peakGain at attackSamples to 0.0001 at decayEndSamples
      const t = (i - attackSamples) / (decayEndSamples - attackSamples);
      env = peakGain * Math.exp(Math.log(0.0001 / peakGain) * t);
    }
    buf[i] += Math.sin(omega * i) * env;
  }
}

// Add a brief highpassed noise burst at the start (the "click" transient).
// Approximated with a simple one-pole highpass.
function addNoiseClick(buf, durationSec, peakGain, highpassCutoff) {
  const samples = Math.floor(durationSec * SAMPLE_RATE);
  // Simple highpass: y[n] = a * (y[n-1] + x[n] - x[n-1])
  const RC = 1 / (2 * Math.PI * highpassCutoff);
  const dt = 1 / SAMPLE_RATE;
  const a = RC / (RC + dt);
  let prevIn = 0;
  let prevOut = 0;
  for (let i = 0; i < samples && i < TOTAL_SAMPLES; i++) {
    const env = (1 - i / samples) * peakGain;
    const noise = (Math.random() * 2 - 1) * env;
    const out = a * (prevOut + noise - prevIn);
    prevOut = out;
    prevIn = noise;
    buf[i] += out;
  }
}

// 16-bit little-endian PCM WAV writer.
function writeWav(samples, sampleRate) {
  const numSamples = samples.length;
  const buffer = Buffer.alloc(44 + numSamples * 2);
  // RIFF header
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write("WAVE", 8);
  // fmt chunk
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16); // chunk size
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(1, 22); // channels
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28); // byte rate
  buffer.writeUInt16LE(2, 32); // block align
  buffer.writeUInt16LE(16, 34); // bits per sample
  // data chunk
  buffer.write("data", 36);
  buffer.writeUInt32LE(numSamples * 2, 40);
  for (let i = 0; i < numSamples; i++) {
    const s = clamp(samples[i], -1, 1);
    buffer.writeInt16LE(Math.round(s * 32767), 44 + i * 2);
  }
  return buffer;
}

const buf = new Float32Array(TOTAL_SAMPLES);
addNoiseClick(buf, 0.008, 0.09, 4500); // 8 ms click
addSine(buf, 1760, 0.2, 0.004, 0.8); // A6 bell
addSine(buf, 2637, 0.07, 0.004, 0.55); // E7 fifth

const wav = writeWav(buf, SAMPLE_RATE);
const outPath = "C:/Users/user/Desktop/Desktop/Qualivio/public/audio/bell-click.wav";
await fs.writeFile(outPath, wav);
console.log(`Wrote ${wav.length} bytes -> ${outPath}`);
