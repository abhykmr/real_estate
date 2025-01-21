import React from "react";

const SocialMediaSection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Social Media
        <button className="text-blue-500">
          <i className="fas fa-edit"></i>
        </button>
      </h2>
      <p className="text-gray-600">
        Link to your various social profiles from your public RealSatisfied
        profile page.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-600 hover:text-blue-500">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
