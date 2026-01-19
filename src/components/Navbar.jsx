import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/illusionlogo.jpeg';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-[9999] border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center animate-fadeInLeft">
            <Link to="/" className="flex items-center space-x-3 hover-scale group">
              <div className="relative">
                <img src={logo} alt="Illusion Logo" className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover shadow-xl border-2 border-white group-hover:border-blue-200 transition-all duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold gradient-text">Illusion</span>
                <div className="text-xs text-gray-500 font-medium">Digital Solutions</div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block animate-fadeInRight">
            <div className="ml-6 lg:ml-10 flex items-center space-x-1 lg:space-x-2 bg-gray-50/50 rounded-full p-2 backdrop-blur-sm">
              <Link
                to="/"
                className={`px-4 lg:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover-scale relative overflow-hidden ${
                  isActive('/') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/70'
                }`}
              >
                <span className="relative z-10">Home</span>
              </Link>
              <Link
                to="/about"
                className={`px-4 lg:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover-scale relative overflow-hidden ${
                  isActive('/about') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/70'
                }`}
              >
                <span className="relative z-10">About</span>
              </Link>
              <Link
                to="/services"
                className={`px-4 lg:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover-scale relative overflow-hidden ${
                  isActive('/services') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/70'
                }`}
              >
                <span className="relative z-10">Services</span>
              </Link>
              <Link
                to="/projects"
                className={`px-4 lg:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover-scale relative overflow-hidden ${
                  isActive('/projects') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/70'
                }`}
              >
                <span className="relative z-10">Projects</span>
              </Link>
              <Link
                to="/team"
                className={`px-4 lg:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover-scale relative overflow-hidden ${
                  isActive('/team') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/70'
                }`}
              >
                <span className="relative z-10">Team</span>
              </Link>
              <Link
                to="/contact"
                className={`px-4 lg:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover-scale relative overflow-hidden ${
                  isActive('/contact') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                    : 'text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg shadow-orange-500/25'
                }`}
              >
                <span className="relative z-10">Contact</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100/50"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl mt-2 mx-2 border border-white/20">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/') ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/about') ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/services') ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/projects') ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/team"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/team') ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Team
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/contact') ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg'
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