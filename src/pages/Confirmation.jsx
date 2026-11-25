import { Link, useParams } from "react-router-dom";

function Confirmation() {
  const { ref } = useParams();

  const bookings = JSON.parse(
    localStorage.getItem("bookings") || "[]"
  );

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
          to="/"
          className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Explore Packages
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(
    `${booking.travelDate}T00:00:00`
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const formatPrice = (amount) =>
    `₹${amount.toLocaleString("en-IN", {
      maximumFractionDigits: 2
    })}`;

  return (
    <div className="mx-auto max-w-3xl py-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
            ✓
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Booking Confirmed!
          </h1>

          <p className="mt-3 text-slate-600">
            Your booking has been successfully recorded.
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
                {booking.packageTitle}
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
                {booking.travelers}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Booking Date</span>
              <span className="text-right font-medium text-slate-900">
                {new Date(booking.bookedAt).toLocaleDateString("en-IN")}
              </span>
            </div>
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

        <div className="mt-8 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
          <strong>Demo notice:</strong> This is a simulated frontend
          booking confirmation. No actual reservation or payment
          has been processed.
        </div>

        <Link
          to="/"
          className="mt-8 block rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
        >
          Explore More Destinations
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
