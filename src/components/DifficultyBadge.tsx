import type { Difficulty } from '../types'

const styles: Record<Difficulty, string> = {
  Easy: 'bg-emerald-100 text-emerald-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-rose-100 text-rose-700',
}

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[difficulty]}`}>
      {difficulty}
    </span>
  )
}
