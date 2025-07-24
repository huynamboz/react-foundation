import { Link } from "../router/Link";

export const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">404 Not Found</h1>
      <p className="text-gray-700">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
}