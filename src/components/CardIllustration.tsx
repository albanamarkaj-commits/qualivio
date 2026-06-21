/* Flat-vector SVG illustrations for cards. Each fills its container width at 128px tall. */

function BookIllustration() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#EEE9FF"/>
      <circle cx="310" cy="18" r="72" fill="#7C6AF7" fillOpacity="0.07"/>
      <circle cx="45" cy="118" r="56" fill="#C5BBFF" fillOpacity="0.12"/>
      {/* Left page */}
      <rect x="92" y="20" width="78" height="90" rx="4" fill="white" fillOpacity="0.92"/>
      {/* Right page */}
      <rect x="190" y="20" width="78" height="90" rx="4" fill="white" fillOpacity="0.92"/>
      {/* Spine */}
      <rect x="168" y="20" width="24" height="90" rx="3" fill="#C5BBFF"/>
      {/* Lines left */}
      <rect x="102" y="34" width="54" height="3" rx="1.5" fill="#C5BBFF"/>
      <rect x="102" y="44" width="44" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="52" width="54" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="60" width="36" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="68" width="48" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="76" width="40" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="84" width="52" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="102" y="92" width="30" height="2.5" rx="1.25" fill="#DDD9FF"/>
      {/* Lines right */}
      <rect x="200" y="34" width="54" height="3" rx="1.5" fill="#C5BBFF"/>
      <rect x="200" y="44" width="44" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="200" y="52" width="54" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="200" y="60" width="38" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="200" y="68" width="48" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="200" y="76" width="42" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="200" y="84" width="50" height="2.5" rx="1.25" fill="#DDD9FF"/>
      {/* Bookmark */}
      <path d="M256 20 L256 40 L251 35 L246 40 L246 20Z" fill="#7C6AF7" fillOpacity="0.45"/>
      {/* Decorative dots */}
      <circle cx="58" cy="38" r="6" fill="#C5BBFF" fillOpacity="0.5"/>
      <circle cx="48" cy="90" r="4" fill="#7C6AF7" fillOpacity="0.14"/>
      <circle cx="308" cy="72" r="5" fill="#7C6AF7" fillOpacity="0.14"/>
      <circle cx="320" cy="100" r="3" fill="#C5BBFF" fillOpacity="0.35"/>
    </svg>
  );
}

function CourseIllustration() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#E6F9F8"/>
      <circle cx="50" cy="22" r="65" fill="#4ECDC4" fillOpacity="0.08"/>
      <circle cx="320" cy="115" r="55" fill="#4ECDC4" fillOpacity="0.09"/>
      {/* Monitor body */}
      <rect x="90" y="16" width="180" height="88" rx="8" fill="white" fillOpacity="0.9"/>
      {/* Screen */}
      <rect x="100" y="24" width="160" height="72" rx="5" fill="#E6F9F8"/>
      {/* Play circle */}
      <circle cx="180" cy="60" r="22" fill="#4ECDC4" fillOpacity="0.22"/>
      {/* Play triangle */}
      <path d="M173 50 L173 70 L191 60Z" fill="#4ECDC4"/>
      {/* Progress bar */}
      <rect x="115" y="85" width="60" height="4" rx="2" fill="#B8F0EC"/>
      <rect x="115" y="85" width="38" height="4" rx="2" fill="#4ECDC4"/>
      <rect x="182" y="85" width="14" height="4" rx="2" fill="#B8F0EC" fillOpacity="0.5"/>
      {/* Stand */}
      <rect x="170" y="104" width="20" height="8" rx="2" fill="#B8F0EC"/>
      <rect x="155" y="112" width="50" height="5" rx="2.5" fill="#B8F0EC"/>
      {/* Decorative dots */}
      <circle cx="55" cy="75" r="5" fill="#4ECDC4" fillOpacity="0.22"/>
      <circle cx="42" cy="96" r="3" fill="#4ECDC4" fillOpacity="0.14"/>
      <circle cx="312" cy="28" r="6" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="325" cy="56" r="4" fill="#B8F0EC" fillOpacity="0.5"/>
    </svg>
  );
}

