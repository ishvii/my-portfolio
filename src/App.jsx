import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaGithub, FaArrowUp, FaCode, FaPalette, FaMobile, FaServer } from "react-icons/fa";
import { SiFlutter, SiReact, SiPython, SiJavascript, SiNodedotjs, SiMongodb, SiDocker, SiFirebase, SiFigma } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { VscAzure } from "react-icons/vsc";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Hero typing animation
  const heroMessages = ["Full-Stack Developer", "React & Flutter Expert", "UI/UX Enthusiast"];
  const [heroText, setHeroText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < heroMessages[msgIndex].length) {
        setHeroText((prev) => prev + heroMessages[msgIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setHeroText("");
          setCharIndex(0);
          setMsgIndex((msgIndex + 1) % heroMessages.length);
        }, 1500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [charIndex, msgIndex]);

  // Skills with icons and categories
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaPalette className="text-xl" />,
      skills: [
        { name: "React", icon: <SiReact />, level: 90 },
        { name: "Flutter", icon: <SiFlutter />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript />, level: 80 },
        { name: "Figma", icon: <SiFigma />, level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-xl" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
        { name: "Python", icon: <SiPython />, level: 90 },
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaCode className="text-xl" />,
      skills: [
        { name: "Docker", icon: <SiDocker />, level: 70 },
        { name: "Azure", icon: <VscAzure />, level: 65 },
        { name: "Firebase", icon: <SiFirebase />, level: 80 },
        { name: "Git", level: 85 }
      ]
    }
  ];

  // Projects with more details (only 2 projects now)
  const projects = [
    {
      title: "IoT-Based Mobile App",
      desc: "Flutter app to monitor IoT-enabled devices with notifications and alerts.",
      tech: "Flutter, Python, Firebase",
      category: "Flutter",
      image: "/api/placeholder/400/250",
    },
    {
      title: "IoT Enterprise Portal",
      desc: "React dashboard with Node.js & MongoDB backend for real-time device monitoring.",
      tech: "React, Node.js, MongoDB",
      category: "React",
      image: "/api/placeholder/400/250",
    }
  ];

  // Scroll to top functionality
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Active section tracking for navigation
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      rootMargin: "-20% 0px -80% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans scroll-smooth w-full overflow-x-clip">

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primaryDark text-white p-3 rounded-full shadow-lg hover:bg-accentPink transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primaryDark bg-gradient-to-r from-primaryDark to-accentPink bg-clip-text text-transparent">
            Ishvi Goyal
          </h1>
          <nav className="space-x-6 text-gray-700 hidden md:flex">
            {["home", "about", "skills", "projects", "experience", "contact"].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={`hover:text-accentPink transition capitalize ${activeSection === section ? "text-accentPink font-semibold" : ""
                  }`}
              >
                {section === "home" ? "Home" : section}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-primaryDark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accentPink opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primaryDark opacity-10 rounded-full blur-xl"></div>

        <div className="text-center max-w-3xl mx-auto px-6 z-10" data-aos="fade-in">
         
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primaryDark">Hi, I'm <span className="bg-gradient-to-r from-primaryDark to-accentPink bg-clip-text text-transparent">Ishvi Goyal</span></h1>
          <div className="h-8 mb-6">
            <p className="text-xl text-primaryLight font-medium">{heroText}<span className="animate-pulse">|</span></p>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I create beautiful, functional digital experiences with modern technologies.
            Passionate about solving problems through code and design.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#projects" className="bg-primaryDark text-white px-6 py-3 rounded-full hover:bg-primaryLight transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg">
              View My Work
            </a>
            <a href="#contact" className="bg-white text-primaryDark border border-primaryDark px-6 py-3 rounded-full hover:bg-primaryDark hover:text-white transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg">
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://linkedin.com/in/ishvi-goyal-2a8933211" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-primaryDark hover:text-white transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="mailto:ishvi278@gmail.com" className="bg-gray-100 p-3 rounded-full hover:bg-primaryDark hover:text-white transition-colors duration-300">
              <FaEnvelope />
            </a>
            <a href="https://github.com/ishvii" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-primaryDark hover:text-white transition-colors duration-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-primaryDark" data-aos="fade-up">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primaryDark to-accentPink mx-auto mb-12" data-aos="fade-up"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-xl font-semibold mb-4 text-primaryDark">Crafting Digital Solutions</h3>
              <p className="text-gray-700 mb-4">
                I'm a passionate full-stack developer with expertise in React, Flutter, and Node.js.
                With a background in biotechnology, I bring a unique problem-solving approach to software development.
              </p>
              <p className="text-gray-700 mb-6">
                I enjoy creating seamless user experiences and robust backend systems.
                Currently, I'm working as a Software Developer at Gatisheel Agritech, where I'm part of the founding team.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-primaryDark">1+</span>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-primaryDark">20+</span>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-primaryDark">10+</span>
                  <p className="text-sm text-gray-600">Technologies</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              <div className="bg-gradient-to-br from-primaryDark to-accentPink p-1 rounded-xl h-48">
                <div className="bg-white h-full rounded-xl flex items-center justify-center">
                  <FaCode className="text-4xl text-primaryDark" />
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mt-8">
                <FaPalette className="text-4xl text-primaryDark" />
              </div>
              <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                <FaMobile className="text-4xl text-primaryDark" />
              </div>
              <div className="bg-gradient-to-br from-accentPink to-primaryDark p-1 rounded-xl h-48">
                <div className="bg-white h-full rounded-xl flex items-center justify-center">
                  <FaServer className="text-4xl text-primaryDark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-primaryDark" data-aos="fade-up">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primaryDark to-accentPink mx-auto mb-12" data-aos="fade-up"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primaryDark text-white p-2 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primaryDark">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map(skill => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {skill.icon && <span className="text-primaryDark">{skill.icon}</span>}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primaryDark to-accentPink h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-primaryDark" data-aos="fade-up">Key Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primaryDark to-accentPink mx-auto mb-12" data-aos="fade-up"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="h-48 bg-gradient-to-r from-primaryDark to-accentPink flex items-center justify-center text-white">
                  <FaCode className="text-5xl opacity-70" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-xl text-primaryDark">{project.title}</h4>
                    <span className="bg-gray-100 text-primaryDark text-xs font-semibold px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.desc}</p>
                  <p className="text-gray-500 text-sm mb-6">Tech: {project.tech}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-primaryDark" data-aos="fade-up">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primaryDark to-accentPink mx-auto mb-12" data-aos="fade-up"></div>

          <div className="max-w-full mx-auto" data-aos="fade-up">
            <div className="bg-white w-full rounded-xl shadow-md p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="font-bold text-xl text-primaryDark">Software Developer</h3>
                  <p className="text-lg text-gray-700">Gatisheel Agritech Pvt. Ltd.</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-primaryDark text-white text-sm font-semibold px-3 py-1 rounded-full">
                    April 2024 – Present
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-accentPink text-white p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span>Core member of founding team, contributing to early growth and product development.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accentPink text-white p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span>Designed user-centric interfaces using Figma.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accentPink text-white p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span>Developed responsive web & mobile apps with React & Flutter.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accentPink text-white p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span>Built & optimized full-stack solutions with Node.js, SQL, MongoDB.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accentPink text-white p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span>Participated in DevOps, deployment automation, and server management.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accentPink text-white p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span>Collaborated across design, development, and marketing teams.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certificates */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4 text-primaryDark">Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primaryDark to-accentPink mb-8"></div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-primaryDark">
                  <h3 className="font-bold text-lg text-primaryDark">B. Tech in Biotechnology</h3>
                  <p className="text-gray-600">Amity Institute of Biotechnology, Noida</p>
                  <p className="text-gray-500 text-sm mt-1">2020 – 2024</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-accentPink">
                  <h3 className="font-bold text-lg text-primaryDark">Class 12 – CBSE</h3>
                  <p className="text-gray-600">Delhi Public School, Gurugram</p>
                  <p className="text-gray-500 text-sm mt-1">92.75% | 2020</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-primaryDark">
                  <h3 className="font-bold text-lg text-primaryDark">Class 10 – CBSE</h3>
                  <p className="text-gray-600">Delhi Public School, Gurugram</p>
                  <p className="text-gray-500 text-sm mt-1">92% | 2018</p>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4 text-primaryDark">Certificates</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primaryDark to-accentPink mb-8"></div>

              <div className="bg-gradient-to-br from-primaryDark to-accentPink p-1 rounded-xl">
                <div className="bg-white p-6 rounded-lg h-full">
                  <h3 className="font-bold text-lg text-primaryDark mb-4">University of Michigan – Python for Everybody Specialization (Coursera)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accentPink rounded-full mr-3"></div>
                      Programming for Everybody (Getting Started with Python)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accentPink rounded-full mr-3"></div>
                      Python Data Structures
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accentPink rounded-full mr-3"></div>
                      Using Python to Access Web Data
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accentPink rounded-full mr-3"></div>
                      Using Databases with Python
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accentPink rounded-full mr-3"></div>
                      Capstone: Retrieving, Processing, and Visualizing Data with Python
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primaryDark" data-aos="fade-up">Languages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primaryDark to-accentPink mx-auto mb-8" data-aos="fade-up"></div>

          <div className="flex w-full md:flex-nowrap justify-between gap-8 flex-wrap" data-aos="fade-up">
            <div className="bg-white px-6 py-4 w-full rounded-xl shadow-md">
              <h3 className="font-bold text-primaryDark text-lg">English</h3>
              <p className="text-gray-600">Fluent</p>
            </div>
            <div className="bg-white px-6 py-4 w-full rounded-xl shadow-md">
              <h3 className="font-bold text-primaryDark text-lg">Hindi</h3>
              <p className="text-gray-600">Native</p>
            </div>
            <div className="bg-white px-6 py-4 w-full rounded-xl shadow-md">
              <h3 className="font-bold text-primaryDark text-lg">German</h3>
              <p className="text-gray-600">A2 Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primaryDark to-accentPink text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Get in Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" data-aos="fade-up"></div>
          <p className="max-w-full mx-auto mb-10 text-lg" data-aos="fade-up">
            I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
          </p>
          <div className="flex justify-center gap-6 flex-wrap" data-aos="fade-up">
            <a href="mailto:ishvi278@gmail.com" className="bg-white text-primaryDark px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg font-medium">
              <FaEnvelope /> Email Me
            </a>
            <a href="tel:+919773628534" className="bg-white text-primaryDark px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg font-medium">
              <FaPhoneAlt /> Call Me
            </a>
            <a href="https://linkedin.com/in/ishvi-goyal-2a8933211" target="_blank" rel="noopener noreferrer" className="bg-white text-primaryDark px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg font-medium">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-500 mb-4">
            © {new Date().getFullYear()} Ishvi Goyal. Built with React & Tailwind.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://linkedin.com/in/ishvi-goyal-2a8933211" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primaryDark transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="mailto:ishvi278@gmail.com" className="text-gray-500 hover:text-primaryDark transition-colors">
              <FaEnvelope className="text-xl" />
            </a>
            <a href="https://github.com/ishvii" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primaryDark transition-colors">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;