import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, CameraIcon } from '../components/Icons.jsx'
import Button from '../components/Button.jsx'
import '../styles/shell.css'

const CATEGORIES = ['RPG', 'Fantasia', 'Anime', 'Mangá', 'Jogos', 'Arte', 'Livros', 'Séries', 'Música', 'Outros']

export default function CreateCommunity() {
  const navigate = useNavigate()
  const [privacy, setPrivacy] = useState('publica')

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: chamar a API de criação de comunidade
    navigate('/comunidades')
  }

  return (
    <div className="screen" style={{ paddingBottom: 32 }}>
      <div className="screen__inner">
        <div className="create-head">
          <button type="button" className="icon-btn" aria-label="Voltar" onClick={() => navigate(-1)}><ArrowLeftIcon /></button>
          <h1>Criar comunidade</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="avatar-upload">
            <button type="button" className="avatar-upload__circle" aria-label="Adicionar ícone da comunidade">
              <span className="avatar-upload__badge"><CameraIcon width={15} height={15} /></span>
            </button>
          </div>

          <div className="form-field">
            <label htmlFor="cname">Nome da comunidade</label>
            <input id="cname" placeholder="Ex: RPG & Fantasia" required />
          </div>
          <div className="form-field">
            <label htmlFor="cusername">Username</label>
            <input id="cusername" placeholder="ex: rpgfantasia" required />
          </div>
          <div className="form-field">
            <label htmlFor="cdesc">Descrição</label>
            <textarea id="cdesc" placeholder="Conte um pouco sobre sua comunidade..." />
          </div>
          <div className="form-field">
            <label htmlFor="ccat">Categoria</label>
            <select id="ccat" defaultValue={CATEGORIES[0]}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="form-field">
            <label>Privacidade</label>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="privacy" checked={privacy === 'publica'} onChange={() => setPrivacy('publica')} />
                <span><strong>Pública</strong><span className="hint">Qualquer pessoa pode entrar.</span></span>
              </label>
              <label className="radio-option">
                <input type="radio" name="privacy" checked={privacy === 'privada'} onChange={() => setPrivacy('privada')} />
                <span><strong>Privada</strong><span className="hint">É necessário solicitar ou receber convite.</span></span>
              </label>
            </div>
          </div>

          <Button type="submit" style={{ marginTop: 8 }}>Criar comunidade</Button>
        </form>
      </div>
    </div>
  )
}
