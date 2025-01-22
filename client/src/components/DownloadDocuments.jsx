import React from "react";

// Separate function to handle download
const handleDownload = (fileName) => {
  const link = document.createElement("a");
  link.href = `/${fileName}`; // Access files in the public folder
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadPhoto = ({ fileName }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg transform transition-all duration-500 hover:scale-110 hover:bg-blue-600 animate-pulse"
        onClick={() => handleDownload(fileName)} // Call the separated function here
      >
        Download documents
      </button>
    </div>
  );
};

export default DownloadPhoto;
