import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon, PlayIcon } from '../components/Icons.jsx'
import Avatar from '../components/Avatar.jsx'
import Tabs from '../components/Tabs.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { FoxHead } from '../components/FoxLogo.jsx'
import { myCommunities, communityProfile, currentUser } from '../data/mock.js'
import '../styles/shell.css'

// Perfil DENTRO DA COMUNIDADE: aqui sim existem background, moldura, música,
// status, nível/XP e títulos — tudo isso é específico de cada comunidade.
export default function CommunityProfile() {
  const navigate = useNavigate()
  const { id } = useParams()
  const community = myCommunities.find((c) => c.id === id) || myCommunities[0]
  const p = communityProfile
  const [tab, setTab] = useState('Posts')
  const xpPct = Math.round((p.xp / p.xpNext) * 100)

  return (
    <div className="screen">
      <div className="cprofile-banner" style={{ background: `linear-gradient(155deg, ${community.tint}, var(--brown-900))` }}>
        <button type="button" className="icon-btn" style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,.85)' }} aria-label="Voltar" onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </button>
        <span className="cprofile-status">{p.status}</span>
        <div className="cprofile-avatar-wrap">
          <Avatar name={currentUser.name} size={78} tint="#a8733f" ring />
        </div>
      </div>

      <div className="cprofile-body">
        <p style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--text-soft)' }}>{community.name}</p>
        <h1 className="cprofile-name">{currentUser.name}</h1>

        <div className="cprofile-titles">
          {p.titles.map((t) => <span key={t} className="cprofile-title-chip">{t}</span>)}
        </div>

        <div className="music-card">
          <span className="music-card__play"><PlayIcon width={13} height={13} /></span>
          <span className="music-card__info">{p.music.title} <span>{p.music.artist}</span></span>
        </div>

        <div className="cprofile-level">
          <span>Nível {p.level}</span>
          <span>{p.xp.toLocaleString('pt-BR')} / {p.xpNext.toLocaleString('pt-BR')} XP</span>
        </div>
        <div className="xp-bar"><span style={{ width: `${xpPct}%` }} /></div>

        <div className="cprofile-stats">
          <div><strong>{p.posts}</strong>Posts</div>
          <div><strong>{p.followers}</strong>Seguidores</div>
          <div><strong>{p.following}</strong>Seguindo</div>
        </div>

        <Tabs items={['Posts', 'Blogs', 'Wikis', 'Personagens', 'Sobre']} value={tab} onChange={setTab} />

        {tab === 'Sobre' ? (
          <p style={{ marginTop: 16, fontSize: '.9rem', lineHeight: 1.6 }}>{p.bio}</p>
        ) : (
          <div className="empty-state">
            <FoxHead size={64} />
            <p>Nada em {tab.toLowerCase()} ainda.</p>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  )
}
