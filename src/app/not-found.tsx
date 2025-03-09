export default function NotFound() {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 px-6">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-lg text-gray-600">Oops! Page not found.</p>
        <p className="mt-1 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    );
  }
  