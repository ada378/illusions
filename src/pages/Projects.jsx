import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with advanced features and seamless user interface",
      tech: ["React", "Node.js", "MongoDB"],
      category: "Web Development",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and user-friendly banking application with real-time transactions",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Professional business website with CMS integration and responsive design",
      tech: ["Next.js", "Tailwind", "Strapi"],
      category: "Web Development",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "AI Dashboard",
      description: "Data visualization and analytics platform powered by machine learning",
      tech: ["Vue.js", "Python", "TensorFlow"],
      category: "AI/ML",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "Interactive social platform with real-time features and engaging user experience",
      tech: ["React", "Socket.io", "PostgreSQL"],
      category: "Web Development",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Real-time device monitoring and control system for smart infrastructure",
      tech: ["Angular", "MQTT", "InfluxDB"],
      category: "IoT",
      gradient: "from-teal-500 to-green-600"
    }
  ];

  const filters = ['All Projects', 'Web Development', 'Mobile App', 'AI/ML', 'IoT'];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20 relative overflow-hidden">
      {/* Epic Hero Section */}
      <section className="min-h-screen flex items-center relative">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-green-400/15 to-teal-500/15 rounded-full filter blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-white/10 animate-pulse" style={{animationDelay: `${Math.random() * 3}s`}}></div>
              ))}
            </div>
          </div>
          
          {/* Floating Code Elements */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/30 font-mono text-sm animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {['</>', '{}', '[]', '()', '&&', '||'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Floating Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 animate-fadeInUp">
              <span className="text-cyan-300 font-bold text-lg uppercase tracking-widest">💻 Portfolio Showcase 🎆</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="text-center mb-20 animate-fadeInUp">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none">
              Our Epic
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                PROJECTS
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-100 max-w-6xl mx-auto leading-relaxed font-light mb-12">
              🌟 Explore our portfolio of legendary projects that showcase our expertise 
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> in creating innovative digital solutions</span> ✨
            </p>
            
            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent animate-bounce">50+</div>
                <p className="text-blue-200 font-semibold">Web Apps</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '0.5s'}}>25+</div>
                <p className="text-purple-200 font-semibold">Mobile Apps</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '1s'}}>15+</div>
                <p className="text-green-200 font-semibold">AI Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '1.5s'}}>99%</div>
                <p className="text-orange-200 font-semibold">Success Rate</p>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-16 py-6 rounded-full text-2xl font-black hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50">
                <span className="relative z-10 group-hover:animate-pulse">🚀 Explore Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Filter Buttons - Updated for dark theme */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-4 rounded-full font-bold transition-all duration-300 hover-scale ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-cyan-500/30'
                  : 'backdrop-blur-xl bg-white/10 text-cyan-100 hover:bg-white/20 border border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid - Updated for dark theme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-fadeInUp shadow-2xl"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <img 
                  src={`https://picsum.photos/400/300?random=${project.id}`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h3a1 1 0 100-2H8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-bold">🚀 Live Project</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-cyan-300 font-bold bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-400/30">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-cyan-100 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-white/10 text-purple-200 px-3 py-1 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Link 
                    to={`/project/${project.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-xl font-bold hover-scale transition-all duration-300 text-center shadow-lg"
                  >
                    🔍 View Details
                  </Link>
                  <button className="border-2 border-cyan-400/50 text-cyan-300 py-3 px-4 rounded-xl font-bold hover:border-cyan-300 hover:bg-cyan-400/10 transition-all duration-300">
                    🌐 Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Updated for dark theme */}
        <div className="text-center mt-20 backdrop-blur-xl bg-white/10 rounded-3xl p-16 border border-white/20 animate-fadeInUp">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-white mb-8">
              Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Epic Project?</span>
            </h2>
            <p className="text-cyan-100 mb-12 text-xl leading-relaxed">
              🎆 Let's discuss how we can bring your vision to life with our expertise and creativity. 
              Every legendary project starts with a bold conversation. ✨
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float flex items-center justify-center text-3xl">🚀</div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-float flex items-center justify-center text-2xl" style={{animationDelay: '0.5s'}}>✨</div>
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float flex items-center justify-center text-4xl" style={{animationDelay: '1s'}}>🎆</div>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-16 py-6 rounded-full font-black text-2xl hover-scale hover-shadow transition-all duration-500 shadow-2xl">
              🌟 Start Epic Project
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;