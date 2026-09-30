/** Selo pequeno — categoria, público/privado, título etc. */
export default function Badge({ children, tone = 'default', icon: Icon, className = '' }) {
  return (
    <span className={`badge badge--${tone} ${className}`}>
      {Icon && <Icon width={13} height={13} />}
      {children}
    </span>
  )
}
