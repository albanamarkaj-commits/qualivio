/* ================================================================
   CardIllustration.tsx
   Unique flat-vector SVG illustrations per card slug / resource id.
   All use viewBox="0 0 360 128".
   ================================================================ */
import React from "react";

/* ── RESOURCE ILLUSTRATIONS ── */

function PVMadeSimpleIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#EEE9FF"/>
      <circle cx="310" cy="18" r="72" fill="#7C6AF7" fillOpacity="0.07"/>
      <circle cx="45" cy="118" r="55" fill="#C5BBFF" fillOpacity="0.1"/>
      <rect x="92" y="20" width="78" height="90" rx="4" fill="white" fillOpacity="0.92"/>
      <rect x="190" y="20" width="78" height="90" rx="4" fill="white" fillOpacity="0.92"/>
      <rect x="168" y="20" width="24" height="90" rx="3" fill="#C5BBFF"/>
      <rect x="102" y="34" width="54" height="3" rx="1.5" fill="#C5BBFF"/>
      <rect x="102" y="44" width="44" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="52" width="54" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="60" width="36" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="68" width="48" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="76" width="40" height="2.5" rx="1.25" fill="#DDD9FF"/>
      {/* Journey path on right page */}
      <path d="M200 96 Q212 76 228 64 Q240 54 244 40" stroke="#7C6AF7" strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.5" fill="none"/>
      <circle cx="200" cy="96" r="4" fill="#7C6AF7" fillOpacity="0.45"/>
      <circle cx="228" cy="64" r="3.5" fill="#7C6AF7" fillOpacity="0.45"/>
      <circle cx="244" cy="40" r="5" fill="#7C6AF7" fillOpacity="0.65"/>
      <circle cx="244" cy="40" r="2.5" fill="#7C6AF7"/>
      <path d="M256 20 L256 40 L251 35 L246 40 L246 20Z" fill="#7C6AF7" fillOpacity="0.45"/>
      <circle cx="58" cy="38" r="6" fill="#C5BBFF" fillOpacity="0.5"/>
      <circle cx="308" cy="72" r="5" fill="#7C6AF7" fillOpacity="0.13"/>
    </svg>
  );
}

function ChecklistIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#E6F9F8"/>
      <circle cx="50" cy="22" r="65" fill="#4ECDC4" fillOpacity="0.08"/>
      <circle cx="320" cy="115" r="55" fill="#4ECDC4" fillOpacity="0.09"/>
      {/* Clipboard */}
      <rect x="120" y="22" width="120" height="96" rx="6" fill="white" fillOpacity="0.92"/>
      <rect x="154" y="14" width="52" height="16" rx="5" fill="#B8F0EC"/>
      <rect x="162" y="18" width="36" height="8" rx="4" fill="white" fillOpacity="0.7"/>
      {/* Item 1 checked */}
      <rect x="134" y="42" width="14" height="14" rx="3" fill="#4ECDC4" fillOpacity="0.28" stroke="#4ECDC4" strokeWidth="1.5"/>
      <path d="M137 49 L140 52 L146 45" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="154" y="46" width="68" height="3" rx="1.5" fill="#B8F0EC"/>
      {/* Item 2 checked */}
      <rect x="134" y="63" width="14" height="14" rx="3" fill="#4ECDC4" fillOpacity="0.28" stroke="#4ECDC4" strokeWidth="1.5"/>
      <path d="M137 70 L140 73 L146 66" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="154" y="67" width="58" height="3" rx="1.5" fill="#B8F0EC"/>
      {/* Item 3 checked */}
      <rect x="134" y="84" width="14" height="14" rx="3" fill="#4ECDC4" fillOpacity="0.28" stroke="#4ECDC4" strokeWidth="1.5"/>
      <path d="M137 91 L140 94 L146 87" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="154" y="88" width="72" height="3" rx="1.5" fill="#B8F0EC"/>
      {/* Item 4 unchecked */}
      <rect x="134" y="105" width="14" height="14" rx="3" fill="transparent" stroke="#B8F0EC" strokeWidth="1.5"/>
      <rect x="154" y="109" width="48" height="3" rx="1.5" fill="#E6F9F8"/>
      <circle cx="56" cy="75" r="5" fill="#4ECDC4" fillOpacity="0.22"/>
      <circle cx="312" cy="28" r="6" fill="#4ECDC4" fillOpacity="0.18"/>
    </svg>
  );
}

function AuditingIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#FEF6E0"/>
      <circle cx="300" cy="14" r="70" fill="#F7B731" fillOpacity="0.07"/>
      <circle cx="48" cy="122" r="55" fill="#F7B731" fillOpacity="0.09"/>
      {/* Document */}
      <rect x="105" y="16" width="100" height="100" rx="6" fill="white" fillOpacity="0.92"/>
      <rect x="105" y="16" width="100" height="18" rx="6" fill="#F7B731" fillOpacity="0.35"/>
      <rect x="105" y="27" width="100" height="7" rx="0" fill="#F7B731" fillOpacity="0.35"/>
      <rect x="117" y="42" width="76" height="3" rx="1.5" fill="#F7B731" fillOpacity="0.5"/>
      <rect x="117" y="52" width="60" height="2.5" rx="1.25" fill="#F5E4A8"/>
      <rect x="117" y="60" width="76" height="2.5" rx="1.25" fill="#F5E4A8"/>
      <rect x="117" y="68" width="48" height="2.5" rx="1.25" fill="#F5E4A8"/>
      <rect x="117" y="76" width="68" height="2.5" rx="1.25" fill="#F5E4A8"/>
      <rect x="117" y="86" width="55" height="2.5" rx="1.25" fill="#F5E4A8"/>
      <rect x="117" y="94" width="72" height="2.5" rx="1.25" fill="#F5E4A8"/>
      {/* Magnifying glass */}
      <circle cx="222" cy="66" r="28" fill="#F7B731" fillOpacity="0.1"/>
      <circle cx="222" cy="66" r="22" fill="white" fillOpacity="0.88" stroke="#F7B731" strokeWidth="3"/>
      <rect x="210" y="57" width="24" height="3" rx="1.5" fill="#F7B731" fillOpacity="0.55"/>
      <rect x="210" y="65" width="18" height="2.5" rx="1.25" fill="#F7B731" fillOpacity="0.38"/>
      <rect x="210" y="73" width="22" height="2.5" rx="1.25" fill="#F7B731" fillOpacity="0.38"/>
      <line x1="239" y1="84" x2="255" y2="106" stroke="#F7B731" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="65" cy="40" r="5" fill="#F7B731" fillOpacity="0.2"/>
      <circle cx="54" cy="88" r="3.5" fill="#F7B731" fillOpacity="0.14"/>
    </svg>
  );
}

function SignalPlaybookIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#EEE9FF"/>
      <circle cx="310" cy="18" r="72" fill="#7C6AF7" fillOpacity="0.07"/>
      <rect x="90" y="16" width="180" height="88" rx="8" fill="white" fillOpacity="0.9"/>
      <rect x="100" y="24" width="160" height="72" rx="5" fill="#EEE9FF"/>
      {/* Signal waveform */}
      <line x1="110" y1="60" x2="250" y2="60" stroke="#C5BBFF" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M110 60 L128 60 L136 36 L144 82 L152 46 L160 74 L168 54 L176 66 L184 60 L250 60" stroke="#7C6AF7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="152" cy="46" r="4.5" fill="#7C6AF7" fillOpacity="0.8"/>
      <circle cx="152" cy="46" r="9" fill="#7C6AF7" fillOpacity="0.12"/>
      <rect x="170" y="104" width="20" height="8" rx="2" fill="#DDD9FF"/>
      <rect x="155" y="112" width="50" height="5" rx="2.5" fill="#DDD9FF"/>
      <circle cx="55" cy="60" r="5" fill="#C5BBFF" fillOpacity="0.4"/>
      <circle cx="312" cy="95" r="4" fill="#7C6AF7" fillOpacity="0.14"/>
    </svg>
  );
}

function InspectionWorkbookIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#E6F9F8"/>
      <circle cx="50" cy="22" r="65" fill="#4ECDC4" fillOpacity="0.08"/>
      {/* Building */}
      <rect x="100" y="30" width="100" height="88" rx="4" fill="white" fillOpacity="0.88"/>
      <rect x="110" y="18" width="80" height="16" rx="3" fill="#B8F0EC"/>
      {/* Windows */}
      <rect x="114" y="44" width="20" height="18" rx="2" fill="#4ECDC4" fillOpacity="0.28"/>
      <rect x="142" y="44" width="20" height="18" rx="2" fill="#4ECDC4" fillOpacity="0.28"/>
      <rect x="170" y="44" width="20" height="18" rx="2" fill="#4ECDC4" fillOpacity="0.28"/>
      <rect x="114" y="70" width="20" height="18" rx="2" fill="#4ECDC4" fillOpacity="0.18"/>
      <rect x="142" y="70" width="20" height="18" rx="2" fill="#4ECDC4" fillOpacity="0.18"/>
      <rect x="170" y="70" width="20" height="18" rx="2" fill="#4ECDC4" fillOpacity="0.18"/>
      {/* Door */}
      <rect x="138" y="95" width="24" height="23" rx="3" fill="#B8F0EC"/>
      {/* Shield */}
      <path d="M236 32 L258 40 L258 64 C258 78 248 86 236 92 C224 86 214 78 214 64 L214 40Z" fill="#4ECDC4" fillOpacity="0.18"/>
      <path d="M236 39 L253 46 L253 64 C253 75 245 81 236 87 C227 81 219 75 219 64 L219 46Z" fill="#4ECDC4" fillOpacity="0.15"/>
      <path d="M228 60 L233 65 L244 53" stroke="#4ECDC4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="56" cy="75" r="5" fill="#4ECDC4" fillOpacity="0.22"/>
      <circle cx="315" cy="55" r="5" fill="#4ECDC4" fillOpacity="0.16"/>
    </svg>
  );
}

function ICSRMasterclassIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#EEE9FF"/>
      <circle cx="305" cy="18" r="72" fill="#7C6AF7" fillOpacity="0.07"/>
      <rect x="90" y="16" width="180" height="88" rx="8" fill="white" fillOpacity="0.9"/>
      <rect x="100" y="24" width="160" height="72" rx="5" fill="#EEE9FF"/>
      {/* 3-step flow */}
      <rect x="112" y="34" width="36" height="22" rx="4" fill="#7C6AF7" fillOpacity="0.18"/>
      <rect x="114" y="40" width="32" height="2.5" rx="1.25" fill="#C5BBFF"/>
      <rect x="114" y="47" width="22" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <path d="M148 45 L158 45" stroke="#C5BBFF" strokeWidth="1.5" strokeDasharray="2 2"/>
      <polygon points="158,42 163,45 158,48" fill="#C5BBFF"/>
      <rect x="163" y="34" width="36" height="22" rx="4" fill="#7C6AF7" fillOpacity="0.22"/>
      <rect x="165" y="40" width="32" height="2.5" rx="1.25" fill="#C5BBFF"/>
      <rect x="165" y="47" width="22" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <path d="M199 45 L209 45" stroke="#C5BBFF" strokeWidth="1.5" strokeDasharray="2 2"/>
      <polygon points="209,42 214,45 209,48" fill="#C5BBFF"/>
      <rect x="214" y="34" width="36" height="22" rx="4" fill="#7C6AF7" fillOpacity="0.42"/>
      <rect x="216" y="40" width="32" height="2.5" rx="1.25" fill="#7C6AF7" fillOpacity="0.5"/>
      <rect x="216" y="47" width="22" height="2.5" rx="1.25" fill="#7C6AF7" fillOpacity="0.35"/>
      {/* Form fields */}
      <rect x="112" y="66" width="128" height="8" rx="3" fill="white" fillOpacity="0.7" stroke="#C5BBFF" strokeWidth="1"/>
      <rect x="112" y="80" width="60" height="8" rx="3" fill="white" fillOpacity="0.7" stroke="#C5BBFF" strokeWidth="1"/>
      <rect x="180" y="80" width="60" height="8" rx="3" fill="white" fillOpacity="0.7" stroke="#C5BBFF" strokeWidth="1"/>
      <rect x="196" y="90" width="46" height="9" rx="4.5" fill="#7C6AF7" fillOpacity="0.45"/>
      <rect x="170" y="104" width="20" height="8" rx="2" fill="#DDD9FF"/>
      <rect x="155" y="112" width="50" height="5" rx="2.5" fill="#DDD9FF"/>
      <circle cx="55" cy="60" r="5" fill="#C5BBFF" fillOpacity="0.4"/>
    </svg>
  );
}

function AggregateTemplatesIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#FEF6E0"/>
      <circle cx="300" cy="14" r="70" fill="#F7B731" fillOpacity="0.07"/>
      <rect x="115" y="30" width="108" height="82" rx="5" fill="white" fillOpacity="0.5"/>
      <rect x="125" y="22" width="108" height="82" rx="5" fill="white" fillOpacity="0.72"/>
      <rect x="135" y="12" width="108" height="88" rx="5" fill="white" fillOpacity="0.95"/>
      <rect x="135" y="12" width="108" height="20" rx="5" fill="#F7B731" fillOpacity="0.4"/>
      <rect x="135" y="24" width="108" height="8" rx="0" fill="#F7B731" fillOpacity="0.4"/>
      <rect x="148" y="15" width="32" height="10" rx="3" fill="#F7B731" fillOpacity="0.65"/>
      <rect x="152" y="18" width="24" height="3.5" rx="1.75" fill="white" fillOpacity="0.8"/>
      {/* Pie chart */}
      <circle cx="194" cy="68" r="22" fill="#FEF6E0" stroke="#F5E4A8" strokeWidth="1"/>
      <path d="M194 68 L194 46 A22 22 0 0 1 216 68Z" fill="#F7B731" fillOpacity="0.6"/>
      <path d="M194 68 L216 68 A22 22 0 0 1 194 90Z" fill="#F7B731" fillOpacity="0.4"/>
      <path d="M194 68 L194 90 A22 22 0 0 1 172 68Z" fill="#F7B731" fillOpacity="0.25"/>
      <path d="M194 68 L172 68 A22 22 0 0 1 194 46Z" fill="#F5E4A8"/>
      <circle cx="194" cy="68" r="8" fill="white"/>
      <rect x="148" y="44" width="28" height="2.5" rx="1.25" fill="#F7B731" fillOpacity="0.5"/>
      <rect x="148" y="52" width="20" height="2.5" rx="1.25" fill="#F5E4A8"/>
      <circle cx="65" cy="40" r="5" fill="#F7B731" fillOpacity="0.2"/>
      <circle cx="306" cy="72" r="5" fill="#F7B731" fillOpacity="0.17"/>
    </svg>
  );
}

/* ── ARTICLE ILLUSTRATIONS (light + dark variants) ── */

function SignalDetectionIll({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#141418" : "#EEE9FF";
  const glowOp = dark ? 0.12 : 0.07;
  const arcOp = dark ? 0.22 : 0.18;
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill={bg}/>
      <circle cx="305" cy="18" r="72" fill="#7C6AF7" fillOpacity={glowOp}/>
      <circle cx="180" cy="64" r="20" fill="none" stroke="#7C6AF7" strokeWidth="1.5" strokeOpacity={arcOp}/>
      <circle cx="180" cy="64" r="38" fill="none" stroke="#7C6AF7" strokeWidth="1.5" strokeOpacity={dark ? 0.16 : 0.13}/>
      <circle cx="180" cy="64" r="56" fill="none" stroke="#7C6AF7" strokeWidth="1" strokeOpacity={dark ? 0.1 : 0.08}/>
      <line x1="180" y1="4" x2="180" y2="124" stroke="#7C6AF7" strokeWidth="0.75" strokeOpacity={dark ? 0.1 : 0.08}/>
      <line x1="116" y1="64" x2="244" y2="64" stroke="#7C6AF7" strokeWidth="0.75" strokeOpacity={dark ? 0.1 : 0.08}/>
      <path d="M180 64 L228 26" stroke="#7C6AF7" strokeWidth="2" strokeOpacity="0.35"/>
      <circle cx="214" cy="34" r="5" fill="#7C6AF7" fillOpacity="0.7"/>
      <circle cx="214" cy="34" r="10" fill="#7C6AF7" fillOpacity="0.14"/>
      <circle cx="158" cy="44" r="3.5" fill="#7C6AF7" fillOpacity="0.45"/>
      <circle cx="200" cy="84" r="3" fill="#7C6AF7" fillOpacity="0.35"/>
      <circle cx="180" cy="64" r="5" fill="#7C6AF7" fillOpacity="0.65"/>
      <circle cx="180" cy="64" r="2.5" fill="#7C6AF7"/>
      <circle cx="58" cy="36" r="5" fill="#C5BBFF" fillOpacity={dark ? 0.2 : 0.45}/>
      <circle cx="308" cy="100" r="4" fill="#7C6AF7" fillOpacity="0.12"/>
    </svg>
  );
}

function InspectionReadyIll({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#0E1816" : "#E6F9F8";
  const glowOp = dark ? 0.1 : 0.08;
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill={bg}/>
      <circle cx="50" cy="22" r="65" fill="#4ECDC4" fillOpacity={glowOp}/>
      {/* Document behind */}
      <rect x="105" y="20" width="100" height="96" rx="5" fill="white" fillOpacity={dark ? 0.06 : 0.7}/>
      <rect x="105" y="20" width="100" height="14" rx="5" fill="#4ECDC4" fillOpacity="0.25"/>
      <rect x="105" y="28" width="100" height="6" rx="0" fill="#4ECDC4" fillOpacity="0.25"/>
      <rect x="117" y="42" width="76" height="2.5" rx="1.25" fill={dark ? "#1a4a46" : "#B8F0EC"}/>
      <rect x="117" y="50" width="60" height="2.5" rx="1.25" fill={dark ? "#163e3a" : "#D0F5F2"}/>
      <rect x="117" y="58" width="76" height="2.5" rx="1.25" fill={dark ? "#163e3a" : "#D0F5F2"}/>
      <rect x="117" y="66" width="50" height="2.5" rx="1.25" fill={dark ? "#163e3a" : "#D0F5F2"}/>
      {/* Magnifying glass */}
      <circle cx="228" cy="68" r="30" fill="#4ECDC4" fillOpacity={dark ? 0.08 : 0.1}/>
      <circle cx="228" cy="68" r="24" fill={dark ? "#0a1210" : "white"} fillOpacity={dark ? 0.9 : 0.88} stroke="#4ECDC4" strokeWidth="2.5"/>
      <rect x="215" y="57" width="26" height="3" rx="1.5" fill="#4ECDC4" fillOpacity="0.5"/>
      <rect x="215" y="65" width="18" height="2.5" rx="1.25" fill="#4ECDC4" fillOpacity="0.35"/>
      <rect x="215" y="73" width="22" height="2.5" rx="1.25" fill="#4ECDC4" fillOpacity="0.35"/>
      <path d="M219 62 L222 65 L229 58" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="246" y1="86" x2="260" y2="104" stroke="#4ECDC4" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="56" cy="75" r="5" fill="#4ECDC4" fillOpacity={dark ? 0.18 : 0.22}/>
      <circle cx="315" cy="28" r="5" fill="#4ECDC4" fillOpacity={dark ? 0.14 : 0.18}/>
    </svg>
  );
}

