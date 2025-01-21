// AddPropertyCard.js
import React from "react";
import PropTypes from "prop-types";

const AddPropertyCard = ({ onAdd }) => {
  return (
    <div
      className="bg-gray-100 shadow rounded-lg w-[200px] h-[200px] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200"
      onClick={onAdd}
      role="button"
      aria-label="Add New Property"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
  );
};

AddPropertyCard.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddPropertyCard;
