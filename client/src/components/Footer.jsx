const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Company Info</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  For Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  For Rent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Login
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info & Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact & Social</h3>
            <ul className="space-y-1 text-sm">
              <li>📍 123 Real Estate St., City, Country</li>
              <li>📞 (123) 456-7890</li>
              <li>📧 info@realestate.com</li>
            </ul>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-300">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-300">
                Instagram
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-300">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Real Estate Company. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
