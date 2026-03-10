import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import profileImg from '../assets/siddarth.jpg';
import './About.css';

const storyBlocks = [
  { label: 'Background', text: 'Motivated Computer Science (AI & ML) undergraduate with strong foundations in software development, full-stack engineering, and machine learning.' },
  { label: 'Craft', text: 'Experienced in building scalable web applications, designing RESTful APIs, and implementing secure authentication systems.' },
  { label: 'Mission', text: 'Actively seeking internship opportunities in software engineering and machine learning to create technology that makes a real difference.' },
];

const About = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  const blockRefs = useRef([]);

  // Track which story block is most visible
  useEffect(() => {
    const observers = blockRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveBlock(i); },
        { threshold: 0.55, rootMargin: '-10% 0px -10% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal className="about-header">
          <p className="section-label">01 — About</p>
          <h2 className="section-heading">About Me</h2>
        </Reveal>

        <div className="about-story">
          {/* Sticky visual — pinned while text scrolls */}
          <div className="about-visual-col">
            <div className="about-visual-sticky">
              <div className="about-img-wrap">
                <img src={profileImg} alt="Siddarth V Acharya" />
                <div className="about-img-accent" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBlock}
                  className="about-visual-label font-accent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {storyBlocks[activeBlock]?.label}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scrolling narrative blocks */}
          <div className="about-narrative-col">
            {storyBlocks.map((block, i) => (
              <motion.div
                key={i}
                ref={(el) => (blockRefs.current[i] = el)}
                className={`about-block glass-card ${activeBlock === i ? 'about-block-active' : ''}`}
                animate={{
                  opacity: activeBlock === i ? 1 : 0.3,
                  x: activeBlock === i ? 0 : 20,
                  scale: activeBlock === i ? 1 : 0.97,
                }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="about-block-num font-accent">0{i + 1}</span>
                <p>{block.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
