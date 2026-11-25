
import packages from "../data/packages.json";
import DestinationCard from "../components/destination/DestinationCard";
import { useSavedTrips } from "../context/SavedTripsContext";
import { Link } from "react-router-dom";

function SavedTrips() {
  const { savedTrips } = useSavedTrips();

  const savedPackages = packages.filter((item) =>
    savedTrips.includes(item.id)
  );

  return (
    <div className="mx-auto max-w-7xl">
      <section className="py-8">
        <h1 className="text-3xl font-bold text-slate-900">
          My Saved Trips
        </h1>

        <p className="mt-2 text-slate-600">
          Your favorite destinations, all in one place.
        </p>
      </section>

      {savedPackages.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savedPackages.map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </section>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
          <p className="text-5xl">♡</p>

          <h2 className="mt-4 text-xl font-semibold text-slate-900">
            No saved trips yet
          </h2>

          <p className="mt-2 text-slate-500">
            Explore destinations and save the ones you love.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Explore Destinations
          </Link>
        </div>
      )}
    </div>
  );
}

export default SavedTrips;
