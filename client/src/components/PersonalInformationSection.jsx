import React from "react";

const PersonalInformationSection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Personal Information
        <button className="text-blue-500">
          <i className="fas fa-edit"></i>
        </button>
      </h2>
      <p>
        <strong>First Name:</strong> Susan
      </p>
      <p>
        <strong>Last Name:</strong> Green
      </p>
      <p>
        <strong>Title:</strong> Real Estate Agent
      </p>
      <p>
        <strong>License Number:</strong> 85474662
      </p>
      <p>
        <strong>Email Address:</strong> support@realsatisfied.com
      </p>
      <p>
        <strong>Phone Number:</strong> (555) 667-6554
      </p>
    </div>
  );
};

export default PersonalInformationSection;
