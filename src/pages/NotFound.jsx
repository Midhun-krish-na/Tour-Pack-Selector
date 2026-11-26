import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[65vh] items-center justify-center px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
          Page not found
        </p>

        <h1 className="mt-4 text-8xl font-extrabold tracking-tight text-slate-200">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-bold text-slate-900">
          Looks like you've taken a wrong turn.
        </h2>

        <p className="mt-3 leading-relaxed text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Back to Explore
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
