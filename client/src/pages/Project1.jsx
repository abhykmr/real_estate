// src/components/Project.jsx
// import React from "react";
// import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

import AppCard from "../components/AppCard"; // Ensure AppCard is in the same directory or adjust the path accordingly

const apps = [
  {
    id: 1,
    title: "HL Residency Affordable Housing",
    description: "",
    image: "https://hlcity.in/images/hl-residency-housing2.jpg",
    buttonText: "Learn More",
    buttonLink: "#",
  },
  {
    id: 2,
    title: "Vilas",
    description: "",
    image: "https://hlcity.in/images/3bhk.jpg",
    buttonText: "Get Started",
    buttonLink: "#",
  },
  {
    id: 3,
    title: "Sapphire & Emerald Floors",
    description: "",
    image: "https://hlcity.in/images/sapphire-floors.jpg",
    buttonText: "View Clients",
    buttonLink: "#",
  },
  {
    id: 4,
    title: "Atsun Floors",
    description: "",
    image: "https://hlcity.in/images/atsun-floors.jpg",
    buttonText: "View Clients",
    buttonLink: "#",
  },
  {
    id: 5,
    title: "Avenue 37",
    description: "",
    image: "https://hlcity.in/images/avenue37.jpg",
    buttonText: "View Clients",
    buttonLink: "#",
  },

  // Add more apps as needed
];

const Project1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="flex-grow">
        {/* Carousel Section */}
        <Carousel />
        {/* App Cards Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>

        {/* Hero Section */}
        <Hero />
      </main>

      {/* Footer
      <footer className="bg-white shadow-inner py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2025 RealEstateCo. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
};

export default Project1;
