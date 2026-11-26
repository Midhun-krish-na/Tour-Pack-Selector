import { useState } from "react";
import { Link } from "react-router-dom";

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
    year: "numeric"
  });
}

function formatPrice(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "—";

  return `₹${amount.toLocaleString("en-IN", {
    maximumFractionDigits: 2
  })}`;
}

function MyBookings() {
  const [bookings] = useState(() =>
    readBookings().sort(
      (a, b) => new Date(b.bookedAt || 0) - new Date(a.bookedAt || 0)
    )
  );

  return (
    <div className="mx-auto max-w-5xl">
      <section className="py-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
          Your trips
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          My Bookings
        </h1>

        <p className="mt-2 text-slate-600">
          Review the booking details recorded in this browser.
        </p>
      </section>

      {bookings.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
          <div className="text-5xl" aria-hidden="true">▤</div>

          <h2 className="mt-4 text-xl font-semibold text-slate-900">
            No bookings yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-slate-500">
            Your confirmed demo bookings will appear here after you complete
            the booking form.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Explore Packages
          </Link>
        </section>
      ) : (
        <section className="space-y-5">
          <h2 className="text-lg font-semibold text-slate-900">
            Booking history ({bookings.length})
          </h2>

          {bookings.map((booking, index) => (
            <article
              key={booking.reference || index}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-col justify-between gap-3 border-b border-slate-100 pb-4 sm:flex-row">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    {booking.reference || "Reference unavailable"}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {booking.packageTitle || "Travel package"}
                  </h3>
                </div>

                <span className="h-fit rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                  Demo booking
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 py-5 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-slate-500">Travel date</p>
                  <p className="mt-1 font-semibold">
                    {formatDate(booking.travelDate)}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Travelers</p>
                  <p className="mt-1 font-semibold">
                    {booking.travelers ?? "—"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Booked on</p>
                  <p className="mt-1 font-semibold">
                    {formatDate(booking.bookedAt)}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm text-slate-500">Total amount</p>
                  <p className="text-xl font-bold text-emerald-700">
                    {formatPrice(booking.total)}
                  </p>
                </div>

                {booking.reference && (
                  <Link
                    to={`/confirmation/${encodeURIComponent(booking.reference)}`}
                    className="rounded-xl border border-emerald-600 px-5 py-2.5 text-center text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
                  >
                    View confirmation
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>
      )}

      <p className="mt-8 rounded-xl bg-slate-50 p-4 text-xs text-slate-500">
        Bookings are stored locally in this browser for demonstration
        purposes. They are not synced across devices and do not represent
        real reservations or payments.
      </p>
    </div>
  );
}

export default MyBookings;
