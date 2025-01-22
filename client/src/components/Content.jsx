import { Link } from "react-router-dom";

const OverlayContent = () => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the best properties at unbeatable prices.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by city, neighborhood, or ZIP code"
            className="w-full md:w-auto flex-1 px-4 py-2 rounded-md text-gray-700"
          />
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
            Search
          </button>
        </div>
        <Link to="/our-project">
          <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
            View Listings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OverlayContent;
