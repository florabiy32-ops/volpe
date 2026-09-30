import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar.jsx'
import Tabs from '../components/Tabs.jsx'
import Button from '../components/Button.jsx'
import BottomNav from '../components/BottomNav.jsx'
import CommunityCard from '../components/CommunityCard.jsx'
import { currentUser, myCommunities } from '../data/mock.js'
import '../styles/shell.css'

// Perfil GLOBAL: identidade simples. Sem XP, título, música, moldura ou background —
// esses elementos pertencem apenas ao perfil dentro de cada comunidade.
export default function ProfileGlobal() {
  const [tab, setTab] = useState('Comunidades')

  return (
    <div className="screen">
      <div className="screen__inner">
        <div className="gprofile-head">
          <Avatar name={currentUser.name} size={92} tint="#a8733f" />
          <h1>{currentUser.name}</h1>
          <p className="username">@{currentUser.username}</p>
          <p className="bio">{currentUser.bio}</p>
          <div className="gprofile-edit" style={{ width: '100%', maxWidth: 220 }}>
            <Link to="/perfil/editar" style={{ textDecoration: 'none' }}>
              <Button variant="soft">Editar perfil</Button>
            </Link>
          </div>
        </div>

        <Tabs items={['Comunidades', 'Sobre']} value={tab} onChange={setTab} />

        {tab === 'Comunidades' ? (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, fontSize: '.85rem', color: 'var(--text-soft)', marginBottom: 10 }}>
              {myCommunities.length} comunidades
            </p>
            {myCommunities.map((c) => (
              <Link key={c.id} to={`/perfil/comunidade/${c.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CommunityCard community={c} variant="row" />
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ marginTop: 20 }}>
            <p style={{ fontWeight: 700, fontSize: '.85rem', color: 'var(--text-soft)', marginBottom: 6 }}>Interesses</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {currentUser.interests.map((i) => (
                <span key={i} className="cprofile-title-chip">{i}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  )
}
