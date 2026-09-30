import { UsersIcon, GlobeIcon, LockIcon } from './Icons.jsx'
import Avatar from './Avatar.jsx'
import Badge from './Badge.jsx'
import Button from './Button.jsx'

/** Card de comunidade completo — usado na lista de Explorar/Comunidades. */
export default function CommunityCard({ community, onJoin }) {
  const { name, emoji, color, description, members, category, isPrivate, joined } = community
  return (
    <article className="community-card">
      <Avatar emoji={emoji} bg={color} size={56} />
      <div className="community-card__body">
        <div className="community-card__top">
          <h3>{name}</h3>
          {isPrivate ? <LockIcon width={14} height={14} /> : <GlobeIcon width={14} height={14} />}
        </div>
        <p className="community-card__desc">{description}</p>
        <div className="community-card__meta">
          <span><UsersIcon width={14} height={14} /> {members}</span>
          <Badge tone="soft">{category}</Badge>
        </div>
      </div>
      <Button
        variant={joined ? 'soft' : 'primary'}
        className="community-card__cta"
        onClick={() => onJoin?.(name)}
      >
        {joined ? 'Ver' : isPrivate ? 'Solicitar' : 'Entrar'}
      </Button>
    </article>
  )
}
