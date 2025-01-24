// src/components/Navbar.jsx
import React from 'react';
import { FaHome, FaCog, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NotificationDropdown from "./NotificationDropdown";

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
        <Link to="/settings" className="relative">
          <FaCog className="text-gray-800 text-lg cursor-pointer" />
        </Link>

        {/* Notifications Dropdown */}
        <NotificationDropdown />

        {/* User Icon */}
        <Link to="/profile" className="relative">
          <FaUser className="text-gray-800 text-lg cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
