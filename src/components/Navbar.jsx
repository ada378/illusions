import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/illusionlogo.jpeg';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-[9999] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img src={logo} alt="Illusion Logo" className="h-12 w-12 rounded-lg object-cover shadow-md border border-gray-200 group-hover:border-blue-300 transition-all duration-300" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Web Tech Illusion</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-6 flex items-center space-x-2">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/') 
                    ? 'text-white bg-blue-600 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/about') 
                    ? 'text-white bg-blue-600 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/services') 
                    ? 'text-white bg-blue-600 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/projects') 
                    ? 'text-white bg-blue-600 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/team"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/team') 
                    ? 'text-white bg-blue-600 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Team
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/contact') 
                    ? 'text-white bg-blue-600 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors p-2 rounded-md hover:bg-gray-100"
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

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg mt-1 mx-2 border border-gray-200 rounded-lg">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive('/') ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive('/about') ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive('/services') ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive('/projects') ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/team"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive('/team') ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Team
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive('/contact') ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
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