import React from "react";

const QuoteSection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Quote
        <button className="text-blue-500">
          <i className="fas fa-edit"></i>
        </button>
      </h2>
      <p className="italic">Boston's Top Real Estate Agent</p>
    </div>
  );
};

export default QuoteSection;
