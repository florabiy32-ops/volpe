// Usernames já usados (simulação — trocar por checagem no backend)
export const TAKEN_USERNAMES = ['luna_fox', 'volpe', 'admin']

export function validateUsername(value) {
  if (!value) return 'Escolha um username.'
  if (/\s/.test(value)) return 'O username não pode ter espaços.'
  if (!/^[A-Za-z0-9_]+$/.test(value)) return 'Use apenas letras, números e _.'
  if (value.length < 3) return 'Use pelo menos 3 caracteres.'
  if (TAKEN_USERNAMES.includes(value.toLowerCase())) return 'Esse username já está em uso.'
  return ''
}

export const PASSWORD_RULES = [
  { id: 'len', label: 'Mínimo de 8 caracteres', test: (v) => v.length >= 8 },
  { id: 'case', label: 'Letra maiúscula e minúscula', test: (v) => /[a-z]/.test(v) && /[A-Z]/.test(v) },
  { id: 'num', label: 'Pelo menos um número', test: (v) => /\d/.test(v) },
  { id: 'special', label: 'Pelo menos um caractere especial', test: (v) => /[^A-Za-z0-9\s]/.test(v) },
  { id: 'space', label: 'Sem espaços', test: (v) => v.length > 0 && !/\s/.test(v) },
]

export const isPasswordValid = (v) => PASSWORD_RULES.every((r) => r.test(v))
export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
