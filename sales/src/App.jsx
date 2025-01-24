import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPropertyPage from './components/AddPropertyPage';
import ImageSlider from './components/ImageSlider';

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

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
