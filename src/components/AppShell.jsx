import BottomNav from './BottomNav.jsx'

/** Casco das telas raiz da navegação global: conteúdo rolável + barra inferior fixa. */
export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <div className="app-shell__content">{children}</div>
      <BottomNav />
    </div>
  )
}
