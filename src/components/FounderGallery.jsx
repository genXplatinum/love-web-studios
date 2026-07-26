import { useState } from 'react';
import Reveal from './Reveal';
import { founderGallery } from '../data/site';
import './FounderGallery.css';

function Tile({ src, caption }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <figure className="fgal__fig" data-cursor>
      <img
        src={import.meta.env.BASE_URL + src}
        alt={caption}
        loading="lazy"
        onError={() => setOk(false)}
      />
      <figcaption className="fgal__cap mono">{caption}</figcaption>
    </figure>
  );
}

/** Masonry gallery of the founder in meetings and at events. */
export default function FounderGallery() {
  if (!founderGallery?.length) return null;
  return (
    <div className="fgal">
      {founderGallery.map((g, i) => (
        <Reveal key={g.src} className="fgal__item" variant="fade" delay={(i % 3) * 70}>
          <Tile {...g} />
        </Reveal>
      ))}
    </div>
  );
}
