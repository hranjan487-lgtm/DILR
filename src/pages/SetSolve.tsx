import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getSetById } from '../data/sets'
import DifficultyBadge from '../components/DifficultyBadge'
import { saveAttempt } from '../lib/progress'

export default function SetSolve() {
  const { setId } = useParams<{ setId: string }>()
  const navigate = useNavigate()
  const set = setId ? getSetById(setId) : undefined

  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [secondsElapsed, setSecondsElapsed] = useState(0)
  const [startedAt] = useState(() => Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed(Math.floor((Date.now() - startedAt) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [startedAt])

  const timeLimitSeconds = (set?.timeLimitMinutes ?? 0) * 60
  const timeLeft = Math.max(timeLimitSeconds - secondsElapsed, 0)

  const handleSubmit = useMemo(
    () => () => {
      if (!set) return
      const score = set.questions.reduce(
        (acc, q) => acc + (answers[q.id] === q.correctOptionIndex ? 1 : 0),
        0,
      )
      saveAttempt({
        setId: set.id,
        answers,
        score,
        total: set.questions.length,
        timeTakenSeconds: secondsElapsed,
        completedAt: new Date().toISOString(),
      })
      navigate(`/sets/${set.id}/result`)
    },
    [answers, navigate, secondsElapsed, set],
  )

  useEffect(() => {
    if (set && timeLimitSeconds > 0 && secondsElapsed >= timeLimitSeconds) {
      handleSubmit()
    }
  }, [secondsElapsed, timeLimitSeconds, set, handleSubmit])

  if (!set) {
    return (
      <div>
        <p className="text-slate-600">Set not found.</p>
        <Link to="/topics" className="text-indigo-600 text-sm font-medium">
          Back to topics
        </Link>
      </div>
    )
  }

  const question = set.questions[current]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-bold text-slate-800">{set.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <DifficultyBadge difficulty={set.difficulty} />
            <span className="text-xs text-slate-500">{set.questions.length} questions</span>
          </div>
        </div>
        <div
          className={`text-sm font-semibold px-3 py-1.5 rounded-md ${
            timeLeft < 60 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'
          }`}
        >
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-4 whitespace-pre-line text-sm text-slate-700">
        {set.directions}
      </div>

      <div className="flex gap-2 flex-wrap">
        {set.questions.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => setCurrent(idx)}
            className={`w-9 h-9 rounded-md text-sm font-semibold border transition-colors ${
              idx === current
                ? 'bg-indigo-600 text-white border-indigo-600'
                : answers[q.id] !== undefined
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-white text-slate-600 border-slate-300'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-5">
        <p className="font-medium text-slate-800 whitespace-pre-line mb-4">
          Q{current + 1}. {question.text}
        </p>
        <div className="space-y-2">
          {question.options.map((option, idx) => (
            <label
              key={idx}
              className={`flex items-center gap-3 border rounded-md px-3 py-2 cursor-pointer transition-colors ${
                answers[question.id] === idx
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name={question.id}
                checked={answers[question.id] === idx}
                onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: idx }))}
                className="accent-indigo-600"
              />
              <span className="text-sm text-slate-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
          className="px-4 py-2 text-sm font-medium border border-slate-300 rounded-md disabled:opacity-40"
        >
          Previous
        </button>
        <span className="text-xs text-slate-500">
          {answeredCount}/{set.questions.length} answered
        </span>
        {current < set.questions.length - 1 ? (
          <button
            onClick={() => setCurrent((c) => c + 1)}
            className="px-4 py-2 text-sm font-medium bg-slate-800 text-white rounded-md hover:bg-slate-900"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Submit set
          </button>
        )}
      </div>
    </div>
  )
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