function TemplateIllustration() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#FEF6E0"/>
      <circle cx="300" cy="14" r="70" fill="#F7B731" fillOpacity="0.07"/>
      <circle cx="48" cy="122" r="55" fill="#F7B731" fillOpacity="0.09"/>
      {/* Back document */}
      <rect x="115" y="28" width="110" height="82" rx="5" fill="white" fillOpacity="0.5"/>
      {/* Middle document */}
      <rect x="125" y="20" width="110" height="82" rx="5" fill="white" fillOpacity="0.72"/>
      {/* Front document */}
      <rect x="135" y="12" width="110" height="88" rx="5" fill="white" fillOpacity="0.95"/>
      {/* Header bar */}
      <rect x="135" y="12" width="110" height="20" rx="5" fill="#F7B731" fillOpacity="0.4"/>
      <rect x="135" y="24" width="110" height="8" rx="0" fill="#F7B731" fillOpacity="0.4"/>
      {/* Content lines */}
      <rect x="147" y="40" width="86" height="3" rx="1.5" fill="#F7B731" fillOpacity="0.55"/>
      <rect x="147" y="50" width="70" height="2.5" rx="1.25" fill="#F5E4A8"/>
      <rect x="147" y="58" width="86" height="2.5" rx="1.25" fill="#F5E4A8"/>
      <rect x="147" y="66" width="55" height="2.5" rx="1.25" fill="#F5E4A8"/>
      {/* Grid lines */}
      <rect x="147" y="78" width="86" height="0.75" rx="0.5" fill="#F7B731" fillOpacity="0.28"/>
      <rect x="147" y="87" width="86" height="0.75" rx="0.5" fill="#F7B731" fillOpacity="0.28"/>
      <rect x="147" y="96" width="86" height="0.75" rx="0.5" fill="#F7B731" fillOpacity="0.28"/>
      <rect x="186" y="78" width="0.75" height="26" rx="0.5" fill="#F7B731" fillOpacity="0.28"/>
      {/* Checkmarks */}
      <path d="M155 82 L158 85 L164 78" stroke="#F7B731" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M155 91 L158 94 L164 87" stroke="#F7B731" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Decorative dots */}
      <circle cx="65" cy="40" r="5" fill="#F7B731" fillOpacity="0.2"/>
      <circle cx="54" cy="88" r="3.5" fill="#F7B731" fillOpacity="0.14"/>
      <circle cx="306" cy="72" r="5" fill="#F7B731" fillOpacity="0.17"/>
      <circle cx="318" cy="98" r="3" fill="#F5E4A8" fillOpacity="0.5"/>
    </svg>
  );
}

function PVArticleIllustration() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#EEE9FF"/>
      <circle cx="305" cy="18" r="72" fill="#7C6AF7" fillOpacity="0.07"/>
      <circle cx="50" cy="120" r="55" fill="#C5BBFF" fillOpacity="0.1"/>
      {/* Shield */}
      <path d="M180 16 L212 30 L212 64 C212 84 198 96 180 104 C162 96 148 84 148 64 L148 30Z" fill="#7C6AF7" fillOpacity="0.12"/>
      <path d="M180 24 L206 36 L206 64 C206 80 194 90 180 97 C166 90 154 80 154 64 L154 36Z" fill="#7C6AF7" fillOpacity="0.12"/>
      {/* Bar chart inside shield */}
      <rect x="161" y="76" width="9" height="18" rx="2" fill="#7C6AF7" fillOpacity="0.55"/>
      <rect x="173" y="64" width="9" height="30" rx="2" fill="#7C6AF7" fillOpacity="0.7"/>
      <rect x="185" y="56" width="9" height="38" rx="2" fill="#7C6AF7"/>
      <rect x="197" y="68" width="9" height="26" rx="2" fill="#7C6AF7" fillOpacity="0.6"/>
      {/* Check on shield */}
      <path d="M169 42 L176 50 L193 32" stroke="#7C6AF7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Data line right */}
      <circle cx="280" cy="44" r="3" fill="#C5BBFF" fillOpacity="0.6"/>
      <circle cx="295" cy="34" r="2.5" fill="#C5BBFF" fillOpacity="0.5"/>
      <circle cx="268" cy="56" r="2" fill="#C5BBFF" fillOpacity="0.4"/>
      <line x1="268" y1="56" x2="280" y2="44" stroke="#C5BBFF" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="280" y1="44" x2="295" y2="34" stroke="#C5BBFF" strokeWidth="1" strokeOpacity="0.4"/>
      {/* Decorative dots */}
      <circle cx="56" cy="36" r="6" fill="#C5BBFF" fillOpacity="0.48"/>
      <circle cx="44" cy="82" r="4" fill="#7C6AF7" fillOpacity="0.12"/>
      <circle cx="310" cy="78" r="5" fill="#7C6AF7" fillOpacity="0.12"/>
      <circle cx="322" cy="102" r="3" fill="#C5BBFF" fillOpacity="0.32"/>
    </svg>
  );
}

