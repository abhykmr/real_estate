import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';


const App = () => {
  return (
    <div 
      className="min-h-screen bg-gray-100 bg-cover bg-center" 
      style={{ backgroundImage: "url('/photo-1565402170291-8491f14678db.avif')" }}
    >
      <Navbar />
      <div className="p-6 bg-black bg-opacity-80 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl font-semibold text-white mb-6">Welcome to Land to Lavish!</h1>
        <p className="text-gray-300">Explore the site to get started!</p>
        <div className="bg-black p-4 rounded-lg mt-6">
          <ImageSlider className="text-white" />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;