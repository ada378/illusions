import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About <span className="gradient-text">Illusion</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a team of passionate creators, developers, and innovators dedicated to 
            transforming ideas into extraordinary digital experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
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
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100+</div>
                <div className="text-gray-600">Clients</div>
              </div>
            </div>
          </div>
          <div className="animate-fadeInRight">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl h-80 flex items-center justify-center hover-scale transition-all duration-500 shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-4 animate-pulse-custom">Our Vision</div>
                  <p className="text-lg opacity-90">Creating Digital Magic</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16 animate-fadeInUp">Our <span className="gradient-text">Values</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-shadow hover-scale animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-custom">
                <span className="text-white font-bold text-2xl">I</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with cutting-edge solutions and creative thinking</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-shadow hover-scale animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-custom" style={{animationDelay: '0.5s'}}>
                <span className="text-white font-bold text-2xl">Q</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quality</h3>
              <p className="text-gray-600">Excellence in every detail and interaction we create</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-shadow hover-scale animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-custom" style={{animationDelay: '1s'}}>
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Creativity</h3>
              <p className="text-gray-600">Unique designs that stand out from the crowd</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-shadow hover-scale animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-custom" style={{animationDelay: '1.5s'}}>
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Trust</h3>
              <p className="text-gray-600">Building lasting relationships through reliability</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our <span className="gradient-text">Team</span></h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
            Our diverse team of experts brings together different perspectives and skills 
            to create something truly magical for every project.
          </p>
          <div className="flex justify-center space-x-6 mb-10">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float"></div>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover-scale hover-shadow transition-all duration-300">
            Join Our Team
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;