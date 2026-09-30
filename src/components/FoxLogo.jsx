import foxHead from '../assets/img/fox-head.png'
import wordmark from '../assets/img/fox-head-wordmark.png'

/** Só a cabecinha da raposa (ícone). */
export function FoxHead({ size = 40, className = '', ...props }) {
  return <img src={foxHead} width={size} height={size} alt="" className={className} {...props} />
}

/** Cabecinha + "Volpe" escrito — o logo completo do app. */
export default function FoxLogo({ width = 140, className = '', ...props }) {
  return <img src={wordmark} width={width} alt="Volpe" className={className} {...props} />
}
