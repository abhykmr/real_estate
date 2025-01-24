import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPropertyPage from './components/AddPropertyPage';
import ImageSlider from './components/ImageSlider';
import Dashboard from './components/salesdashboard'
const HomePage = () => (
  <div
    className="min-h-screen bg-gray-100 bg-cover bg-center"
    style={{ backgroundImage: "url('/pexels-pixabay-326311.jpg')" }}
  >
    {/* Navbar */}
    

    {/* Main Content */}
    <div className="p-6 bg-white bg-opacity-90 rounded-xl shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Welcome to Land to Lavish!
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Maximize your property sales potential — upload your listings and let buyers find you effortlessly!
      </p>

      {/* Image Slider */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <ImageSlider />
        < Dashboard />
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
