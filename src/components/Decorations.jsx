import cloud1 from '../assets/img/cloud-1.png'
import cloud2 from '../assets/img/cloud-2.png'

/** "+" decorativo, no estilo do mockup. */
export function Sparkle({ className = '', style }) {
  return (
    <svg className={`spark ${className}`} style={style} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c0.9 6 3 8.1 9 9-6 0.9-8.1 3-9 9-0.9-6-3-8.1-9-9 6-0.9 8.1-3 9-9Z" fill="currentColor" />
    </svg>
  )
}

/** Nuvens do topo — usa os PNGs fornecidos, flutuando levemente. */
export function CloudBand({ variant = 1 }) {
  return (
    <div className="cloud-band" aria-hidden="true">
      <img src={variant === 1 ? cloud1 : cloud2} alt="" />
    </div>
  )
}

/** Folhinha simples, usada para ladear a raposinha no rodapé. */
export function Leaf({ flip = false, style }) {
  return (
    <svg className="leaf" style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }} width="46" height="70" viewBox="0 0 46 70" aria-hidden="true">
      <path d="M23 2C10 14 4 30 8 46c3 12 10 19 15 22 5-3 12-10 15-22 4-16-2-32-15-44Z" fill="currentColor" />
      <path d="M23 8v56" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    </svg>
  )
}
