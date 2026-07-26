/**
 * Lovelace brand mark based on a viewfinder and accent dot.
 * Echoes the custom cursor: a studio that inspects before it builds.
 */
export function Mark({ size = 34, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="12.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="20" y1="2.5" x2="20" y2="8.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="20" y1="31.5" x2="20" y2="37.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="2.5" y1="20" x2="8.5" y2="20" stroke="currentColor" strokeWidth="1.4" />
      <line x1="31.5" y1="20" x2="37.5" y2="20" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="3.4" fill="var(--signal)" />
    </svg>
  );
}

export default function Logo({ compact = false, size = 30 }) {
  return (
    <span className="logo" aria-label="Lovelace">
      <Mark size={size} className="logo__mark" />
      {!compact && (
        <span className="logo__word">
          Lovelace
        </span>
      )}
    </span>
  );
}
