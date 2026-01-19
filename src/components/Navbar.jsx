import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/illusionlogo.jpeg';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-[9999] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center animate-fadeInLeft">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover-scale">
              <img src={logo} alt="Illusion Logo" className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover shadow-lg border-2 border-blue-100" />
              <span className="text-lg sm:text-2xl font-bold gradient-text">Illusion</span>
            </Link>
          </div>
          
          <div className="hidden md:block animate-fadeInRight">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <Link
                to="/"
                className={`px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                  isActive('/') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                  isActive('/about') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                  isActive('/projects') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/team"
                className={`px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                  isActive('/team') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Team
              </Link>
              <Link
                to="/contact"
                className={`px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                  isActive('/contact') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeInUp">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2 mx-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/projects') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/team"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/team') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Team
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;