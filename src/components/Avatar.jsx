/** Avatar circular com iniciais/emoji, borda opcional e indicador online. */
export default function Avatar({ emoji, size = 48, ring = false, online = false, bg = 'var(--caramel-200)', style, className = '' }) {
  return (
    <span
      className={`avatar ${ring ? 'avatar--ring' : ''} ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.48, background: bg, ...style }}
    >
      {emoji}
      {online && <span className="avatar__dot" aria-label="Online" />}
    </span>
  )
}
