// EditProfileButton.jsx
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const EditProfileButton = ({ onEdit }) => {
  return (
    <div className="edit-profile-button">
      <button onClick={onEdit} className="btn btn-primary">
        Edit Profile
      </button>
    </div>
  );
};

// Add PropTypes validation for the 'onEdit' prop
EditProfileButton.propTypes = {
  onEdit: PropTypes.func.isRequired, // Validate that onEdit is a required function
};

export default EditProfileButton;