function QualityTrendsIll({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#141208" : "#FEF6E0";
  const glowOp = dark ? 0.1 : 0.07;
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill={bg}/>
      <circle cx="300" cy="14" r="70" fill="#F7B731" fillOpacity={glowOp}/>
      {/* Chart area */}
      <rect x="96" y="20" width="168" height="88" rx="6" fill={dark ? "#1a1508" : "white"} fillOpacity={dark ? 0.6 : 0.88}/>
      {/* Axes */}
      <line x1="116" y1="94" x2="248" y2="94" stroke={dark ? "#3a2e08" : "#F5E4A8"} strokeWidth="1.5"/>
      <line x1="116" y1="30" x2="116" y2="94" stroke={dark ? "#3a2e08" : "#F5E4A8"} strokeWidth="1.5"/>
      {/* Grid lines */}
      <line x1="116" y1="78" x2="248" y2="78" stroke={dark ? "#2a2208" : "#FEF6E0"} strokeWidth="0.75"/>
      <line x1="116" y1="62" x2="248" y2="62" stroke={dark ? "#2a2208" : "#FEF6E0"} strokeWidth="0.75"/>
      <line x1="116" y1="46" x2="248" y2="46" stroke={dark ? "#2a2208" : "#FEF6E0"} strokeWidth="0.75"/>
      {/* Bars */}
      <rect x="128" y="72" width="16" height="22" rx="3" fill="#F7B731" fillOpacity="0.35"/>
      <rect x="152" y="64" width="16" height="30" rx="3" fill="#F7B731" fillOpacity="0.45"/>
      <rect x="176" y="52" width="16" height="42" rx="3" fill="#F7B731" fillOpacity="0.55"/>
      <rect x="200" y="44" width="16" height="50" rx="3" fill="#F7B731" fillOpacity="0.65"/>
      <rect x="224" y="34" width="16" height="60" rx="3" fill="#F7B731" fillOpacity="0.8"/>
      {/* Trend line */}
      <path d="M136 80 L160 72 L184 60 L208 50 L232 38" stroke="#F7B731" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Data points */}
      <circle cx="136" cy="80" r="3.5" fill="#F7B731"/>
      <circle cx="160" cy="72" r="3.5" fill="#F7B731"/>
      <circle cx="184" cy="60" r="3.5" fill="#F7B731"/>
      <circle cx="208" cy="50" r="3.5" fill="#F7B731"/>
      <circle cx="232" cy="38" r="3.5" fill="#F7B731"/>
      {/* Arrow */}
      <path d="M232 38 L242 28" stroke="#F7B731" strokeWidth="2" strokeLinecap="round"/>
      <path d="M236 28 L242 28 L242 34" stroke="#F7B731" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="58" cy="40" r="5" fill="#F7B731" fillOpacity={dark ? 0.2 : 0.2}/>
      <circle cx="310" cy="100" r="4" fill="#F7B731" fillOpacity="0.14"/>
    </svg>
  );
}

function ICSRLifecycleIll({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#141418" : "#EEE9FF";
  const glowOp = dark ? 0.12 : 0.07;
  const cardFill = dark ? "#1e1e28" : "white";
  const cardOp = dark ? 0.8 : 0.92;
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill={bg}/>
      <circle cx="50" cy="120" r="65" fill="#7C6AF7" fillOpacity={glowOp}/>
      {/* 4-box cycle */}
      <rect x="122" y="22" width="48" height="32" rx="5" fill={cardFill} fillOpacity={cardOp}/>
      <rect x="190" y="22" width="48" height="32" rx="5" fill={cardFill} fillOpacity={cardOp}/>
      <rect x="190" y="74" width="48" height="32" rx="5" fill={cardFill} fillOpacity={cardOp}/>
      <rect x="122" y="74" width="48" height="32" rx="5" fill={cardFill} fillOpacity={cardOp}/>
      {/* Box content lines */}
      <rect x="130" y="33" width="32" height="2.5" rx="1.25" fill="#C5BBFF"/>
      <rect x="130" y="39" width="22" height="2" rx="1" fill="#DDD9FF"/>
      <rect x="198" y="33" width="32" height="2.5" rx="1.25" fill="#C5BBFF"/>
      <rect x="198" y="39" width="22" height="2" rx="1" fill="#DDD9FF"/>
      <rect x="198" y="85" width="32" height="2.5" rx="1.25" fill="#C5BBFF"/>
      <rect x="198" y="91" width="22" height="2" rx="1" fill="#DDD9FF"/>
      <rect x="130" y="85" width="32" height="2.5" rx="1.25" fill="#C5BBFF"/>
      <rect x="130" y="91" width="22" height="2" rx="1" fill="#DDD9FF"/>
      {/* Arrows */}
      <path d="M170 38 Q180 38 190 38" stroke="#7C6AF7" strokeWidth="1.5" strokeOpacity="0.5" fill="none" markerEnd="url(#arr)"/>
      <line x1="170" y1="38" x2="188" y2="38" stroke="#7C6AF7" strokeWidth="1.5" strokeOpacity="0.5"/>
      <polygon points="186,35 190,38 186,41" fill="#7C6AF7" fillOpacity="0.5"/>
      <line x1="214" y1="54" x2="214" y2="72" stroke="#7C6AF7" strokeWidth="1.5" strokeOpacity="0.5"/>
      <polygon points="211,70 214,74 217,70" fill="#7C6AF7" fillOpacity="0.5"/>
      <line x1="188" y1="90" x2="170" y2="90" stroke="#7C6AF7" strokeWidth="1.5" strokeOpacity="0.5"/>
      <polygon points="172,87 168,90 172,93" fill="#7C6AF7" fillOpacity="0.5"/>
      <line x1="146" y1="74" x2="146" y2="56" stroke="#7C6AF7" strokeWidth="1.5" strokeOpacity="0.5"/>
      <polygon points="143,58 146,54 149,58" fill="#7C6AF7" fillOpacity="0.5"/>
      <circle cx="308" cy="28" r="5" fill="#7C6AF7" fillOpacity="0.14"/>
      <circle cx="318" cy="106" r="4" fill="#C5BBFF" fillOpacity={dark ? 0.2 : 0.35}/>
    </svg>
  );
}

