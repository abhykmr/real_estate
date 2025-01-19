import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CurrentProjects = () => {
  // Sample data for projects
  const projects = [
    {
      id: 1,
      name: "Project A",
      description: "Description of Project A",
      image: "img-1.jpg",
    },
    {
      id: 2,
      name: "Project B",
      description: "Description of Project B",
      image: "img-2.jpg",
    },
    {
      id: 3,
      name: "Project C",
      description: "Description of Project C",
      image: "img-3.jpg",
    },
    {
      id: 4,
      name: "Project D",
      description: "Description of Project D",
      image: "img-4.jpg",
    },
    {
      id: 5,
      name: "Project E",
      description: "Description of Project E",
      image: "img-5.jpg",
    },
    {
      id: 6,
      name: "Project F",
      description: "Description of Project F",
      image: "img-6.jpg",
    },
    {
      id: 7,
      name: "Project G",
      description: "Description of Project F",
      image: "img-7.jpg",
    },
    {
      id: 8,
      name: "Project H",
      description: "Description of Project F",
      image: "img-8.jpg",
    },
    {
      id: 9,
      name: "Project I",
      description: "Description of Project F",
      image: "img-9.jpg",
    },
    {
      id: 10,
      name: "Project J",
      description: "Description of Project F",
      image: "img-10.jpg",
    },
    {
      id: 11,
      name: "Project K",
      description: "Description of Project F",
      image: "img-11.jpg",
    },
    // Add more projects as needed
  ];

  // Reference for the scroll container
  const scrollContainerRef = useRef(null);

  // Scroll function for left and right buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Adjust this based on the new card width
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
        >
          <FaChevronLeft />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="projects-scroll-container overflow-x-hidden py-4"
        >
          <div className="projects-wrapper flex gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card w-80 flex-shrink-0 p-4 border border-gray-300 rounded-lg shadow-md"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-500 p-2 bg-white shadow-md rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CurrentProjects;
