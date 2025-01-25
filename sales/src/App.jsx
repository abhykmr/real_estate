import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"; // Home component
import Navbar from "./components/Navbar"; // Navbar component
import AddPropertyPage from "./components/AddPropertyPage"; // AddPropertyPage component
import ImageSlider from "./components/ImageSlider"; // ImageSlider component

// HomePage Component
const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/pexels-pixabay-326311.jpg')" }}
    >
      <Navbar />
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <ImageSlider />
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-property" element={<AddPropertyPage />} />
      </Routes>
    </Router>
  );
};

// Render the App component
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
