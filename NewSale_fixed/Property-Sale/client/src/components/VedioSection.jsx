import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaSave } from "react-icons/fa";

const VideoSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [videoFile, setVideoFile] = useState(null); // Store the uploaded video file
  const [newVideoFile, setNewVideoFile] = useState(null); // Temporary state for new video file

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setNewVideoFile(videoFile); // Set current video file as default in editing mode
  };

  // Handle video file selection
  const handleFileChange = (event) => {
    setNewVideoFile(event.target.files[0]);
  };

  // Handle video deletion
  const handleDeleteVideo = () => {
    setVideoFile(null);
    setNewVideoFile(null);
    setIsEditing(false); // Exit editing mode
  };

  // Save changes
  const handleSaveClick = () => {
    setVideoFile(newVideoFile); // Update the video file
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div
      className="bg-white shadow rounded-lg p-4 relative"
      style={{ height: "300px" }}
    >
      {/* Header with Edit Icon */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Video Section
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          onClick={handleEditClick}
          aria-label="Edit Video"
        >
          <FaEdit className="text-xl" />
        </button>
      </h2>

      {isEditing && (
        <div className="mb-4">
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 mb-2"
          />
          <div className="mt-2">
            <button
              onClick={handleDeleteVideo}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 mr-2"
            >
              <FaTrashAlt className="inline mr-2" /> Delete Video
            </button>
            <button
              onClick={handleSaveClick}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <FaSave className="inline mr-2" /> Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Video Display or Placeholder Section */}
      {videoFile ? (
        <div className="video-container h-full flex items-center justify-center">
          <video controls className="w-full rounded-md h-full object-cover">
            <source
              src={URL.createObjectURL(videoFile)}
              type={videoFile.type}
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="h-full flex items-center justify-center">
          <p className="italic">No video uploaded</p>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
