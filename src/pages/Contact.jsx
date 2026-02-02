import { useState } from 'react';
import Footer from '../components/Footer';
import NotificationService from '../services/NotificationService';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: `Project Type: ${formData.projectType}\n\n${formData.message}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
        
        NotificationService.showNotification('Message Sent!', {
          body: 'Your message has been sent successfully. We\'ll get back to you soon!',
          tag: 'contact-success'
        });
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('Failed to send message. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 sm:py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <defs>
                <linearGradient id="contactGrid" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <pattern id="contactSmallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#contactGrid)" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#contactSmallGrid)"/>
            </svg>
          </div>
          <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium text-blue-300 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Let's Start Your Project
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Your Digital Vision?
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Get in touch with our expert team and let's create something amazing together. 
              We're here to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white rounded-3xl shadow-xl p-10 hover-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a <span className="gradient-text">Message</span></h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    ❌ {error}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 7380497919"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Project Type</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="ecommerce">E-commerce Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover-scale hover-shadow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-10 hover-shadow">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in <span className="gradient-text">Touch</span></h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600 text-lg">Vibhuti Khand, Gomti Nagar<br />Lucknow, Uttar Pradesh 226010</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600 text-lg">+91 7380497919</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600 text-lg">info@webtechillusion.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;