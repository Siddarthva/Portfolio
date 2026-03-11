import { motion } from 'framer-motion';
import Reveal from './Reveal';
import './About.css';

const storyBlocks = [
  { label: 'Background', text: 'Motivated Computer Science (AI & ML) undergraduate with strong foundations in software development, full-stack engineering, and machine learning.' },
  { label: 'Craft', text: 'Experienced in building scalable web applications, designing RESTful APIs, and implementing secure authentication systems.' },
  { label: 'Mission', text: 'Actively seeking internship opportunities in software engineering and machine learning to create technology that makes a real difference.' },
];

const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
  }),
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal className="about-header">
          <p className="section-label">01 — About</p>
          <h2 className="section-heading">About Me</h2>
        </Reveal>

        <div className="about-blocks">
          {storyBlocks.map((block, i) => (
            <motion.div
              key={i}
              className="about-block glass-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={blockVariants}
            >
              <span className="about-block-label font-accent">{block.label}</span>
              <p>{block.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
