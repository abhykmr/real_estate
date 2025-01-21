// PhotoSection.js
import React from "react";
import PropTypes from "prop-types";

const PhotoSection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col h-[250px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Photo</h2>
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          aria-label="Edit Photo"
        >
          <i className="fas fa-edit"></i>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <img
          src="img-1.jpg"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-3 object-cover"
        />
        <label className="text-gray-600 flex items-center space-x-1 text-sm">
          <input type="checkbox" className="form-checkbox text-blue-500" />
          <span>Display REALTOR® Logo?</span>
        </label>
      </div>
    </div>
  );
};

// Define PropTypes (if any props are added in the future)
PhotoSection.propTypes = {
  // Currently, there are no props. Add them here when needed.
};

export default PhotoSection;
