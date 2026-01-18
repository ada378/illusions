import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-40 w-60 h-60 sm:w-80 sm:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 animate-fadeInUp leading-tight">
              Professional <span className="gradient-text animate-pulse-custom">Web Development</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto animate-fadeInUp leading-relaxed px-4" style={{animationDelay: '0.2s'}}>
              Transform your business with cutting-edge web solutions. We create stunning, responsive websites 
              and powerful web applications that drive growth and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fadeInUp px-4" style={{animationDelay: '0.4s'}}>
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover-scale hover-shadow transition-all duration-300 shadow-xl">
                Start Your Project
              </button>
              <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 animate-pulse-custom shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Custom Web Development</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Tailored websites and web applications built with React, Next.js, and modern technologies for optimal performance and scalability.</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl sm:rounded-3xl hover-shadow hover-scale animate-fadeInUp shadow-lg sm:shadow-xl border border-purple-100" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 animate-pulse-custom shadow-lg" style={{animationDelay: '1s'}}>
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
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
            
            <div className="text-center p-8 animate-fadeInUp bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg hover-shadow border border-purple-200" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
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
      <section className="py-30 bg-gradient-to-br  from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
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
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-full font-semibold text-lg hover-scale hover-shadow transition-all duration-300 shadow-xl">
              Get Free Consultation
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg">
              Call +91 9876543210
            </button>
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
              <p className="opacity-80">hello@illusion.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="opacity-80">+91 9876543210</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="opacity-80">123 Digital Street, Tech City</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;