import React from 'react';
import { FaHome, FaCog, FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center text-blue-600 text-xl font-bold">
        <FaHome className="mr-2" /> RealEstateCo
      </div>
      <div className="flex items-center space-x-6">
        <a href="#" className="text-gray-800 hover:underline">Home</a>
        <a href="#" className="text-gray-800 hover:underline">Your Projects</a>
        <a href="#" className="text-gray-800 hover:underline">Your Clients</a>
        <div className="relative">
          <FaCog className="text-gray-800 text-lg" />
        </div>
        <div className="relative">
          <FaBell className="text-gray-800 text-lg" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">6</span>
        </div>
        <div className="relative">
          <FaUser className="text-gray-800 text-lg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
