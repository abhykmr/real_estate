import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";

const QuoteSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [quote, setQuote] = useState("Boston's Top Real Estate Agent"); // Default quote
  const [newQuote, setNewQuote] = useState(quote); // Temporary state for editing

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setNewQuote(quote); // Reset the input field to current quote when editing is toggled
  };

  // Save the updated quote
  const handleSaveClick = () => {
    setQuote(newQuote); // Update the quote
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 relative">
      {/* Header with Edit Icon */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Quote
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          onClick={handleEditClick}
          aria-label="Edit Quote"
        >
          <FaEdit className="text-xl" />
        </button>
      </h2>

      {/* Quote Section */}
      {!isEditing ? (
        <p className="italic">{quote}</p> // Display the current quote
      ) : (
        <div>
          <textarea
            value={newQuote}
            onChange={(e) => setNewQuote(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Enter your quote"
            rows={3}
          />
          <div className="mt-2 flex justify-end space-x-2">
            <button
              onClick={handleEditClick}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteSection;
