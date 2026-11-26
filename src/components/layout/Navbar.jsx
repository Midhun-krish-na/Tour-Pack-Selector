import { Link, NavLink } from "react-router-dom";
import { useSavedTrips } from "../../context/SavedTripsContext";

function Navbar() {
  const { savedTrips } = useSavedTrips();

  const navLinkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-emerald-50 text-emerald-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
    }`;

  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-emerald-700"
        >
          Travel Explorer
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" end className={navLinkClass}>
            Explore
          </NavLink>

          <NavLink to="/saved" className={navLinkClass}>
            <span className="flex items-center gap-2">
              Saved Trips
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-xs font-bold text-white">
                {savedTrips.length}
              </span>
            </span>
          </NavLink>

          <NavLink to="/my-bookings" className={navLinkClass}>
            My Bookings
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
