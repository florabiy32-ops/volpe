// Dados fake só para as telas terem conteúdo — troque pela API depois.

export const currentUser = {
  name: 'Luna',
  username: 'luna_fox',
  bio: 'Sonhadora, criativa e apaixonada por boas histórias. ♡',
  interests: ['Fantasia', 'Escrita', 'RPG'],
}

export const myCommunities = [
  { id: 'rpg-fantasia', name: 'RPG & Fantasia', members: '12.4k', category: 'RPG · Fantasia', emoji: '🏰', tint: '#c68e5b' },
  { id: 'animes-mangas', name: 'Animes e Mangás', members: '28.7k', category: 'Público', emoji: '🎌', tint: '#a8733f' },
  { id: 'arte-design', name: 'Arte & Design', members: '15.2k', category: 'Público', emoji: '🎨', tint: '#8d6e63' },
  { id: 'jogos', name: 'Jogos', members: '14.2k', category: 'Público', emoji: '🎮', tint: '#6d4c41' },
  { id: 'livros', name: 'Livros e Literatura', members: '9.8k', category: 'Público', emoji: '📚', tint: '#a1887f' },
]

export const exploreCommunities = [
  { id: 'witcher', name: 'The Witcher Universe', members: '5.2k', category: 'RPG · Fantasia', privacy: 'Público', emoji: '🗡️', tint: '#4e342e' },
  { id: 'ghibli', name: 'Studio Ghibli', members: '18.6k', category: 'Animes · Arte', privacy: 'Público', emoji: '🌿', tint: '#6a8a53' },
  { id: 'genshin', name: 'Genshin Impact', members: '24.1k', category: 'Jogos · RPG', privacy: 'Público', emoji: '⚔️', tint: '#a8733f' },
  { id: 'fanarts-br', name: 'Fanarts BR', members: '7.8k', category: 'Arte · Desenho', privacy: 'Público', emoji: '🖌️', tint: '#c68e5b' },
]

export const communityFilters = ['Todas', 'Recomendadas', 'Populares', 'Recentes', 'Minhas']
export const communityCategories = ['Anime', 'Jogos', 'RPG', 'Arte', 'Livros', 'Séries', 'Música']

export const notifications = [
  { id: 1, tab: 'Menções', name: 'Luna', avatarTint: '#c68e5b', text: 'mencionou você em um comentário em "Desafio de Arte"', time: '2 min atrás' },
  { id: 2, tab: 'Curtidas', name: 'Morgan', avatarTint: '#8d6e63', text: 'curtiu seu post "Nova arte do meu OC"', time: '15 min atrás' },
  { id: 3, tab: 'Todas', name: 'RPG & Fantasia', avatarTint: '#4e342e', text: 'te enviou um convite', time: '30 min atrás', isCommunity: true },
  { id: 4, tab: 'Comentários', name: 'Kiel', avatarTint: '#a1887f', text: 'respondeu seu comentário em "Teoria sobre o Arion"', time: '1 h atrás' },
  { id: 5, tab: 'Todas', name: 'RPG & Fantasia', avatarTint: '#4e342e', text: 'Evento em sua comunidade "Noite de RPG" começou em 2h', time: '2 h atrás', isCommunity: true },
  { id: 6, tab: 'Todas', name: 'Sora', avatarTint: '#6d4c41', text: 'começou a te seguir', time: '3 h atrás' },
]
export const notificationTabs = ['Todas', 'Menções', 'Curtidas', 'Comentários']

export const contentTypes = [
  { id: 'blog', label: 'Blog', hint: 'Texto, imagens, vídeos...', emoji: '📝' },
  { id: 'imagem', label: 'Imagem', hint: 'Compartilhe uma imagem', emoji: '🖼️' },
  { id: 'pergunta', label: 'Pergunta', hint: 'Faça uma pergunta', emoji: '❓' },
  { id: 'enquete', label: 'Enquete', hint: 'Vote em uma opção', emoji: '📊' },
  { id: 'wiki', label: 'Wiki', hint: 'Crie uma página de wiki', emoji: '📖' },
  { id: 'personagem', label: 'Personagem', hint: 'Crie uma ficha de personagem', emoji: '🧙' },
]

// Perfil da Luna dentro da comunidade RPG & Fantasia (exemplo)
export const communityProfile = {
  communityId: 'rpg-fantasia',
  communityName: 'RPG & Fantasia',
  status: '☁️ escrevendo uma nova história...',
  level: 24,
  xp: 3340,
  xpNext: 5000,
  titles: ['Exploradora', 'Criadora'],
  followers: '1.2k',
  following: 478,
  posts: 128,
  music: { title: 'Dreams', artist: 'Fleetwood Mac' },
  bio: 'A vida é mais bonita quando a gente acredita nos próprios sonhos. 🌙',
}