function AggregateReportsIll({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#0E1816" : "#E6F9F8";
  const glowOp = dark ? 0.1 : 0.08;
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill={bg}/>
      <circle cx="310" cy="18" r="72" fill="#4ECDC4" fillOpacity={glowOp}/>
      {/* Stacked reports */}
      <rect x="100" y="28" width="108" height="84" rx="5" fill={dark ? "#0a1a18" : "white"} fillOpacity={dark ? 0.6 : 0.5}/>
      <rect x="110" y="20" width="108" height="84" rx="5" fill={dark ? "#0c1e1b" : "white"} fillOpacity={dark ? 0.7 : 0.72}/>
      <rect x="120" y="12" width="108" height="88" rx="5" fill={dark ? "#0e2220" : "white"} fillOpacity={dark ? 0.85 : 0.95}/>
      <rect x="120" y="12" width="108" height="18" rx="5" fill="#4ECDC4" fillOpacity="0.3"/>
      <rect x="120" y="23" width="108" height="7" rx="0" fill="#4ECDC4" fillOpacity="0.3"/>
      {/* Labels on header */}
      <rect x="130" y="15" width="28" height="9" rx="3" fill="#4ECDC4" fillOpacity="0.55"/>
      <rect x="162" y="15" width="28" height="9" rx="3" fill="#4ECDC4" fillOpacity="0.35"/>
      <rect x="194" y="15" width="22" height="9" rx="3" fill="#4ECDC4" fillOpacity="0.25"/>
      {/* Content lines */}
      <rect x="132" y="38" width="84" height="3" rx="1.5" fill="#B8F0EC"/>
      <rect x="132" y="48" width="66" height="2.5" rx="1.25" fill={dark ? "#1a3a36" : "#D0F5F2"}/>
      <rect x="132" y="56" width="80" height="2.5" rx="1.25" fill={dark ? "#1a3a36" : "#D0F5F2"}/>
      {/* Mini bar chart */}
      <rect x="132" y="68" width="12" height="28" rx="2" fill="#4ECDC4" fillOpacity="0.3"/>
      <rect x="148" y="58" width="12" height="38" rx="2" fill="#4ECDC4" fillOpacity="0.4"/>
      <rect x="164" y="50" width="12" height="46" rx="2" fill="#4ECDC4" fillOpacity="0.55"/>
      <rect x="180" y="62" width="12" height="34" rx="2" fill="#4ECDC4" fillOpacity="0.38"/>
      <rect x="196" y="72" width="12" height="24" rx="2" fill="#4ECDC4" fillOpacity="0.28"/>
      <circle cx="58" cy="36" r="5" fill="#4ECDC4" fillOpacity={dark ? 0.18 : 0.22}/>
      <circle cx="310" cy="100" r="4" fill="#4ECDC4" fillOpacity="0.14"/>
    </svg>
  );
}

function RiskManagementIll({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#141208" : "#FEF6E0";
  const glowOp = dark ? 0.1 : 0.07;
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill={bg}/>
      <circle cx="50" cy="22" r="65" fill="#F7B731" fillOpacity={glowOp}/>
      {/* Shield */}
      <path d="M180 12 L220 26 L220 68 C220 92 202 106 180 116 C158 106 140 92 140 68 L140 26Z" fill="#F7B731" fillOpacity="0.14"/>
      <path d="M180 20 L214 32 L214 68 C214 89 198 101 180 110 C162 101 146 89 146 68 L146 32Z" fill="#F7B731" fillOpacity="0.12"/>
      {/* Risk matrix inside shield */}
      <rect x="157" y="40" width="22" height="22" rx="2" fill="#4ECDC4" fillOpacity="0.45"/>
      <rect x="181" y="40" width="22" height="22" rx="2" fill="#F7B731" fillOpacity="0.6"/>
      <rect x="157" y="64" width="22" height="22" rx="2" fill="#F7B731" fillOpacity="0.4"/>
      <rect x="181" y="64" width="22" height="22" rx="2" fill="#E05555" fillOpacity="0.35"/>
      {/* Labels */}
      <line x1="168" y1="38" x2="168" y2="36" stroke="#F7B731" strokeWidth="0.75" strokeOpacity="0.3"/>
      <line x1="192" y1="38" x2="192" y2="36" stroke="#F7B731" strokeWidth="0.75" strokeOpacity="0.3"/>
      {/* LOW/MED/HIGH dots */}
      <circle cx="168" cy="51" r="4" fill={dark ? "#0a2018" : "white"} fillOpacity="0.7"/>
      <circle cx="192" cy="51" r="4" fill={dark ? "#0a2018" : "white"} fillOpacity="0.7"/>
      <circle cx="168" cy="75" r="4" fill={dark ? "#0a2018" : "white"} fillOpacity="0.7"/>
      <circle cx="192" cy="75" r="4" fill={dark ? "#0a2018" : "white"} fillOpacity="0.5"/>
      <circle cx="58" cy="40" r="5" fill="#F7B731" fillOpacity={dark ? 0.2 : 0.2}/>
      <circle cx="310" cy="90" r="5" fill="#F7B731" fillOpacity="0.14"/>
      <circle cx="322" cy="112" r="3" fill="#F5E4A8" fillOpacity="0.35"/>
    </svg>
  );
}

/* ── REGULATORY UPDATE ILLUSTRATIONS ── */

function HealthCanadaGVPIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#EEE9FF"/>
      <circle cx="305" cy="18" r="72" fill="#7C6AF7" fillOpacity="0.07"/>
      {/* Org chart - system structure */}
      <rect x="146" y="14" width="68" height="26" rx="5" fill="white" fillOpacity="0.92" stroke="#C5BBFF" strokeWidth="1.5"/>
      <rect x="152" y="22" width="56" height="3" rx="1.5" fill="#C5BBFF"/>
      <rect x="152" y="29" width="38" height="2.5" rx="1.25" fill="#DDD9FF"/>
      {/* Lines down */}
      <line x1="180" y1="40" x2="180" y2="52" stroke="#C5BBFF" strokeWidth="1.5"/>
      <line x1="108" y1="52" x2="252" y2="52" stroke="#C5BBFF" strokeWidth="1.5"/>
      <line x1="108" y1="52" x2="108" y2="64" stroke="#C5BBFF" strokeWidth="1.5"/>
      <line x1="180" y1="52" x2="180" y2="64" stroke="#C5BBFF" strokeWidth="1.5"/>
      <line x1="252" y1="52" x2="252" y2="64" stroke="#C5BBFF" strokeWidth="1.5"/>
      {/* Three child boxes */}
      <rect x="74" y="64" width="68" height="26" rx="5" fill="white" fillOpacity="0.88" stroke="#C5BBFF" strokeWidth="1.5"/>
      <rect x="146" y="64" width="68" height="26" rx="5" fill="white" fillOpacity="0.88" stroke="#C5BBFF" strokeWidth="1.5"/>
      <rect x="218" y="64" width="68" height="26" rx="5" fill="white" fillOpacity="0.88" stroke="#C5BBFF" strokeWidth="1.5"/>
      <rect x="82" y="73" width="52" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="82" y="79" width="36" height="2" rx="1" fill="#EEE9FF"/>
      <rect x="154" y="73" width="52" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="154" y="79" width="36" height="2" rx="1" fill="#EEE9FF"/>
      <rect x="226" y="73" width="52" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="226" y="79" width="36" height="2" rx="1" fill="#EEE9FF"/>
      {/* Second level lines */}
      <line x1="108" y1="90" x2="108" y2="102" stroke="#C5BBFF" strokeWidth="1.5"/>
      <line x1="180" y1="90" x2="180" y2="102" stroke="#C5BBFF" strokeWidth="1.5"/>
      <line x1="252" y1="90" x2="252" y2="102" stroke="#C5BBFF" strokeWidth="1.5"/>
      <rect x="74" y="102" width="68" height="18" rx="4" fill="white" fillOpacity="0.7" stroke="#DDD9FF" strokeWidth="1"/>
      <rect x="146" y="102" width="68" height="18" rx="4" fill="white" fillOpacity="0.7" stroke="#DDD9FF" strokeWidth="1"/>
      <rect x="218" y="102" width="68" height="18" rx="4" fill="white" fillOpacity="0.7" stroke="#DDD9FF" strokeWidth="1"/>
      <circle cx="44" cy="55" r="5" fill="#C5BBFF" fillOpacity="0.4"/>
      <circle cx="318" cy="100" r="4" fill="#7C6AF7" fillOpacity="0.12"/>
    </svg>
  );
}

function PregnancyGVPIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#E6F9F8"/>
      <circle cx="50" cy="22" r="65" fill="#4ECDC4" fillOpacity="0.08"/>
      <circle cx="320" cy="115" r="55" fill="#4ECDC4" fillOpacity="0.08"/>
      {/* Large shield */}
      <path d="M180 10 L228 26 L228 76 C228 102 206 116 180 124 C154 116 132 102 132 76 L132 26Z" fill="#4ECDC4" fillOpacity="0.14"/>
      <path d="M180 18 L220 32 L220 76 C220 99 200 111 180 118 C160 111 140 99 140 76 L140 32Z" fill="#4ECDC4" fillOpacity="0.12"/>
      {/* Heart inside shield */}
      <path d="M180 88 C180 88 154 70 154 54 C154 45 162 40 168 44 C172 47 176 52 180 58 C184 52 188 47 192 44 C198 40 206 45 206 54 C206 70 180 88 180 88Z" fill="#4ECDC4" fillOpacity="0.55"/>
      {/* Decorative circles (representing cells/life) */}
      <circle cx="155" cy="34" r="5" fill="#4ECDC4" fillOpacity="0.3"/>
      <circle cx="165" cy="26" r="3.5" fill="#4ECDC4" fillOpacity="0.2"/>
      <circle cx="195" cy="28" r="4" fill="#4ECDC4" fillOpacity="0.25"/>
      <circle cx="206" cy="36" r="3" fill="#4ECDC4" fillOpacity="0.2"/>
      <circle cx="58" cy="75" r="5" fill="#4ECDC4" fillOpacity="0.22"/>
      <circle cx="42" cy="96" r="3" fill="#4ECDC4" fillOpacity="0.14"/>
      <circle cx="312" cy="28" r="6" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="325" cy="55" r="4" fill="#B8F0EC" fillOpacity="0.5"/>
    </svg>
  );
}

function RiskMinimisationIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#FEF6E0"/>
      <circle cx="300" cy="14" r="70" fill="#F7B731" fillOpacity="0.07"/>
      {/* Risk level bars (horizontal) */}
      <rect x="96" y="22" width="168" height="24" rx="5" fill="#E05555" fillOpacity="0.2"/>
      <rect x="96" y="22" width="168" height="24" rx="5" fill="none" stroke="#E05555" strokeWidth="1.5" strokeOpacity="0.3"/>
      <rect x="106" y="29" width="148" height="10" rx="3" fill="#E05555" fillOpacity="0.25"/>
      <rect x="240" y="30" width="8" height="8" rx="2" fill="#E05555" fillOpacity="0.6"/>
      <rect x="106" y="29" width="80" height="10" rx="3" fill="#E05555" fillOpacity="0.15"/>

      <rect x="96" y="52" width="168" height="24" rx="5" fill="#F7B731" fillOpacity="0.2"/>
      <rect x="96" y="52" width="168" height="24" rx="5" fill="none" stroke="#F7B731" strokeWidth="1.5" strokeOpacity="0.4"/>
      <rect x="106" y="59" width="110" height="10" rx="3" fill="#F7B731" fillOpacity="0.4"/>
      <rect x="240" y="60" width="8" height="8" rx="2" fill="#F7B731" fillOpacity="0.6"/>

      <rect x="96" y="82" width="168" height="24" rx="5" fill="#4ECDC4" fillOpacity="0.2"/>
      <rect x="96" y="82" width="168" height="24" rx="5" fill="none" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.35"/>
      <rect x="106" y="89" width="65" height="10" rx="3" fill="#4ECDC4" fillOpacity="0.35"/>
      <rect x="240" y="90" width="8" height="8" rx="2" fill="#4ECDC4" fillOpacity="0.55"/>

      {/* Labels */}
      <rect x="68" y="29" width="22" height="10" rx="3" fill="#E05555" fillOpacity="0.2"/>
      <rect x="70" y="32" width="18" height="3.5" rx="1.75" fill="#E05555" fillOpacity="0.4"/>
      <rect x="68" y="59" width="22" height="10" rx="3" fill="#F7B731" fillOpacity="0.2"/>
      <rect x="70" y="62" width="18" height="3.5" rx="1.75" fill="#F7B731" fillOpacity="0.5"/>
      <rect x="68" y="89" width="22" height="10" rx="3" fill="#4ECDC4" fillOpacity="0.2"/>
      <rect x="70" y="92" width="18" height="3.5" rx="1.75" fill="#4ECDC4" fillOpacity="0.4"/>

      {/* Arrow pointing down (minimisation) */}
      <path d="M280 30 L280 96" stroke="#F7B731" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="3 3"/>
      <path d="M275 90 L280 98 L285 90" stroke="#F7B731" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      <circle cx="46" cy="55" r="5" fill="#F7B731" fillOpacity="0.2"/>
      <circle cx="318" cy="110" r="3.5" fill="#F5E4A8" fillOpacity="0.4"/>
    </svg>
  );
}

function SignalEudravigilanceIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#EEE9FF"/>
      <circle cx="305" cy="18" r="72" fill="#7C6AF7" fillOpacity="0.07"/>
      {/* Database cylinder */}
      <ellipse cx="180" cy="36" rx="38" ry="10" fill="#C5BBFF" fillOpacity="0.6"/>
      <rect x="142" y="36" width="76" height="52" fill="#DDD9FF" fillOpacity="0.5"/>
      <ellipse cx="180" cy="88" rx="38" ry="10" fill="#C5BBFF" fillOpacity="0.45"/>
      <ellipse cx="180" cy="36" rx="38" ry="10" fill="white" fillOpacity="0.85" stroke="#C5BBFF" strokeWidth="1.5"/>
      <rect x="142" y="36" width="76" height="52" fill="white" fillOpacity="0.72"/>
      <line x1="142" y1="52" x2="218" y2="52" stroke="#DDD9FF" strokeWidth="1"/>
      <line x1="142" y1="64" x2="218" y2="64" stroke="#DDD9FF" strokeWidth="1"/>
      <ellipse cx="180" cy="88" rx="38" ry="10" fill="white" fillOpacity="0.85" stroke="#C5BBFF" strokeWidth="1.5"/>
      <rect x="155" y="40" width="50" height="3" rx="1.5" fill="#C5BBFF"/>
      <rect x="155" y="56" width="40" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="155" y="68" width="46" height="2.5" rx="1.25" fill="#DDD9FF"/>
      {/* Connected signal nodes */}
      <circle cx="78" cy="40" r="12" fill="#7C6AF7" fillOpacity="0.15" stroke="#C5BBFF" strokeWidth="1.5"/>
      <circle cx="78" cy="40" r="5" fill="#7C6AF7" fillOpacity="0.45"/>
      <circle cx="78" cy="90" r="10" fill="#7C6AF7" fillOpacity="0.12" stroke="#C5BBFF" strokeWidth="1.5"/>
      <circle cx="78" cy="90" r="4" fill="#7C6AF7" fillOpacity="0.35"/>
      <circle cx="282" cy="56" r="10" fill="#7C6AF7" fillOpacity="0.12" stroke="#C5BBFF" strokeWidth="1.5"/>
      <circle cx="282" cy="56" r="4" fill="#7C6AF7" fillOpacity="0.35"/>
      <line x1="90" y1="42" x2="142" y2="56" stroke="#C5BBFF" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="88" y1="84" x2="142" y2="80" stroke="#C5BBFF" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="218" y1="60" x2="272" y2="58" stroke="#C5BBFF" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="44" cy="64" r="5" fill="#C5BBFF" fillOpacity="0.4"/>
      <circle cx="318" cy="108" r="4" fill="#7C6AF7" fillOpacity="0.12"/>
    </svg>
  );
}

function PASSPSURIll() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#E6F9F8"/>
      <circle cx="50" cy="22" r="65" fill="#4ECDC4" fillOpacity="0.08"/>
      {/* Calendar */}
      <rect x="96" y="16" width="100" height="96" rx="6" fill="white" fillOpacity="0.92"/>
      <rect x="96" y="16" width="100" height="24" rx="6" fill="#4ECDC4" fillOpacity="0.3"/>
      <rect x="96" y="30" width="100" height="10" rx="0" fill="#4ECDC4" fillOpacity="0.3"/>
      {/* Day headers */}
      <rect x="104" y="19" width="10" height="8" rx="2" fill="#4ECDC4" fillOpacity="0.5"/>
      <rect x="118" y="19" width="10" height="8" rx="2" fill="#4ECDC4" fillOpacity="0.5"/>
      <rect x="132" y="19" width="10" height="8" rx="2" fill="#4ECDC4" fillOpacity="0.5"/>
      <rect x="146" y="19" width="10" height="8" rx="2" fill="#4ECDC4" fillOpacity="0.5"/>
      <rect x="160" y="19" width="10" height="8" rx="2" fill="#4ECDC4" fillOpacity="0.5"/>
      <rect x="174" y="19" width="10" height="8" rx="2" fill="#4ECDC4" fillOpacity="0.3"/>
      {/* Calendar cells */}
      {[0,1,2,3,4].map(row =>
        [0,1,2,3,4,5].map(col => (
          <rect key={`${row}-${col}`} x={104+col*14} y={42+row*12} width="10" height="8" rx="2"
            fill={row===1&&col===3 ? "#4ECDC4" : "#E6F9F8"} fillOpacity={row===1&&col===3 ? 0.7 : 0.6}/>
        ))
      )}
      {/* Periodic report document beside calendar */}
      <rect x="212" y="28" width="76" height="88" rx="5" fill="white" fillOpacity="0.88"/>
      <rect x="212" y="28" width="76" height="16" rx="5" fill="#4ECDC4" fillOpacity="0.28"/>
      <rect x="212" y="37" width="76" height="7" rx="0" fill="#4ECDC4" fillOpacity="0.28"/>
      <rect x="222" y="52" width="56" height="3" rx="1.5" fill="#B8F0EC"/>
      <rect x="222" y="61" width="44" height="2.5" rx="1.25" fill="#D0F5F2"/>
      <rect x="222" y="69" width="56" height="2.5" rx="1.25" fill="#D0F5F2"/>
      <rect x="222" y="77" width="36" height="2.5" rx="1.25" fill="#D0F5F2"/>
      <rect x="222" y="87" width="50" height="2.5" rx="1.25" fill="#D0F5F2"/>
      {/* Periodic icon */}
      <path d="M222 100 Q228 94 234 100 Q240 106 246 100 Q252 94 258 100 Q264 106 268 100" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.5"/>
      <circle cx="56" cy="75" r="5" fill="#4ECDC4" fillOpacity="0.22"/>
      <circle cx="314" cy="100" r="4" fill="#4ECDC4" fillOpacity="0.14"/>
    </svg>
  );
}

