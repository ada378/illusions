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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 animate-fadeInUp leading-tight">
              Our <span className="gradient-text">Developer Team</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto animate-fadeInUp leading-relaxed" style={{animationDelay: '0.2s'}}>
              Meet the talented developers behind Illusion's success. Our team combines creativity, 
              technical expertise, and passion to deliver exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {developers.map((developer, index) => (
              <div 
                key={developer.id} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover-shadow hover-scale transition-all duration-300 overflow-hidden border border-gray-100 animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Profile Image */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img 
                    src={developer.image} 
                    alt={developer.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{developer.name}</h3>
                    <p className="text-blue-200 font-medium">{developer.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {developer.experience}
                      </span>
                      <span className="text-sm text-gray-500">{developer.specialization}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {developer.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Core Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {developer.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors cursor-pointer">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
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

      {/* Team Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Team Excellence</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Our developers bring together years of experience and cutting-edge expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="bg-white/10 p-4 sm:p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-bold mb-2">22+</div>
              <div className="text-sm sm:text-lg opacity-90">Years Combined Experience</div>
            </div>
            <div className="bg-white/10 p-4 sm:p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm sm:text-lg opacity-90">Technologies Mastered</div>
            </div>
            <div className="bg-white/10 p-4 sm:p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-bold mb-2">200+</div>
              <div className="text-sm sm:text-lg opacity-90">Projects Delivered</div>
            </div>
            <div className="bg-white/10 p-4 sm:p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm sm:text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Want to Join Our <span className="gradient-text">Amazing Team?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            We're always looking for talented developers who share our passion for creating exceptional digital experiences.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover-scale hover-shadow transition-all duration-300 shadow-lg">
            View Open Positions
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;