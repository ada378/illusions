import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projectsData = {
    1: {
      title: "E-Commerce Platform",
      subtitle: "Modern Online Shopping Experience",
      description: "A comprehensive e-commerce platform built with cutting-edge technologies, featuring advanced product management, secure payment processing, and an intuitive user interface that drives conversions.",
      longDescription: "This project represents a complete overhaul of traditional e-commerce experiences. We implemented advanced features including AI-powered product recommendations, real-time inventory management, multi-vendor support, and seamless mobile responsiveness. The platform handles thousands of concurrent users while maintaining optimal performance.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
      category: "Web Development",
      gradient: "from-blue-500 to-purple-600",
      client: "TechMart Solutions",
      duration: "6 months",
      team: "5 developers",
      year: "2024",
      features: [
        "Advanced Product Search & Filtering",
        "Real-time Inventory Management", 
        "Multi-vendor Marketplace",
        "Secure Payment Gateway Integration",
        "AI-powered Recommendations",
        "Mobile-first Responsive Design",
        "Admin Dashboard & Analytics",
        "Order Tracking & Management"
      ],
      challenges: [
        "Handling high traffic loads during peak sales",
        "Implementing complex multi-vendor payment splits",
        "Creating seamless mobile shopping experience",
        "Integrating multiple third-party services"
      ],
      results: [
        "300% increase in conversion rates",
        "50% reduction in page load times",
        "99.9% uptime during Black Friday sales",
        "40% increase in mobile transactions"
      ]
    },
    2: {
      title: "Mobile Banking App",
      subtitle: "Secure Financial Management",
      description: "A secure and user-friendly banking application with real-time transactions, biometric authentication, and comprehensive financial management tools.",
      longDescription: "Developed a next-generation mobile banking application that prioritizes security without compromising user experience. The app features end-to-end encryption, biometric authentication, and real-time transaction processing with instant notifications.",
      tech: ["React Native", "Firebase", "Redux", "Plaid API", "Biometric SDK"],
      category: "Mobile App",
      gradient: "from-green-500 to-teal-600",
      client: "SecureBank Corp",
      duration: "8 months",
      team: "6 developers",
      year: "2024",
      features: [
        "Biometric Authentication (Face ID/Touch ID)",
        "Real-time Transaction Processing",
        "Budget Tracking & Analytics",
        "Bill Payment & Scheduling",
        "Card Management & Controls",
        "Investment Portfolio Tracking",
        "Secure Document Upload",
        "24/7 Customer Support Chat"
      ],
      challenges: [
        "Implementing bank-grade security protocols",
        "Ensuring compliance with financial regulations",
        "Creating intuitive UX for complex banking features",
        "Optimizing performance for real-time data"
      ],
      results: [
        "4.8/5 app store rating",
        "60% increase in mobile banking adoption",
        "Zero security incidents since launch",
        "35% reduction in customer support calls"
      ]
    },
    3: {
      title: "Corporate Website",
      subtitle: "Professional Business Presence",
      description: "A professional business website with CMS integration, responsive design, and advanced SEO optimization for maximum online visibility.",
      longDescription: "Created a comprehensive corporate website that serves as the digital headquarters for a Fortune 500 company. The site features dynamic content management, multi-language support, and advanced analytics integration.",
      tech: ["Next.js", "Tailwind CSS", "Strapi CMS", "GraphQL", "Vercel"],
      category: "Web Development", 
      gradient: "from-purple-500 to-pink-600",
      client: "Global Enterprises Inc",
      duration: "4 months",
      team: "4 developers",
      year: "2023",
      features: [
        "Headless CMS Integration",
        "Multi-language Support",
        "Advanced SEO Optimization",
        "Interactive Contact Forms",
        "Blog & News Management",
        "Team Directory & Profiles",
        "Document Library",
        "Analytics & Reporting"
      ],
      challenges: [
        "Managing complex content hierarchies",
        "Implementing multi-language SEO",
        "Ensuring fast loading across all devices",
        "Integrating with existing business systems"
      ],
      results: [
        "200% increase in organic traffic",
        "90+ Google PageSpeed score",
        "50% increase in lead generation",
        "25% reduction in bounce rate"
      ]
    }
  };

  const project = projectsData[id] || projectsData[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
              
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
                {project.category}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                {project.subtitle}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-sm text-gray-500 font-medium">Client</div>
                  <div className="text-gray-900 font-semibold">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Duration</div>
                  <div className="text-gray-900 font-semibold">{project.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Team Size</div>
                  <div className="text-gray-900 font-semibold">{project.team}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Year</div>
                  <div className="text-gray-900 font-semibold">{project.year}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img 
                  src={`https://picsum.photos/600/400?random=${id}`}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover-scale transition-all duration-300">
                    Live Demo
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.longDescription}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Results</h3>
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Challenges & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-shadow transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge {index + 1}</h3>
                    <p className="text-gray-600">{challenge}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-yellow-300">Next Project?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover-scale transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </Link>
            <Link 
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;