function LSArticleIllustration() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#E6F9F8"/>
      <circle cx="48" cy="22" r="65" fill="#4ECDC4" fillOpacity="0.08"/>
      <circle cx="318" cy="112" r="55" fill="#4ECDC4" fillOpacity="0.08"/>
      {/* Network connections */}
      <line x1="180" y1="52" x2="130" y2="40" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.32"/>
      <line x1="180" y1="52" x2="230" y2="40" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.32"/>
      <line x1="180" y1="76" x2="130" y2="88" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.32"/>
      <line x1="180" y1="76" x2="230" y2="88" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.32"/>
      <line x1="180" y1="52" x2="180" y2="28" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.32"/>
      <line x1="180" y1="76" x2="180" y2="100" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.32"/>
      <line x1="130" y1="40" x2="130" y2="80" stroke="#4ECDC4" strokeWidth="1" strokeOpacity="0.22"/>
      <line x1="230" y1="40" x2="230" y2="80" stroke="#4ECDC4" strokeWidth="1" strokeOpacity="0.22"/>
      {/* Nodes */}
      <circle cx="180" cy="64" r="14" fill="#4ECDC4" fillOpacity="0.25"/>
      <circle cx="130" cy="40" r="10" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="230" cy="40" r="10" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="130" cy="88" r="10" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="230" cy="88" r="10" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="180" cy="22" r="7" fill="#4ECDC4" fillOpacity="0.22"/>
      <circle cx="180" cy="106" r="7" fill="#4ECDC4" fillOpacity="0.22"/>
      {/* Center dot */}
      <circle cx="180" cy="64" r="6" fill="#4ECDC4" fillOpacity="0.65"/>
      {/* Decorative dots */}
      <circle cx="54" cy="90" r="4" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="40" cy="55" r="3" fill="#4ECDC4" fillOpacity="0.12"/>
      <circle cx="306" cy="34" r="5" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="320" cy="88" r="3.5" fill="#4ECDC4" fillOpacity="0.14"/>
    </svg>
  );
}

function RegulatoryDocIllustration() {
  return (
    <svg viewBox="0 0 360 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="128" fill="#EEE9FF"/>
      <circle cx="292" cy="14" r="75" fill="#7C6AF7" fillOpacity="0.07"/>
      <circle cx="58" cy="122" r="55" fill="#C5BBFF" fillOpacity="0.1"/>
      {/* Main document */}
      <rect x="100" y="12" width="108" height="108" rx="6" fill="white" fillOpacity="0.92"/>
      {/* Document header bar */}
      <rect x="100" y="12" width="108" height="20" rx="6" fill="#7C6AF7" fillOpacity="0.18"/>
      <rect x="100" y="24" width="108" height="8" rx="0" fill="#7C6AF7" fillOpacity="0.18"/>
      {/* Lines */}
      <rect x="114" y="42" width="80" height="3" rx="1.5" fill="#C5BBFF"/>
      <rect x="114" y="52" width="64" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="114" y="60" width="80" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="114" y="68" width="48" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="114" y="76" width="72" height="2.5" rx="1.25" fill="#DDD9FF"/>
      {/* Divider */}
      <rect x="114" y="88" width="80" height="0.75" fill="#E5E4F0"/>
      {/* Checkbox row */}
      <rect x="114" y="96" width="14" height="14" rx="3" fill="#7C6AF7" fillOpacity="0.14" stroke="#7C6AF7" strokeWidth="1" strokeOpacity="0.28"/>
      <path d="M117 103 L120 106 L126 100" stroke="#7C6AF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="133" y="100" width="44" height="2.5" rx="1.25" fill="#DDD9FF"/>
      <rect x="133" y="107" width="32" height="2.5" rx="1.25" fill="#DDD9FF"/>
      {/* Badge seal */}
      <circle cx="246" cy="60" r="30" fill="#7C6AF7" fillOpacity="0.09"/>
      <circle cx="246" cy="60" r="23" fill="#7C6AF7" fillOpacity="0.1"/>
      <circle cx="246" cy="60" r="15" fill="#7C6AF7" fillOpacity="0.14"/>
      {/* Star */}
      <path d="M246 48 L248.6 56 L257 56 L250.4 61.2 L252.8 69.2 L246 64.2 L239.2 69.2 L241.6 61.2 L235 56 L243.4 56Z" fill="#7C6AF7" fillOpacity="0.52"/>
      {/* Decorative dots */}
      <circle cx="58" cy="34" r="5" fill="#C5BBFF" fillOpacity="0.45"/>
      <circle cx="46" cy="80" r="3.5" fill="#7C6AF7" fillOpacity="0.12"/>
      <circle cx="310" cy="92" r="4" fill="#7C6AF7" fillOpacity="0.12"/>
      <circle cx="324" cy="112" r="3" fill="#C5BBFF" fillOpacity="0.3"/>
    </svg>
  );
}

