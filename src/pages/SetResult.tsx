import { Link, useParams } from 'react-router-dom'
import { getSetById } from '../data/sets'
import { getAttemptForSet } from '../lib/progress'
import DifficultyBadge from '../components/DifficultyBadge'

export default function SetResult() {
  const { setId } = useParams<{ setId: string }>()
  const set = setId ? getSetById(setId) : undefined
  const attempt = setId ? getAttemptForSet(setId) : undefined

  if (!set || !attempt) {
    return (
      <div>
        <p className="text-slate-600">No attempt found for this set yet.</p>
        <Link to="/topics" className="text-indigo-600 text-sm font-medium">
          Back to topics
        </Link>
      </div>
    )
  }

  const percent = Math.round((attempt.score / attempt.total) * 100)

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-800">{set.title}</h1>
          <DifficultyBadge difficulty={set.difficulty} />
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-indigo-700">
            {attempt.score}/{attempt.total}
          </div>
          <div className="text-xs text-slate-500">{percent}% correct</div>
        </div>
      </div>

      {set.videoSolutionUrl && (
        <a
          href={set.videoSolutionUrl}
          target="_blank"
          rel="noreferrer"
          className="block bg-indigo-50 border border-indigo-200 text-indigo-700 font-medium rounded-lg p-4 hover:bg-indigo-100 transition-colors"
        >
          🎥 Watch the full video solution for this set →
        </a>
      )}

      <div className="space-y-4">
        {set.questions.map((q, idx) => {
          const givenIdx = attempt.answers[q.id]
          const isCorrect = givenIdx === q.correctOptionIndex
          return (
            <div key={q.id} className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium text-slate-800 whitespace-pre-line">
                  Q{idx + 1}. {q.text}
                </p>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {isCorrect ? 'Correct' : givenIdx === undefined ? 'Skipped' : 'Incorrect'}
                </span>
              </div>
              <ul className="mt-3 space-y-1">
                {q.options.map((opt, oIdx) => (
                  <li
                    key={oIdx}
                    className={`text-sm px-2 py-1 rounded ${
                      oIdx === q.correctOptionIndex
                        ? 'bg-emerald-50 text-emerald-700 font-medium'
                        : oIdx === givenIdx
                          ? 'bg-rose-50 text-rose-700'
                          : 'text-slate-600'
                    }`}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 mt-3 border-t border-slate-100 pt-3">
                <span className="font-semibold text-slate-600">Explanation: </span>
                {q.explanation}
              </p>
            </div>
          )
        })}
      </div>

      <div className="flex gap-3">
        <Link
          to={`/topics/${set.topicId}`}
          className="px-4 py-2 text-sm font-medium border border-slate-300 rounded-md"
        >
          Back to topic
        </Link>
        <Link
          to={`/sets/${set.id}`}
          className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Retry set
        </Link>
      </div>
    </div>
  )
}
