import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { Sparkle } from '../components/Decorations.jsx'
import { SearchIcon } from '../components/Icons.jsx'
import '../styles/interests.css'

const CATEGORIES = [
  { name: 'Anime', emoji: '🎌' },
  { name: 'Mangá', emoji: '📖' },
  { name: 'Jogos', emoji: '🎮' },
  { name: 'RPG', emoji: '🎲' },
  { name: 'Fantasia', emoji: '✨' },
  { name: 'K-pop', emoji: '🎤' },
  { name: 'Filmes e Séries', emoji: '🎬' },
  { name: 'Arte', emoji: '🎨' },
  { name: 'Música', emoji: '🎵' },
  { name: 'Livros', emoji: '📚' },
  { name: 'Tecnologia', emoji: '💻' },
  { name: 'Estudos', emoji: '🎓' },
  { name: 'Auto-cuidado', emoji: '🧘' },
  { name: 'Outros', emoji: '➕' },
]
const MAX = 5
const normalize = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default function Interests() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState([])
  const [query, setQuery] = useState('')
  const full = selected.length >= MAX

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return q ? CATEGORIES.filter((c) => normalize(c.name).includes(q)) : CATEGORIES
  }, [query])

  const toggle = (name) =>
    setSelected((s) => (s.includes(name) ? s.filter((x) => x !== name) : s.length < MAX ? [...s, name] : s))

  function handleContinue() {
    // Só ajuda a recomendar comunidades — não cria feed global.
    localStorage.setItem('volpe:interests', JSON.stringify(selected))
    navigate('/inicio')
  }

  return (
    <div className="interests">
      <header className="interests__inner" style={{ minHeight: 'auto', paddingBottom: 0 }}>
        <div className="interests__head">
          <Sparkle style={{ width: 16, height: 16 }} />
          <h1 className="interests__title">Quais são os seus interesses?</h1>
          <p className="interests__sub">Escolha algumas opções para encontrar comunidades que combinam com você!</p>
        </div>

        <div className="search-bar">
          <div className="field__box">
            <SearchIcon />
            <input
              className="field__input"
              placeholder="Buscar interesses..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar interesses"
            />
          </div>
        </div>
      </header>

      <div className="interests__inner" style={{ paddingTop: 0 }}>
        <p className="sr-only" aria-live="polite">{selected.length} de {MAX} interesses selecionados</p>

        <div className="interests__grid" role="group" aria-label="Interesses">
          {filtered.map(({ name, emoji }) => {
            const on = selected.includes(name)
            return (
              <button key={name} type="button" className="chip" aria-pressed={on} disabled={full && !on} onClick={() => toggle(name)}>
                <span className="chip__emoji" aria-hidden="true">{emoji}</span>
                {name}
              </button>
            )
          })}
          {filtered.length === 0 && <p className="interests__empty">Nada encontrado para "{query}".</p>}
        </div>

        <div className="interests__footer">
          <Button onClick={handleContinue} disabled={selected.length === 0}>Continuar</Button>
        </div>
      </div>
    </div>
  )
}
