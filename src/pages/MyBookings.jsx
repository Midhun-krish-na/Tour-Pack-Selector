import { useState } from "react";
import { Link } from "react-router-dom";
import packages from "../data/packages.json";

function readBookings() {
  try {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function formatDate(value) {
  if (!value) return "Not specified";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not specified";

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatPrice(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "—";

  return `₹${amount.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
}

function MyBookings() {
  const [bookings, setBookings] = useState(() =>
    readBookings().sort(
      (a, b) => new Date(b.bookedAt || 0) - new Date(a.bookedAt || 0)
    )
  );

  function saveBookings(updatedBookings) {
    setBookings(updatedBookings);

    try {
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    } catch (error) {
      console.error("Could not update booking history:", error);
    }
  }

  function cancelBooking(booking) {
    const confirmed = window.confirm(
      `Cancel demo booking ${booking.reference || ""}?`
    );

    if (!confirmed) return;

    const updatedBookings = bookings.map((item) =>
      item.reference === booking.reference
        ? {
            ...item,
            status: "cancelled",
            cancelledAt: new Date().toISOString(),
          }
        : item
    );

    saveBookings(updatedBookings);
  }

  function removeBooking(booking, index) {
    const confirmed = window.confirm(
      "Permanently remove this booking from your browser history?"
    );

    if (!confirmed) return;

    const updatedBookings = bookings.filter((item, itemIndex) =>
      booking.reference
        ? item.reference !== booking.reference
        : itemIndex !== index
    );

    saveBookings(updatedBookings);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12">
      <section className="py-10">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
          Your travel activity
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              My Bookings
            </h1>
            <p className="mt-2 text-slate-600">
              Keep track of the trips you've explored and booked.
            </p>
          </div>

          <div className="rounded-xl bg-emerald-50 px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Total records
            </p>
            <p className="mt-1 text-2xl font-bold text-emerald-800">
              {bookings.length}
            </p>
          </div>
        </div>
      </section>

      {bookings.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
          <div className="text-5xl" aria-hidden="true">
            🧳
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900">
            Your next adventure starts here
          </h2>

          <p className="mx-auto mt-3 max-w-md text-slate-500">
            You haven't recorded any bookings yet. Explore our sample
            destinations and try the booking experience.
          </p>

          <Link
            to="/"
            className="mt-7 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Explore Destinations
          </Link>
        </section>
      ) : (
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Booking History
            </h2>
            <span className="text-sm text-slate-500">
              {bookings.length} {bookings.length === 1 ? "booking" : "bookings"}
            </span>
          </div>

          {bookings.map((booking, index) => {
            const isCancelled = booking.status === "cancelled";

            const packageItem = packages.find(
              (item) => String(item.id) === String(booking.packageId)
            );

            return (
              <article
                key={booking.reference || index}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md ${
                  isCancelled ? "border-red-200" : "border-slate-200"
                }`}
              >
                <div className="grid md:grid-cols-[240px_1fr]">
                  {packageItem?.image ? (
                    <img
                      src={packageItem.image}
                      alt={booking.packageTitle || "Travel destination"}
                      className="h-52 w-full object-cover md:h-full md:min-h-64"
                    />
                  ) : (
                    <div className="flex min-h-48 items-center justify-center bg-slate-100 text-4xl">
                      🧳
                    </div>
                  )}

                  <div className="p-5 md:p-6">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {booking.reference || "Reference unavailable"}
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-slate-900">
                          {booking.packageTitle || "Travel package"}
                        </h3>
                      </div>

                      <span
                        className={`h-fit w-fit rounded-full px-3 py-1 text-xs font-bold ${
                          isCancelled
                            ? "bg-red-50 text-red-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {isCancelled ? "Cancelled" : "Demo Booking"}
                      </span>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
                      <div>
                        <p className="text-xs text-slate-500">Travel date</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          {formatDate(booking.travelDate)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Travelers</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          {booking.travelers ?? "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Booked on</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          {formatDate(booking.bookedAt)}
                        </p>
                      </div>
                    </div>

                    {isCancelled && (
                      <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                        Cancelled on {formatDate(booking.cancelledAt)}.
                      </p>
                    )}

                    <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-xs text-slate-500">Total amount</p>
                        <p className="mt-1 text-xl font-bold text-emerald-700">
                          {formatPrice(booking.total)}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {booking.reference && (
                          <Link
                            to={`/confirmation/${encodeURIComponent(booking.reference)}`}
                            className="rounded-xl border border-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                          >
                            View Details
                          </Link>
                        )}

                        {!isCancelled && (
                          <button
                            type="button"
                            onClick={() => cancelBooking(booking)}
                            className="rounded-xl border border-amber-300 px-4 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
                          >
                            Cancel
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => removeBooking(booking, index)}
                          className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}

      <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
        <strong className="text-slate-800">Demo environment:</strong>{" "}
        Booking records are stored locally in this browser. Cancellation
        and removal only update this local history. No real reservation,
        payment, or refund is processed.
      </div>
    </div>
  );
}

export default MyBookings;
