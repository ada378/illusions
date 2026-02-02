import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NotificationService from '../services/NotificationService';

const Home = () => {
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Request notification permission on component mount
  useState(() => {
    const enableNotifications = async () => {
      const granted = await NotificationService.requestPermission();
      if (granted) {
        setTimeout(() => {
          NotificationService.showWelcomeNotification();
        }, 2000);
      }
    };
    enableNotifications();
  }, []);

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    if (!consultationForm.name || !consultationForm.phone) return;
    
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: consultationForm.name,
          phone: consultationForm.phone,
          email: '',
          message: 'Free Consultation Request from Home Page'
        })
      });

      const data = await response.json();

      if (data.success) {
        setMessage('✅ Thank you! We will contact you soon for your free consultation.');
        setConsultationForm({ name: '', phone: '' });
        
        // Show notification for successful form submission
        NotificationService.showNotification('Form Submitted!', {
          body: 'We received your consultation request. We\'ll contact you soon!',
          tag: 'form-success'
        });
      } else {
        setMessage('❌ ' + data.message);
      }
    } catch (error) {
      setMessage('❌ Failed to submit. Please try again.');
    }

    setLoading(false);
    
    // Clear message after 5 seconds
    setTimeout(() => setMessage(''), 5000);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <defs>
                <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid)" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#smallGrid)"/>
            </svg>
          </div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium text-blue-300 mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for Enterprise Projects
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  Enterprise-Grade
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Digital Solutions
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  We architect and develop scalable web applications, mobile solutions, and digital platforms 
                  that drive measurable business growth for global enterprises.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link 
                    to="/contact" 
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 text-center"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </Link>
                  
                  <Link 
                    to="/projects" 
                    className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 text-center"
                  >
                    View Portfolio
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-800">
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Projects Delivered</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Client Retention</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Modern Dashboard Preview */}
              <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono hidden sm:block">dashboard.illusion.dev</div>
                  </div>
                  
                  {/* Mock Dashboard Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm sm:text-base">Revenue Growth</div>
                          <div className="text-gray-400 text-xs sm:text-sm">+127% this quarter</div>
                        </div>
                      </div>
                      <div className="text-green-400 font-bold text-lg sm:text-xl">$2.4M</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm sm:text-base">Active Users</div>
                          <div className="text-gray-400 text-xs sm:text-sm">Real-time analytics</div>
                        </div>
                      </div>
                      <div className="text-green-400 font-bold text-lg sm:text-xl">45.2K</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm sm:text-base">Performance</div>
                          <div className="text-gray-400 text-xs sm:text-sm">99.9% uptime</div>
                        </div>
                      </div>
                      <div className="text-green-400 font-bold text-lg sm:text-xl">A+</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-float">
                  <span className="text-white font-bold text-lg sm:text-xl">R</span>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  <span className="text-white font-bold text-lg sm:text-xl">N</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Session Audit Section - Moved to top */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/20">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Your Free <span className="gradient-text">Consultation</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover how we can transform your digital presence. Get a personalized consultation with our experts.
              </p>
            </div>
            
            {message && (
              <div className={`mb-6 p-4 rounded-lg text-center ${message.includes('✅') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {message}
              </div>
            )}
            
            <form onSubmit={handleConsultationSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    value={consultationForm.name}
                    onChange={(e) => setConsultationForm({...consultationForm, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    value={consultationForm.phone}
                    onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                    placeholder="+91 7380497919"
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover-scale hover-shadow transition-all duration-300 shadow-lg mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Get Free Consultation'}
                </button>
                <a 
                  href="tel:+917380497919"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-scale hover-shadow transition-all duration-300 shadow-lg inline-flex items-center justify-center mt-4 sm:mt-0"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </form>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-4 font-medium">Need immediate assistance? Contact us directly:</p>
                <a 
                  href="https://wa.me/917380497919?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20website" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover-scale"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp: +91 7380497919
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">Our <span className="gradient-text">Expertise</span></h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              From concept to deployment, we deliver comprehensive web development solutions 
              that exceed expectations and drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl sm:rounded-3xl hover-shadow hover-scale animate-fadeInLeft shadow-lg sm:shadow-xl border border-blue-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 animate-pulse-custom shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Custom Web Development</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Tailored websites and web applications built with React, Next.js, and modern technologies for optimal performance and scalability.</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl sm:rounded-3xl hover-shadow hover-scale animate-fadeInUp shadow-lg sm:shadow-xl border border-teal-100" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 animate-pulse-custom shadow-lg" style={{animationDelay: '1s'}}>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Mobile-First Design</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Responsive designs that look perfect on all devices. Cross-platform mobile applications using React Native and Flutter frameworks.</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl sm:rounded-3xl hover-shadow hover-scale animate-fadeInRight shadow-lg sm:shadow-xl border border-green-100 md:col-span-2 lg:col-span-1" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 animate-pulse-custom shadow-lg" style={{animationDelay: '2s'}}>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">E-Commerce Solutions</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Complete online store development with secure payment gateways, inventory management, and advanced analytics for business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Technologies We <span className="gradient-text">Master</span></h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We leverage the latest technologies and frameworks to build robust, scalable, 
              and future-proof digital solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {[
              { name: 'React', color: 'from-blue-400 to-blue-600', desc: 'Frontend Framework' },
              { name: 'Next.js', color: 'from-gray-700 to-gray-900', desc: 'Full-Stack React' },
              { name: 'Node.js', color: 'from-green-400 to-green-600', desc: 'Backend Runtime' },
              { name: 'MongoDB', color: 'from-green-500 to-green-700', desc: 'NoSQL Database' },
              { name: 'Tailwind', color: 'from-cyan-400 to-cyan-600', desc: 'CSS Framework' },
              { name: 'TypeScript', color: 'from-blue-500 to-blue-700', desc: 'Type Safety' }
            ].map((tech, index) => (
              <div key={tech.name} className="text-center animate-fadeInUp bg-white p-6 rounded-2xl shadow-lg hover-shadow hover-scale border" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-white font-bold text-2xl">{tech.name.charAt(0)}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Why Choose <span className="gradient-text">Illusion?</span></h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We don't just build websites - we create digital experiences that transform businesses 
              and deliver measurable results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center p-8 animate-fadeInUp bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover-shadow border border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Lightning Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Rapid development cycles with agile methodology ensuring quick turnaround without compromising quality</p>
            </div>
            
            <div className="text-center p-8 animate-fadeInUp bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover-shadow border border-green-200" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Premium Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed">Rigorous testing, code reviews, and quality assurance processes ensuring enterprise-grade solutions</p>
            </div>
            
            <div className="text-center p-8 animate-fadeInUp bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-lg hover-shadow border border-teal-200" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">24/7 Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">Dedicated support team available round-the-clock for maintenance, updates, and technical assistance</p>
            </div>
            
            <div className="text-center p-8 animate-fadeInUp bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg hover-shadow border border-orange-200" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed">Competitive rates with no hidden costs, flexible payment plans, and clear project milestones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Track Record</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">Numbers that speak for our commitment to excellence and client satisfaction</p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="animate-fadeInUp bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-4 animate-pulse-custom">500+</div>
              <div className="text-xl opacity-90">Websites Delivered</div>
            </div>
            <div className="animate-fadeInUp bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl md:text-6xl font-bold mb-4 animate-pulse-custom" style={{animationDelay: '0.5s'}}>150+</div>
              <div className="text-xl opacity-90">Happy Clients</div>
            </div>
            <div className="animate-fadeInUp bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl md:text-6xl font-bold mb-4 animate-pulse-custom" style={{animationDelay: '1s'}}>5+</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </div>
            <div className="animate-fadeInUp bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl md:text-6xl font-bold mb-4 animate-pulse-custom" style={{animationDelay: '1.5s'}}>99%</div>
              <div className="text-xl opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">What Our <span className="gradient-text">Clients Say</span></h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content: "Illusion transformed our vision into a stunning website that exceeded all expectations. Their attention to detail and technical expertise is unmatched.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Founder, EcoShop",
                content: "The e-commerce platform they built for us increased our sales by 300%. Professional, reliable, and incredibly talented team.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, CreativeHub",
                content: "Working with Illusion was a game-changer. They delivered a mobile app that our users absolutely love. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover-shadow hover-scale animate-fadeInUp border" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-blue-50 text-gray-800 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Ready to Transform Your <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Digital Presence?</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Let's discuss your vision and create a powerful web solution that drives growth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp mb-12">
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover-scale hover-shadow transition-all duration-300 shadow-lg inline-block text-center">
              Start Your Project
            </Link>
            <Link to="/projects" className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-sm inline-block text-center">
              View Portfolio
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp">
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1 text-gray-900">Email Us</h3>
              <p className="text-gray-600 text-sm">info@webtechillusion.com</p>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1 text-gray-900">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 7380497919</p>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1 text-gray-900">Visit Us</h3>
              <p className="text-gray-600 text-sm">Vibhuti Khand, Lucknow</p>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Home;