import React, { useState } from "react";

const ImageSlider = () => {
  const [images, setImages] = useState([
    "/pexels-photo-87223.webp",
    "/pic 2.jpg",
    "/pexels-heyho-7031413.jpg",
  ]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 3) {
      setSelectedFiles(files);
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages(newImages); // Update images with user uploads
    } else {
      alert("Please select exactly 3 images.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Add Images of Your Projects
      </h2>

      {/* Image Slider */}
      <div className="flex space-x-4 overflow-x-auto mb-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-64 h-40 flex-shrink-0 border border-gray-300 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Plus Icon for File Input */}
      <div className="relative mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
          multiple
        />
        <div className="w-16 h-16 bg-gray-100 text-gray-600 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out">
          <span className="text-3xl font-bold">+</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">Click to upload 3 images.</p>
    </div>
  );
};

export default ImageSlider;
