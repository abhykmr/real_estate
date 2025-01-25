import React from "react";

const HomePage = () => (
  <div
    className="min-h-screen bg-gray-100 bg-cover bg-center"
    style={{ backgroundImage: "url('/pexels-pixabay-326311.jpg')" }}
  >
    {/* Navbar */}
    

    {/* Main Content */}
    <div className="p-6 bg-white bg-opacity-90 rounded-xl shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Welcome to Land to Lavish!
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Maximize your property sales potential — upload your listings and let buyers find you effortlessly!
      </p>

      {/* Image Slider */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <ImageSlider />
      </div>
    </div>
  </div>
);

export default Home;
