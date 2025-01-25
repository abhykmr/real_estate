import React from "react";

const CardsSlider1 = () => {
  const services = [
    {
      title: "Professional Agents",
      description: "Get access to top-notch agents to guide you.",
      icon: "🧑‍💼",
    },
    {
      title: "Property Listings",
      description: "Discover listings tailored to your needs.",
      icon: "🏠",
    },
    {
      title: "Hassle-Free Process",
      description: "Enjoy a seamless buying or selling experience.",
      icon: "⚙️",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        A Real Estate Agent You Can Trust
      </h2>
      <div className="flex justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSlider1;
