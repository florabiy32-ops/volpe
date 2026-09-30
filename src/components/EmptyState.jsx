import { FoxHead } from './FoxLogo.jsx'

/** Estado vazio padrão (seção 86 do manual): raposinha + mensagem curta. */
export default function EmptyState({ message = 'Você ainda não salvou nada.' }) {
  return (
    <div className="empty-state">
      <FoxHead size={40} style={{ opacity: 0.5 }} />
      <p>{message}</p>
    </div>
  )
}
