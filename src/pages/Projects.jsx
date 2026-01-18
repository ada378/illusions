import { useState } from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our <span className="gradient-text">Projects</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise 
            in creating innovative digital solutions across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover-shadow'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-shadow hover-scale transition-all duration-500 animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-custom">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h3a1 1 0 100-2H8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Project Preview</span>
                </div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float"></div>
                <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover-scale transition-all duration-300">
                    View Details
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-white rounded-3xl p-12 shadow-xl animate-fadeInUp">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your <span className="gradient-text">Project?</span></h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Let's discuss how we can bring your vision to life with our expertise and creativity. 
              Every great project starts with a conversation.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover-scale hover-shadow transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;