import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import { getSetsByTopic } from '../data/sets'

export default function Topics() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-4">All Topics</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.id}`}
            className="border border-slate-200 bg-white rounded-lg p-5 hover:shadow-sm transition-shadow"
          >
            <div className="text-3xl mb-2">{topic.icon}</div>
            <div className="font-semibold text-slate-800">{topic.name}</div>
            <p className="text-sm text-slate-500 mt-1">{topic.description}</p>
            <div className="text-xs text-indigo-600 font-medium mt-3">
              {getSetsByTopic(topic.id).length} set(s) available
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
