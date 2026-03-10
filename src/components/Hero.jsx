import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import profileImg from '../assets/siddarth.jpg';
import './Hero.css';

const Hero = () => {
  const sectionRef = useRef(null);

  // Scroll-driven parallax values
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Content fades/scales out as you scroll past hero
  const contentY = useTransform(smooth, [0, 1], [0, -80]);
  const contentOpacity = useTransform(smooth, [0, 0.6], [1, 0]);
  const contentScale = useTransform(smooth, [0, 1], [1, 0.92]);

  // Parallax orbs at different speeds
  const orb1Y = useTransform(smooth, [0, 1], [0, -90]);
  const orb2Y = useTransform(smooth, [0, 1], [0, -130]);
  const orb3Y = useTransform(smooth, [0, 1], [0, -50]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cascading entrance variants
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 35, filter: 'blur(6px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      {/* Parallax background orbs */}
      <div className="hero-bg" aria-hidden="true">
        <motion.div className="orb orb-1" style={{ y: orb1Y }} />
        <motion.div className="orb orb-2" style={{ y: orb2Y }} />
        <motion.div className="orb orb-3" style={{ y: orb3Y }} />
      </div>

      {/* Content with scroll-driven fade-out */}
      <motion.div
        className="container hero-grid"
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
      >
        {/* Avatar */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div className="hero-avatar" variants={fadeUp}>
            <div className="avatar-glow" />
            <img src={profileImg} alt="Siddarth V Acharya" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div className="hero-text" variants={stagger} initial="hidden" animate="visible">
          <motion.p className="hero-greeting font-accent" variants={fadeUp}>Hello, I'm</motion.p>
          <motion.h1 variants={fadeUp}>Siddarth V Acharya</motion.h1>
          <motion.p className="hero-role" variants={fadeUp}>
            Computer Science (AI &amp; ML) Undergraduate · Software Engineer · ML Enthusiast
          </motion.p>
          <motion.p className="hero-tagline" variants={fadeUp}>
            Building scalable software systems and intelligent applications that solve real-world problems.
          </motion.p>
          <motion.div className="hero-cta" variants={fadeUp}>
            <button className="btn btn-primary" onClick={() => go('projects')}>
              View Projects <FaArrowRight />
            </button>
            <button className="btn btn-outline" onClick={() => go('contact')}>Contact Me</button>
          </motion.div>
          <motion.div className="hero-socials" variants={fadeUp}>
            <a href="https://github.com/Siddarthva" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/siddarth-v-acharya-a72247293" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:siddharthacharyaa@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="scroll-indicator"
        onClick={() => go('about')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-accent">Scroll to explore</span>
        <FaChevronDown className="bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
