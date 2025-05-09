import React from "react";
import "./Education.css";

const educationData = [
    {
    logo: '/romainRolland.jpg',
    institution: 'Foreign Language High School "Romain Rolland"',
    degree: 'High School Diploma',
    location: 'Stara Zagora, Bulgaria',
    duration: '2013 - 2018',
    details: [
        'Core Subjects: German, English, Mathematics, Bulgarian',
    ]
    },
    {
    logo: '/uni-mannheim.jpg',
    institution: 'University of Mannheim',
    degree: 'B.Sc. Business Administration',
    location: 'Mannheim, Germany',
    duration: '09/2018 - 09/2022',
    details: [
        'Accounting and Taxation',
        'Management and Marketing',
        'Information Systems',
        'Operations Research',
        'Civil and Business Law',
        'Thesis: "Culture in Information Security: A Review of the Literature"'
    ]
    },
    {
    logo: '/rwth.png',
    institution: 'RWTH Aachen University',
    degree: 'M. Sc. Business Administration (incomplete)',
    location: 'Aachen, Germany',
    duration: '04/2023 - 04/2024',
    details: [
        'Theoretical Basics of Operations Research and Management',
        'Linear Optimization Programs'
    ]
    },
    
  {
    logo: '/softuni.png',  // Test with a simple online image
    institution: 'Software University - SoftUni',
    degree: 'Software Engineer with Python',
    location: 'Bulgaria',
    duration: '09/2022 - 12/2024',
    details: [
      'Python Fundamentals & Advanced Python',
      'OOP & Python ORM',
      'PostgreSQL, MongoDB',
      'JS Front-End & Back-End',
      'HTML & CSS',
      'React JS',
      'Django Web Framework'
    ]
  },


];

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-logo">
              <img src={edu.logo} alt={`${edu.institution} logo`} />
            </div>
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="location">{edu.location}</p>
            <p className="duration">{edu.duration}</p>
            <ul className="details">
              {edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
