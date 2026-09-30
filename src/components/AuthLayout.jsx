import { useNavigate } from 'react-router-dom'
import FoxLogo from './FoxLogo.jsx'
import { Sparkle } from './Decorations.jsx'
import { ArrowLeftIcon } from './Icons.jsx'

/**
 * Casco comum das telas de autenticação.
 * showLogo: exibe o logo Volpe centralizado (Login).
 * back: exibe seta de voltar no topo (Criar conta).
 */
export default function AuthLayout({ children, showLogo = false, back = false, sparkles = true }) {
  const navigate = useNavigate()

  return (
    <div className="auth">
      {sparkles && (
        <>
          <Sparkle className="splash__spark" style={{ position: 'absolute', top: '6%', left: '8%' }} />
          <Sparkle className="splash__spark" style={{ position: 'absolute', top: '9%', right: '10%', width: 14, height: 14 }} />
        </>
      )}

      <main className="auth__main">
        {back && (
          <button type="button" className="icon-btn auth__back" aria-label="Voltar" onClick={() => navigate(-1)}>
            <ArrowLeftIcon />
          </button>
        )}

        {showLogo && (
          <div className="auth__brand">
            <FoxLogo width={128} />
          </div>
        )}

        {children}
      </main>
    </div>
  )
}
