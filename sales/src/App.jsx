import React from "react"; // Import React once
import ReactDOM from "react-dom"; // For rendering
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router components

import Home from "./pages/Home"; // Correct import for Home component
import Navbar from "./components/Navbar"; // Import the Navbar component
import AddPropertyPage from "./components/AddPropertyPage"; // Import AddPropertyPage component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for Add Property Page */}
        <Route path="/add-property" element={<AddPropertyPage />} />
        <Route path="/salesdash" element={<SalesDash />} /> {/* New Route */}
      </Routes>
    </Router>
  );
};

// Render the App component
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
