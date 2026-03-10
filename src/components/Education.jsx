import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import Reveal from './Reveal';
import './Education.css';

const Education = () => {
  const sectionRef = useRef(null);

  // Scroll-driven timeline progress line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end 0.7'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const smoothHeight = useSpring(lineHeight, { stiffness: 80, damping: 25 });

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <Reveal className="edu-header">
          <p className="section-label">04 — Education</p>
          <h2 className="section-heading">Education</h2>
        </Reveal>

        <div className="timeline">
          {/* Animated progress line driven by scroll */}
          <div className="timeline-track">
            <motion.div className="timeline-progress" style={{ height: smoothHeight }} />
          </div>

          <Reveal direction="left" className="timeline-item">
            <div className="timeline-dot"><FaGraduationCap /></div>
            <div className="timeline-card glass-card">
              <div className="edu-top">
                <h3>B.E Computer Science (AI &amp; ML)</h3>
                <span className="edu-badge font-accent">In Progress</span>
              </div>
              <h4 className="edu-institution">Sahyadri College of Engineering and Management</h4>
              <div className="edu-meta font-accent">
                <span><FaCalendarAlt /> 2023 – 2027</span>
                <span className="edu-cgpa">CGPA: 8.0 / 10</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
