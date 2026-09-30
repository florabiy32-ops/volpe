import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FoxHead } from '../components/FoxLogo.jsx'
import { Sparkle, Leaf } from '../components/Decorations.jsx'
import { isAuthenticated } from '../utils/auth.js'
import cloud2 from '../assets/img/cloud-2.png'
import '../styles/splash.css'

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate(isAuthenticated() ? '/inicio' : '/login', { replace: true }), 2200)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="splash">
      <div className="splash__clouds"><img src={cloud2} alt="" /></div>

      <Sparkle className="splash__spark" style={{ top: '12%', left: '14%' }} />
      <Sparkle className="splash__spark" style={{ top: '22%', right: '12%', width: 14, height: 14 }} />
      <Sparkle className="splash__spark" style={{ bottom: '30%', left: '10%', width: 12, height: 12 }} />

      <div className="splash__fox"><FoxHead size={96} /></div>
      <h1 className="splash__name">Volpe</h1>
      <p className="splash__tag">Histórias, pessoas e comunidades em um só lugar.</p>

      <div className="splash__foot">
        <div className="splash__leaves">
          <Leaf style={{ width: 30 }} />
          <Leaf flip style={{ width: 30 }} />
        </div>
        <div className="splash__bar" aria-hidden="true"><span /></div>
      </div>
    </div>
  )
}
