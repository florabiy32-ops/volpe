import { useMemo, useState } from 'react'
import { SearchIcon } from '../components/Icons.jsx'
import BottomNav from '../components/BottomNav.jsx'
import CommunityCard from '../components/CommunityCard.jsx'
import { communityFilters, communityCategories, exploreCommunities, myCommunities } from '../data/mock.js'
import '../styles/shell.css'

const ALL = [...myCommunities.map((c) => ({ ...c, privacy: 'Público' })), ...exploreCommunities]

export default function Communities() {
  const [filter, setFilter] = useState('Todas')
  const [category, setCategory] = useState(null)
  const [query, setQuery] = useState('')

  const list = useMemo(() => {
    let items = ALL
    if (filter === 'Minhas') items = myCommunities.map((c) => ({ ...c, privacy: 'Público' }))
    if (category) items = items.filter((c) => c.category.toLowerCase().includes(category.toLowerCase()))
    if (query.trim()) items = items.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase()))
    return items
  }, [filter, category, query])

  return (
    <div className="screen">
      <div className="screen__inner">
        <div className="page-head">
          <h1 className="page-head__title">Comunidades</h1>
        </div>

        <div className="page-search">
          <div className="field__box">
            <SearchIcon />
            <input className="field__input" placeholder="Pesquisar comunidades..." value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Pesquisar comunidades" />
          </div>
        </div>

        <div className="filter-row">
          {communityFilters.map((f) => (
            <button key={f} type="button" className={`filter-chip ${filter === f ? 'is-active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>

        <div className="filter-row filter-row--tight">
          {communityCategories.map((c) => (
            <button key={c} type="button" className={`filter-chip ${category === c ? 'is-active' : ''}`} onClick={() => setCategory(category === c ? null : c)}>{c}</button>
          ))}
        </div>

        {list.map((c) => <CommunityCard key={c.id} community={c} variant="row" />)}
        {list.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-faint)', fontWeight: 600, padding: '32px 0' }}>Nenhuma comunidade encontrada.</p>}
      </div>
      <BottomNav />
    </div>
  )
}
