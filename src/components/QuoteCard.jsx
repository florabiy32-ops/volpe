import foxSitting from '../assets/img/fox-sitting.png'

/** Card de destaque da Home, com uma frase inspiradora e paisagem ilustrada em SVG. */
export default function QuoteCard({ quote }) {
  return (
    <div className="quote-card">
      <svg className="quote-card__scene" viewBox="0 0 400 180" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <path d="M0 140 L70 70 L130 120 L190 40 L260 130 L320 80 L400 140 V180 H0Z" fill="rgba(0,0,0,.18)" />
        <path d="M0 160 L90 100 L160 150 L230 90 L300 155 L400 110 V180 H0Z" fill="rgba(0,0,0,.28)" />
        <circle cx="330" cy="42" r="20" fill="rgba(255,247,235,.5)" />
      </svg>
      <img className="quote-card__fox" src={foxSitting} alt="" />
      <p className="quote-card__text">&ldquo;{quote}&rdquo;</p>
    </div>
  )
}
