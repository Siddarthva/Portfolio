import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm currently seeking internship opportunities in software engineering and machine learning.
              Feel free to reach out if you'd like to discuss potential opportunities or just want to connect!
            </p>

            <div className="contact-links">
              <a
                href="https://github.com/Siddarthva"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link glass-card"
              >
                <FaGithub className="contact-link-icon" />
                <div>
                  <div className="contact-link-title">GitHub</div>
                  <div className="contact-link-text">@Siddarthva</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/siddarth-v-acharya-a72247293"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link glass-card"
              >
                <FaLinkedin className="contact-link-icon" />
                <div>
                  <div className="contact-link-title">LinkedIn</div>
                  <div className="contact-link-text">Siddarth V Acharya</div>
                </div>
              </a>

              <a
                href="mailto:siddharthacharyaa@gmail.com"
                className="contact-link glass-card"
              >
                <FaEnvelope className="contact-link-icon" />
                <div>
                  <div className="contact-link-title">Email</div>
                  <div className="contact-link-text">siddharthacharyaa@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message <FaPaperPlane />
            </button>
            
            {status && <div className="form-status">{status}</div>}
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Siddarth V Acharya. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
