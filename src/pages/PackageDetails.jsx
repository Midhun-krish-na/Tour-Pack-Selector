import { Link, useParams, Navigate } from "react-router-dom";
import packages from "../data/packages.json";
import { getPackageById } from "../utils/packageUtils";

function PackageDetails() {
  const { id } = useParams();
  const item = getPackageById(packages, id);

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="mx-auto max-w-6xl">
      <Link
        to="/"
        className="mb-6 inline-block text-sm font-medium text-emerald-600 hover:underline"
      >
        ← Back to destinations
      </Link>

      <div className="overflow-hidden rounded-3xl">
        <img
          src={item.image}
          alt={item.title}
          className="h-72 w-full object-cover md:h-112.5"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section>
            <p className="font-semibold text-emerald-600">
              {item.category} · {item.location}
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              {item.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>★ {item.rating} Rating</span>
              <span>{item.duration} Days</span>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              {item.summary}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Trip Highlights
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  What's Included
                </h2>

                <ul className="space-y-3">
                  {item.inclusions?.map((feature, index) => (
                    <li key={index} className="flex gap-2 text-slate-600">
                      <span className="text-emerald-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  What's Not Included
                </h2>

                <ul className="space-y-3">
                  {item.exclusions?.map((feature, index) => (
                    <li key={index} className="flex gap-2 text-slate-600">
                      <span className="text-red-500">✕</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="mt-4 space-y-3">
              {item.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="text-emerald-600">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Your Itinerary
            </h2>

            <div className="space-y-5">
              {item.itinerary?.map((day) => (
                <div key={day.day} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                    {day.day}
                  </div>

                  <div className="flex-1 rounded-xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900">
                      Day {day.day}: {day.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 p-6 shadow-sm lg:sticky lg:top-6">
          <p className="text-sm text-slate-500">
            Starting price
          </p>

          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            ₹{item.pricePerPerson.toLocaleString("en-IN")}
          </h2>

          <p className="text-sm text-slate-500">
            per person
          </p>

          <div className="my-6 border-t border-slate-200" />

          <div className="flex justify-between text-sm">
            <span>Duration</span>
            <span className="font-medium">{item.duration} days</span>
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span>Rating</span>
            <span className="font-medium">★ {item.rating}</span>
          </div>

          <Link
            to={`/book/${item.id}`}
            className="mt-6 block w-full rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
          >
            Book This Trip
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default PackageDetails;
