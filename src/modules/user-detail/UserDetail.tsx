import { findMatchingRoute } from "../router";

export const UserDetail = () => {
  const { params } = findMatchingRoute(window.location.pathname) || {};
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">User Detail Page{JSON.stringify(params)}</h1>
      <p className="text-gray-700">This is the user detail page where you can view user-specific information.</p>
    </div>
  );
}