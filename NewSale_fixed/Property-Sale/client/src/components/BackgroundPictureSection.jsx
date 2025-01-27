// BackgroundPictureSection.js
import React from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa"; // Import edit icon
import { useNavigate } from "react-router-dom"; // For navigation
import Card from "./ProfileCards"; // Ensure the path is correct
import AddPropertyCard from "./AddPropertyCard"; // Import the AddPropertyCard component

const BackgroundPictureSection = () => {
  const navigate = useNavigate(); // React Router's navigate function

  // Handler for adding a new property
  const handleAddProperty = () => {
    // Navigate to the Project.jsx page in the pages folder
    navigate("/our-project");
    // Implement the logic to add a new property
    // For example, open a modal or navigate to an add property form
    // console.log("Add Property button clicked");
    // Example: Open a modal (assuming you have a modal component)
    // setShowModal(true);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col h-auto relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-800">MY PROPERTIES</h1>

        <div className="flex items-center space-x-2">
          <button
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            aria-label="Edit My Properties"
            onClick={() => {
              // Implement edit functionality
              // console.log("Edit My Properties button clicked");
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-start gap-4">
        {/* Existing Property Cards */}
        <Card
          imageSrc="images/img-11.jpg"
          imageAlt="Property 1"
          title="Property 1"
          description="Description of Property 1"
        />
        <Card
          imageSrc="/images/img-3.jpg"
          imageAlt="Property 2"
          title="Property 2"
          description="Description of Property 2"
        />

        {/* Add Property Card */}
        <AddPropertyCard onAdd={handleAddProperty} />
      </div>
    </div>
  );
};

// Define PropTypes
BackgroundPictureSection.propTypes = {
  // Currently, there are no props. Add them here when needed.
};

export default BackgroundPictureSection;
