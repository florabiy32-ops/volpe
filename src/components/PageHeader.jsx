import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from './Icons.jsx'

/** Cabeçalho padrão de telas internas: seta de voltar + título + ação opcional à direita. */
export default function PageHeader({ title, onBack, action }) {
  const navigate = useNavigate()
  return (
    <header className="page-header">
      <button type="button" className="icon-btn" aria-label="Voltar" onClick={onBack || (() => navigate(-1))}>
        <ArrowLeftIcon />
      </button>
      <h1 className="page-header__title">{title}</h1>
      <div className="page-header__action">{action}</div>
    </header>
  )
}
