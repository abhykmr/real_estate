import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

// Correct default image URL
const defaultImage = "images/download.jpeg"; // Path to the image in the public folder

const PhotoSection = ({ userName }) => {
  const [photo, setPhoto] = useState(defaultImage); // Set the default photo
  const [isEditing, setIsEditing] = useState(false);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Create a URL for the uploaded file
      setPhoto(fileURL); // Update the photo
      setIsEditing(false); // Exit editing mode
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col h-[250px] relative">
      {/* Edit Icon at the Top-Right Corner */}
      <button
        className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 transition-colors duration-200"
        aria-label="Edit Photo"
        onClick={() => setIsEditing(true)}
      >
        <FaEdit className="text-xl" />
      </button>

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Photo</h2>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <img
          src={photo}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-3 object-cover"
        />
        <p className="text-gray-800 font-semibold text-sm">{userName}</p>
      </div>

      {/* File Input for Editing Photo */}
      {isEditing && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center">
          <p className="text-gray-800 mb-3">Upload a new photo:</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-3"
          />
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

// Define PropTypes
PhotoSection.propTypes = {
  userName: PropTypes.string.isRequired, // The user's name
};

export default PhotoSection;
