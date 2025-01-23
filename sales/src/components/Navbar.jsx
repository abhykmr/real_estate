import React from 'react';
import { FaHome, FaCog, FaBell, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center text-blue-600 text-xl font-bold">
        <FaHome className="mr-2" /> RealEstateCo
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-800 hover:underline">Home</Link>
        <Link to="/add-property" className="text-gray-800 hover:underline">Your Projects</Link>
        <Link to="/clients" className="text-gray-800 hover:underline">Your Clients</Link>

        {/* Settings Icon */}
        <div className="relative">
          <FaCog className="text-gray-800 text-lg cursor-pointer" />
        </div>

        {/* Notifications Icon */}
        <div className="relative">
          <FaBell className="text-gray-800 text-lg cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            6
          </span>
        </div>

        {/* User Icon */}
        <div className="relative">
          <FaUser className="text-gray-800 text-lg cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
