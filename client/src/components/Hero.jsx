// src/components/Hero.jsx

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-12 h-25">
      {" "}
      {/* Reduced padding from py-20 to py-12 */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Call for Immediate Booking!
        </h1>{" "}
        {/* Reduced text sizes */}
        <p className="text-md md:text-xl">+91-8813888101, +91-9466675666</p>
      </div>
    </section>
  );
};

export default Hero;
