// PersonalInformationSection.js
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const PersonalInformationSection = ({ data }) => {
  // Local state to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // Local state to manage Phone and Bio inputs
  const [phone, setPhone] = useState(data.phone);
  const [bio, setBio] = useState(data.bio);

  // Reference to the Phone input field for focus management
  const phoneInputRef = useRef(null);

  // Handler to toggle editing mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handler to cancel editing
  const handleCancel = () => {
    // Revert changes
    setPhone(data.phone);
    setBio(data.bio);
    setIsEditing(false);
  };

  // Handler to save changes
  const handleSave = () => {
    // Simple validation for Phone number (e.g., must be in the format (123) 456-7890)
    const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number in the format (123) 456-7890.");
      return;
    }

    // Prepare updated data (if you plan to use it elsewhere)
    // Since we're managing state locally, this step is optional
    // const updatedData = {
    //   ...data,
    //   phone,
    //   bio,
    // };
    // You can perform actions with updatedData here if needed

    // Exit editing mode
    setIsEditing(false);
    alert("Personal information updated successfully!");
  };

  // Focus on the Phone input field when entering editing mode
  useEffect(() => {
    if (isEditing && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, [isEditing]);

  // Handle Esc key to cancel editing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isEditing && e.key === "Escape") {
        handleCancel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEditing]);

  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col relative min-h-[450px]">
      {/* Edit Icon at the Top-Right Corner */}
      <button
        className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 transition-colors duration-200"
        onClick={handleEditClick}
        aria-label="Edit Phone and Bio"
      >
        <i className="fas fa-edit text-xl"></i>
      </button>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Personal Information
        </h2>
        {/* Optional: Remove the existing edit button if you prefer only one edit icon */}
        {/*
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          aria-label="Edit Personal Information"
          onClick={handleEditClick}
        >
          <i className="fas fa-edit"></i>
        </button>
        */}
      </div>

      {/* Content */}
      <div className="space-y-2 overflow-auto">
        <div>
          <span className="font-semibold">First Name:</span> <br /> {data.name}
          <br />
          <br />
          <span className="font-semibold">Last Name:</span>
          <br />
          {data.lastName}
          <br />
          <br />
        </div>
        <div>
          <span className="font-semibold">Title:</span>
          <br /> {data.title}
          <br />
          <br />
        </div>
        <div>
          <span className="font-semibold">License Number:</span>
          <br />
          {data.licenseNumber}
          <br />
          <br />
        </div>
        <div>
          <span className="font-semibold">Email:</span>
          <br /> {data.email}
          <br />
          <br />
        </div>
        <div>
          <span className="font-semibold">Phone:</span>
          <br />
          {/* Conditionally render Phone number */}
          {isEditing ? (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              aria-label="Edit Phone Number"
              ref={phoneInputRef}
            />
          ) : (
            phone
          )}
          <br />
          <br />
        </div>
        <div>
          <span className="font-semibold">Bio:</span>
          <br />
          {/* Conditionally render Bio */}
          {isEditing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              aria-label="Edit Bio"
            ></textarea>
          ) : (
            bio
          )}
          <br />
          <br />
        </div>
        {/* Add more content here if needed */}
      </div>

      {/* Save and Cancel Buttons (visible only in editing mode) */}
      {isEditing && (
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

// Define PropTypes without the onEdit prop
PersonalInformationSection.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    licenseNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
  // Removed onEdit prop
  // onEdit: PropTypes.func.isRequired,
};

export default PersonalInformationSection;
