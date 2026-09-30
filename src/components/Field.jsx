import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from './Icons.jsx'

/** Campo com ícone à esquerda; se type="password", ganha botão mostrar/ocultar. */
export default function Field({ icon: Icon, type = 'text', error, id, ...props }) {
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <div className="field__box">
        {Icon && <Icon />}
        <input
          id={id}
          className="field__input"
          type={isPassword && visible ? 'text' : type}
          aria-invalid={!!error}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className="field__toggle"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      {error && <span className="field__msg" role="alert">{error}</span>}
    </div>
  )
}
