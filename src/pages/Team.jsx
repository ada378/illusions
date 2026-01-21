import React from 'react';
import Footer from '../components/Footer';

const Team = () => {
  const developers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Lead Full Stack Developer",
      specialization: "React, Node.js, MongoDB",
      experience: "5+ Years",
      bio: "Passionate full-stack developer with expertise in modern web technologies. Specializes in building scalable applications and leading development teams to deliver exceptional results.",
      skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Frontend Architect",
      specialization: "React, Next.js, UI/UX",
      experience: "4+ Years",
      bio: "Creative frontend architect who transforms designs into pixel-perfect, responsive web applications. Expert in modern React ecosystem and performance optimization.",
      skills: ["React", "Next.js", "Tailwind CSS", "Figma", "JavaScript"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Backend Engineer",
      specialization: "Node.js, Python, DevOps",
      experience: "6+ Years",
      bio: "Backend specialist focused on building robust APIs and scalable server architectures. Expert in cloud technologies and database optimization for high-performance applications.",
      skills: ["Node.js", "Python", "PostgreSQL", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Mobile App Developer",
      specialization: "React Native, Flutter",
      experience: "3+ Years",
      bio: "Mobile development expert creating cross-platform applications that deliver native performance. Passionate about user experience and mobile-first design principles.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "David Kumar",
      role: "DevOps Engineer",
      specialization: "AWS, Docker, CI/CD",
      experience: "4+ Years",
      bio: "DevOps engineer ensuring seamless deployment and infrastructure management. Specializes in cloud architecture, automation, and maintaining high-availability systems.",
      skills: ["AWS", "Docker", "Jenkins", "Terraform", "Linux"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Epic Hero Section */}
      <section className="pt-20 sm:pt-28 pb-20 sm:pb-32 relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          
          {/* Team Icons Floating */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/30 text-2xl animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['👨‍💻', '👩‍💻', '🚀', '⚡', '💡'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 animate-fadeInUp">
              <span className="text-cyan-300 font-bold text-lg uppercase tracking-widest">🌟 Meet The Legends 🌟</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 animate-fadeInUp leading-none" style={{animationDelay: '0.2s'}}>
              Our Epic
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                DREAM TEAM
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-100 mb-12 max-w-6xl mx-auto animate-fadeInUp leading-relaxed font-light" style={{animationDelay: '0.4s'}}>
              🚀 Meet the legendary developers behind Illusion's success. 
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Creativity, expertise, and passion</span> combined! ✨
            </p>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent animate-bounce">22+</div>
                <p className="text-blue-200 font-semibold">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '0.5s'}}>50+</div>
                <p className="text-purple-200 font-semibold">Technologies</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '1s'}}>200+</div>
                <p className="text-green-200 font-semibold">Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '1.5s'}}>100%</div>
                <p className="text-orange-200 font-semibold">Satisfaction</p>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="animate-fadeInUp" style={{animationDelay: '0.8s'}}>
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-16 py-6 rounded-full text-2xl font-black hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50">
                <span className="relative z-10 group-hover:animate-pulse">🎯 Meet The Team</span>
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

      {/* Epic Team Grid Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {developers.map((developer, index) => (
              <div 
                key={developer.id} 
                className="group backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-fadeInUp shadow-2xl"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Profile Image with Epic Overlay */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={developer.image} 
                    alt={developer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-white font-bold text-xl">🚀</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white mb-2">{developer.name}</h3>
                    <p className="text-cyan-300 font-bold text-lg">{developer.role}</p>
                  </div>
                </div>

                {/* Epic Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-cyan-300 bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-400/30">
                        ⚡ {developer.experience}
                      </span>
                    </div>
                    <p className="text-purple-200 font-semibold text-sm">{developer.specialization}</p>
                  </div>

                  <p className="text-cyan-100 mb-6 leading-relaxed">
                    {developer.bio}
                  </p>

                  {/* Epic Skills */}
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3 flex items-center">
                      <span className="mr-2">🔥</span> Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {developer.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-full font-bold border border-white/20 hover:scale-110 transition-transform"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Epic Social Links */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Epic Team CTA */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-16 border border-white/20">
            <h2 className="text-5xl font-black text-white mb-8">
              Want to Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Epic Team?</span>
            </h2>
            <p className="text-xl text-cyan-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              🚀 We're always looking for legendary developers who share our passion for creating 
              <span className="font-bold text-purple-300"> extraordinary digital experiences</span>. ✨
            </p>
            
            {/* Floating Team Icons */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float flex items-center justify-center text-3xl">👨‍💻</div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-float flex items-center justify-center text-2xl" style={{animationDelay: '0.5s'}}>🚀</div>
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float flex items-center justify-center text-4xl" style={{animationDelay: '1s'}}>⚡</div>
              <div className="w-18 h-18 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float flex items-center justify-center text-2xl" style={{animationDelay: '1.5s'}}>💡</div>
            </div>
            
            <button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-16 py-6 rounded-full font-black text-2xl hover-scale hover-shadow transition-all duration-500 shadow-2xl">
              🌟 Join The Legends
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;