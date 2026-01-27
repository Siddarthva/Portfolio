import './Certifications.css';

import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";
import cert7 from "../assets/cert7.jpg";
import cert8 from "../assets/cert8.jpg";
import cert9 from "../assets/cert9.jpg";

const Certifications = () => {

  const certifications = [
    {
      title: "What Is Generative AI?",
      provider: "LinkedIn Learning",
      image: cert1
    },
    {
      title: "Microsoft Azure AI Essentials",
      provider: "Microsoft & LinkedIn",
      image: cert2
    },
    {
      title: "Build a Free Website with WordPress",
      provider: "Coursera",
      image: cert3
    },
    {
      title: "Learn Bootstrap",
      provider: "Scrimba",
      image: cert4
    },
    {
      title: "How to Get Into Web Development",
      provider: "University of Leeds",
      image: cert5
    },
    {
      title: "Introduction to Logic for Computer Science",
      provider: "University of Leeds",
      image: cert6
    },
    {
      title: "Full Stack Development (MERN)",
      provider: "Technical Career Education",
      image: cert7
    },
    {
      title: "Mentorship & Guidance - Synergia",
      provider: "Sahyadri College",
      image: cert8
    },
    {
      title: "Project Certificate - Coursera",
      provider: "Coursera Project Network",
      image: cert9
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">

          {certifications.map((cert, index) => (
            <div key={index} className="cert-card glass-card">

              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
              </div>

              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.provider}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;
