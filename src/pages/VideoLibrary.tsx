import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sets } from '../data/sets'
import { topics } from '../data/topics'
import { classRecordings } from '../data/classRecordings'
import DifficultyBadge from '../components/DifficultyBadge'

const INITIAL_VISIBLE = 8

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function VideoLibrary() {
  const withVideo = sets.filter((s) => s.videoSolutionUrl)
  const withoutVideo = sets.filter((s) => !s.videoSolutionUrl)
  const [showAllRecordings, setShowAllRecordings] = useState(false)

  const topicName = (topicId: string) => topics.find((t) => t.id === topicId)?.name ?? topicId
  const visibleRecordings = showAllRecordings
    ? classRecordings
    : classRecordings.slice(0, INITIAL_VISIBLE)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Video Solutions</h1>
        <p className="text-slate-500 text-sm mt-1">
          Every set can have a linked video walkthrough. Add a <code>videoSolutionUrl</code> to a
          set in <code>src/data/sets.ts</code> to make it appear here.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-600">Class Recordings</h2>
        <p className="text-xs text-slate-500 -mt-2">
          Full session recordings, organised by date rather than by set. Browse these if you're
          looking for the class that covered a particular topic.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {visibleRecordings.map((recording) => (
            <a
              key={recording.url}
              href={recording.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-slate-200 bg-white rounded-lg p-3 hover:shadow-sm transition-shadow"
            >
              <span className="text-lg">🎬</span>
              <span className="text-sm font-medium text-slate-700">{formatDate(recording.date)}</span>
            </a>
          ))}
        </div>
        {classRecordings.length > INITIAL_VISIBLE && (
          <button
            onClick={() => setShowAllRecordings((v) => !v)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            {showAllRecordings
              ? 'Show fewer recordings'
              : `Show all ${classRecordings.length} recordings`}
          </button>
        )}
      </section>

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
