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

  function cancelBooking(booking, index) {
    const confirmed = window.confirm(
      `Are you sure you want to cancel booking ${booking.reference || ""}?`
    );

    if (!confirmed) return;

    const updatedBookings = bookings.map((item, itemIndex) => {
      const isTarget = booking.reference
        ? item.reference === booking.reference
        : itemIndex === index;

      return isTarget
        ? { ...item, status: "cancelled", cancelledAt: new Date().toISOString() }
        : item;
    });

    saveBookings(updatedBookings);
  }

  function removeBooking(booking, index) {
    const confirmed = window.confirm(
      "Permanently remove this booking from your browser history? This cannot be undone."
    );

    if (!confirmed) return;

    const updatedBookings = bookings.filter((item, itemIndex) => {
      if (booking.reference) {
        return item.reference !== booking.reference;
      }

      return itemIndex !== index;
    });

    saveBookings(updatedBookings);
  }

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
          Review and manage the booking details recorded in this browser.
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

          {bookings.map((booking, index) => {
            const isCancelled = booking.status === "cancelled";

            return (
              <article
                key={booking.reference || index}
                className={`rounded-2xl border bg-white p-5 shadow-sm sm:p-6 ${
                  isCancelled
                    ? "border-red-200"
                    : "border-slate-200"
                }`}
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

                  <span
                    className={`h-fit rounded-full px-3 py-1 text-xs font-semibold ${
                      isCancelled
                        ? "bg-red-50 text-red-700"
                        : "bg-amber-50 text-amber-800"
                    }`}
                  >
                    {isCancelled ? "Cancelled" : "Demo booking"}
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

                {isCancelled && (
                  <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    Cancelled on {formatDate(booking.cancelledAt)}.
                  </p>
                )}

                <div className="flex flex-col justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm text-slate-500">Total amount</p>
                    <p className="text-xl font-bold text-emerald-700">
                      {formatPrice(booking.total)}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    {booking.reference && (
                      <Link
                        to={`/confirmation/${encodeURIComponent(booking.reference)}`}
                        className="rounded-xl border border-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
                      >
                        View confirmation
                      </Link>
                    )}

                    {!isCancelled && (
                      <button
                        type="button"
                        onClick={() => cancelBooking(booking, index)}
                        className="rounded-xl border border-amber-500 px-4 py-2.5 text-sm font-semibold text-amber-700 hover:bg-amber-50"
                      >
                        Cancel booking
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => removeBooking(booking, index)}
                      className="rounded-xl border border-red-300 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}

      <p className="mt-8 rounded-xl bg-slate-50 p-4 text-xs text-slate-500">
        Bookings are stored locally in this browser for demonstration
        purposes. Cancelling or removing a booking only changes this local
        history. It does not contact a travel provider or process a refund.
      </p>
    </div>
  );
}

export default MyBookings;
