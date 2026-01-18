const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white h-[500px]">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-between">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-10 pt-16 pb-8">
          
          {/* Company Info */}
          <div className="md:col-span-2 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-purple-400">Illusion</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted digital partner for creating extraordinary web experiences. 
              We specialize in transforming ideas into reality through innovative design 
              and cutting-edge development solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-white font-bold">i</span>
              </div>
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-white font-bold">l</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Digital Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Branding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Consulting</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe for updates and exclusive insights.
            </p>
            <div className="flex mb-6">
              <input 
                className="bg-gray-700 border border-gray-600 px-4 py-2 w-full rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400" 
                placeholder="Your email" 
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded-r hover:bg-purple-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-300 text-sm flex items-center">
                <span className="text-purple-400 mr-2">📞</span> +1 (555) 123-4567
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <span className="text-purple-400 mr-2">✉️</span> hello@illusion.com
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <span className="text-purple-400 mr-2">📍</span> 123 Digital Street, Tech City
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Illusion. All Rights Reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
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