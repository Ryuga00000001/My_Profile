import React, { useEffect, useState, useRef } from 'react';
import { Github, Facebook, Music, Youtube, Mail, Linkedin, ChevronDown, Code, Zap, Globe, Smartphone, Database, Lock, Menu, X, ExternalLink, Briefcase, Award, Coffee, Star, Rocket, Download } from 'lucide-react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [stats, setStats] = useState({ projects: 0, clients: 0, experience: 0 });
  const [matrixRain, setMatrixRain] = useState([]);

  const fullText = "Full Stack Developer | Cybersecurity Enthusiast";
  const typingSpeed = 100;

  useEffect(() => {
    generateParticles();
    generateMatrixRain();
  }, []);

  // Typing animation
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Stats counter animation
  useEffect(() => {
    const targetStats = { projects: 50, clients: 30, experience: 3 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        projects: Math.floor(targetStats.projects * progress),
        clients: Math.floor(targetStats.clients * progress),
        experience: Math.floor(targetStats.experience * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const generateParticles = () => {
    const newParticles = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      speedX: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(newParticles);
  };

  const generateMatrixRain = () => {
    const columns = 20;
    const rain = Array.from({ length: columns }, (_, i) => ({
      id: i,
      x: (100 / columns) * i,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setMatrixRain(rain);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // 🔧 CHỈNH SỬA THÔNG TIN CÁ NHÂN TẠI ĐÂY
  const profileData = {
    fullName: "Huynh Gia Quan",
    nickname: "Zeroth",
    dateOfBirth: "05/11/2005",
    avatar: "ego.jpeg",
    title: "Full Stack Developer | Cybersecurity Enthusiast",
    bio: "Passionate about creating amazing web experiences and exploring cybersecurity",

    // Huy hiệu/Badges
    badges: [
      { icon: Award, text: "Top Developer", color: "from-yellow-400 to-orange-500" },
      { icon: Coffee, text: "Coffee Lover", color: "from-amber-600 to-amber-800" },
      { icon: Star, text: "5★ Rated", color: "from-purple-400 to-pink-500" },
      { icon: Rocket, text: "Fast Delivery", color: "from-blue-400 to-cyan-500" },
    ],

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

    // Dự án (Projects)
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Nền tảng thương mại điện tử toàn diện với React, Node.js và MongoDB. Tích hợp thanh toán và quản lý kho hàng.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "🛒",
        link: "#",
        github: "https://github.com/Ryuga00000001"
      },
      {
        title: "Security Dashboard",
        description: "Dashboard giám sát bảo mật theo thời gian thực với phát hiện mối đe dọa và cảnh báo.",
        tech: ["React", "Python", "WebSocket", "Docker"],
        image: "🔒",
        link: "#",
        github: "https://github.com/Ryuga00000001"
      },
      {
        title: "Social Media App",
        description: "Ứng dụng mạng xã hội với tính năng chat realtime, stories và AI content moderation.",
        tech: ["React Native", "Firebase", "Node.js", "AI"],
        image: "💬",
        link: "#",
        github: "https://github.com/Ryuga00000001"
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
        url: "mailto:aovkiz123@gmail.com",
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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(10px); }
        }
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(0, 255, 200, 0.5),
                        0 0 20px rgba(0, 255, 200, 0.3),
                        0 0 30px rgba(0, 255, 200, 0.2);
          }
          50% { 
            text-shadow: 0 0 20px rgba(0, 255, 200, 1),
                        0 0 40px rgba(0, 255, 200, 0.7),
                        0 0 60px rgba(0, 255, 200, 0.4);
          }
        }
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 255, 200, 0.4),
                       0 0 40px rgba(0, 255, 200, 0.2),
                       inset 0 0 20px rgba(0, 255, 200, 0.1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(0, 255, 200, 0.8),
                       0 0 80px rgba(0, 255, 200, 0.4),
                       inset 0 0 40px rgba(0, 255, 200, 0.2);
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
          10% { opacity: 1; }
          90% { opacity: 1; }
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
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes rotate-3d {
          0% { transform: perspective(1000px) rotateY(0deg); }
          100% { transform: perspective(1000px) rotateY(360deg); }
        }
        @keyframes holographic {
          0%, 100% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg);
          }
          50% {
            background-position: 100% 50%;
            filter: hue-rotate(30deg);
          }
        }
        @keyframes matrix-rain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes neon-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
          75% { opacity: 1; }
          80% { opacity: 0.9; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes text-glow-intense {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(0, 255, 200, 0.8),
              0 0 20px rgba(0, 255, 200, 0.6),
              0 0 30px rgba(0, 255, 200, 0.4),
              0 0 40px rgba(0, 255, 200, 0.2),
              0 0 70px rgba(0, 255, 200, 0.1);
          }
          50% {
            text-shadow: 
              0 0 20px rgba(0, 255, 200, 1),
              0 0 40px rgba(0, 255, 200, 0.8),
              0 0 60px rgba(0, 255, 200, 0.6),
              0 0 80px rgba(0, 255, 200, 0.4),
              0 0 140px rgba(0, 255, 200, 0.2);
          }
        }

        .float { animation: float 6s ease-in-out infinite; }
        .float-slow { animation: float-slow 8s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 200, 0.8), transparent);
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
        .slide-down { animation: slide-down 0.3s ease-out; }
        .rotate-3d { animation: rotate-3d 20s linear infinite; }
        .holographic { 
          background: linear-gradient(45deg, #00ffc8, #00ffff, #0099ff, #ff00ff, #00ffc8);
          background-size: 300% 300%;
          animation: holographic 8s ease infinite; 
        }
        .matrix-rain { animation: matrix-rain linear infinite; }
        .badge-float { animation: badge-float 3s ease-in-out infinite; }
        .neon-flicker { animation: neon-flicker 2s ease-in-out infinite; }
        .scale-in { animation: scale-in 0.5s ease-out; }
        .text-glow-intense { animation: text-glow-intense 3s ease-in-out infinite; }

        /* Cybersecurity Grid Background */
        .grid-bg {
          background-image: 
            linear-gradient(rgba(0, 255, 200, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 200, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Enhanced glow effect on hover */
        .glow-hover {
          transition: all 0.3s ease;
        }
        .glow-hover:hover {
          filter: brightness(1.3);
          box-shadow: 0 0 30px rgba(0, 255, 200, 0.6);
          transform: translateY(-2px);
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

        /* 3D Text Effect */
        .text-3d {
          text-shadow: 
            0 1px 0 rgba(0, 255, 200, 0.9),
            0 2px 0 rgba(0, 255, 200, 0.8),
            0 3px 0 rgba(0, 255, 200, 0.7),
            0 4px 0 rgba(0, 255, 200, 0.6),
            0 5px 0 rgba(0, 255, 200, 0.5),
            0 6px 0 rgba(0, 255, 200, 0.4),
            0 7px 0 rgba(0, 255, 200, 0.3),
            0 8px 0 rgba(0, 255, 200, 0.2),
            0 10px 10px rgba(0, 0, 0, 0.4),
            0 15px 20px rgba(0, 0, 0, 0.2);
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

        /* Navigation Styles */
        .nav-blur {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Project card hover effect */
        .project-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover {
          transform: translateY(-8px);
        }

        /* Glass morphism */
        .glass {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 200, 0.2);
        }

        /* Holographic border */
        .holographic-border {
          position: relative;
          border: 2px solid transparent;
          background: linear-gradient(black, black) padding-box,
                      linear-gradient(45deg, #00ffc8, #00ffff, #0099ff, #ff00ff) border-box;
        }

        /* Cursor blink for typing effect */
        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>

      {/* Background Grid */}
      <div className="grid-bg fixed inset-0 z-0"></div>

      {/* Scan Line Effect */}
      <div className="scan-line z-50"></div>

      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
        {matrixRain.map((rain) => (
          <div
            key={rain.id}
            className="matrix-rain absolute text-cyan-400 font-mono text-xs"
            style={{
              left: `${rain.x}%`,
              animation: `matrix-rain ${rain.duration}s linear infinite`,
              animationDelay: `${rain.delay}s`,
            }}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Enhanced Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              bottom: '0',
              background: `radial-gradient(circle, rgba(0, 255, 200, ${particle.opacity}), rgba(0, 150, 255, ${particle.opacity * 0.5}))`,
              animation: `particle-float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(0, 255, 200, ${particle.opacity})`,
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Mouse Glow Effect */}
      <div
        className="fixed pointer-events-none z-5"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 255, 200, 0.2) 0%, rgba(0, 150, 255, 0.1) 30%, transparent 70%)',
          borderRadius: '50%',
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
          transition: 'all 0.1s ease-out',
          filter: 'blur(60px)',
        }}
      ></div>

      {/* ===== NAVIGATION BAR ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 100
            ? 'bg-black bg-opacity-80 nav-blur border-b border-cyan-500 border-opacity-20'
            : 'bg-transparent'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold cyber-text hover:scale-110 transition-transform cursor-pointer neon-flicker"
              aria-label="Scroll to home"
            >
              &lt;Zeroth /&gt;
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                      }`}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full glow-pulse"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-cyan-400 hover:bg-opacity-10 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 nav-blur border-b border-cyan-500 border-opacity-20 slide-down">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-400 bg-opacity-10'
                      : 'text-gray-300 hover:bg-cyan-400 hover:bg-opacity-10 hover:text-cyan-400'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-20">
        {/* ===== SECTION 1: ENHANCED HERO SECTION ===== */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          {/* Rotating rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] border-2 border-cyan-500 border-opacity-20 rounded-full rotate-3d"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[700px] h-[700px] border border-blue-500 border-opacity-10 rounded-full rotate-3d" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>

          <div className="w-full max-w-6xl">
            {/* Header Decoration */}
            <div className="text-center mb-12 space-y-4 slide-in-left">
              <div className="inline-block">
                <div className="text-xs md:text-sm font-mono text-cyan-400 mb-3 animate-pulse">
                  &gt; INITIALIZING ADVANCED SYSTEMS...
                </div>
                <div className="h-0.5 w-full max-w-2xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4"></div>
              </div>
            </div>

            {/* Main Holographic Card */}
            <div className="glass holographic-border rounded-3xl p-8 md:p-16 glow-pulse scale-in relative overflow-hidden">
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic opacity-10 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar Section with enhanced effects */}
                <div className="flex flex-col items-center mb-12">
                  <div className="relative mb-8">
                    {/* Multiple glow layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-60 animate-spin" style={{ animationDuration: '10s' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 rounded-full blur-xl opacity-40 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>

                    {/* Avatar with holographic border */}
                    <div className="relative holographic-border rounded-full p-2">
                      <img
                        src={profileData.avatar}
                        alt={`${profileData.fullName} - ${profileData.title}`}
                        className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover float-slow shadow-2xl"
                      />
                    </div>

                    {/* Floating badges around avatar */}
                    {profileData.badges.map((badge, index) => {
                      const BadgeIcon = badge.icon;
                      const positions = [
                        { top: '0%', left: '100%' },
                        { top: '30%', left: '-10%' },
                        { top: '70%', left: '100%' },
                        { top: '100%', left: '50%' },
                      ];
                      return (
                        <div
                          key={index}
                          className={`absolute badge-float hidden md:block`}
                          style={{
                            ...positions[index],
                            animationDelay: `${index * 0.5}s`,
                          }}
                        >
                          <div className={`bg-gradient-to-br ${badge.color} px-3 py-2 rounded-full flex items-center gap-2 shadow-lg glow-hover`}>
                            <BadgeIcon className="w-4 h-4 text-white" />
                            <span className="text-xs font-bold text-white whitespace-nowrap">{badge.text}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Name with 3D effect */}
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-3d cyber-text mb-6 text-glow-intense text-center leading-tight">
                    {profileData.fullName}
                  </h1>

                  {/* Nickname with neon effect */}
                  <div className="text-cyan-400 text-2xl md:text-3xl mb-8 font-mono neon-flicker">
                    @{profileData.nickname}
                  </div>

                  {/* Typing animation title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6 font-bold text-center px-4 min-h-[3rem] typing-cursor">
                    {typedText}
                  </h2>

                  {/* Date of Birth with icon */}
                  <div className="text-gray-400 text-base md:text-lg font-mono mb-8 flex items-center gap-2 glass px-4 py-2 rounded-full">
                    <span className="text-2xl">📅</span>
                    <span>DOB: <span className="text-cyan-300 font-bold">{profileData.dateOfBirth}</span></span>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-center text-lg md:text-xl max-w-3xl font-medium leading-relaxed px-4 mb-12">
                    {profileData.bio}
                  </p>

                  {/* Stats Counter */}
                  <div className="grid grid-cols-3 gap-6 md:gap-12 mb-12 w-full max-w-3xl">
                    <div className="glass rounded-2xl p-6 text-center glow-hover">
                      <div className="text-4xl md:text-5xl font-black cyber-text mb-2">{stats.projects}+</div>
                      <div className="text-gray-400 text-sm md:text-base font-medium">Projects</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center glow-hover">
                      <div className="text-4xl md:text-5xl font-black cyber-text mb-2">{stats.clients}+</div>
                      <div className="text-gray-400 text-sm md:text-base font-medium">Clients</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center glow-hover">
                      <div className="text-4xl md:text-5xl font-black cyber-text mb-2">{stats.experience}+</div>
                      <div className="text-gray-400 text-sm md:text-base font-medium">Years Exp</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg overflow-hidden glow-hover transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Rocket className="w-5 h-5" />
                        View My Work
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button
                      onClick={() => scrollToSection('contact')}
                      className="group relative px-8 py-4 glass border-2 border-cyan-400 rounded-xl font-bold text-lg text-cyan-400 overflow-hidden hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Contact Me
                      </span>
                    </button>

                    <a
                      href="#"
                      download
                      className="group relative px-8 py-4 glass border-2 border-purple-400 rounded-xl font-bold text-lg text-purple-400 overflow-hidden hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Download CV
                      </span>
                    </a>
                  </div>

                  {/* Scroll Indicator */}
                  <div className="text-center mt-8 animate-bounce">
                    <ChevronDown className="w-10 h-10 text-cyan-400 mx-auto glow" />
                    <p className="text-cyan-400 text-sm font-mono mt-2">Scroll to explore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: ABOUT SECTION ===== */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-16">
              <div className="text-xs font-mono text-cyan-400 mb-4 animate-pulse">
                &gt; ABOUT_ME.exe
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold cyber-text glow mb-4">
                Về Tôi
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
            </div>

            <div className="space-y-6 md:space-y-8">
              {profileData.biography.map((bio, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 md:p-8 glow-hover hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 text-2xl md:text-3xl font-bold flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg glow-pulse">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed pt-1">
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
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="w-full max-w-5xl">
            <div className="text-center mb-16">
              <div className="text-xs font-mono text-cyan-400 mb-4 animate-pulse">
                &gt; SKILLS_LOADED.exe
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold cyber-text glow mb-4">
                Skills
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {profileData.skills.map((skillCategory, categoryIndex) => {
                const IconComponent = skillCategory.icon;
                return (
                  <div
                    key={categoryIndex}
                    className="glass rounded-2xl p-6 md:p-8 glow-hover hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg glow-pulse">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-cyan-400">
                        {skillCategory.category}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 font-semibold text-sm md:text-base">{skill.name}</span>
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

        {/* ===== SECTION 4: PROJECTS SECTION ===== */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-16">
              <div className="text-xs font-mono text-cyan-400 mb-4 animate-pulse">
                &gt; LOADING_PROJECTS.exe
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold cyber-text glow mb-4">
                Projects
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6">
                Một số dự án nổi bật mà tôi đã thực hiện
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {profileData.projects.map((project, index) => (
                <div
                  key={index}
                  className="project-card glass rounded-2xl overflow-hidden glow-hover hover:border-cyan-500"
                >
                  {/* Project Icon/Image */}
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-8 flex items-center justify-center holographic">
                    <span className="text-6xl md:text-7xl">{project.image}</span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-400 bg-opacity-10 border border-cyan-400 border-opacity-30 rounded-full text-cyan-300 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-white font-semibold text-sm"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 border border-cyan-400 border-opacity-50 rounded-lg hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-300 text-cyan-400"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* ===== SECTION 5: CONTACT/SOCIAL SECTION ===== */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-16">
              <div className="text-xs font-mono text-cyan-400 mb-4 animate-pulse">
                &gt; CONNECTING_TO_NETWORKS.exe
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold cyber-text glow mb-4">
                SOCIAL
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Hãy liên hệ với tôi qua các nền tảng dưới đây!
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
              {profileData.socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden bg-gradient-to-br ${social.color} ${social.hoverColor} p-6 md:p-8 rounded-2xl transition-all duration-300 transform hover:scale-110 border border-opacity-30 border-white glow-hover`}
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500"></div>

                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-white drop-shadow-lg" />
                      <span className="text-base md:text-xl font-bold text-white text-center drop-shadow-lg">
                        {social.name}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Contact Card */}
            <div className="glass holographic-border rounded-3xl p-8 md:p-12 glow-pulse text-center">
              <div className="text-xs font-mono text-cyan-400 mb-4">
                &gt; DIRECT_CONTACT_INFO
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
                CONTACT ME
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-6">
                Email: <a href="mailto:aovkiz123@gmail.com" className="text-cyan-300 font-mono hover:underline">aovkiz123@gmail.com</a>
              </p>
              <p className="text-gray-400 text-base md:text-lg mb-6">
                Phone: <a href="tel:+84356994975" className="text-cyan-300 font-mono hover:underline">+84 356 994 975</a>
              </p>
              <p className="text-gray-500 text-sm font-mono">
                I'm available to answer questions Monday through Friday (9AM - 6PM)
              </p>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-12 border-t border-cyan-500 border-opacity-20" role="contentinfo">
          <div className="text-center space-y-4 px-4">
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
        </footer>
      </div>
    </div>
  );
}