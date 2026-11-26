import { Link } from "react-router-dom";
import { useSavedTrips } from "../../context/SavedTripsContext";

function DestinationCard({ item }) {
  const { toggleSavedTrip, isSaved } = useSavedTrips();
  const saved = isSaved(item.id);

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/70">
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-slate-950/10" />

        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
          {item.category}
        </span>

        <button
          type="button"
          onClick={() => toggleSavedTrip(item.id)}
          aria-label={saved ? "Remove from saved trips" : "Save trip"}
          aria-pressed={saved}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl shadow-md backdrop-blur transition hover:scale-110 ${
            saved ? "text-rose-500" : "text-slate-600 hover:text-rose-500"
          }`}
        >
          {saved ? "♥" : "♡"}
        </button>

        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-lg bg-slate-950/65 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
          <span className="text-amber-300">★</span>
          {item.rating}
          <span className="font-normal text-slate-200">/ 5</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true">⌖</span>
            {item.location}
          </span>

          <span className="shrink-0 rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
            {item.duration} days
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 transition group-hover:text-emerald-700">
          {item.title}
        </h3>

        <p className="mt-2 min-h-12 line-clamp-2 text-sm leading-6 text-slate-500">
          {item.summary}
        </p>

        <div className="my-5 border-t border-slate-100" />

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-slate-500">Starting from</p>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-900">
              ₹{item.pricePerPerson.toLocaleString("en-IN")}
            </p>
            <p className="text-xs text-slate-500">per person</p>
          </div>

          <Link
            to={`/package/${item.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
          >
            View trip
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;