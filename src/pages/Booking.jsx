import { useState } from "react";
import {
  Link,
  useParams,
  Navigate,
  useNavigate
} from "react-router-dom";

import packages from "../data/packages.json";
import { getPackageById } from "../utils/packageUtils";
import siteConfig from "../config/siteConfig";
import { formatPrice } from "../utils/formatPrice";

function getLocalDateString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = getPackageById(packages, id);

  const [travelers, setTravelers] = useState(
    String(siteConfig.booking.minTravelers)
  );
  const [travelDate, setTravelDate] = useState("");
  const [error, setError] = useState("");

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  const travelerCount = Number(travelers);

  const validTravelers =
    Number.isInteger(travelerCount) &&
    travelerCount >= siteConfig.booking.minTravelers &&
    travelerCount <= siteConfig.booking.maxTravelers;

  const subtotal =
    item.pricePerPerson * (validTravelers ? travelerCount : 0);

  const gst =
    Math.round(
      (subtotal * siteConfig.tax.rate + Number.EPSILON) * 100
    ) / 100;

  const total = subtotal + gst;

  function handleBooking(event) {
    event.preventDefault();
    setError("");

    if (!validTravelers) {
      setError(
        `Please enter between ${siteConfig.booking.minTravelers} and ${siteConfig.booking.maxTravelers} travelers.`
      );
      return;
    }

    if (!travelDate || travelDate < getLocalDateString()) {
      setError("Please select a valid future travel date.");
      return;
    }

    const bookingRef = `TRIP-${Date.now()}`;

    const booking = {
      reference: bookingRef,
      packageId: item.id,
      packageTitle: item.title,
      travelers: travelerCount,
      travelDate,
      subtotal,
      gst,
      total,
      bookedAt: new Date().toISOString()
    };

    let existingBookings = [];

    try {
      const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
      existingBookings = Array.isArray(stored) ? stored : [];
    } catch {
      existingBookings = [];
    }

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, booking])
    );

    navigate(`/confirmation/${bookingRef}`);
  }

  return (
    <div className="mx-auto max-w-6xl">
      <Link
        to={`/package/${item.id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
      >
        ← Back to package
      </Link>

      <div className="mt-7">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
          Booking demonstration
        </p>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Plan your next escape
        </h1>

        <p className="mt-3 text-slate-600">
          Complete the details below for {item.title}.
        </p>
      </div>

      <div className="mt-9 grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
        {/* Booking form */}
        <form
          onSubmit={handleBooking}
          className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
        >
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Travel Details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose your group size and preferred travel date.
            </p>

            <div className="mt-7">
              <label
                htmlFor="travelers"
                className="block text-sm font-semibold text-slate-800"
              >
                Number of Travelers
              </label>

              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Decrease travelers"
                  disabled={
                    !validTravelers ||
                    travelerCount <= siteConfig.booking.minTravelers
                  }
                  onClick={() => {
                    setTravelers(String(travelerCount - 1));
                    setError("");
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 text-xl font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  −
                </button>

                <input
                  id="travelers"
                  type="number"
                  min={siteConfig.booking.minTravelers}
                  max={siteConfig.booking.maxTravelers}
                  step="1"
                  value={travelers}
                  onChange={(event) => {
                    setTravelers(event.target.value);
                    setError("");
                  }}
                  className="h-12 w-24 rounded-xl border border-slate-300 text-center font-bold text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="button"
                  aria-label="Increase travelers"
                  disabled={
                    !validTravelers ||
                    travelerCount >= siteConfig.booking.maxTravelers
                  }
                  onClick={() => {
                    setTravelers(String(travelerCount + 1));
                    setError("");
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 text-xl font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  +
                </button>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Select between {siteConfig.booking.minTravelers} and{" "}
                {siteConfig.booking.maxTravelers} travelers.
              </p>
            </div>

            <div className="mt-7">
              <label
                htmlFor="travelDate"
                className="block text-sm font-semibold text-slate-800"
              >
                Preferred Travel Date
              </label>

              <input
                id="travelDate"
                type="date"
                min={getLocalDateString()}
                value={travelDate}
                onChange={(event) => {
                  setTravelDate(event.target.value);
                  setError("");
                }}
                className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>
          </section>

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
            >
              {error}
            </div>
          )}

          <div className="border-t border-slate-100 pt-6">
            <button
              type="submit"
              disabled={!validTravelers || !travelDate}
              className="w-full rounded-xl bg-emerald-600 px-5 py-4 font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Confirm Demo Booking
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              This is a simulated booking. No actual reservation or payment
              will be made.
            </p>
          </div>
        </form>

        {/* Price summary */}
        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900">
            Booking Summary
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl bg-slate-100">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
          </div>

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {item.location} · {item.duration} days
          </p>

          <div className="my-6 border-t border-slate-100" />

          <div className="space-y-4 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Price per person</span>
              <span className="font-medium text-slate-800">
                {formatPrice(item.pricePerPerson)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Travelers</span>
              <span className="font-medium text-slate-800">
                {validTravelers ? travelerCount : "—"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-medium text-slate-800">
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                {siteConfig.tax.name} ({siteConfig.tax.rate * 100}%)
              </span>
              <span className="font-medium text-slate-800">
                {formatPrice(gst)}
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-bold text-slate-900">Total</span>
              <span className="text-2xl font-extrabold text-emerald-700">
                {formatPrice(total)}
              </span>
            </div>
          </div>

          <p className="mt-5 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-800">
            Sample pricing for demonstration purposes only. Taxes and actual
            package costs may differ in a real booking system.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Booking;
