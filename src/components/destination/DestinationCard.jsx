
import { Link } from "react-router-dom";
import { useSavedTrips } from "../../context/SavedTripsContext";

function DestinationCard({ item }) {
  const { toggleSavedTrip, isSaved } = useSavedTrips();
  const saved = isSaved(item.id);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="h-52 w-full object-cover"
        />

        <button
          type="button"
          onClick={() => toggleSavedTrip(item.id)}
          aria-label={saved ? "Remove from saved trips" : "Save trip"}
          aria-pressed={saved}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110 ${
            saved ? "text-red-500" : "text-slate-500"
          }`}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-emerald-600">
            {item.category}
          </span>

          <span className="text-sm text-amber-500">
            ★ {item.rating}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {item.location} · {item.duration} days
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-slate-600">
          {item.summary}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-slate-900">
            ₹{item.pricePerPerson.toLocaleString("en-IN")}
            <span className="text-xs font-normal text-slate-500">
              {" "} / person
            </span>
          </p>

          <Link
            to={`/package/${item.id}`}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            View Trip
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
