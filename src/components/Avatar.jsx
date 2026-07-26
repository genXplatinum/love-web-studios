import { useState } from 'react';
import './Avatar.css';

/**
 * Founder portrait with a simple monogram fallback.
 * Pass `photo` (e.g. '/founder.jpg' from the public folder). If the file is
 * missing or fails to load, it falls back to the "LS" monogram automatically.
 */
export default function Avatar({ initials = 'LS', label = 'founder', photo, size = 'lg' }) {
  const [showPhoto, setShowPhoto] = useState(Boolean(photo));

  return (
    <div className={`avatar avatar--${size}`} data-cursor>
      <span className="avatar__corner avatar__corner--tl" />
      <span className="avatar__corner avatar__corner--tr" />
      <span className="avatar__corner avatar__corner--bl" />
      <span className="avatar__corner avatar__corner--br" />
      <div className={`avatar__frame ${showPhoto ? 'has-photo' : ''}`}>
        {showPhoto && (
          <img
            src={photo}
            alt="Lovepreet Singh"
            className="avatar__img"
            onError={() => setShowPhoto(false)}
          />
        )}
        <span className={`avatar__tag mono ${showPhoto ? 'on-photo' : ''}`}>{`// ${label}`}</span>
        {!showPhoto && <span className="avatar__initials">{initials}</span>}
        {!showPhoto && <span className="avatar__swap mono">Founder portrait placeholder</span>}
      </div>
    </div>
  );
}
