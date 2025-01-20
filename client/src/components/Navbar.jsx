import { useState } from "react";
import { Home, User, Bell, Search, Menu, X, Settings } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const UserButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 focus:outline-none p-2 rounded-full hover:bg-blue-50 transition-all duration-200">
          <User className="w-5 h-5" />
        </button>

        {isHovered && (
          <div className="absolute top-12 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 transform transition-all duration-200 ease-in-out opacity-100 scale-100">
            <div className="absolute right-3 -top-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
            <ul className="space-y-2">
              <li className="group">
                <a href="/login" className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-200">
                  Login
                </a>
              </li>
              <li className="group">
                <a href="/dashboard" className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-200">
                  Profile
                </a>
              </li>
              <li className="border-t border-gray-100 my-2"></li>
              <li className="group">
                <a href="/signup" className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-200">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Main Navbar Container */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Home className="text-blue-500 mr-2 w-6 h-6" />
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
            <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
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
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-blue-500 focus:outline-none p-2">
              <Bell className="w-5 h-5" />
            </button>

            <UserButton />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
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