import React, { useState } from "react";

const ImageSlider = () => {
  const [images, setImages] = useState([
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
  ]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 3) {
      setSelectedFiles(files);
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages(newImages);
    } else {
      alert("Please select exactly 3 images.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Add images of your projects
      </h2>

      {/* Image Slider */}
      <div className="flex space-x-4 overflow-x-auto mb-4">
        {images.map((image, index) => (
          <div key={index} className="w-64 h-40 flex-shrink-0">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
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
        <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out">
          <span className="text-3xl">+</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">Click to upload 3 images.</p>
    </div>
  );
};

export default ImageSlider;
