import React from "react";

const CardsSlider2 = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Thanks to Land to Lavish, I found my dream home effortlessly!",
      image: "/client1.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "The agents were professional and very helpful.",
      image: "/client2.jpg",
    },
    {
      name: "Chris Lee",
      feedback: "I sold my property faster than I imagined. Great experience!",
      image: "/client3.jpg",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Clients Say
      </h2>
      <div className="flex justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center max-w-sm"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
            <h3 className="font-bold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSlider2;
