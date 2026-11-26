import { Link, NavLink } from "react-router-dom";
import { useSavedTrips } from "../../context/SavedTripsContext";
import siteConfig from "../../config/siteConfig";

function Navbar() {
  const { savedTrips } = useSavedTrips();

  const navLinkClass = ({ isActive }) =>
    `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
      isActive
        ? "bg-emerald-50 text-emerald-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-black text-white shadow-md shadow-emerald-600/20 transition group-hover:rotate-3">
            {siteConfig.brand.appName.charAt(0)}
          </span>

          <span>
            <span className="block text-xl font-extrabold tracking-tight text-slate-900">
              {siteConfig.brand.appName}
            </span>
            <span className="block text-xs font-medium tracking-wide text-slate-500">
              Find your next escape
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" end className={navLinkClass}>
            Explore
          </NavLink>

          <NavLink to="/saved" className={navLinkClass}>
            <span className="flex items-center gap-2">
              Saved Trips
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1.5 text-xs font-bold text-white">
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
