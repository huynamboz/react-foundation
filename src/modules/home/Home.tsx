import { Link } from "../router/Link";

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-gray-700 mb-4">This is the home page of your application.</p>
      
      <div className="space-x-4">
        <Link to="/about" className="text-blue-500 hover:underline">
          Go to About
        </Link>
        <Link to="/users/123" className="text-green-500 hover:underline">
          View User 123
        </Link>
      </div>
    </div>
  );
};