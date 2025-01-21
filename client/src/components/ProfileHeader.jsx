// ProfileHeader.jsx
// ProfileHeader.jsx
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const ProfileHeader = ({ name, role }) => {
  return (
    <div className="text-center bg-white shadow-md rounded-lg p-6">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

// Add PropTypes for validation
ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired, // Validate that name is a required string
  role: PropTypes.string.isRequired, // Validate that role is a required string
};

export default ProfileHeader;
