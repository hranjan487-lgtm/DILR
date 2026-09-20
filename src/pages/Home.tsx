import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { sets, getSetsByTopic } from '../data/sets'
import { getAttempts } from '../lib/progress'

export default function Home() {
  const attempts = getAttempts()
  const attemptedSetIds = new Set(attempts.map((a) => a.setId))
  const avgScore = attempts.length
    ? Math.round(
        (attempts.reduce((sum, a) => sum + a.score / a.total, 0) / attempts.length) * 100,
      )
    : null

  return (
    <div className="space-y-8">
      <section className="bg-indigo-600 text-white rounded-xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">CAT DILR Preparation</h1>
        <p className="text-indigo-100 max-w-2xl">
          Practice Data Interpretation & Logical Reasoning sets organised by topic, review
          worked explanations, and watch video solutions for every set.
        </p>
        <Link
          to="/topics"
          className="inline-block mt-4 bg-white text-indigo-700 font-semibold px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors"
        >
          Browse topics
        </Link>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatTile label="Topics" value={topics.length} />
        <StatTile label="Sets" value={sets.length} />
        <StatTile label="Sets attempted" value={attemptedSetIds.size} />
        <StatTile label="Avg. score" value={avgScore !== null ? `${avgScore}%` : '—'} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Topics</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topics/${topic.id}`}
              className="border border-slate-200 bg-white rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="text-2xl mb-2">{topic.icon}</div>
              <div className="font-semibold text-slate-800">{topic.name}</div>
              <div className="text-xs text-slate-500 mt-1">
                {getSetsByTopic(topic.id).length} set(s)
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function StatTile({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border border-slate-200 bg-white rounded-lg p-4 text-center">
      <div className="text-xl font-bold text-indigo-700">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  )
}
