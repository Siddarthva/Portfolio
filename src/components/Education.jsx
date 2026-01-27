import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-card glass-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-details">
              <h3 className="education-degree">B.E Computer Science (AI & ML)</h3>
              <h4 className="education-institution">Sahyadri College of Engineering and Management</h4>
              <div className="education-info">
                <span className="education-date">
                  <FaCalendarAlt /> 2023 – 2027
                </span>
                <span className="education-cgpa">CGPA: 8.0/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
