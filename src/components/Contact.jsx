import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Reveal, { StaggerContainer, StaggerItem } from './Reveal';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal direction="blur" className="contact-header">
          <p className="section-label">06 — Contact</p>
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            I'm currently seeking internship opportunities in software engineering and machine learning.
            Feel free to reach out!
          </p>
        </Reveal>

        <div className="contact-grid">
          {/* Info cards with stagger */}
          <Reveal direction="left" delay={0.1}>
            <StaggerContainer className="contact-links" stagger={0.1}>
              <StaggerItem>
                <a href="https://github.com/Siddarthva" target="_blank" rel="noopener noreferrer" className="contact-card glass-card">
                  <FaGithub className="contact-icon" />
                  <div>
                    <span className="contact-card-label font-accent">GitHub</span>
                    <span className="contact-card-value">@Siddarthva</span>
                  </div>
                </a>
              </StaggerItem>
              <StaggerItem>
                <a href="https://linkedin.com/in/siddarth-v-acharya-a72247293" target="_blank" rel="noopener noreferrer" className="contact-card glass-card">
                  <FaLinkedin className="contact-icon" />
                  <div>
                    <span className="contact-card-label font-accent">LinkedIn</span>
                    <span className="contact-card-value">Siddarth V Acharya</span>
                  </div>
                </a>
              </StaggerItem>
              <StaggerItem>
                <a href="mailto:siddharthacharyaa@gmail.com" className="contact-card glass-card">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <span className="contact-card-label font-accent">Email</span>
                    <span className="contact-card-value">siddharthacharyaa@gmail.com</span>
                  </div>
                </a>
              </StaggerItem>
              <StaggerItem>
                <a href="https://leetcode.com/u/sidarthvacharyaa/" target="_blank" rel="noopener noreferrer" className="contact-card glass-card">
                  <SiLeetcode className="contact-icon" />
                  <div>
                    <span className="contact-card-label font-accent">LeetCode</span>
                    <span className="contact-card-value">sidarthvacharyaa</span>
                  </div>
                </a>
              </StaggerItem>
            </StaggerContainer>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={0.2}>
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name" className="font-accent">Name</label>
                <input type="text" id="name" name="name" value={form.name}
                  onChange={handleChange} required placeholder="Your name" />
              </div>
              <div className="form-row">
                <label htmlFor="email" className="font-accent">Email</label>
                <input type="email" id="email" name="email" value={form.email}
                  onChange={handleChange} required placeholder="your.email@example.com" />
              </div>
              <div className="form-row">
                <label htmlFor="message" className="font-accent">Message</label>
                <textarea id="message" name="message" value={form.message}
                  onChange={handleChange} required rows="5" placeholder="Your message..." />
              </div>
              <button type="submit" className="btn btn-primary">Send Message <FaPaperPlane /></button>
              {status && (
                <motion.div
                  className="form-status font-accent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status}
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      <footer className="footer font-accent">
        <p>&copy; 2024 Siddarth V Acharya. All rights reserved.</p>
      </footer>
    </section >
  );
};

export default Contact;
