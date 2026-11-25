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
    "Adventure"
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <section className="py-12 text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-600">
          Discover your next journey
        </p>

        <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">
          Explore the beauty of South India
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-slate-600">
          Find unforgettable destinations, curated travel packages
          and experiences worth remembering.
        </p>
      </section>

      <section className="mb-8">
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none focus:border-emerald-500"
        />
      </section>

      <section className="mb-8 flex flex-wrap items-center gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              category === item
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item}
          </button>
        ))}
      </section>

      <section className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">
          Explore Destinations
        </h2>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2"
        >
          <option value="default">Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </section>

      <p className="mb-5 text-sm text-slate-500">
        {displayedPackages.length} destinations found
      </p>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedPackages.map((item) => (
          <DestinationCard key={item.id} item={item} />
        ))}
      </section>

      {displayedPackages.length === 0 && (
        <p className="py-16 text-center text-slate-500">
          No destinations found. Try another search.
        </p>
      )}
    </div>
  );
}

export default Home;
