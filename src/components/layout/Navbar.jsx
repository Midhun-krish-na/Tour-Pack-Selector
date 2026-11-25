import { Link } from "react-router-dom";
import { useSavedTrips } from "../../context/SavedTripsContext";

function Navbar() {
  const { savedTrips } = useSavedTrips();

  return (
    <nav className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
      <Link to="/" className="text-xl font-bold text-emerald-700">
        Travel Explorer
      </Link>

      <div className="flex gap-6">
        <Link to="/">Explore</Link>

        <Link
          to="/saved"
          className="flex items-center gap-2 text-slate-700 transition hover:text-emerald-600"
        >
          Saved Trips
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-xs font-bold text-white">
            {savedTrips.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
