import React from 'react';
import { FaUserGraduate, FaBullseye, FaLightbulb } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about-page">    
      <section className="mission-section">
        <div className="section-content">
          <div className="text">
            <h2><FaBullseye /> Our Mission</h2>
            <p>
              At Testmate, our mission is to empower students by providing world-class learning resources 
              to prepare effectively for the GATE exam. We are focused on delivering personalized learning 
              experiences that adapt to each student’s unique needs.
            </p>
          </div>
          
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="section-content reverse">
          <div className="text">
            <h2><FaLightbulb /> Our Vision</h2>
            <p>
              We envision a future where every student, no matter their background, has access to the tools 
              and guidance necessary to achieve their academic goals. Our platform continuously evolves, 
              providing the latest study materials, practice tests, and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>What We Offer</h2>
        <div className="values-cards">
          <div className="card">
            <FaUserGraduate className="icon" />
            <h3>Expert Guidance</h3>
            <p>Get tips and strategies from top GATE scorers to improve your performance.</p>
          </div>
          <div className="card">
            <FaBullseye className="icon" />
            <h3>Personalized Learning</h3>
            <p>Customized study plans and practice tests to cater to individual learning needs.</p>
          </div>
          <div className="card">
            <FaLightbulb className="icon" />
            <h3>Innovative Platform</h3>
            <p>Interactive learning tools designed to make studying more engaging and effective.</p>
          </div>
        </div>
      </section>

          </div>
  );
}

export default About;
