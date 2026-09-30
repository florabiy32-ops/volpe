import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import Field from '../components/Field.jsx'
import Button from '../components/Button.jsx'
import { UserIcon, MailIcon, LockIcon } from '../components/Icons.jsx'
import { signIn } from '../utils/auth.js'
import { validateUsername, isPasswordValid, isEmail } from '../utils/validators.js'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' })
  const [touched, setTouched] = useState({})

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const blur = (key) => () => setTouched((t) => ({ ...t, [key]: true }))

  const errors = {
    username: validateUsername(form.username),
    email: isEmail(form.email) ? '' : 'Informe um e-mail válido.',
    password: isPasswordValid(form.password) ? '' : 'Mín. 8 caracteres, com letra maiúscula, número e símbolo.',
    confirm: form.confirm === form.password && form.confirm ? '' : 'As senhas não coincidem.',
  }
  const valid = !errors.username && !errors.email && !errors.password && !errors.confirm
  const show = (key) => (touched[key] ? errors[key] : '')

  function handleSubmit(e) {
    e.preventDefault()
    if (!valid) {
      setTouched({ username: true, email: true, password: true, confirm: true })
      return
    }
    // TODO: chamar a API de cadastro
    signIn({ username: form.username, email: form.email })
    navigate('/interesses')
  }

  return (
    <AuthLayout back>
      <div className="auth__head" style={{ textAlign: 'left' }}>
        <h2 className="auth__title">Criar conta</h2>
      </div>

      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <Field icon={UserIcon} placeholder="Nome de usuário" autoComplete="username" autoCapitalize="none" value={form.username} onChange={set('username')} onBlur={blur('username')} error={show('username')} aria-label="Nome de usuário" />
        <Field icon={MailIcon} type="email" placeholder="E-mail" autoComplete="email" value={form.email} onChange={set('email')} onBlur={blur('email')} error={show('email')} aria-label="E-mail" />
        <Field icon={LockIcon} type="password" placeholder="Senha" autoComplete="new-password" value={form.password} onChange={set('password')} onBlur={blur('password')} error={show('password')} aria-label="Senha" />
        <Field icon={LockIcon} type="password" placeholder="Confirmar senha" autoComplete="new-password" value={form.confirm} onChange={set('confirm')} onBlur={blur('confirm')} error={show('confirm')} aria-label="Confirmar senha" />

        <Button type="submit" style={{ marginTop: 8 }}>Criar conta</Button>
        <p className="auth__link-row">
          Já tem uma conta? <Link className="link" to="/login">Entrar</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
