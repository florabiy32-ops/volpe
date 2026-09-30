import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import Field from '../components/Field.jsx'
import Checkbox from '../components/Checkbox.jsx'
import Button from '../components/Button.jsx'
import { Leaf } from '../components/Decorations.jsx'
import { UserIcon, LockIcon } from '../components/Icons.jsx'
import { signIn } from '../utils/auth.js'
import foxSitting from '../assets/img/fox-sitting.png'

export default function Login() {
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!login.trim() || !password) {
      setError('Preencha usuário/e-mail e senha.')
      return
    }
    setError('')
    // TODO: chamar a API de login
    signIn({ login: login.trim() }, remember)
    navigate('/inicio')
  }

  return (
    <AuthLayout showLogo>
      <div className="auth__head">
        <h2 className="auth__title">Bem-vindo de volta!</h2>
        <p className="auth__sub">Entre na sua conta para continuar.</p>
      </div>

      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <Field icon={UserIcon} placeholder="Usuário ou e-mail" autoComplete="username" value={login} onChange={(e) => setLogin(e.target.value)} aria-label="Usuário ou e-mail" />
        <Field icon={LockIcon} type="password" placeholder="Senha" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Senha" error={error} />

        <div className="auth__row">
          <Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)}>Lembrar de mim</Checkbox>
          <Link className="link" to="/esqueci-senha">Esqueceu a senha?</Link>
        </div>

        <Button type="submit">Entrar</Button>
        <div className="auth__or">ou</div>
        <Button type="button" variant="soft" onClick={() => navigate('/cadastro')}>Criar uma conta</Button>
      </form>

      <div className="auth__foot-space" />
      <div className="fox-peek">
        <Leaf style={{ width: 28 }} />
        <img src={foxSitting} alt="" />
        <Leaf flip style={{ width: 28 }} />
      </div>
    </AuthLayout>
  )
}
