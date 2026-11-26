import { Link, useParams } from "react-router-dom";

function Confirmation() {
  const { ref } = useParams();

  let bookings = [];

  try {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings = Array.isArray(stored) ? stored : [];
  } catch {
    bookings = [];
  }

  const booking = bookings.find(
    (item) => item.reference === ref
  );

  if (!booking) {
    return (
      <div className="mx-auto max-w-xl py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Booking Not Found
        </h1>

        <p className="mt-3 text-slate-600">
          We couldn't find a booking with this reference number.
        </p>

        <Link
          to="/my-bookings"
          className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          My Bookings
        </Link>
      </div>
    );
  }

  const isCancelled = booking.status === "cancelled";

  const travelDate = booking.travelDate
    ? new Date(`${booking.travelDate}T00:00:00`)
    : null;

  const formattedDate =
    travelDate && !Number.isNaN(travelDate.getTime())
      ? travelDate.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })
      : "Not specified";

  const formatPrice = (amount) => {
    const value = Number(amount);

    if (!Number.isFinite(value)) return "—";

    return `₹${value.toLocaleString("en-IN", {
      maximumFractionDigits: 2
    })}`;
  };

  return (
    <div className="mx-auto max-w-3xl py-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">

        <div className="text-center">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl ${
              isCancelled
                ? "bg-red-100 text-red-600"
                : "bg-emerald-100 text-emerald-600"
            }`}
          >
            {isCancelled ? "×" : "✓"}
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            {isCancelled ? "Booking Cancelled" : "Booking Confirmed!"}
          </h1>

          <p className="mt-3 text-slate-600">
            {isCancelled
              ? "This demo booking has been marked as cancelled."
              : "Your booking has been successfully recorded."}
          </p>

          <p className="mt-5 inline-block rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Reference: {booking.reference}
          </p>
        </div>

        <div className="my-8 border-t border-slate-200" />

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            Trip Details
          </h2>

          <div className="mt-5 space-y-4">
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Destination</span>
              <span className="text-right font-medium text-slate-900">
                {booking.packageTitle || "Travel package"}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Travel Date</span>
              <span className="text-right font-medium text-slate-900">
                {formattedDate}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Travelers</span>
              <span className="font-medium text-slate-900">
                {booking.travelers ?? "—"}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Booking Date</span>
              <span className="text-right font-medium text-slate-900">
                {booking.bookedAt
                  ? new Date(booking.bookedAt).toLocaleDateString("en-IN")
                  : "Not specified"}
              </span>
            </div>

            {isCancelled && (
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Cancelled On</span>
                <span className="text-right font-medium text-red-600">
                  {booking.cancelledAt
                    ? new Date(booking.cancelledAt).toLocaleDateString("en-IN")
                    : "Not specified"}
                </span>
              </div>
            )}
          </div>
        </section>

        <div className="my-8 border-t border-slate-200" />

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            Payment Summary
          </h2>

          <div className="mt-5 space-y-4">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>
              <span>{formatPrice(booking.subtotal)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">GST (5%)</span>
              <span>{formatPrice(booking.gst)}</span>
            </div>

            <div className="flex justify-between border-t border-slate-200 pt-4 text-lg font-bold">
              <span>Total Amount</span>
              <span className="text-emerald-600">
                {formatPrice(booking.total)}
              </span>
            </div>
          </div>
        </section>

        <div
          className={`mt-8 rounded-xl p-4 text-sm ${
            isCancelled
              ? "bg-red-50 text-red-800"
              : "bg-amber-50 text-amber-800"
          }`}
        >
          {isCancelled ? (
            <>
              <strong>Cancellation notice:</strong> This only updates the
              local demo booking record. No actual reservation was cancelled
              and no refund was processed.
            </>
          ) : (
            <>
              <strong>Demo notice:</strong> This is a simulated frontend
              booking confirmation. No actual reservation or payment
              has been processed.
            </>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            to="/my-bookings"
            className="rounded-xl border border-emerald-600 px-5 py-3 text-center font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            My Bookings
          </Link>

          <Link
            to="/"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
          >
            Explore More Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
