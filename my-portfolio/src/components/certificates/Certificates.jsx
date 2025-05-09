import React, { useState } from "react";
import "./Certificates.css";
import { FaChevronLeft, FaChevronRight, FaFilePdf } from "react-icons/fa";

const certificates = [
  {
    title: "Python Fundamentals",
    institution: "Software University - SoftUni",
    date: "12/2023",
    pdf: "/certificates/fundamentals.pdf",
    preview: "/fundamentals.png",
  },
  {
    title: "Advanced Python OOP",
    institution: "Software University - SoftUni",
    date: "02/2024",
    pdf: "/certificates/oop.pdf",
    preview: "/certificates/previews/oop.png",
  },
  {
    title: "React JS Essentials",
    institution: "Software University - SoftUni",
    date: "05/2024",
    pdf: "/certificates/react.pdf",
    preview: "/certificates/previews/react.png",
  },
  {
    title: "Django Web Framework",
    institution: "Software University - SoftUni",
    date: "08/2024",
    pdf: "/certificates/django.pdf",
    preview: "/certificates/previews/django.png",
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
