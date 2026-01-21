import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 pt-20 relative overflow-hidden">
      {/* Epic Hero Section */}
      <section className="min-h-screen flex items-center relative">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          
          {/* Starfield Effect */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Floating Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 animate-fadeInUp">
              <span className="text-cyan-300 font-bold text-lg uppercase tracking-widest">🌟 Our Story & Vision 🌟</span>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="text-center mb-20 animate-fadeInUp">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none">
              About
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                ILLUSION
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-100 max-w-6xl mx-auto leading-relaxed font-light mb-12">
              🚀 We are passionate creators, developers, and innovators dedicated to 
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> transforming dreams into digital reality</span> ✨
            </p>
            
            {/* Epic Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-bounce">5+</div>
                <p className="text-cyan-200 font-semibold text-lg">Epic Years</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '0.5s'}}>500+</div>
                <p className="text-purple-200 font-semibold text-lg">Magic Projects</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '1s'}}>150+</div>
                <p className="text-pink-200 font-semibold text-lg">Happy Clients</p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-16 py-6 rounded-full text-2xl font-black hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50">
                <span className="relative z-10 group-hover:animate-pulse">🎆 Discover Our Magic</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
        {/* Story Section - Updated for dark theme */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fadeInLeft">
            <h2 className="text-5xl font-black text-white mb-8">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Epic Story</span>
            </h2>
            <p className="text-cyan-100 mb-6 text-xl leading-relaxed">
              🎆 Founded with a vision to bridge the gap between imagination and reality, 
              Illusion has been at the forefront of digital innovation since our inception. 
              We believe that every great project starts with a dream, and our mission is 
              to make those dreams come true.
            </p>
            <p className="text-purple-200 mb-8 text-xl leading-relaxed">
              ✨ Our team combines years of experience in web development, design, and digital 
              strategy to deliver solutions that not only meet but exceed expectations. 
              We don't just build websites; we create digital experiences that leave lasting impressions.
            </p>
          </div>
          <div className="animate-fadeInRight">
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-3xl h-96 flex items-center justify-center hover-scale transition-all duration-500 shadow-2xl hover:shadow-purple-500/50">
                <div className="text-center text-white">
                  <div className="text-5xl font-black mb-6 animate-pulse">🌟 Our Vision 🌟</div>
                  <p className="text-2xl font-light opacity-90">Creating Digital Magic</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Values Section - Updated for dark theme */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-white text-center mb-16 animate-fadeInUp">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Core Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 text-center hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse text-3xl">
                🚀
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-cyan-200">Pushing boundaries with cutting-edge solutions and creative thinking</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 text-center hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse text-3xl" style={{animationDelay: '0.5s'}}>
                ✨
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quality</h3>
              <p className="text-purple-200">Excellence in every detail and interaction we create</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 text-center hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse text-3xl" style={{animationDelay: '1s'}}>
                🎨
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Creativity</h3>
              <p className="text-pink-200">Unique designs that stand out from the crowd</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 text-center hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse text-3xl" style={{animationDelay: '1.5s'}}>
                🔥
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Passion</h3>
              <p className="text-orange-200">Building lasting relationships through dedication</p>
            </div>
          </div>
        </div>

        {/* Team Section - Updated for dark theme */}
        <div className="text-center backdrop-blur-xl bg-white/10 rounded-3xl p-16 border border-white/20 animate-fadeInUp">
          <h2 className="text-5xl font-black text-white mb-8">
            Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Dream Team</span>
          </h2>
          <p className="text-cyan-100 mb-12 max-w-4xl mx-auto text-xl leading-relaxed">
            🎆 Our diverse team of experts brings together different perspectives and skills 
            to create something truly magical for every project. ✨
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float flex items-center justify-center text-3xl">🚀</div>
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-float flex items-center justify-center text-3xl" style={{animationDelay: '0.5s'}}>🎨</div>
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float flex items-center justify-center text-3xl" style={{animationDelay: '1s'}}>✨</div>
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float flex items-center justify-center text-3xl" style={{animationDelay: '1.5s'}}>🔥</div>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-16 py-6 rounded-full font-black text-2xl hover-scale hover-shadow transition-all duration-500 shadow-2xl">
            🌟 Join Our Epic Team
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;