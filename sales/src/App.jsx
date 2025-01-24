import React from "react"; // Import React once
import ReactDOM from "react-dom"; // For rendering
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router componen
const HomePage = () => (
  <div
    className="min-h-screen bg-gray-100 bg-cover bg-center"
    style={{ backgroundImage: "url('/pexels-pixabay-326311.jpg')" }}
  >
    {/* Navbar */}
    

    {/* Main Content */}
    

      {/* Image Slider */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <ImageSlider />
      </div>
    </div>
  </div>
);

import Home from "./pages/Home"; // Correct import for Home component
import Navbar from "./components/Navbar"; // Import the Navbar component
import AddPropertyPage from "./components/AddPropertyPage"; // Import AddPropertyPage component
>>>>>>> cebaa9f789dadea1b20a203452a3bcec44ca22ae

const App = () => {
  return (
    <Router>
      {/* Navbar displayed on all routes */}
      <Navbar />
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for Add Property Page */}
        <Route path="/add-property" element={<AddPropertyPage />} />

      </Routes>
    </Router>
  );
};

// Render the App component
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
