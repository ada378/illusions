import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    if (!consultationForm.name || !consultationForm.phone) return;
    
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full text-sm font-semibold text-blue-700 mb-6 animate-fadeInUp">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for New Projects
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 animate-fadeInUp leading-tight">
                Transform Your
                <span className="block gradient-text animate-pulse-custom">Digital Vision</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-600 mt-2">Into Reality</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto lg:mx-0 animate-fadeInUp leading-relaxed" style={{animationDelay: '0.2s'}}>
                We create stunning, high-performance websites and applications that drive growth, 
                engage users, and deliver exceptional results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover-scale hover-shadow transition-all duration-300 shadow-xl">
                  Start Your Project
                </Link>
                <Link to="/projects" className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg">
                  View Our Work
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Visual Element */}
            <div className="relative animate-fadeInRight">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Web Development</h3>
                        <p className="text-sm text-gray-600">Modern & Responsive</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Mobile Apps</h3>
                        <p className="text-sm text-gray-600">iOS & Android</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">UI/UX Design</h3>
                        <p className="text-sm text-gray-600">User-Centered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
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
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform Your <span className="gradient-text">Digital Presence?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Let's discuss your vision and create a powerful web solution that drives growth, 
              engages users, and delivers exceptional results. Get your free consultation today!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-600 text-white px-12 py-5 rounded-full font-semibold text-lg hover-scale hover-shadow transition-all duration-300 shadow-xl inline-block text-center">
              Start Your Project
            </Link>
            <Link to="/projects" className="w-full sm:w-auto border-2 border-white text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg inline-block text-center">
              View Portfolio
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="opacity-80">info@webtechillusion.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="opacity-80">+91 7380497919</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="opacity-80">VibhutiKhand GomtiNagar, Lucknow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <Footer />
    </div>
  );
};

export default Home;