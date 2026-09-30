import { NavLink } from 'react-router-dom'
import { HomeIcon, CommunitiesIcon, PlusIcon, BellIcon, UserIcon } from './Icons.jsx'

const ITEMS = [
  { to: '/inicio', label: 'Início', Icon: HomeIcon },
  { to: '/comunidades', label: 'Comunidades', Icon: CommunitiesIcon },
]
const ITEMS_RIGHT = [
  { to: '/notificacoes', label: 'Notificações', Icon: BellIcon },
  { to: '/perfil', label: 'Perfil', Icon: UserIcon },
]

/** Barra de navegação global (seção 03 do manual) — o botão + é central e maior. */
export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegação principal">
      {ITEMS.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => `bottom-nav__item ${isActive ? 'is-active' : ''}`}>
          <Icon width={22} height={22} />
          <span>{label}</span>
        </NavLink>
      ))}

      <NavLink to="/criar" className="bottom-nav__fab" aria-label="Criar">
        <PlusIcon width={24} height={24} />
      </NavLink>

      {ITEMS_RIGHT.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => `bottom-nav__item ${isActive ? 'is-active' : ''}`}>
          <Icon width={22} height={22} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
