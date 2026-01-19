const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-12 pb-8">
          
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400">Illusion</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted digital partner for creating extraordinary web experiences. 
              We specialize in transforming ideas into reality through innovative design 
              and cutting-edge development solutions.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">t</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">i</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">l</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-purple-400">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Digital Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Branding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Consulting</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-purple-400">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-purple-400">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe for updates and exclusive insights.
            </p>
            <div className="flex flex-col sm:flex-row mb-6">
              <input 
                className="bg-gray-700 border border-gray-600 px-3 py-2 w-full rounded sm:rounded-l sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 text-sm mb-2 sm:mb-0" 
                placeholder="Your email" 
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded sm:rounded-r sm:rounded-l-none hover:bg-purple-600 transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-300 text-xs sm:text-sm flex items-center">
                <span className="text-purple-400 mr-2">📞</span> +91 8739002047
              </p>
              <p className="text-gray-300 text-xs sm:text-sm flex items-center">
                <span className="text-purple-400 mr-2">✉️</span> hello@illusion.com
              </p>
              <p className="text-gray-300 text-xs sm:text-sm flex items-center">
                <span className="text-purple-400 mr-2">📍</span> 123 Digital Street, Tech City
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Illusion. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <span className="hover:text-purple-400 transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-purple-400 transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-purple-400 transition-colors cursor-pointer">Support</span>
              <span className="hover:text-purple-400 transition-colors cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;