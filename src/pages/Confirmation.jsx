
import { Link, useParams } from "react-router-dom";
import packages from "../data/packages.json";
import siteConfig from "../config/siteConfig";
import { formatPrice } from "../utils/formatPrice";

function Confirmation() {
  const { ref } = useParams();

  let bookings = [];

  try {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings = Array.isArray(stored) ? stored : [];
  } catch {
    bookings = [];
  }

  const booking = bookings.find((item) => item.reference === ref);

  if (!booking) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <div className="text-5xl">🔎</div>
        <h1 className="mt-5 text-3xl font-bold text-slate-900">
          Booking Not Found
        </h1>
        <p className="mt-3 text-slate-600">
          We couldn't find a booking with this reference number.
        </p>
        <Link
          to="/my-bookings"
          className="mt-7 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          View My Bookings
        </Link>
      </div>
    );
  }

  const isCancelled = booking.status === "cancelled";
  const packageItem = packages.find(
    (item) => String(item.id) === String(booking.packageId)
  );

  const formatDate = (value, options = {}) => {
    if (!value) return "Not specified";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Not specified";

    return date.toLocaleDateString(siteConfig.currency.locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      ...options,
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div
          className={`px-6 py-10 text-center md:px-10 ${
            isCancelled ? "bg-red-50" : "bg-emerald-50"
          }`}
        >
          <div
            className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-4xl font-bold ${
              isCancelled
                ? "bg-red-100 text-red-600"
                : "bg-emerald-100 text-emerald-600"
            }`}
          >
            {isCancelled ? "×" : "✓"}
          </div>

          <p
            className={`mt-6 text-sm font-bold uppercase tracking-widest ${
              isCancelled ? "text-red-600" : "text-emerald-700"
            }`}
          >
            {isCancelled ? "Booking Status" : "Booking Successful"}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            {isCancelled ? "Booking Cancelled" : "You're all set!"}
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-slate-600">
            {isCancelled
              ? "This demo booking has been marked as cancelled."
              : "Your sample booking has been recorded. Here are your trip details."}
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3">
            <span className="text-sm text-slate-500">Reference</span>
            <span className="font-bold tracking-wide text-slate-900">
              {booking.reference}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <section>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-slate-900">
                Your Trip
              </h2>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Trip details
              </span>
            </div>

            {packageItem?.image && (
              <img
                src={packageItem.image}
                alt={booking.packageTitle || "Travel destination"}
                className="mt-5 h-52 w-full rounded-2xl object-cover"
              />
            )}

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              {booking.packageTitle || "Travel package"}
            </h3>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500">Travel Date</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {formatDate(
                    booking.travelDate
                      ? `${booking.travelDate}T00:00:00`
                      : null
                  )}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Number of Travelers</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {booking.travelers ?? "—"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Booking Date</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {formatDate(booking.bookedAt)}
                </p>
              </div>

              {isCancelled && (
                <div>
                  <p className="text-sm text-slate-500">Cancelled On</p>
                  <p className="mt-1 font-semibold text-red-600">
                    {formatDate(booking.cancelledAt)}
                  </p>
                </div>
              )}
            </div>
          </section>

          <div className="my-8 border-t border-dashed border-slate-200" />

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Price Breakdown
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between gap-4 text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">
                  {formatPrice(booking.subtotal)}
                </span>
              </div>

              <div className="flex justify-between gap-4 text-slate-600">
                <span>
                  {siteConfig.tax.name} ({siteConfig.tax.rate * 100}%)
                </span>
                <span className="font-medium text-slate-900">
                  {formatPrice(booking.gst)}
                </span>
              </div>

              <div className="flex justify-between gap-4 border-t border-slate-200 pt-5 text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-emerald-700">
                  {formatPrice(booking.total)}
                </span>
              </div>
            </div>
          </section>

          <div
            role="note"
            className={`mt-8 rounded-2xl p-5 text-sm leading-relaxed ${
              isCancelled
                ? "bg-red-50 text-red-800"
                : "bg-amber-50 text-amber-900"
            }`}
          >
            <p className="font-bold">
              {isCancelled ? "Cancellation notice" : "Demo booking notice"}
            </p>
            <p className="mt-1">
              {isCancelled
                ? "This only updates the local demo booking record. No actual reservation was cancelled and no refund was processed."
                : "This is a demonstration booking flow. No real reservation has been made and no payment has been collected."}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              to="/my-bookings"
              className="rounded-xl border border-emerald-600 px-5 py-3 text-center font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              View My Bookings
            </Link>

            <Link
              to="/"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Explore More Trips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
