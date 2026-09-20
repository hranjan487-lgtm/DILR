import { Link } from 'react-router-dom'
import type { DilrSet } from '../types'
import DifficultyBadge from './DifficultyBadge'
import { getAttemptForSet } from '../lib/progress'

export default function SetCard({ set }: { set: DilrSet }) {
  const attempt = getAttemptForSet(set.id)

  return (
    <div className="border border-slate-200 rounded-lg p-4 bg-white flex flex-col gap-3 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-800">{set.title}</h3>
        <DifficultyBadge difficulty={set.difficulty} />
      </div>
      <div className="text-xs text-slate-500 flex flex-wrap gap-3">
        <span>{set.questions.length} questions</span>
        <span>{set.timeLimitMinutes} min</span>
        {set.videoSolutionUrl && <span className="text-indigo-600">🎥 Video solution</span>}
      </div>
      {attempt && (
        <div className="text-xs font-medium text-emerald-700 bg-emerald-50 rounded px-2 py-1 w-fit">
          Last score: {attempt.score}/{attempt.total}
        </div>
      )}
      <div className="flex gap-2 mt-auto">
        <Link
          to={`/sets/${set.id}`}
          className="text-sm font-medium bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700 transition-colors"
        >
          {attempt ? 'Retry set' : 'Solve set'}
        </Link>
        {set.videoSolutionUrl && (
          <a
            href={set.videoSolutionUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium border border-slate-300 px-3 py-1.5 rounded-md hover:bg-slate-50 transition-colors"
          >
            Watch solution
          </a>
        )}
      </div>
    </div>
  )
}
