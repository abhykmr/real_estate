import React, { useState } from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    location: "",
    priceRange: "",
    possession: "",
    floorPlan: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProject({ ...newProject, image: e.target.files[0] });
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.description) {
      alert("Title and Description are required!");
      return;
    }
    setProjects([...projects, newProject]);
    setNewProject({
      title: "",
      description: "",
      location: "",
      priceRange: "",
      possession: "",
      floorPlan: "",
      image: null,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {/* Display Existing Projects */}
      <div className="mb-10">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 mb-4 bg-white shadow"
            >
              {project.image && (
                <img
                  src={URL.createObjectURL(project.image)}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-gray-800">
                <strong>Location:</strong> {project.location}
              </p>
              <p className="text-gray-800">
                <strong>Price Range:</strong> {project.priceRange} INR
              </p>
              <p className="text-gray-800">
                <strong>Possession:</strong> {project.possession}
              </p>
              <p className="text-gray-800">
                <strong>Floor Plan:</strong> {project.floorPlan}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects added yet.</p>
        )}
      </div>

      {/* Add New Project */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={newProject.title}
            onChange={handleInputChange}
            placeholder="Project Title"
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="location"
            value={newProject.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="priceRange"
            value={newProject.priceRange}
            onChange={handleInputChange}
            placeholder="Price Range (INR)"
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="possession"
            value={newProject.possession}
            onChange={handleInputChange}
            placeholder="Possession Date"
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="floorPlan"
            value={newProject.floorPlan}
            onChange={handleInputChange}
            placeholder="Floor Plan"
            className="p-2 border rounded w-full"
          />
          <textarea
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
            placeholder="Project Description"
            className="p-2 border rounded w-full sm:col-span-2"
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 border rounded w-full sm:col-span-2"
          />
        </div>
        <button
          onClick={handleAddProject}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
