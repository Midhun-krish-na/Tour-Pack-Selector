import { useState } from "react";
import packages from "../data/packages.json";
import { filterPackages, sortPackages } from "../utils/packageUtils";
import DestinationCard from "../components/destination/DestinationCard";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredPackages = filterPackages(packages, search, category);
  const displayedPackages = sortPackages(filteredPackages, sortBy);

  const categories = [
    "All",
    "Hill Station",
    "Beach",
    "Heritage",
    "Adventure",
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-12 pb-10">
      {/* Hero */}
      <section className="relative isolate min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900">
        <img
          src={packages[0]?.image}
          alt="Mountain lake landscape"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/10" />

        <div className="flex min-h-[420px] items-center px-7 py-14 sm:px-12 lg:px-16">
          <div className="max-w-2xl text-white">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur">
              Your next journey starts here
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find a place
              <br />
              worth exploring.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Discover inspiring destinations, compare travel packages,
              and plan your next memorable escape.
            </p>

            <a
              href="#destinations"
              className="mt-8 inline-flex items-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-400"
            >
              Explore packages
              <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-5 right-6 hidden rounded-xl border border-white/20 bg-black/25 px-4 py-3 text-right text-white backdrop-blur-md sm:block">
          <p className="text-2xl font-bold">{packages.length}+</p>
          <p className="text-xs text-slate-200">Sample packages</p>
        </div>
      </section>

      {/* Search */}
      <section className="-mt-5 px-2 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 sm:p-5">
          <label
            htmlFor="destination-search"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Where would you like to go?
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400"
                aria-hidden="true"
              >
                ⌕
              </span>

              <input
                id="destination-search"
                type="search"
                placeholder="Search destinations or packages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSortBy("default");
              }}
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Reset filters
            </button>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="scroll-mt-8">
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Find your escape
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore destinations
            </h2>

            <p className="mt-2 text-slate-500">
              Browse packages and find the right experience for you.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label
              htmlFor="package-sort"
              className="text-sm font-medium text-slate-600"
            >
              Sort by
            </label>

            <select
              id="package-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            >
              <option value="default">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-7 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                category === item
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500" aria-live="polite">
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {displayedPackages.length}
            </span>{" "}
            of {packages.length} packages
          </p>
        </div>

        {displayedPackages.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedPackages.map((item) => (
              <DestinationCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <p className="text-lg font-semibold text-slate-800">
              No packages found
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Try a different search or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;