// ProfileDetails.jsx
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const ProfileDetails = ({ email, phone, bio }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Contact Information
      </h2>
      <p className="text-gray-600 mt-2">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600 mt-2">
        <strong>Phone:</strong> {phone}
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mt-6">Bio</h2>
      <p className="text-gray-600 mt-2">{bio}</p>
    </div>
  );
};

// Add PropTypes for validation
ProfileDetails.propTypes = {
  email: PropTypes.string.isRequired, // Email must be a required string
  phone: PropTypes.string.isRequired, // Phone must be a required string
  bio: PropTypes.string.isRequired, // Bio must be a required string
};

export default ProfileDetails;
