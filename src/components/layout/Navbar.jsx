import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
      <Link to="/" className="text-xl font-bold text-emerald-700">
        Travel Explorer
      </Link>

      <div className="flex gap-6">
        <Link to="/">Explore</Link>
        <Link to="/saved">Saved Trips</Link>
      </div>
    </nav>
  )
}

export default Navbar
