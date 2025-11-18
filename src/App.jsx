import React, { useEffect, useState } from 'react';
import { Github, Facebook, Music, Youtube, Mail, Linkedin, ChevronDown, Code, Zap, Globe, Smartphone, Database, Lock } from 'lucide-react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    generateParticles();
  }, []);

  const generateParticles = () => {
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
      speedX: Math.random() * 0.5 - 0.25,
    }));
    setParticles(newParticles);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 🔧 CHỈNH SỬA THÔNG TIN CÁ NHÂN TẠI ĐÂY
  const profileData = {
    fullName: "Huynh Gia Quan",
    nickname: "Zeroth",
    dateOfBirth: "05/11/2005",
    avatar: "../img/ego.jpeg",    
    title: "Full Stack Developer | Cybersecurity Enthusiast",
    bio: "Passionate about creating amazing web experiences and exploring cybersecurity",

    // Tiểu sử / Giới thiệu
    biography: [
      "Tôi là một Web Developer đầy đam mê với 3 năm kinh nghiệm trong phát triển ứng dụng web. Tôi có kỹ năng mạnh trong React, Node.js và các công nghệ hiện đại.",
      "Ngoài lập trình, tôi còn yêu thích tìm hiểu về cybersecurity và bảo mật thông tin. Tôi tin rằng an ninh mạng là một phần không thể thiếu trong phát triển phần mềm.",
      "Mục tiêu của tôi là trở thành một Developer giỏi, có thể giải quyết những vấn đề phức tạp và tạo ra những sản phẩm có giá trị cao."
    ],

    // Kỹ năng
    skills: [
      {
        category: "Frontend",
        icon: Smartphone,
        items: [
          { name: "React.js", level: 90 },
          { name: "Tailwind CSS", level: 95 },
          { name: "JavaScript", level: 92 },
          { name: "Vue.js", level: 85 },
        ]
      },
      {
        category: "Backend",
        icon: Database,
        items: [
          { name: "Node.js", level: 88 },
          { name: "Express.js", level: 87 },
          { name: "Python", level: 85 },
          { name: "MongoDB", level: 86 },
        ]
      },
      {
        category: "Tools & Others",
        icon: Code,
        items: [
          { name: "Git & GitHub", level: 93 },
          { name: "Docker", level: 80 },
          { name: "RESTful API", level: 90 },
          { name: "Cybersecurity", level: 82 },
        ]
      },
    ],

    // Mạng xã hội
    socials: [
      {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/Ryuga00000001",
        color: "from-gray-400 to-gray-600",
        hoverColor: "hover:from-gray-300 hover:to-gray-500",
       
      },
      {
        name: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/hg.quan.01",
        color: "from-blue-400 to-blue-600",
        hoverColor: "hover:from-blue-300 hover:to-blue-500",
      },
      {
        name: "TikTok",
        icon: Music,
        url: "https://www.tiktok.com/@zeroth0101",
        color: "from-pink-400 to-pink-600",
        hoverColor: "hover:from-pink-300 hover:to-pink-500",
      },
      {
        name: "YouTube",
        icon: Youtube,
        url: "https://www.youtube.com/@zeroth0101",
        color: "from-red-400 to-red-600",
        hoverColor: "hover:from-red-300 hover:to-red-500",
      },
      {
        name: "Email",
        icon: Mail,
        url: "https://mail.google.com/mail/u/0/?pli=1#inbox",
        color: "from-yellow-400 to-yellow-600",
        hoverColor: "hover:from-yellow-300 hover:to-yellow-500",
      },
      {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://linkedin.com",
        color: "from-blue-500 to-blue-700",
        hoverColor: "hover:from-blue-400 hover:to-blue-600",
      },
    ],

  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(0, 255, 200, 0.5),
                        0 0 20px rgba(0, 255, 200, 0.3);
          }
          50% { 
            text-shadow: 0 0 30px rgba(0, 255, 200, 1),
                        0 0 40px rgba(0, 255, 200, 0.5);
          }
        }
        @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
        }
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes pulse-border {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 255, 200, 0.3),
                       inset 0 0 20px rgba(0, 255, 200, 0.1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(0, 255, 200, 0.6),
                       inset 0 0 30px rgba(0, 255, 200, 0.2);
          }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes float-sm {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes typewriter {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes blink-cursor {
          0%, 49% { border-right-color: rgba(0, 255, 200, 1); }
          50%, 100% { border-right-color: transparent; }
        }

        .float { animation: float 6s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .scan-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 200, 0.5), transparent);
          animation: scan 8s linear infinite;
          z-index: 50;
        }
        .pulse-border { animation: pulse-border 3s ease-in-out infinite; }
        .particle { animation: particle-float linear infinite; }
        .shimmer { animation: shimmer 2s infinite; }
        .float-sm { animation: float-sm 4s ease-in-out infinite; }
        .gradient-shift { animation: gradient-shift 6s ease infinite; }
        .slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .slide-in-up { animation: slide-in-up 0.8s ease-out; }
        .typewriter { animation: typewriter 4s steps(40, end); }
        .blink-cursor { animation: blink-cursor 1s infinite; }

        /* Cybersecurity Grid Background */
        .grid-bg {
          background-image: 
            linear-gradient(rgba(0, 255, 200, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 200, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Glow effect on hover */
        .glow-hover {
          transition: all 0.3s ease;
        }
        .glow-hover:hover {
          filter: brightness(1.2);
          box-shadow: 0 0 20px rgba(0, 255, 200, 0.5);
        }

        /* Cybersecurity text effect */
        .cyber-text {
          background: linear-gradient(45deg, #00ffc8, #00ffff, #0099ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .skill-bar {
          background: linear-gradient(90deg, rgba(0, 255, 200, 0.2), rgba(0, 150, 255, 0.2));
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .skill-fill {
          background: linear-gradient(90deg, #00ffc8, #0099ff);
          height: 100%;
          border-radius: 10px;
          position: relative;
          box-shadow: 0 0 10px rgba(0, 255, 200, 0.5);
        }

        .skill-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 200, 0.5), transparent);
          margin: 60px 0;
        }

        .fade-in-scroll {
          opacity: 0;
          transform: translateY(20px);
          animation: slide-in-up 0.8s ease-out forwards;
        }
      `}</style>

      {/* Background Grid */}
      <div className="grid-bg fixed inset-0 z-0"></div>

      {/* Scan Line Effect */}
      <div className="scan-line z-50"></div>

      {/* Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute bg-cyan-400 rounded-full opacity-60"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              bottom: '0',
              animation: `particle-float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Glow Effect */}
      <div
        className="fixed pointer-events-none z-5"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 255, 200, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
          transition: 'all 0.1s ease-out',
          filter: 'blur(50px)',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20">
        {/* ===== SECTION 1: HERO SECTION ===== */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

          <div className="w-full max-w-4xl">
            {/* Header Decoration */}
            <div className="text-center mb-12 space-y-4 slide-in-left">
              <div className="inline-block">
                <div className="text-xs font-mono text-cyan-400 mb-3 animate-pulse">
                  &gt; INITIALIZING SYSTEM...
                </div>
                <div className="h-0.5 w-96 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4"></div>
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-black bg-opacity-60 backdrop-blur-xl border border-cyan-500 border-opacity-30 rounded-3xl p-12 pulse-border glow-hover slide-in-up">
              {/* Avatar Section */}
              <div className="flex flex-col items-center mb-12">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-70 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-spin" style={{ animationDuration: '8s' }}></div>
                  <img
                    src={profileData.avatar}
                    alt={profileData.fullName}
                    className="relative w-48 h-48 rounded-full border-4 border-cyan-400 object-cover float glow-hover shadow-2xl"
                  />
                </div>

                {/* Name & Info */}
                <h1 className="text-6xl md:text-7xl font-bold cyber-text mb-4 glow">
                  {profileData.fullName}
                </h1>
                <div className="text-cyan-400 text-2xl mb-6 font-mono">
                  @{profileData.nickname}
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4 font-semibold">
                  {profileData.title}
                </h2>

                {/* Date of Birth */}
                <div className="text-gray-400 text-lg font-mono mb-6 flex items-center gap-2">
                  <span>📅</span>
                  <span>DOB: <span className="text-cyan-300">{profileData.dateOfBirth}</span></span>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-center text-lg max-w-2xl font-medium leading-relaxed">
                  {profileData.bio}
                </p>
              </div>

              {/* Scroll Indicator */}
              <div className="text-center mt-12 animate-bounce">
                <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto" />
                <p className="text-cyan-400 text-sm font-mono mt-2">Scroll</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: ABOUT SECTION ===== */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-16">
              <div className="text-xs font-mono text-cyan-400 mb-4 animate-pulse">
                &gt; ABOUT_ME.exe
              </div>
              <h2 className="text-5xl md:text-6xl font-bold cyber-text glow mb-4">
                Về Tôi
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
            </div>

            <div className="space-y-8">
              {profileData.biography.map((bio, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-50 backdrop-blur-lg border border-cyan-500 border-opacity-20 rounded-2xl p-8 glow-hover hover:border-opacity-50 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 text-3xl font-bold flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-400 bg-opacity-10 rounded-lg">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed pt-1">
                      {bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* ===== SECTION 3: SKILLS SECTION ===== */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="w-full max-w-5xl">
            <div className="text-center mb-16">
              <div className="text-xs font-mono text-cyan-400 mb-4 animate-pulse">
                &gt; SKILLS_LOADED.exe
              </div>
              <h2 className="text-5xl md:text-6xl font-bold cyber-text glow mb-4">
                Skills
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {profileData.skills.map((skillCategory, categoryIndex) => {
                const IconComponent = skillCategory.icon;
                return (
                  <div
                    key={categoryIndex}
                    className="bg-black bg-opacity-50 backdrop-blur-lg border border-cyan-500 border-opacity-20 rounded-2xl p-8 glow-hover hover:border-opacity-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-400">
                        {skillCategory.category}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 font-semibold">{skill.name}</span>
                            <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                          </div>
                          <div className="skill-bar h-3">
                            <div
                              className="skill-fill"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* ===== SECTION 4: SOCIAL SECTION ===== */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-16">
              <div className="text-xs font-mono text-cyan-400 mb-4 animate-pulse">
                &gt; CONNECTING_TO_NETWORKS.exe
              </div>
              <h2 className="text-5xl md:text-6xl font-bold cyber-text glow mb-4">
                SOCIAL
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Hãy liên hệ với tôi qua các nền tảng dưới đây!
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {profileData.socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden bg-gradient-to-br ${social.color} ${social.hoverColor} p-8 rounded-2xl transition-all duration-300 transform hover:scale-110 border border-opacity-30 border-white glow-hover`}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500"></div>

                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center">
                      <Icon className="w-12 h-12 mb-4 text-white drop-shadow-lg" />
                      <span className="text-xl font-bold text-white text-center drop-shadow-lg">
                        {social.name}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Contact Card */}
            <div className="bg-black bg-opacity-60 backdrop-blur-xl border border-cyan-500 border-opacity-30 rounded-3xl p-12 pulse-border text-center">
              <div className="text-xs font-mono text-cyan-400 mb-4">
                &gt; DIRECT_CONTACT_INFO
              </div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                CONTACT ME
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Email: <span className="text-cyan-300 font-mono">aovkiz123@gmail.com</span>
              </p>
              <p className="text-gray-400 text-lg mb-6">
                Phone: <span className="text-cyan-300 font-mono">+84 356 994 975</span>
              </p>
              <p className="text-gray-500 text-sm font-mono">
                I'm available to answer questions Monday through Friday (9AM - 6PM)
              </p>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <section className="py-12 border-t border-cyan-500 border-opacity-20">
          <div className="text-center space-y-4">
            <div className="text-sm font-mono text-cyan-400">
              &gt; THANKS_FOR_VISITING.exe
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 {profileData.fullName}. All rights reserved. | Designed with ❤️ and 💻
            </p>
            <p className="text-gray-600 text-xs font-mono">
              Last updated: {new Date().toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}