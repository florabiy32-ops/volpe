import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, CameraIcon } from '../components/Icons.jsx'
import Avatar from '../components/Avatar.jsx'
import Button from '../components/Button.jsx'
import { currentUser } from '../data/mock.js'
import '../styles/shell.css'

export default function EditProfileGlobal() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: currentUser.name, username: currentUser.username, bio: currentUser.bio })

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: chamar a API de atualização de perfil
    navigate('/perfil')
  }

  return (
    <div className="screen" style={{ paddingBottom: 32 }}>
      <div className="screen__inner">
        <div className="create-head">
          <button type="button" className="icon-btn" aria-label="Voltar" onClick={() => navigate(-1)}><ArrowLeftIcon /></button>
          <h1>Editar perfil</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="avatar-upload">
            <button type="button" className="avatar-upload__circle" aria-label="Alterar foto" style={{ border: 'none' }}>
              <Avatar name={form.name} size={88} tint="#a8733f" />
              <span className="avatar-upload__badge"><CameraIcon width={15} height={15} /></span>
            </button>
          </div>

          <div className="form-field">
            <label htmlFor="name">Nome</label>
            <input id="name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          </div>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input id="username" value={form.username} onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))} />
          </div>
          <div className="form-field">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} />
          </div>

          <Button type="submit" style={{ marginTop: 8 }}>Salvar alterações</Button>
        </form>
      </div>
    </div>
  )
}
