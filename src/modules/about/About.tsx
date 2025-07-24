import { Link } from "../router/Link";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">
        This is the about page of your application. Here you can provide information about your project, team, or anything else relevant.
      </p>
      
      <div className="mt-4">
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};