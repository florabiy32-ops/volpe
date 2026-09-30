/** Barra de progresso de XP. */
export default function LevelBar({ value, max, level }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div className="levelbar">
      <div className="levelbar__head">
        <span>Nível {level}</span>
        <span>{value.toLocaleString('pt-BR')}/{max.toLocaleString('pt-BR')} XP</span>
      </div>
      <div className="levelbar__track">
        <div className="levelbar__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
