import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '../components/Icons.jsx'
import Button from '../components/Button.jsx'
import { contentTypes } from '../data/mock.js'
import '../styles/shell.css'

export default function CreateContent() {
  const navigate = useNavigate()
  return (
    <div className="screen" style={{ paddingBottom: 32 }}>
      <div className="screen__inner">
        <div className="create-head">
          <button type="button" className="icon-btn" aria-label="Voltar" onClick={() => navigate(-1)}><ArrowLeftIcon /></button>
          <h1>Criar conteúdo</h1>
        </div>
        <p style={{ color: 'var(--text-soft)', fontWeight: 600, fontSize: '.88rem', marginTop: 10 }}>
          O que você quer publicar? Todo conteúdo pertence a uma comunidade.
        </p>

        <div className="type-grid">
          {contentTypes.map((t) => (
            <button key={t.id} type="button" className="type-card">
              <span className="type-card__emoji">{t.emoji}</span>
              <span className="type-card__label">{t.label}</span>
              <span className="type-card__hint">{t.hint}</span>
            </button>
          ))}
        </div>

        <Button variant="soft" onClick={() => navigate('/comunidades/criar')}>Criar uma comunidade</Button>
        <div style={{ height: 10 }} />
        <Button variant="soft" onClick={() => navigate(-1)}>Cancelar</Button>
      </div>
    </div>
  )
}
