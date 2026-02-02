import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Professional Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <defs>
                <linearGradient id="aboutGrid" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <pattern id="aboutSmallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#aboutGrid)" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#aboutSmallGrid)"/>
            </svg>
          </div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium text-blue-300 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                About Our Company
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Transforming Ideas Into
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                We are a team of passionate developers and designers dedicated to creating 
                innovative digital solutions that drive business growth and exceed expectations.
              </p>
              
              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded with a vision to bridge the gap between imagination and reality, 
                Illusion has been at the forefront of digital innovation. We believe that 
                every great project starts with a dream, and our mission is to make those dreams come true.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team combines years of experience in web development, design, and digital 
                strategy to deliver solutions that not only meet but exceed expectations.
              </p>
            </div>
            <div>
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl h-80 flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-3xl sm:text-4xl font-bold mb-4">Our Vision</div>
                  <p className="text-lg sm:text-xl opacity-90">Creating Digital Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries with cutting-edge solutions</p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Quality</h3>
                <p className="text-gray-600">Excellence in every detail we create</p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Creativity</h3>
                <p className="text-gray-600">Unique designs that stand out</p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Passion</h3>
                <p className="text-gray-600">Building lasting relationships</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;