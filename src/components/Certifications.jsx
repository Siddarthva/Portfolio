import Reveal, { StaggerContainer, StaggerItem } from './Reveal';
import './Certifications.css';

import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';
import cert4 from '../assets/cert4.jpg';
import cert5 from '../assets/cert5.jpg';
import cert6 from '../assets/cert6.jpg';
import cert7 from '../assets/cert7.jpg';
import cert8 from '../assets/cert8.jpg';
import cert9 from '../assets/cert9.jpg';

const certifications = [
  { title: 'What Is Generative AI?', provider: 'LinkedIn Learning', image: cert1 },
  { title: 'Microsoft Azure AI Essentials', provider: 'Microsoft & LinkedIn', image: cert2 },
  { title: 'Build a Free Website with WordPress', provider: 'Coursera', image: cert3 },
  { title: 'Learn Bootstrap', provider: 'Scrimba', image: cert4 },
  { title: 'How to Get Into Web Development', provider: 'University of Leeds', image: cert5 },
  { title: 'Introduction to Logic for Computer Science', provider: 'University of Leeds', image: cert6 },
  { title: 'Full Stack Development (MERN)', provider: 'Technical Career Education', image: cert7 },
  { title: 'Mentorship & Guidance - Synergia', provider: 'Sahyadri College', image: cert8 },
  { title: 'Project Certificate - Coursera', provider: 'Coursera Project Network', image: cert9 },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certs">
      <div className="container">
        <Reveal className="certs-header">
          <p className="section-label">05 — Certifications</p>
          <h2 className="section-heading">Certifications</h2>
        </Reveal>

        <StaggerContainer className="certs-grid" stagger={0.06}>
          {certifications.map((cert, i) => (
            <StaggerItem key={i}>
              <div className="cert-card glass-card">
                <div className="cert-img">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                </div>
                <div className="cert-body">
                  <h3>{cert.title}</h3>
                  <p className="font-accent">{cert.provider}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Certifications;
