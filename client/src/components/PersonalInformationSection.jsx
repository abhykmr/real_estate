import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

const countryOptions = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
];

const PersonalInformationSection = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [countryCode, setCountryCode] = useState(data.countryCode || "+91");
  const [phone, setPhone] = useState(data.phone);
  const [bio, setBio] = useState(data.bio);
  const [title, setTitle] = useState(data.title);
  const [licenseNumber, setLicenseNumber] = useState(data.licenseNumber || "");

  const phoneInputRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setCountryCode(data.countryCode || "+91");
    setPhone(data.phone);
    setBio(data.bio);
    setTitle(data.title);
    setLicenseNumber(data.licenseNumber || "");
    setIsEditing(false);
  };

  const handleSave = () => {
    const phoneRegex = new RegExp(`^\\${countryCode}\\s\\d{10}$`);
    if (!phoneRegex.test(`${countryCode} ${phone}`)) {
      alert(
        `Please enter a valid phone number in the format ${countryCode} 9876543210.`
      );
      return;
    }
    setIsEditing(false);
    alert("Personal information updated successfully!");
  };

  useEffect(() => {
    if (isEditing && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, [isEditing]);

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
        aria-label="Edit Personal Information"
      >
        <FaEdit className="text-xl" />
      </button>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Personal Information
        </h2>
      </div>

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
          <br />
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              aria-label="Edit Title"
              placeholder="Enter your title"
            />
          ) : (
            title
          )}
          <br />
          <br />
        </div>
        <div>
          <span className="font-semibold">License Number:</span>
          <br />
          {isEditing ? (
            <input
              type="text"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              aria-label="Edit License Number"
              placeholder="Enter your license number (optional)"
            />
          ) : licenseNumber ? (
            licenseNumber
          ) : (
            "Not provided"
          )}
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
          {isEditing ? (
            <>
              <div className="flex items-center space-x-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  aria-label="Select Country Code"
                >
                  {countryOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.name} ({option.code})
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                  aria-label="Edit Phone Number"
                  ref={phoneInputRef}
                  placeholder="9876543210"
                />
              </div>
            </>
          ) : (
            `${countryCode} ${phone}`
          )}
          <br />
          <br />
        </div>
        <div>
          <span className="font-semibold">Bio:</span>
          <br />
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
      </div>

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

PersonalInformationSection.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    licenseNumber: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    countryCode: PropTypes.string,
  }).isRequired,
};

export default PersonalInformationSection;
