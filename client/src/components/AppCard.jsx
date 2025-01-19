import React from "react";

const AppCard = ({ app }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      {/* Image */}
      <div className="w-full h-48">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold mb-2">{app.title}</h3>
        <p className="text-gray-600 mb-4">{app.description}</p>
        <a
          href={app.buttonLink}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {app.buttonText}
        </a>
      </div>
    </div>
  );
};

export default AppCard;
