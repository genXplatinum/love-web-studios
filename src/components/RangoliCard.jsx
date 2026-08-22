import './RangoliCard.css';

/* ============================================================
   Purani Dhun — the showcase card.

   Every other project on this page is shown as a piece of
   typography. Purani Dhun cannot be: the site has no photographs
   in it at all, and the thing it actually makes is a drawing. So
   the card draws one.

   This is a port of puranidhun.in's own rangoli engine, not an
   impression of it. A record's video id seeds a deterministic
   generator; the seed decides the fold (how many times the motif
   repeats around the circle), how many rings there are, which
   motif sits on each, the stroke weights, the phases and which
   way each ring turns. The room supplies the pigments.

   Same seed, same figure, every render — so this card carries a
   real record from the catalogue, drawn the way the live site
   draws it, in the Saloon Classics triad: peacock, turmeric,
   vermilion.
   ============================================================ */

const C = 500;                 // centre of the 1000 x 1000 viewBox
const TAU = Math.PI * 2;
const OUTER_R = 400;

/* Saloon Classics — peacock, haldi, sindoor. The room the live site
   opens on, and the triad its link-preview card is drawn in. */
const PIGMENTS = ['#00887c', '#f2b01e', '#e03e3e'];

/* The record this card draws: "Mere Desh Ki Dharti", Mahendra Kapoor,
   Upkar, 1967 — keyed by its video id, the way the catalogue keys it.
   Feed the same id to the live site and it draws this same figure. */
const SEED = 'jwlyMhykshM';

/* How far through the song the progress ring has run. Fixed here:
   nothing is playing on a showcase card. */
const PROGRESS = 0.62;
const TRACK_R = 468;
const TRACK_LEN = TAU * TRACK_R;

/* ---------- a small deterministic generator ----------
   mulberry32: same seed in, same rangoli out, every time. */
