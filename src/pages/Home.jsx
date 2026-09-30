import { useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell.jsx'
import Avatar from '../components/Avatar.jsx'
import Button from '../components/Button.jsx'
import FoxLogo from '../components/FoxLogo.jsx'
import { SearchIcon, BellIcon } from '../components/Icons.jsx'
import { CURRENT_USER, MY_COMMUNITIES, EXPLORE_COMMUNITIES } from '../utils/mockData.js'
import '../styles/home.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <AppShell>
      <div className="home">
        <div className="home__top">
          <FoxLogo width={104} />
          <div className="home__top-actions">
            <button type="button" className="icon-btn" aria-label="Pesquisar" onClick={() => navigate('/comunidades')}>
              <SearchIcon />
            </button>
            <button type="button" className="icon-btn" aria-label="Notificações" onClick={() => navigate('/notificacoes')}>
              <BellIcon />
            </button>
          </div>
        </div>

        <div className="home__greeting">
          <Avatar emoji="🦊" size={48} />
          <div>
            <h1>Olá, {CURRENT_USER.name}!</h1>
            <p>Que bom ter você por aqui. ♡</p>
          </div>
        </div>

        <div className="home__quote">
          <p>"Grandes histórias nascem de grandes comunidades."</p>
        </div>

        <section className="home__section">
          <div className="home__section-head">
            <h2>Suas comunidades</h2>
            <button type="button" className="link" onClick={() => navigate('/comunidades')}>Ver todas</button>
          </div>
          <div className="home__row">
            {MY_COMMUNITIES.slice(0, 3).map((c) => (
              <button key={c.id} type="button" className="mini-card" onClick={() => navigate('/perfil/comunidade')}>
                <Avatar emoji={c.emoji} bg={c.color} size={60} />
                <span className="name">{c.name}</span>
                <span className="members">{c.members}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="home__section">
          <div className="home__section-head">
            <h2>Explorar</h2>
            <button type="button" className="link" onClick={() => navigate('/comunidades')}>Ver mais</button>
          </div>
          <div className="home__grid">
            {EXPLORE_COMMUNITIES.slice(0, 2).map((c) => (
              <div key={c.id} className="explore-card">
                <Avatar emoji={c.emoji} bg={c.color} size={44} />
                <div>
                  <div className="name">{c.name}</div>
                  <div className="members">{c.members}</div>
                </div>
                <Button variant="primary" onClick={() => navigate('/comunidades')}>Entrar</Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  )
}
