import React from "react";

const BackgroundPictureSection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Background Picture
        <button className="text-blue-500">
          <i className="fas fa-edit"></i>
        </button>
      </h2>
      <img
        src="https://via.placeholder.com/400x200"
        alt="Background"
        className="w-full h-40 object-cover rounded-lg"
      />
    </div>
  );
};

export default BackgroundPictureSection;
