import React, { useState } from "react";
import {
  FaEdit,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXing,
  FaPinterest,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

const SocialMediaSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    youtube: "",
    x: "",
    pinterest: "",
  });
  const [currentPlatform, setCurrentPlatform] = useState("");
  const [currentLink, setCurrentLink] = useState(""); // Store the link being added/edited
  const [showDeletePopup, setShowDeletePopup] = useState(null); // Track which platform's delete popup is visible

  // Open the editing pop-up
  const toggleEditing = () => {
    setIsEditing(!isEditing);
    setCurrentPlatform("");
    setCurrentLink("");
  };

  // Open the delete popup for a specific platform
  const handleShowDeletePopup = (e, platform) => {
    e.preventDefault(); // Prevent default context menu
    setShowDeletePopup(platform); // Show delete popup for the specific platform
  };

  // Close the delete popup
  const handleClosePopup = () => {
    setShowDeletePopup(null); // Close the delete popup
  };

  // Handle saving the social media link
  const handleSaveLink = () => {
    setSocialLinks({ ...socialLinks, [currentPlatform]: currentLink });
    setIsEditing(false); // Close the editing popup
  };

  // Handle removing a social media link
  const handleRemoveLink = (platform) => {
    setSocialLinks({ ...socialLinks, [platform]: "" });
    handleClosePopup(); // Close the delete popup
  };

  return (
    <div
      className="bg-white shadow rounded-lg p-4 relative"
      onClick={handleClosePopup} // Close delete popup when clicking outside
    >
      {/* Header with Edit Icon */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Social Media
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          onClick={toggleEditing}
          aria-label="Edit Social Media"
        >
          <FaEdit className="text-xl" />
        </button>
      </h2>
      <p className="text-gray-600">
        Link to your various social profiles from your public RealSatisfied
        profile page.
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-4">
        {Object.entries(socialLinks).map(([platform, link]) =>
          link ? (
            <div key={platform} className="relative">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${
                  platform === "facebook"
                    ? "text-blue-600"
                    : platform === "instagram"
                    ? "text-pink-600"
                    : platform === "youtube"
                    ? "text-red-600"
                    : platform === "x"
                    ? "text-gray-700"
                    : "text-red-600"
                }`}
                onContextMenu={(e) => handleShowDeletePopup(e, platform)} // Right-click to show delete popup
              >
                {platform === "facebook" && <FaFacebook />}
                {platform === "instagram" && <FaInstagram />}
                {platform === "youtube" && <FaYoutube />}
                {platform === "x" && <FaXing />}
                {platform === "pinterest" && <FaPinterest />}
              </a>

              {/* Delete Popup */}
              {showDeletePopup === platform && (
                <div
                  className="absolute bg-white shadow-md rounded-lg p-2 z-50 top-full mt-2"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                  <button
                    onClick={() => handleRemoveLink(platform)}
                    className="text-red-600 hover:text-red-800"
                    aria-label={`Delete ${platform}`}
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </div>
              )}
            </div>
          ) : null
        )}
      </div>

      {/* Editing Pop-up */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={toggleEditing}
              aria-label="Close"
            >
              <FaTimes className="text-2xl" />
            </button>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Edit Social Media Links
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {Object.entries({
                facebook: FaFacebook,
                instagram: FaInstagram,
                youtube: FaYoutube,
                x: FaXing,
                pinterest: FaPinterest,
              }).map(([platform, Icon]) => (
                <button
                  key={platform}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                  onClick={() => {
                    setCurrentPlatform(platform);
                    setCurrentLink(socialLinks[platform] || "");
                  }}
                >
                  <Icon className="text-2xl" />
                  <span className="capitalize">{platform}</span>
                </button>
              ))}
            </div>

            {/* Input for Social Media Link */}
            {currentPlatform && (
              <div>
                <label className="block text-gray-800 mb-2">
                  Enter your {currentPlatform} link:
                </label>
                <input
                  type="text"
                  value={currentLink}
                  onChange={(e) => setCurrentLink(e.target.value)}
                  placeholder={`https://www.${currentPlatform}.com/your-profile`}
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            )}

            {/* Save and Cancel Buttons */}
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={toggleEditing}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveLink}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                disabled={!currentLink} // Disable Save if no link is entered
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaSection;
