import React from "react";

interface MotifProps {
  className?: string;
}

/**
 * Kanchipuram-style zari temple-border strip (Vaira Oosi / temple gopuram border).
 */
export function TempleBorder({
  className = "",
  flip = false,
}: MotifProps & { flip?: boolean }) {
  return (
    <div
      className={`w-full overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 430 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-7 block ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        {/* Top zari double lines */}
        <line x1="0" y1="2" x2="430" y2="2" stroke="#B8860B" strokeWidth="1" strokeOpacity="0.65" />
        <line x1="0" y1="5" x2="430" y2="5" stroke="#8B1A1A" strokeWidth="0.8" strokeOpacity="0.5" />
        {/* Repeating temple spire triangles */}
        <path
          d="M0 18 L10.75 7 L21.5 18 L32.25 7 L43 18 L53.75 7 L64.5 18 L75.25 7 L86 18 L96.75 7 L107.5 18 L118.25 7 L129 18 L139.75 7 L150.5 18 L161.25 7 L172 18 L182.75 7 L193.5 18 L204.25 7 L215 18 L225.75 7 L236.5 18 L247.25 7 L258 18 L268.75 7 L279.5 18 L290.25 7 L301 18 L311.75 7 L322.5 18 L333.25 7 L344 18 L354.75 7 L365.5 18 L376.25 7 L387 18 L397.75 7 L408.5 18 L419.25 7 L430 18"
          stroke="#B8860B"
          strokeWidth="1.1"
          strokeOpacity="0.6"
          fill="#B8860B"
          fillOpacity="0.06"
        />
        {/* Delicate gold bindu dots at spire peaks */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            cx={10.75 + i * 21.5}
            cy={22}
            r="1.15"
            fill="#8B1A1A"
            fillOpacity="0.45"
          />
        ))}
        <line x1="0" y1="26" x2="430" y2="26" stroke="#B8860B" strokeWidth="0.7" strokeOpacity="0.45" />
      </svg>
    </div>
  );
}

/**
 * Mango-leaf thoranam (Maavilai) hanging across the top of the hero.
 */
export function MaavilaiThoranam({ className = "" }: MotifProps) {
  const leafPositions = [28, 68, 108, 148, 188, 242, 282, 322, 362, 402];
  return (
    <div
      className={`w-full overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 430 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-11 block"
      >
        {/* Subtle turmeric/gold draped cord */}
        <path
          d="M0 4 Q107.5 12 215 6 Q322.5 12 430 4"
          stroke="#B8860B"
          strokeWidth="1"
          strokeOpacity="0.55"
        />
        {/* Central marigold/flower knot */}
        <circle cx="215" cy="9" r="3.2" stroke="#F2B705" strokeWidth="1.2" fill="#FFF8EC" />
        <circle cx="215" cy="9" r="1.3" fill="#8B1A1A" fillOpacity="0.6" />
        <path
          d="M215 12 C211 22 211 33 215 39 C219 33 219 22 215 12 Z"
          stroke="#4E6B3A"
          strokeWidth="1"
          strokeOpacity="0.6"
          fill="#4E6B3A"
          fillOpacity="0.08"
        />
        {/* Mango leaves along the cord */}
        {leafPositions.map((x, idx) => {
          const tilt = idx % 2 === 0 ? -6 : 6;
          return (
            <g key={x} transform={`translate(${x}, 7) rotate(${tilt})`}>
              <path
                d="M0 0 C-5.5 11 -5 24 0 33 C5 24 5.5 11 0 0 Z"
                stroke="#4E6B3A"
                strokeWidth="1"
                strokeOpacity="0.58"
                fill="#4E6B3A"
                fillOpacity="0.07"
              />
              <line
                x1="0"
                y1="2"
                x2="0"
                y2="29"
                stroke="#4E6B3A"
                strokeWidth="0.7"
                strokeOpacity="0.45"
              />
              <circle cx="0" cy="-1" r="1.4" fill="#F2B705" fillOpacity="0.7" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Small Pulli Kolam motif for hero corners.
 */
export function KolamCorner({
  className = "",
  flipX = false,
}: MotifProps & { flipX?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 pointer-events-none select-none ${flipX ? "-scale-x-100" : ""} ${className}`}
      aria-hidden="true"
    >
      {/* Pulli dots */}
      {[14, 28, 42].map((x) =>
        [14, 28, 42].map((y) =>
          x + y <= 60 ? (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r="1.4"
              fill="#B8860B"
              fillOpacity="0.45"
            />
          ) : null
        )
      )}
      {/* Delicate kolam loop lines */}
      <path
        d="M8 14 C8 6 20 6 20 14 C20 22 8 22 8 30 C8 38 20 38 20 30 C20 22 34 22 34 14 C34 6 22 6 22 14"
        stroke="#B8860B"
        strokeWidth="0.9"
        strokeOpacity="0.35"
      />
      <path
        d="M14 48 C20 48 24 42 28 36 C32 30 38 24 48 20"
        stroke="#8B1A1A"
        strokeWidth="0.8"
        strokeOpacity="0.22"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

/**
 * Subtle single-color Vaazhai Maram (Banana tree) framing the hero edges.
 */
export function VaazhaiMaram({
  className = "",
  flipX = false,
}: MotifProps & { flipX?: boolean }) {
  return (
    <svg
      viewBox="0 0 72 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${flipX ? "-scale-x-100" : ""} ${className}`}
      aria-hidden="true"
    >
      {/* Trunk */}
      <path
        d="M18 176 Q20 115 22 68"
        stroke="#4E6B3A"
        strokeWidth="2"
        strokeOpacity="0.22"
      />
      <path
        d="M22 176 Q23 115 24 68"
        stroke="#4E6B3A"
        strokeWidth="1"
        strokeOpacity="0.16"
      />
      {/* Left-arching banana leaves */}
      <path
        d="M22 68 C8 54 2 34 6 18 C16 26 24 44 23 68"
        stroke="#4E6B3A"
        strokeWidth="1"
        strokeOpacity="0.24"
        fill="#4E6B3A"
        fillOpacity="0.04"
      />
      <path
        d="M23 70 C36 46 56 30 68 32 C58 46 40 60 23 70"
        stroke="#4E6B3A"
        strokeWidth="1"
        strokeOpacity="0.24"
        fill="#4E6B3A"
        fillOpacity="0.04"
      />
      <path
        d="M23 76 C40 68 58 72 68 84 C54 86 38 82 23 76"
        stroke="#4E6B3A"
        strokeWidth="1"
        strokeOpacity="0.22"
        fill="#4E6B3A"
        fillOpacity="0.03"
      />
      <path
        d="M22 82 C10 78 3 86 2 98 C10 95 16 90 22 82"
        stroke="#4E6B3A"
        strokeWidth="1"
        strokeOpacity="0.2"
      />
      {/* Flower bud (Vaazhaipoo) */}
      <path
        d="M24 68 Q34 86 32 104"
        stroke="#8B1A1A"
        strokeWidth="0.9"
        strokeOpacity="0.2"
      />
      <ellipse
        cx="32"
        cy="108"
        rx="3.5"
        ry="6"
        stroke="#8B1A1A"
        strokeWidth="0.9"
        strokeOpacity="0.22"
      />
    </svg>
  );
}

/**
 * Minimal Kuthuvilakku (traditional Tamil brass oil lamp) near the heading.
 */
export function KuthuvilakkuIcon({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 36 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
      aria-hidden="true"
    >
      {/* Flame */}
      <path
        d="M18 3 C15.5 7 15.5 11 18 13 C20.5 11 20.5 7 18 3 Z"
        stroke="#F2B705"
        strokeWidth="1.2"
        fill="#F2B705"
        fillOpacity="0.35"
      />
      {/* Top finial & oil bowl */}
      <path d="M18 13 L18 17" stroke="#B8860B" strokeWidth="1.2" />
      <path
        d="M10 18 L26 18 L22 23 L14 23 Z"
        stroke="#B8860B"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Stem */}
      <path d="M18 23 L18 38" stroke="#B8860B" strokeWidth="1.3" />
      <circle cx="18" cy="29" r="1.8" stroke="#B8860B" strokeWidth="1" />
      {/* Base */}
      <path
        d="M12 42 C13 38.5 23 38.5 24 42 Z"
        stroke="#B8860B"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <line x1="10" y1="44" x2="26" y2="44" stroke="#B8860B" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Minimal gold Thaali (Thirumangalyam) on a turmeric thread (Manjal Kayiru).
 */
export function ThaaliIcon({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      role="img"
      aria-label="Sacred Thirumangalyam on turmeric thread"
    >
      {/* Turmeric thread (Manjal kayiru) */}
      <path
        d="M8 10 Q60 28 112 10"
        stroke="#F2B705"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M12 11.5 Q60 28.5 108 11.5"
        stroke="#B8860B"
        strokeWidth="0.7"
        strokeOpacity="0.55"
        strokeDasharray="3 2"
      />
      {/* Left & right gold beads */}
      <circle cx="48" cy="19.5" r="2.2" fill="#B8860B" />
      <circle cx="72" cy="19.5" r="2.2" fill="#B8860B" />
      {/* Central Thirumangalyam pendant */}
      <path
        d="M60 18 C55 21 53 27 56 32 C58 34.5 62 34.5 64 32 C67 27 65 21 60 18 Z"
        stroke="#B8860B"
        strokeWidth="1.5"
        fill="#F2B705"
        fillOpacity="0.25"
      />
      <circle cx="60" cy="26" r="1.8" fill="#8B1A1A" />
      <circle cx="60" cy="30" r="1.1" fill="#B8860B" />
    </svg>
  );
}

/**
 * Thanjavur / Madurai Gopuram thin-line silhouette at the bottom of the hero.
 */
export function GopuramSilhouette({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 360 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[340px] mx-auto block pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Kalasams at top */}
      <line x1="168" y1="6" x2="168" y2="14" stroke="#8B1A1A" strokeWidth="1.2" strokeOpacity="0.25" />
      <line x1="180" y1="4" x2="180" y2="14" stroke="#8B1A1A" strokeWidth="1.3" strokeOpacity="0.28" />
      <line x1="192" y1="6" x2="192" y2="14" stroke="#8B1A1A" strokeWidth="1.2" strokeOpacity="0.25" />
      {/* Barrel-vault roof (Sala Shikhara) */}
      <path
        d="M158 22 C162 12 198 12 202 22 Z"
        stroke="#8B1A1A"
        strokeWidth="1.1"
        strokeOpacity="0.24"
      />
      {/* Stepped Gopuram tiers */}
      <rect x="150" y="22" width="60" height="10" stroke="#8B1A1A" strokeWidth="1" strokeOpacity="0.22" />
      <rect x="140" y="32" width="80" height="12" stroke="#8B1A1A" strokeWidth="1" strokeOpacity="0.21" />
      <rect x="128" y="44" width="104" height="13" stroke="#8B1A1A" strokeWidth="1" strokeOpacity="0.2" />
      <rect x="116" y="57" width="128" height="15" stroke="#8B1A1A" strokeWidth="1" strokeOpacity="0.19" />
      <rect x="102" y="72" width="156" height="18" stroke="#8B1A1A" strokeWidth="1" strokeOpacity="0.18" />
      {/* Temple archway */}
      <path
        d="M168 104 L168 82 C168 75 192 75 192 82 L192 104"
        stroke="#8B1A1A"
        strokeWidth="1.1"
        strokeOpacity="0.24"
      />
      {/* Side mandapam walls */}
      <path
        d="M18 104 L18 88 L102 88 M258 88 L342 88 L342 104"
        stroke="#B8860B"
        strokeWidth="1"
        strokeOpacity="0.22"
      />
      <line x1="6" y1="104" x2="354" y2="104" stroke="#B8860B" strokeWidth="1" strokeOpacity="0.25" />
    </svg>
  );
}

/**
 * Pulli Kolam dot-and-loop divider between sections.
 */
export function PulliKolamDivider({ className = "" }: MotifProps) {
  return (
    <div
      className={`flex items-center justify-center gap-3 my-6 select-none ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 max-w-[90px] bg-[#B8860B]/30" />
      <svg
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-7 shrink-0"
      >
        {/* Pulli dots in diamond grid */}
        <circle cx="32" cy="6" r="1.4" fill="#B8860B" fillOpacity="0.7" />
        <circle cx="22" cy="16" r="1.4" fill="#B8860B" fillOpacity="0.7" />
        <circle cx="32" cy="16" r="1.6" fill="#8B1A1A" fillOpacity="0.65" />
        <circle cx="42" cy="16" r="1.4" fill="#B8860B" fillOpacity="0.7" />
        <circle cx="32" cy="26" r="1.4" fill="#B8860B" fillOpacity="0.7" />
        {/* Interlocking kolam curve */}
        <path
          d="M14 16 C14 8 24 8 32 16 C40 24 50 24 50 16 C50 8 40 8 32 16 C24 24 14 24 14 16 Z"
          stroke="#B8860B"
          strokeWidth="1"
          strokeOpacity="0.55"
        />
        <path
          d="M32 2 C39 9 39 23 32 30 C25 23 25 9 32 2 Z"
          stroke="#B8860B"
          strokeWidth="0.9"
          strokeOpacity="0.45"
        />
      </svg>
      <span className="h-px flex-1 max-w-[90px] bg-[#B8860B]/30" />
    </div>
  );
}

/**
 * Small Nadaswaram & Thavil icon beside the Events heading.
 */
export function NadaswaramThavilIcon({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-9 h-7 shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Nadaswaram */}
      <path
        d="M5 27 L22 9 L24 11 L8 29 Z"
        stroke="#B8860B"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M3 29 L7 25 L10 28 L6 32 Z"
        stroke="#8B1A1A"
        strokeWidth="1.1"
        fill="#F2B705"
        fillOpacity="0.2"
      />
      {/* Thavil drum */}
      <ellipse
        cx="31"
        cy="22"
        rx="8"
        ry="6.5"
        stroke="#8B1A1A"
        strokeWidth="1.2"
        fill="#FFF8EC"
      />
      <path
        d="M25 18 L27 26 M29 16.5 L31 27.5 M33 16.5 L35 27.5 M37 18 L36 25"
        stroke="#B8860B"
        strokeWidth="0.9"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

/**
 * Delicate Jasmine (Malli) garland line accent.
 */
export function JasmineGarlandLine({ className = "" }: MotifProps) {
  return (
    <div className={`w-full flex justify-center select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 240 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 h-4"
      >
        <path
          d="M12 6 Q120 18 228 6"
          stroke="#4E6B3A"
          strokeWidth="0.9"
          strokeOpacity="0.45"
        />
        {[30, 56, 82, 108, 132, 158, 184, 210].map((x, idx) => (
          <g key={x} transform={`translate(${x}, ${idx === 3 || idx === 4 ? 12 : idx === 2 || idx === 5 ? 11 : 9})`}>
            <circle cx="0" cy="0" r="2.6" fill="#FFF8EC" stroke="#B8860B" strokeWidth="0.8" strokeOpacity="0.6" />
            <circle cx="0" cy="0" r="0.9" fill="#4E6B3A" fillOpacity="0.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/**
 * Peacock-feather (Mayil) thin-line accent for the footer.
 */
export function MayilFeatherAccent({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-10 mx-auto select-none ${className}`}
      aria-hidden="true"
    >
      {/* Feather stem */}
      <path
        d="M24 44 Q24 30 24 14"
        stroke="#4E6B3A"
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      {/* Outer feather barbs */}
      <path
        d="M24 6 C14 8 11 19 16 28 C19 33 22 36 24 36 C26 36 29 33 32 28 C37 19 34 8 24 6 Z"
        stroke="#4E6B3A"
        strokeWidth="1.1"
        strokeOpacity="0.65"
        fill="#4E6B3A"
        fillOpacity="0.06"
      />
      {/* Inner eye */}
      <ellipse
        cx="24"
        cy="17"
        rx="5"
        ry="6.5"
        stroke="#B8860B"
        strokeWidth="1.1"
        strokeOpacity="0.75"
      />
      <ellipse
        cx="24"
        cy="17.5"
        rx="2.6"
        ry="3.4"
        stroke="#8B1A1A"
        strokeWidth="1.1"
        fill="#8B1A1A"
        fillOpacity="0.2"
      />
    </svg>
  );
}
