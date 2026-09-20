import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Topics from './pages/Topics'
import TopicDetail from './pages/TopicDetail'
import SetSolve from './pages/SetSolve'
import SetResult from './pages/SetResult'
import VideoLibrary from './pages/VideoLibrary'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topicId" element={<TopicDetail />} />
            <Route path="/sets/:setId" element={<SetSolve />} />
            <Route path="/sets/:setId/result" element={<SetResult />} />
            <Route path="/videos" element={<VideoLibrary />} />
          </Routes>
        </main>
        <footer className="text-center text-xs text-slate-400 py-6">
          Built for CAT DILR practice · progress is saved locally in your browser
        </footer>
      </div>
    </HashRouter>
  )
}

export default App
