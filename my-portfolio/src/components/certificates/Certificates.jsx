import React, { useState } from "react";
import "./Certificates.css";
import { FaChevronLeft, FaChevronRight, FaFilePdf } from "react-icons/fa";

const certificates = [
   {
    title: "Mannheim Data Analytics Certificate",
    institution: "Mannheim Business School",
    date: "12/2020",
    pdf: "/certificates/MDAC.pdf",
    preview: "/mdac.png",
  },
  {
    title: "Python Basics",
    institution: "Software University - SoftUni",
    date: "10/2022",
    pdf: "/certificates/python-basics.pdf",
    preview: "/Basics.png",
  },
  {
    title: "Python Fundamentals",
    institution: "Software University - SoftUni",
    date: "04/2023",
    pdf: "/certificates/fundamentals.pdf",
    preview: "/fundamentals.png",
  },
  {
    title: "Python Advanced",
    institution: "Software University - SoftUni",
    date: "06/2023",
    pdf: "/certificates/python-advanced.pdf",
    preview: "/Advanced.png",
  },
   {
    title: "Python OOP",
    institution: "Software University - SoftUni",
    date: "08/2023",
    pdf: "/certificates/OOP.pdf",
    preview: "/OOP.png",
  },
  {
    title: "PostgreSQL",
    institution: "Software University - SoftUni",
    date: "10/2023",
    pdf: "/certificates/postgre.pdf",
    preview: "/PostgreSQL.png",
  },
 
  {
    title: "Python ORM",
    institution: "Software University - SoftUni",
    date: "11/2023",
    pdf: "/certificates/ORM.pdf",
    preview: "/ORM.png",
  },
  {
    title: "HTML & CSS",
    institution: "Software University - SoftUni",
    date: "02/2024",
    pdf: "/certificates/html-css.pdf",
    preview: "/html-css.png",
  },
  {
    title: "JS Front-End",
    institution: "Software University - SoftUni",
    date: "04/2024",
    pdf: "/certificates/front-end.pdf",
    preview: "/front-end.png",
  },
    {
    title: "JS Back-End",
    institution: "Software University - SoftUni",
    date: "06/2024",
    pdf: "/certificates/back-end.pdf",
    preview: "/back-end.png",
  },
    {
    title: "ReactJS",
    institution: "Software University - SoftUni",
    date: "08/2024",
    pdf: "/certificates/react.pdf",
    preview: "/react.png",
  },
    {
    title: "Django Basics",
    institution: "Software University - SoftUni",
    date: "11/2024",
    pdf: "/certificates/basics.pdf",
    preview: "/dj-basics.png",
  },
  {
    title: "Django Advanced",
    institution: "Software University - SoftUni",
    date: "12/2024",
    pdf: "/certificates/dj-advanced.pdf",
    preview: "/dj-advanced.png",
  },
  {
    title: "Diploma - Software Engineer with Python",
    institution: "Software University - SoftUni",
    date: "01/2025",
    pdf: "/certificates/diploma.pdf",
    preview: "/diploma.png",
  },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCert = certificates[currentIndex];

  return (
    <section className="certificates-section">
      <h2>My Certificates</h2>
      <div className="carousel-container">
        <button className="arrow left" onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        <div className="certificate-card">
          <div className="certificate-preview">
            <img src={currentCert.preview} alt={currentCert.title} />
          </div>
          <h3>{currentCert.title}</h3>
          <p>{currentCert.institution}</p>
          <span>{currentCert.date}</span>

          <a 
            href={currentCert.pdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-btn"
          >
            <FaFilePdf className="pdf-icon" /> View Certificate
          </a>
        </div>

        <button className="arrow right" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Certificates;
