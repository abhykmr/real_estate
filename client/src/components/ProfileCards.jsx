// Card.js
import React from "react";
import PropTypes from "prop-types";

const Card = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="bg-gray-50 shadow rounded-lg w-[200px] h-[200px] flex flex-col items-center justify-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-24 h-24 rounded-lg w-[150px] h-[100px] mb-2 object-cover"
      />
      <h3 className="text-md font-medium text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
