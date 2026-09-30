import { Link } from 'react-router-dom'
import { ChevronRightIcon } from './Icons.jsx'

export default function SectionHeader({ title, to, linkLabel = 'Ver mais' }) {
  return (
    <div className="section-head">
      <h2 className="section-head__title">{title}</h2>
      {to && (
        <Link className="section-head__link" to={to}>
          {linkLabel} <ChevronRightIcon width={16} height={16} />
        </Link>
      )}
    </div>
  )
}
