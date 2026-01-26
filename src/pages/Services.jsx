import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
      icon: "🌐",
      price: "Starting from ₹25,000",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "E-Commerce Solutions",
      description: "Complete online store development with secure payment gateways, inventory management, and analytics integration.",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
      icon: "🛒",
      price: "Starting from ₹45,000",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      features: ["iOS & Android", "Cross-platform", "Push Notifications", "Offline Support"],
      icon: "📱",
      price: "Starting from ₹60,000",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive engagement through intuitive interfaces.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      icon: "🎨",
      price: "Starting from ₹20,000",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "PPC Campaigns"],
      icon: "📈",
      price: "Starting from ₹15,000/month",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for enhanced performance and reliability.",
      features: ["AWS/Azure Setup", "Auto Scaling", "Load Balancing", "24/7 Monitoring"],
      icon: "☁️",
      price: "Starting from ₹30,000",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap."
    },
    {
      step: "02", 
      title: "Design & Prototype",
      description: "Our design team creates wireframes and prototypes to visualize the final product before development begins."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices, followed by rigorous testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support, maintenance, and updates to keep it running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Epic Hero Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-200 mb-8 animate-fadeInUp">
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Professional
              <span className="block text-blue-600">
                Digital Services
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto animate-fadeInUp leading-relaxed" style={{animationDelay: '0.4s'}}>
              Transform your business with our comprehensive digital solutions that drive growth, 
              <span className="font-semibold text-blue-600"> innovation, and success</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Explore Services
              </button>
              
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <p className="text-gray-600 font-medium text-sm">Projects</p>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99%</div>
                  <p className="text-gray-600 font-medium text-sm">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover-shadow hover-scale transition-all duration-300 overflow-hidden border border-gray-100 animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{service.price}</span>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-blue-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold hover-scale transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our <span className="gradient-text">Process</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technologies We <span className="gradient-text">Master</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', color: 'from-blue-400 to-blue-600' },
              { name: 'Node.js', color: 'from-green-400 to-green-600' },
              { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
              { name: 'MongoDB', color: 'from-green-500 to-green-700' },
              { name: 'AWS', color: 'from-orange-400 to-orange-600' },
              { name: 'Docker', color: 'from-blue-500 to-blue-700' }
            ].map((tech, index) => (
              <div key={tech.name} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover-scale`}>
                  <span className="text-white font-bold text-xl">{tech.name.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-gray-900">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-yellow-300">Project?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover-scale transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </Link>
            <a 
              href="https://wa.me/917380497919?text=Hi%2C%20I%20want%20to%20discuss%20my%20project%20requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;