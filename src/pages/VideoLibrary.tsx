import { Link } from 'react-router-dom'
import { sets } from '../data/sets'
import { topics } from '../data/topics'
import DifficultyBadge from '../components/DifficultyBadge'

export default function VideoLibrary() {
  const withVideo = sets.filter((s) => s.videoSolutionUrl)
  const withoutVideo = sets.filter((s) => !s.videoSolutionUrl)

  const topicName = (topicId: string) => topics.find((t) => t.id === topicId)?.name ?? topicId

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Video Solutions</h1>
        <p className="text-slate-500 text-sm mt-1">
          Every set can have a linked video walkthrough. Add a <code>videoSolutionUrl</code> to a
          set in <code>src/data/sets.ts</code> to make it appear here.
        </p>
      </div>

      {withVideo.length > 0 && (
        <section className="space-y-3">
          {withVideo.map((set) => (
            <a
              key={set.id}
              href={set.videoSolutionUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border border-slate-200 bg-white rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div>
                <div className="font-semibold text-slate-800">{set.title}</div>
                <div className="text-xs text-slate-500 mt-1">{topicName(set.topicId)}</div>
              </div>
              <DifficultyBadge difficulty={set.difficulty} />
            </a>
          ))}
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold text-slate-600 mb-3">
          Sets without a video solution yet
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {withoutVideo.map((set) => (
            <Link
              key={set.id}
              to={`/sets/${set.id}`}
              className="border border-dashed border-slate-300 rounded-lg p-4 text-slate-500 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              <div className="font-medium">{set.title}</div>
              <div className="text-xs mt-1">{topicName(set.topicId)} · solve set →</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
