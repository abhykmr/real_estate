// src/components/ProjectDetail.js
import { useParams, Link } from "react-router-dom";

const ProjectDetail = ({ projects }) => {
  const { id } = useParams(); // Get the project id from the URL

  // Find the project by id
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return (
      <div className="p-4">
        <Link to="/our-project">
          <button className="text-blue-500 hover:underline mb-4">
            ← Back to Projects
          </button>
        </Link>
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <p>The project you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="project-detail-container p-8 max-w-3xl mx-auto">
      <Link to="/our-project">
        <button className="text-blue-500 hover:underline mb-4">
          ← Back to Projects
        </button>
      </Link>
      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover rounded-lg my-4"
      />
      <p className="text-gray-700 mt-2">
        {project.description}
      </p>
      <Link to="/application">
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors duration-300">
          BOOK NOW
        </button>
      </Link>
      {/* You can add more detailed information about the project here */}
    </div>
  );
};

export default ProjectDetail;
