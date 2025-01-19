import { useState } from "react";
import { FaHome, FaRobot, FaUser, FaBell } from "react-icons/fa";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle the desktop dropdown menu
  // const toggleDesktopMenu = () => {
  //   setIsDesktopMenuOpen(!isDesktopMenuOpen);
  // };

  return (
    <nav className="bg-white shadow-md">
      {/* Main Navbar Container */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <FaHome className="text-2xl text-blue-500 mr-2" />
          <span className="text-xl font-bold text-blue-600">RealEstateCo</span>
        </div>

        {/* Search Bar - Visible on medium and larger screens */}
        <div className="hidden md:flex flex-1 mx-5 justify-center">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
        </div>

        {/* Icons and Menu Buttons */}
        <div className="flex items-center space-x-4">
          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/project" className="text-gray-700 hover:text-blue-500">
              Projects
            </a>
            <a href="/dashboard" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </a>
            <a href="/signup" className="text-gray-700 hover:text-blue-500">
              Register
            </a>
            <button className="text-gray-700 hover:text-blue-500 focus:outline-none p-2">
              <FaRobot className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-blue-500 focus:outline-none p-2">
              <FaBell className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-blue-500 focus:outline-none p-2">
              <FaUser className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown Menu */}
      {isDesktopMenuOpen && (
        <div className="md:block bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="/" className="block text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a
              href="/project"
              className="block text-gray-700 hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="/dashboard"
              className="block text-gray-700 hover:text-blue-500"
            >
              Dashboard
            </a>
            <a
              href="/register"
              className="block text-gray-700 hover:text-blue-500"
            >
              Register
            </a>
          </div>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="/" className="block text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a
              href="/project"
              className="block text-gray-700 hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="/dashboard"
              className="block text-gray-700 hover:text-blue-500"
            >
              Dashboard
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
