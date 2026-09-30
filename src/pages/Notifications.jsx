import { useState } from 'react'
import Avatar from '../components/Avatar.jsx'
import Tabs from '../components/Tabs.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { FoxHead } from '../components/FoxLogo.jsx'
import { notifications, notificationTabs } from '../data/mock.js'
import '../styles/shell.css'

export default function Notifications() {
  const [tab, setTab] = useState('Todas')
  const list = tab === 'Todas' ? notifications : notifications.filter((n) => n.tab === tab)

  return (
    <div className="screen">
      <div className="screen__inner">
        <div className="page-head"><h1 className="page-head__title">Notificações</h1></div>
        <div style={{ margin: '14px 0' }}>
          <Tabs items={notificationTabs} value={tab} onChange={setTab} />
        </div>

        {list.length === 0 ? (
          <div className="empty-state">
            <FoxHead size={64} />
            <p>Nada por aqui ainda.</p>
            <span>Quando algo novo acontecer nas suas comunidades, aparece aqui.</span>
          </div>
        ) : (
          list.map((n) => (
            <div key={n.id} className="notif-item">
              <Avatar name={n.name} tint={n.avatarTint} size={42} />
              <div>
                <p className="notif-item__text"><strong>{n.name}</strong> {n.text}</p>
                <p className="notif-item__time">{n.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <BottomNav />
    </div>
  )
}
