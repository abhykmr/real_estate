import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        About
        <button className="text-blue-500">
          <i className="fas fa-edit"></i>
        </button>
      </h2>
      <p className="text-gray-600">Tell us more about yourself.</p>
    </div>
  );
};

export default AboutSection;
