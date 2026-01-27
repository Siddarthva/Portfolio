import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import './Hero.css';
import profileImg from "../assets/siddarth.jpg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-image fade-in-up">
            <div className="image-glow"></div>
            <img src={profileImg} alt="Siddarth V Acharya" />
        </div>
        <div className="hero-text">
          <div className="greeting fade-in-up">Hello, I'm</div>
          <h1 className="hero-name fade-in-up" style={{ animationDelay: '0.1s' }}>
            Siddarth V Acharya
          </h1>
          <h2 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
            Computer Science (AI & ML) Undergraduate | Software Engineer | ML Enthusiast
          </h2>
          <p className="hero-tagline fade-in-up" style={{ animationDelay: '0.3s' }}>
            Building scalable software systems and intelligent applications that solve real-world problems.
          </p>

          <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects <FaArrowRight />
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero-social fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/Siddarthva"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/siddarth-v-acharya-a72247293"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:siddharthacharyaa@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