/* Dark variant for the homepage dark article cards */
function DarkPVIllustration() {
  return (
    <svg viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="110" fill="#141418"/>
      <circle cx="305" cy="15" r="70" fill="#7C6AF7" fillOpacity="0.1"/>
      <circle cx="50" cy="105" r="50" fill="#7C6AF7" fillOpacity="0.06"/>
      <path d="M180 14 L210 26 L210 56 C210 74 196 84 180 92 C164 84 150 74 150 56 L150 26Z" fill="#7C6AF7" fillOpacity="0.18"/>
      <rect x="161" y="64" width="9" height="18" rx="2" fill="#7C6AF7" fillOpacity="0.5"/>
      <rect x="173" y="52" width="9" height="30" rx="2" fill="#7C6AF7" fillOpacity="0.65"/>
      <rect x="185" y="44" width="9" height="38" rx="2" fill="#7C6AF7" fillOpacity="0.8"/>
      <rect x="197" y="56" width="9" height="26" rx="2" fill="#7C6AF7" fillOpacity="0.55"/>
      <path d="M169 34 L176 42 L193 24" stroke="#7C6AF7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="56" cy="34" r="6" fill="#7C6AF7" fillOpacity="0.15"/>
      <circle cx="308" cy="70" r="5" fill="#7C6AF7" fillOpacity="0.12"/>
    </svg>
  );
}

function DarkLSIllustration() {
  return (
    <svg viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="360" height="110" fill="#141418"/>
      <circle cx="48" cy="18" r="62" fill="#4ECDC4" fillOpacity="0.08"/>
      <line x1="180" y1="46" x2="130" y2="34" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.28"/>
      <line x1="180" y1="46" x2="230" y2="34" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.28"/>
      <line x1="180" y1="68" x2="130" y2="80" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.28"/>
      <line x1="180" y1="68" x2="230" y2="80" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.28"/>
      <line x1="180" y1="46" x2="180" y2="22" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.28"/>
      <line x1="180" y1="68" x2="180" y2="92" stroke="#4ECDC4" strokeWidth="1.5" strokeOpacity="0.28"/>
      <circle cx="180" cy="57" r="13" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="130" cy="34" r="9" fill="#4ECDC4" fillOpacity="0.14"/>
      <circle cx="230" cy="34" r="9" fill="#4ECDC4" fillOpacity="0.14"/>
      <circle cx="130" cy="80" r="9" fill="#4ECDC4" fillOpacity="0.14"/>
      <circle cx="230" cy="80" r="9" fill="#4ECDC4" fillOpacity="0.14"/>
      <circle cx="180" cy="18" r="6" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="180" cy="96" r="6" fill="#4ECDC4" fillOpacity="0.18"/>
      <circle cx="180" cy="57" r="5.5" fill="#4ECDC4" fillOpacity="0.55"/>
      <circle cx="308" cy="28" r="5" fill="#4ECDC4" fillOpacity="0.14"/>
    </svg>
  );
}

/* Public exports */

export function ResourceIllustration({ type }: { type: string }) {
  if (type === "Mini Course") return <CourseIllustration />;
  if (type === "Template Pack") return <TemplateIllustration />;
  return <BookIllustration />;
}

export function ArticleIllustration({ category }: { category: string }) {
  if (category === "Life Sciences") return <LSArticleIllustration />;
  return <PVArticleIllustration />;
}

export function DarkArticleIllustration({ category }: { category: string }) {
  if (category === "Life Sciences") return <DarkLSIllustration />;
  return <DarkPVIllustration />;
}

export function RegulatoryIllustration() {
  return <RegulatoryDocIllustration />;
}
