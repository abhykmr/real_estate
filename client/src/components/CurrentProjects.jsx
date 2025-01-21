// src/components/CurrentProjects.js
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CurrentProjects = ({ projects }) => {
  // Reference for the scroll container
  const scrollContainerRef = useRef(null);

  // Scroll function for left and right buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Adjust this based on the card width
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="projects-container my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Current Projects</h2>
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-blue-500 p-2 bg-white shadow-md rounded-full"
          aria-label="Scroll Left"
        >
          <FaChevronLeft />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="projects-scroll-container overflow-x-auto py-4"
        >
          <div className="projects-wrapper flex gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card w-80 flex-shrink-0 p-4 border border-gray-300 rounded-lg shadow-md flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-gray-700 text-sm flex-grow">
                  {project.description}
                </p>
                {/* Explore Button */}
                <Link to={`/projects/${project.id}`}>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Explore
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-500 p-2 bg-white shadow-md rounded-full"
          aria-label="Scroll Right"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CurrentProjects;
