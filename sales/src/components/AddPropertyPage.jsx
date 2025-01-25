import React, { useState } from "react";

const AddPropertyPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: null,
  });
  const [properties, setProperties] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new property entry
    const newProperty = {
      ...formData,
      image: formData.image ? URL.createObjectURL(formData.image) : null,
    };

    // Add the new property to the list
    setProperties([...properties, newProperty]);

    // Reset form
    setFormData({
      title: "",
      location: "",
      price: "",
      description: "",
      image: null,
    });

    alert("Property details added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Add Your Property
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Property Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Property Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter property title"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter property location"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter property price"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter property description"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Property
          </button>
        </form>
      </div>

      {/* Display Added Properties */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Added Properties</h2>
        {properties.length === 0 ? (
          <p className="text-gray-600">No properties added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col"
              >
                {property.image && (
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="text-sm text-gray-600 mb-2">${property.price}</p>
                <p className="text-gray-700">{property.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPropertyPage;
