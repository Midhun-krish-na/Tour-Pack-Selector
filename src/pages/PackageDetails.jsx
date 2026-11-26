
import { Link, Navigate, useParams } from "react-router-dom";
import packages from "../data/packages.json";
import { getPackageById } from "../utils/packageUtils";
import { formatPrice } from "../utils/formatPrice";

function PackageDetails() {
  const { id } = useParams();
  const item = getPackageById(packages, id);

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
      >
        <span aria-hidden="true">←</span>
        Back to destinations
      </Link>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-72 w-full object-cover sm:h-96 lg:h-115"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/65 via-transparent to-slate-950/10" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-800 backdrop-blur">
            {item.category}
          </span>

          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {item.title}
          </h1>

          <p className="mt-3 flex flex-wrap items-center gap-3 text-sm font-medium text-white/90">
            <span>{item.location}</span>
            <span>·</span>
            <span>{item.duration} days</span>
          </p>
        </div>
      </section>

      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
        {/* Main content */}
        <div className="min-w-0 space-y-10 lg:col-span-2">
          {/* Overview */}
          <section>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-800">
                ★ {item.rating} / 5
              </span>
              <span className="text-xs text-slate-500">
                Illustrative demo rating
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
              About this experience
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              {item.summary}
            </p>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Trip Highlights
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Experiences featured in this sample package
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-slate-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions and exclusions */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Package Information
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  What's Included
                </h3>

                <ul className="mt-5 space-y-4">
                  {item.inclusions?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="font-bold text-emerald-700">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Not Included
                </h3>

                <ul className="mt-5 space-y-4">
                  {item.exclusions?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="font-bold text-rose-500">×</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Your Itinerary
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              A suggested {item.duration}-day travel plan
            </p>

            <div className="mt-6 space-y-5">
              {item.itinerary?.map((day) => (
                <div key={day.day} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-sm">
                    {String(day.day).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Day {day.day}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      {day.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking panel */}
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 lg:sticky lg:top-24">
          <p className="text-sm font-medium text-slate-500">
            Sample starting price
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
            {formatPrice(item.pricePerPerson)}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            per person
          </p>

          <div className="my-6 border-t border-slate-100" />

          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-500">Destination</span>
              <span className="text-right font-semibold text-slate-800">
                {item.location}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">Duration</span>
              <span className="font-semibold text-slate-800">
                {item.duration} days
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">Category</span>
              <span className="font-semibold text-slate-800">
                {item.category}
              </span>
            </div>
          </div>

          <Link
            to={`/book/${item.id}`}
            className="mt-7 block w-full rounded-xl bg-emerald-600 px-5 py-3.5 text-center font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
          >
            Explore Booking Demo
          </Link>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Demonstration only. No real reservations or payments are processed.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default PackageDetails;
