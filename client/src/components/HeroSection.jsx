import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Content from "./Content"; // Import the new component

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh]">
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
