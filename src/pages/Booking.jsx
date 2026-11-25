import { useState } from "react";
import {
  Link,
  useParams,
  Navigate,
  useNavigate
} from "react-router-dom";

import packages from "../data/packages.json";
import { getPackageById } from "../utils/packageUtils";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = getPackageById(packages, id);

  const [travelers, setTravelers] = useState(1);
  const [travelDate, setTravelDate] = useState("");

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  const subtotal = item.pricePerPerson * travelers;
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  function updateTravelers(value) {
    if (value === "") {
      setTravelers("");
      return;
    }

    const number = Number(value);

    if (Number.isInteger(number) && number >= 1) {
      setTravelers(number);
    }
  }

  function handleBooking(event) {
    event.preventDefault();

    if (!travelDate) {
      alert("Please select your travel date.");
      return;
    }

    if (!Number.isInteger(travelers) || travelers < 1) {
      alert("Please enter a valid number of travelers.");
      return;
    }

    const bookingRef = `TRIP-${Date.now()}`;

    const booking = {
      reference: bookingRef,
      packageId: item.id,
      packageTitle: item.title,
      travelers,
      travelDate,
      subtotal,
      gst,
      total,
      bookedAt: new Date().toISOString()
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, booking])
    );

    navigate(`/confirmation/${bookingRef}`);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Link
        to={`/package/${item.id}`}
        className="text-sm text-emerald-600 hover:underline"
      >
        ← Back to package
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-slate-900">
        Complete Your Booking
      </h1>

      <p className="mt-2 text-slate-600">
        {item.title} · {item.location}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <form
          onSubmit={handleBooking}
          className="space-y-6 rounded-2xl border border-slate-200 p-6 lg:col-span-2"
        >
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Travel Details
            </h2>

            <label className="mt-5 block font-medium text-slate-700">
              Number of Travelers
            </label>

            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                disabled={travelers <= 1}
                onClick={() =>
                  updateTravelers(travelers - 1)
                }
                className="h-11 w-11 rounded-lg border border-slate-300 text-xl font-semibold disabled:cursor-not-allowed disabled:opacity-40"
              >
                −
              </button>

              <input
                type="number"
                min="1"
                step="1"
                value={travelers}
                onChange={(event) =>
                  updateTravelers(event.target.value)
                }
                onBlur={() => {
                  if (travelers === "") {
                    setTravelers(1);
                  }
                }}
                required
                className="h-11 w-28 rounded-lg border border-slate-300 text-center font-semibold outline-none focus:border-emerald-500"
              />

              <button
                type="button"
                onClick={() =>
                  updateTravelers(Number(travelers) + 1)
                }
                className="h-11 w-11 rounded-lg border border-slate-300 text-xl font-semibold hover:bg-slate-100"
              >
                +
              </button>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Enter the total number of travelers, including students,
              teachers or accompanying adults.
            </p>

            <label
              htmlFor="travelDate"
              className="mt-6 block font-medium text-slate-700"
            >
              Travel Date
            </label>

            <input
              id="travelDate"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={travelDate}
              onChange={(event) =>
                setTravelDate(event.target.value)
              }
              required
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </section>

          <button
            type="submit"
            disabled={!Number.isInteger(travelers) || travelers < 1}
            className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Confirm Booking
          </button>
        </form>

        <aside className="h-fit rounded-2xl bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Price Summary
          </h2>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-3">
              <span>Price per person</span>
              <span>
                ₹{item.pricePerPerson.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Travelers</span>
              <span>{travelers || 0}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                ₹{subtotal.toLocaleString("en-IN", {
                  maximumFractionDigits: 2
                })}
              </span>
            </div>

            <div className="flex justify-between">
              <span>GST (5%)</span>
              <span>
                ₹{gst.toLocaleString("en-IN", {
                  maximumFractionDigits: 2
                })}
              </span>
            </div>

            <div className="border-t border-slate-300 pt-4">
              <div className="flex justify-between gap-3 text-lg font-bold">
                <span>Total</span>
                <span>
                  ₹{total.toLocaleString("en-IN", {
                    maximumFractionDigits: 2
                  })}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Booking;
