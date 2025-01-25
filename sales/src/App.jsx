import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPropertyPage from './components/AddPropertyPage';
import ImageSlider from './components/ImageSlider';
import SalesDash from './pages/SalesDash';

const App = () => {
  return (
    <Router>
      {/* Navbar displayed on all routes */}
      <Navbar />
      <Routes>
        {/* Define the route for the home page */}
        {/* <Route path="/" element={<Home />} /> */}

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