function seedFrom(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed) {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
const between = (r, lo, hi) => lo + r() * (hi - lo);
const at = (ang, rad) => [C + Math.cos(ang) * rad, C + Math.sin(ang) * rad];
const f1 = (v) => Number(v.toFixed(1));
const place = (a, rad, deg) => `translate(${at(a, rad).map(f1).join(',')}) rotate(${f1(deg)})`;

/* ---------- the motifs ----------
   Each returns one ring: a motif repeated n times around the circle
   at radius r. A rangoli is made of very few marks, repeated exactly. */
const MOTIF = {
  /* the dot grid a rangoli is laid out on */
  dots: (n, r, o) =>
    Array.from({ length: n }, (_, i) => {
      const [x, y] = at((i / n) * TAU + o.phase, r);
      return <circle key={i} cx={f1(x)} cy={f1(y)} r={f1(o.w * 1.6)} fill={o.color} />;
    }),

  /* the lotus petal — two arcs meeting at a point */
  petal: (n, r, o) => {
    const len = r * between(o.r, 0.3, 0.46);
    const wide = len * between(o.r, 0.34, 0.62);
    return Array.from({ length: n }, (_, i) => {
      const a = (i / n) * TAU + o.phase;
      const d =
        `M0 0 C ${f1(-wide)} ${f1(-len * 0.55)} ${f1(-wide * 0.5)} ${f1(-len)} 0 ${f1(-len)}` +
        ` C ${f1(wide * 0.5)} ${f1(-len)} ${f1(wide)} ${f1(-len * 0.55)} 0 0 Z`;
      return (
        <path
          key={i}
          d={d}
          transform={place(a, r - len * 0.1, (a * 180) / Math.PI + 90)}
          fill={o.fill}
          stroke={o.color}
          strokeWidth={o.w}
          strokeLinejoin="round"
        />
      );
    });
  },

  /* teardrops pointing outward */
  drop: (n, r, o) => {
    const len = r * between(o.r, 0.18, 0.3);
    return Array.from({ length: n }, (_, i) => {
      const a = (i / n) * TAU + o.phase;
      const d =
        `M0 ${f1(-len)} Q ${f1(len * 0.62)} 0 0 ${f1(len * 0.5)}` +
        ` Q ${f1(-len * 0.62)} 0 0 ${f1(-len)} Z`;
      return (
        <path
          key={i}
          d={d}
          transform={place(a, r, (a * 180) / Math.PI + 90)}
          fill={o.fill}
          stroke={o.color}
          strokeWidth={o.w}
        />
      );
    });
  },

  /* scalloped arcs — the looping line a kolam is really made of */
  scallop: (n, r, o) => {
    const step = TAU / n;
    let d = '';
    for (let i = 0; i < n; i += 1) {
      const a0 = i * step + o.phase;
      const [x0, y0] = at(a0, r);
      const [x1, y1] = at(a0 + step, r);
      const [mx, my] = at(a0 + step / 2, r * between(o.r, 1.12, 1.3));
      d += `${i ? '' : `M${f1(x0)} ${f1(y0)}`} Q ${f1(mx)} ${f1(my)} ${f1(x1)} ${f1(y1)} `;
    }
    return (
      <path
        key="scallop"
        d={`${d}Z`}
        fill={o.fill}
        stroke={o.color}
        strokeWidth={o.w}
        strokeLinejoin="round"
      />
    );
  },

  /* diamonds standing on their points */
  diamond: (n, r, o) => {
    const h = r * between(o.r, 0.13, 0.22);
    return Array.from({ length: n }, (_, i) => {
      const a = (i / n) * TAU + o.phase;
      return (
        <rect
          key={i}
          x={f1(-h / 2)}
          y={f1(-h / 2)}
          width={f1(h)}
          height={f1(h)}
          transform={place(a, r, (a * 180) / Math.PI + 45)}
          fill={o.fill}
          stroke={o.color}
          strokeWidth={o.w}
        />
      );
    });
  },

  /* radial ticks, like the rays around a sun motif */
  ray: (n, r, o) => {
    const len = r * between(o.r, 0.1, 0.2);
    return Array.from({ length: n }, (_, i) => {
      const a = (i / n) * TAU + o.phase;
      const [x0, y0] = at(a, r - len / 2);
      const [x1, y1] = at(a, r + len / 2);
      return (
        <line
          key={i}
          x1={f1(x0)}
          y1={f1(y0)}
          x2={f1(x1)}
          y2={f1(y1)}
          stroke={o.color}
          strokeWidth={f1(o.w * 1.7)}
          strokeLinecap="round"
        />
      );
    });
  },

  /* a plain circle — the pause between two busy rings */
  band: (n, r, o) => (
    <circle
      key="band"
      cx={C}
      cy={C}
      r={f1(r)}
      fill="none"
      stroke={o.color}
      strokeWidth={f1(o.w * 1.3)}
      strokeDasharray={o.dashed ? `${f1(r * 0.08)} ${f1(r * 0.05)}` : undefined}
    />
  ),

  /* interlocking chevrons */
  chevron: (n, r, o) => {
    const h = r * between(o.r, 0.12, 0.2);
    return Array.from({ length: n }, (_, i) => {
      const a = (i / n) * TAU + o.phase;
      return (
        <path
          key={i}
          d={`M${f1(-h)} ${f1(h * 0.6)} L 0 ${f1(-h * 0.6)} L ${f1(h)} ${f1(h * 0.6)}`}
          transform={place(a, r, (a * 180) / Math.PI + 90)}
          fill="none"
          stroke={o.color}
          strokeWidth={f1(o.w * 1.5)}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    });
  },
};

const OUTER = ['scallop', 'petal', 'drop', 'chevron'];
const MID = ['petal', 'diamond', 'drop', 'dots', 'chevron'];
const INNER = ['dots', 'ray', 'diamond', 'band'];

/* ---------- compose one rangoli ---------- */
function build(key, pigments) {
  const r = rng(seedFrom(key));
  const fold = pick(r, [6, 8, 8, 10, 12, 12, 16]);
  const ringCount = 4 + Math.floor(r() * 2);           // four or five

  const rings = [];
  for (let i = 0; i < ringCount; i += 1) {
    const t = i / (ringCount - 1);                     // 0 inner ... 1 outer
    const radius = OUTER_R * (0.2 + 0.8 * t);
    const pool = t > 0.72 ? OUTER : t > 0.34 ? MID : INNER;
    const name = pick(r, pool);
    const color = pigments[Math.floor(r() * pigments.length)];
    const solid = r() > 0.55;
    /* the fold doubles on the outer rings, the way real rangolis crowd outward */
    const n = t > 0.6 ? fold * (r() > 0.5 ? 2 : 1) : fold;

    rings.push({
      key: `${name}-${i}`,
      reverse: i % 2 === 1,
      spin: 26 + i * 9,
      body: MOTIF[name](Math.max(3, Math.round(n)), radius, {
        color,
        fill: solid ? color : 'none',
        w: between(r, 3, 7),
        phase: r() * TAU,
        dashed: r() > 0.6,
        r,
      }),
    });
  }

  return rings;
}

/* Drawn once, at module scope: the figure is deterministic, so there
   is nothing for a re-render to recompute. */
const RINGS = build(SEED, PIGMENTS);

function Key({ children, wide = false }) {
  return (
    <span className={`rangoli-card__key${wide ? ' rangoli-card__key--wide' : ''}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
    </span>
  );
}

export default function RangoliCard() {
  return (
    <div className="rangoli-card" aria-hidden="true">
      <div className="rangoli-card__figure">
        <svg viewBox="0 0 1000 1000" className="rangoli-card__svg">
          {RINGS.map((ring) => (
            <g
              key={ring.key}
              className={`rg-ring${ring.reverse ? ' rg-ring--rev' : ''}`}
              style={{ '--spin': `${ring.spin}s` }}
            >
              {ring.body}
            </g>
          ))}

          {/* the bindu: the dot every rangoli starts from, and a record's spindle */}
          <g>
            <circle cx={C} cy={C} r="34" fill={PIGMENTS[0]} opacity=".12" />
            <circle cx={C} cy={C} r="15" fill={PIGMENTS[0]} />
            <circle cx={C} cy={C} r="4.5" fill="var(--pd-board)" />
          </g>

          {/* the circle around the outside is how far through you are */}
          <circle className="rangoli-card__track" cx={C} cy={C} r={TRACK_R} />
          <circle
            className="rangoli-card__progress"
            cx={C}
            cy={C}
            r={TRACK_R}
            strokeDasharray={f1(TRACK_LEN)}
            strokeDashoffset={f1(TRACK_LEN * (1 - PROGRESS))}
          />
        </svg>
      </div>

      <div className="rangoli-card__plate">
        <span className="rangoli-card__deva">पुरानी धुन</span>
        <span className="rangoli-card__latin">Purani Dhun</span>

        <div className="rangoli-card__deck">
          {/* keys, never pills: each stands on a lip and travels downward
              when pressed, the way a cassette deck key does */}
          <span className="rangoli-card__keys">
            <Key><path d="M18 5v14L8 12zM7 5v14" /></Key>
            <Key wide><path d="M8 5l12 7-12 7z" /></Key>
            <Key><path d="M6 5v14l10-7zM17 5v14" /></Key>
          </span>
          {/* the second clause goes on a phone, where it otherwise wraps
              mid-phrase — the live site drops the same kind of tail */}
          <span className="rangoli-card__legend">
            Saloon Classics<span className="rangoli-card__legend-tail"> · 369 records</span>
          </span>
        </div>
      </div>
    </div>
  );
}
