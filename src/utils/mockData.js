// Dados fictícios — trocar pela API quando o backend existir.

export const CURRENT_USER = {
  name: 'Luna',
  username: 'luna_fox',
  bio: 'Sonhadora, criativa e apaixonada por boas histórias. ♡',
}

export const MY_COMMUNITIES = [
  { id: 'rpg-fantasia', name: 'RPG & Fantasia', emoji: '🐺', color: '#e3c19c', members: '12,4k' },
  { id: 'animes-mangas', name: 'Animes & Mangás', emoji: '🎭', color: '#e8b7ad', members: '28,7k' },
  { id: 'arte-design', name: 'Arte & Design', emoji: '🎨', color: '#c9dab0', members: '15,2k' },
  { id: 'jogos', name: 'Jogos', emoji: '🎮', color: '#a9c7dd', members: '14,2k' },
  { id: 'livros', name: 'Livros e Literatura', emoji: '📚', color: '#d9c2e8', members: '9,8k' },
  { id: 'series-filmes', name: 'Séries e Filmes', emoji: '🎬', color: '#f0c98a', members: '11,7k' },
]

export const EXPLORE_COMMUNITIES = [
  { id: 'witcher', name: 'The Witcher Universe', emoji: '🐺', color: '#cbb7e0', description: 'Teorias, fanarts e RPG do universo de Geralt.', members: '5,2k membros', category: 'RPG · Fantasia', isPrivate: false },
  { id: 'ghibli', name: 'Studio Ghibli', emoji: '🌿', color: '#a9d0b4', description: 'Tudo sobre os filmes e a arte do estúdio.', members: '18,6k membros', category: 'Animes · Arte', isPrivate: false },
  { id: 'genshin', name: 'Genshin Impact', emoji: '⚔️', color: '#9fc6e0', description: 'Builds, teorias e fanarts de Teyvat.', members: '24,1k membros', category: 'Jogos · RPG', isPrivate: false },
  { id: 'fanarts', name: 'Fanarts BR', emoji: '🖌️', color: '#f0b8ab', description: 'Espaço pra postar e trocar feedback de fanarts.', members: '7,8k membros', category: 'Arte · Desenho', isPrivate: false },
  { id: 'clube-livro', name: 'Clube do Livro', emoji: '📖', color: '#e3cf9e', description: 'Leitura coletiva mensal com discussões toda semana.', members: '4,1k membros', category: 'Livros', isPrivate: true },
  { id: 'kpop-corner', name: 'K-pop Corner', emoji: '🎤', color: '#e6a6c1', description: 'Comebacks, teorias de MV e fancams.', members: '31,4k membros', category: 'K-pop · Música', isPrivate: false },
]

export const FILTERS = ['Todas', 'Recomendadas', 'Populares', 'Recentes', 'Minhas']

export const NOTIFICATIONS = [
  { id: 1, type: 'curtida', text: 'Luna curtiu seu blog "Nova arte do meu OC".', time: '2 min atrás', emoji: '❤️', unread: true },
  { id: 2, type: 'comentario', text: 'Morgan respondeu ao seu comentário em "Teoria sobre o Arion".', time: '15 min atrás', emoji: '💬', unread: true },
  { id: 3, type: 'comunidade', text: 'Você foi aceito na comunidade RPG & Fantasia.', time: '30 min atrás', emoji: '🐺', unread: true },
  { id: 4, type: 'mencao', text: 'Kiel mencionou você em um comentário no "Desafio de Arte".', time: '1 h atrás', emoji: '📣', unread: false },
  { id: 5, type: 'evento', text: 'O evento "Noite de RPG" começa em 2h.', time: '2 h atrás', emoji: '📅', unread: false },
  { id: 6, type: 'convite', text: 'Sora te convidou para a comunidade Fanarts BR.', time: '3 h atrás', emoji: '✉️', unread: false },
]
export const NOTIFICATION_FILTERS = ['Todas', 'Menções', 'Curtidas', 'Comentários', 'Convites', 'Comunidades', 'Eventos', 'Solicitações']

export const COMMUNITY_PROFILE = {
  name: 'Luna',
  status: 'escrevendo uma nova história...',
  bio: 'A vida é mais bonita quando a gente acredita nos próprios sonhos. 🌿',
  level: 24,
  xp: 3340,
  xpMax: 5000,
  titles: ['Exploradora', 'Criadora'],
  music: { title: 'Dreams', artist: 'Fleetwood Mac' },
  stats: { posts: 128, wikis: 6, followers: 1200, following: 478 },
}
