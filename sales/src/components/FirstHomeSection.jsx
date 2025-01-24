import React from "react";

const FirstHomeSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/your-image-path.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4 text-center">
        Find Your Perfect Home
      </h1>
      <p className="text-xl mb-6 text-center">
        Discover the best real estate deals in your area with ease.
      </p>
      <div className="flex gap-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600">
          Buy Property
        </button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
          Contact an Agent
        </button>
      </div>
    </div>
  );
};

export default FirstHomeSection;
