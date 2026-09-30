// Sessão simulada. Trocar pela autenticação real quando houver backend.
const KEY = 'volpe:session'

export const isAuthenticated = () => !!(localStorage.getItem(KEY) || sessionStorage.getItem(KEY))

export function signIn(user, remember = true) {
  const store = remember ? localStorage : sessionStorage
  store.setItem(KEY, JSON.stringify(user))
}

export function signOut() {
  localStorage.removeItem(KEY)
  sessionStorage.removeItem(KEY)
}

export function getUser() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || sessionStorage.getItem(KEY))
  } catch {
    return null
  }
}
