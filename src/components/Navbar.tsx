import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
  }`

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-indigo-700 text-lg">
          CAT DILR Prep
        </NavLink>
        <nav className="flex gap-1">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/topics" className={linkClass}>
            Topics
          </NavLink>
          <NavLink to="/videos" className={linkClass}>
            Video Solutions
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