function FDATransitionIll({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#141418" : "#EEE9FF";
  const glowOp = dark ? 0.12 : 0.07;
  const cardFill = dark ? "#1a1a22" : "white";
  const cardOp = dark ? 0.85 : 0.92;
  const lineLight = dark ? "#2a2838" : "#DDD9FF";
  const lineAccent = dark ? "#4a4668" : "#C5BBFF";
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill={bg}/>
      <circle cx="50" cy="20" r="65" fill="#7C6AF7" fillOpacity={glowOp}/>
      <circle cx="320" cy="118" r="55" fill="#7C6AF7" fillOpacity={glowOp * 0.8}/>
      {/* Old system box (FAERS) - faded/crossed */}
      <rect x="62" y="28" width="82" height="72" rx="6" fill={cardFill} fillOpacity={dark ? 0.4 : 0.55}/>
      <rect x="62" y="28" width="82" height="14" rx="6" fill="#9896B6" fillOpacity="0.3"/>
      <rect x="62" y="35" width="82" height="7" rx="0" fill="#9896B6" fillOpacity="0.3"/>
      <rect x="72" y="50" width="62" height="2.5" rx="1.25" fill="#9896B6" fillOpacity="0.35"/>
      <rect x="72" y="58" width="48" height="2.5" rx="1.25" fill="#9896B6" fillOpacity="0.25"/>
      <rect x="72" y="66" width="55" height="2.5" rx="1.25" fill="#9896B6" fillOpacity="0.25"/>
      <rect x="72" y="74" width="38" height="2.5" rx="1.25" fill="#9896B6" fillOpacity="0.25"/>
      <rect x="72" y="82" width="52" height="2.5" rx="1.25" fill="#9896B6" fillOpacity="0.25"/>
      {/* Cross out FAERS */}
      <line x1="66" y1="32" x2="140" y2="96" stroke="#9896B6" strokeWidth="2" strokeOpacity="0.45" strokeLinecap="round"/>
      <line x1="140" y1="32" x2="66" y2="96" stroke="#9896B6" strokeWidth="2" strokeOpacity="0.45" strokeLinecap="round"/>
      {/* Label FAERS */}
      <rect x="74" y="30" width="38" height="8" rx="3" fill="#9896B6" fillOpacity="0.25"/>
      <rect x="77" y="33" width="32" height="2.5" rx="1.25" fill="#9896B6" fillOpacity="0.4"/>
      {/* Arrow right */}
      <path d="M152 64 L178 64" stroke="#7C6AF7" strokeWidth="2.5" strokeLinecap="round"/>
      <polygon points="174,59 182,64 174,69" fill="#7C6AF7" fillOpacity="0.8"/>
      {/* New system box (AEMS) - bright/active */}
      <rect x="186" y="18" width="106" height="92" rx="6" fill={cardFill} fillOpacity={cardOp}/>
      <rect x="186" y="18" width="106" height="18" rx="6" fill="#7C6AF7" fillOpacity="0.3"/>
      <rect x="186" y="29" width="106" height="7" rx="0" fill="#7C6AF7" fillOpacity="0.3"/>
      {/* AEMS label */}
      <rect x="196" y="21" width="36" height="9" rx="3" fill="#7C6AF7" fillOpacity="0.5"/>
      <rect x="199" y="24" width="30" height="3" rx="1.5" fill="white" fillOpacity="0.75"/>
      {/* Near real-time indicator */}
      <circle cx="200" cy="48" r="4" fill="#4ECDC4" fillOpacity="0.8"/>
      <circle cx="200" cy="48" r="7" fill="#4ECDC4" fillOpacity="0.18"/>
      <rect x="212" y="45" width="68" height="2.5" rx="1.25" fill={lineAccent}/>
      <rect x="212" y="52" width="50" height="2" rx="1" fill={lineLight}/>
      {/* AI indicator */}
      <circle cx="200" cy="66" r="4" fill="#7C6AF7" fillOpacity="0.7"/>
      <circle cx="200" cy="66" r="7" fill="#7C6AF7" fillOpacity="0.15"/>
      <rect x="212" y="63" width="68" height="2.5" rx="1.25" fill={lineAccent}/>
      <rect x="212" y="70" width="44" height="2" rx="1" fill={lineLight}/>
      {/* Reporting indicator */}
      <circle cx="200" cy="84" r="4" fill="#F7B731" fillOpacity="0.7"/>
      <circle cx="200" cy="84" r="7" fill="#F7B731" fillOpacity="0.15"/>
      <rect x="212" y="81" width="68" height="2.5" rx="1.25" fill={lineAccent}/>
      <rect x="212" y="88" width="56" height="2" rx="1" fill={lineLight}/>
      {/* Pulse line on AEMS */}
      <path d="M192 104 L210 104 L214 96 L218 112 L222 100 L226 106 L230 104 L288 104" stroke="#7C6AF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.5"/>
      <circle cx="46" cy="74" r="4" fill="#7C6AF7" fillOpacity={dark ? 0.18 : 0.2}/>
      <circle cx="318" cy="38" r="5" fill="#7C6AF7" fillOpacity={dark ? 0.14 : 0.14}/>
    </svg>
  );
}

/* ── PUBLIC EXPORTS ── */

const resourceMap: Record<string, () => React.ReactElement> = {
  "pv-made-simple": PVMadeSimpleIll,
  "pv-essentials-checklist": ChecklistIll,
  "pharmacovigilance-auditing": AuditingIll,
  "signal-management-playbook": SignalPlaybookIll,
  "inspection-readiness-workbook": InspectionWorkbookIll,
  "icsr-masterclass": ICSRMasterclassIll,
  "aggregate-report-templates": AggregateTemplatesIll,
};

const articleMap: Record<string, (dark: boolean) => React.ReactElement> = {
  "signal-detection-modern-pharmacovigilance": (d) => <SignalDetectionIll dark={d}/>,
  "inspection-ready-safety-systems": (d) => <InspectionReadyIll dark={d}/>,
  "clinical-quality-trends": (d) => <QualityTrendsIll dark={d}/>,
  "icsr-lifecycle": (d) => <ICSRLifecycleIll dark={d}/>,
  "aggregate-reports-regulatory-expectations": (d) => <AggregateReportsIll dark={d}/>,
  "risk-management-plans-guide": (d) => <RiskManagementIll dark={d}/>,
  "fda-faers-aems-transition-2026": (d) => <FDATransitionIll dark={d}/>,
};

const regulatoryMap: Record<string, () => React.ReactElement> = {
  "health-canada-gvp-guidelines-gui-0102-2026": HealthCanadaGVPIll,
  "gvp-p-iii-pregnant-breastfeeding-women-2026": PregnancyGVPIll,
  "gvp-module-xvi-rev3-risk-minimisation-2024": RiskMinimisationIll,
  "signal-management-eudravigilance-updates-2026": SignalEudravigilanceIll,
  "pass-psur-regulatory-updates-2025": PASSPSURIll,
};

export function ResourceIllustration({ id }: { id: string }) {
  const Ill = resourceMap[id] ?? PVMadeSimpleIll;
  return <Ill />;
}

export function ArticleIllustration({ slug }: { slug: string }) {
  const fn = articleMap[slug];
  return fn ? fn(false) : <SignalDetectionIll dark={false}/>;
}

export function DarkArticleIllustration({ slug }: { slug: string }) {
  const fn = articleMap[slug];
  return fn ? fn(true) : <SignalDetectionIll dark={true}/>;
}

export function RegulatoryIllustration({ slug }: { slug: string }) {
  const Ill = regulatoryMap[slug] ?? HealthCanadaGVPIll;
  return <Ill />;
}
