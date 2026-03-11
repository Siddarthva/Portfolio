import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Reveal from './Reveal';
import './Projects.css';

const projectsData = [
  { title: 'Udaan – Crowdfunding Platform', description: 'A comprehensive crowdfunding platform with secure payment integration and campaign management.', tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Razorpay'], features: ['JWT Authentication', 'Razorpay Payment Integration', 'REST APIs for campaigns and users', 'Reduced campaign creation steps by 40%'], github: 'https://github.com/Siddarthva', demo: '#' },
  { title: 'LifeBank – Blood Donation Platform', description: 'Real-time blood donation platform connecting donors with recipients in emergency situations.', tech: ['React', 'MongoDB'], features: ['Real-time donor–recipient matching', 'Emergency focused design', 'Fast connection under 5 minutes'], github: 'https://github.com/Siddarthva', demo: 'https://life-bank-two.vercel.app/' },
  { title: 'Lend a Hand – Service Booking App', description: 'Mobile service booking application with intelligent scheduling and real-time communication.', tech: ['React Native', 'Node.js', 'MongoDB'], features: ['Conflict-free scheduling algorithm', 'Real-time chat', '50+ mock transactions'], github: 'https://github.com/Siddarthva', demo: 'https://lend-a-hand-two.vercel.app/' },
  { title: 'AlgoVisualizer', description: 'Interactive algorithm visualization tool for learning sorting algorithms with speed controls.', tech: ['JavaScript', 'HTML5 Canvas'], features: ['Sorting visualizations', 'Bubble, Merge, Quick Sort', 'Speed control'], github: 'https://github.com/Siddarthva', demo: 'https://algo-viz-gamma-flame.vercel.app/' },
  { title: 'Resume Analyzer Pro', description: 'AI-powered resume analysis tool providing instant ATS scoring and detailed feedback for job seekers.', tech: ['React', 'AI Integration', 'Tailwind CSS'], features: ['Instant ATS Score generation', 'Keyword gap analysis', 'Actionable improvement suggestions', 'PDF resume parsing'], github: 'https://github.com/Siddarthva', demo: 'https://resume-analyzer-jrjg5o1t0-siddarths-projects-f72c4c95.vercel.app/' },
  { title: '2048 – Neon Edition', description: 'A modern neon-themed remake of the classic 2048 puzzle game with smooth animations and responsive design.', tech: ['React', 'Vite', 'JavaScript', 'CSS'], features: ['Neon dark-mode UI', 'Smooth tile animations', 'Keyboard and touch support', 'Responsive across devices', 'Optimized game logic'], github: 'https://github.com/Siddarthva', demo: 'https://2048-game-umber-six.vercel.app/' },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  // IntersectionObserver tracks which step is in the viewport centre
  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.5, rootMargin: '-25% 0px -25% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const p = projectsData[active];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal className="proj-header">
          <p className="section-label">03 — Work</p>
          <h2 className="section-heading">Featured Projects</h2>
        </Reveal>

        <div className="proj-showcase">
          {/* Scrolling steps */}
          <div className="proj-steps">
            {projectsData.map((proj, i) => (
              <motion.div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className={`proj-step ${active === i ? 'proj-step-active' : ''}`}
                onClick={() => setActive(i)}
                animate={{ opacity: active === i ? 1 : 0.35, x: active === i ? 0 : -15 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="proj-step-num font-accent">0{i + 1}</span>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Sticky preview with AnimatePresence crossfade */}
          <div className="proj-preview-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="proj-preview glass-card"
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="proj-preview-header">
                  <span className="proj-preview-num font-accent">0{active + 1}</span>
                  <h3>{p.title}</h3>
                </div>
                <p className="proj-preview-desc">{p.description}</p>
                <div className="proj-tags">
                  {p.tech.map((t, i) => <span key={i} className="proj-tag font-accent">{t}</span>)}
                </div>
                <ul className="proj-features">
                  {p.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div className="proj-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link"><FaGithub /> Code</a>
                  {p.demo && p.demo !== '#' && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-live"><FaExternalLinkAlt /> Live</a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;