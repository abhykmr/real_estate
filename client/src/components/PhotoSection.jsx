import React from "react";

const PhotoSection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Photo
        <button className="text-blue-500">
          <i className="fas fa-edit"></i>
        </button>
      </h2>
      <div className="flex flex-col items-center">
        <img
          src="img-1.jpg"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
        <label className="text-gray-600 flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-blue-500" />
          <span>Display REALTOR® Logo?</span>
        </label>
      </div>
    </div>
  );
};

export default PhotoSection;
