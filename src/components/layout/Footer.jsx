import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-20 text-slate-600 border-2 border-b-gray-500">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-lg font-black text-white shadow-sm">
                T
              </span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Travel Explorer
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Discover destinations, explore travel packages and plan your
              next escape with ease.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Explore
            </h2>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="transition hover:text-emerald-700">
                  Browse packages
                </Link>
              </li>
              <li>
                <Link to="/saved" className="transition hover:text-emerald-700">
                  Saved trips
                </Link>
              </li>
              <li>
                <Link
                  to="/my-bookings"
                  className="transition hover:text-emerald-700"
                >
                  My bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Support
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Have questions or need assistance?
            </p>

            <a
              href="mailto:crycious.official@gmail.com"
              className="mt-3 inline-block text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              crycious.official@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-xs leading-5 text-slate-500">
            Demo notice: This application demonstrates a frontend travel
            booking experience. Bookings are stored locally in your browser.
            No real reservations or payments are processed.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Travel Explorer. All rights reserved.
            </p>
            <p>
              Published by{" "}
              <span className="font-semibold text-slate-800">CRYCIOUS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;