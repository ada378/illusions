import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 relative overflow-hidden">
      {/* Epic Hero Section */}
      <section className="min-h-screen flex items-center relative">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Floating Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-200 mb-8 animate-fadeInUp">
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">About Our Company</span>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="text-center mb-20 animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              About
              <span className="block text-blue-600">
                Illusion Digital
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              We are a team of passionate developers and designers dedicated to 
              <span className="font-semibold text-blue-600"> transforming your digital vision into reality</span> through innovative solutions.
            </p>
            
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">5+</div>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">500+</div>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">150+</div>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Learn More About Us
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Story</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded with a vision to bridge the gap between imagination and reality, 
              Illusion has been at the forefront of digital innovation since our inception. 
              We believe that every great project starts with a dream, and our mission is 
              to make those dreams come true.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our team combines years of experience in web development, design, and digital 
              strategy to deliver solutions that not only meet but exceed expectations. 
              We don't just build websites; we create digital experiences that leave lasting impressions.
            </p>
          </div>
          <div className="animate-fadeInRight">
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl h-80 flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-4">Our Vision</div>
                  <p className="text-xl opacity-90">Creating Digital Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 animate-fadeInUp">
            Our <span className="text-blue-600">Core Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300 animate-fadeInUp">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with cutting-edge solutions and creative thinking</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quality</h3>
              <p className="text-gray-600">Excellence in every detail and interaction we create</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Creativity</h3>
              <p className="text-gray-600">Unique designs that stand out from the crowd</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Passion</h3>
              <p className="text-gray-600">Building lasting relationships through dedication</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl p-12 border border-gray-200 shadow-lg animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Professional Team</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Our diverse team of experts brings together different perspectives and skills 
            to create exceptional solutions for every project.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            View Our Team
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;