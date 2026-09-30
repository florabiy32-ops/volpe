import { useNavigate } from 'react-router-dom'
import FoxLogo from './FoxLogo.jsx'
import { SearchIcon, BellIcon } from './Icons.jsx'

/** Cabeçalho global: logo Volpe + pesquisa + notificações (com pontinho de não lido). */
export default function TopBar({ unread = false }) {
  const navigate = useNavigate()
  return (
    <header className="topbar">
      <FoxLogo width={104} />
      <div className="topbar__actions">
        <button type="button" className="icon-btn" aria-label="Pesquisar" onClick={() => navigate('/comunidades')}>
          <SearchIcon />
        </button>
        <button type="button" className="icon-btn topbar__bell" aria-label="Notificações" onClick={() => navigate('/notificacoes')}>
          <BellIcon />
          {unread && <span className="topbar__dot" />}
        </button>
      </div>
    </header>
  )
}
