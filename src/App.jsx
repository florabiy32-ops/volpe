import { Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/Splash.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Interests from './pages/Interests.jsx'
import Home from './pages/Home.jsx'
import Communities from './pages/Communities.jsx'
import CreateCommunity from './pages/CreateCommunity.jsx'
import CreateContent from './pages/CreateContent.jsx'
import Notifications from './pages/Notifications.jsx'
import ProfileGlobal from './pages/ProfileGlobal.jsx'
import EditProfileGlobal from './pages/EditProfileGlobal.jsx'
import CommunityProfile from './pages/CommunityProfile.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/interesses" element={<Interests />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/comunidades" element={<Communities />} />
      <Route path="/comunidades/criar" element={<CreateCommunity />} />
      <Route path="/criar" element={<CreateContent />} />
      <Route path="/notificacoes" element={<Notifications />} />
      <Route path="/perfil" element={<ProfileGlobal />} />
      <Route path="/perfil/editar" element={<EditProfileGlobal />} />
      <Route path="/perfil/comunidade/:id" element={<CommunityProfile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
