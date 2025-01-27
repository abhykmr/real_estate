import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Content from "./Content"; // Import the new component

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optionally log the loading state
    console.log("Map loading state:", loading);
  }, [loading]);

  return (
    <section className="relative w-full h-[80vh]">
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="loader">Loading...</div>
        </div>
      )}

      {/* Light Mode Map */}
      <MapContainer
        center={[28.6139, 77.209]} // New Delhi coordinates
        zoom={12}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
        attributionControl={false}
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        whenReady={() => setLoading(false)} // When the map is fully loaded
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
      </MapContainer>

      {/* Content below or overlay */}
      <Content />
    </section>
  );
};

export default HeroSection;
