import { Link, useParams } from 'react-router-dom'
import { topics } from '../data/topics'
import { getSetsByTopic } from '../data/sets'
import SetCard from '../components/SetCard'

export default function TopicDetail() {
  const { topicId } = useParams<{ topicId: string }>()
  const topic = topics.find((t) => t.id === topicId)
  const topicSets = topicId ? getSetsByTopic(topicId) : []

  if (!topic) {
    return (
      <div>
        <p className="text-slate-600">Topic not found.</p>
        <Link to="/topics" className="text-indigo-600 text-sm font-medium">
          Back to topics
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Link to="/topics" className="text-sm text-indigo-600 font-medium">
        ← All topics
      </Link>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{topic.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{topic.name}</h1>
          <p className="text-slate-500 text-sm">{topic.description}</p>
        </div>
      </div>

      {topicSets.length === 0 ? (
        <p className="text-slate-500 text-sm">No sets added for this topic yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {topicSets.map((set) => (
            <SetCard key={set.id} set={set} />
          ))}
        </div>
      )}
    </div>
  )
}
