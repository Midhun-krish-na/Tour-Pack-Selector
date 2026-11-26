import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-lg font-black text-white shadow-sm">
                {siteConfig.brand.appName.charAt(0)}
              </span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                {siteConfig.brand.appName}
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Discover destinations, explore travel packages and plan your
              next escape with ease.
            </p>
          </div>

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

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Support
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Have questions or need assistance?
            </p>

            <a
              href={`mailto:${siteConfig.brand.supportEmail}`}
              className="mt-3 inline-block text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              {siteConfig.brand.supportEmail}
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
              © {CURRENT_YEAR} {siteConfig.brand.appName}. All
              rights reserved.
            </p>
            <p>
              Published by{" "}
              <span className="font-semibold text-slate-800">
                {siteConfig.brand.publisher}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
