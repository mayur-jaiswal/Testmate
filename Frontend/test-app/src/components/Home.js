import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this path is correct
import { FaBook, FaChartLine, FaGraduationCap } from 'react-icons/fa'; // Importing icons

function Home() {
  return (
    <div className="home">
      <header className="welcome">
        <div className="overlay">
          <h1>Welcome to Testmate</h1>
          <p>Your one-stop solution for Gate exam preparation</p>
          <Link to="/login" className="get-started-button">Get Started</Link>
        </div>
      </header>

      <section className="about">
        <h2>About Testmate</h2>
        <p>
          Testmate is an online platform designed to help students prepare for gate exams.
          We provide all the resources you need to succeed!
        </p>
        <div className="features">
          <div className="feature-card">
            <FaBook className="feature-icon" />
            <h3>Comprehensive Study Materials</h3>
            <p>Access curated notes and guides from top scorers to master every topic.</p>
          </div>

          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Practice Tests & Analytics</h3>
            <p>Take practice exams and get detailed performance analytics to track your progress.</p>
          </div>

          <div className="feature-card">
            <FaGraduationCap className="feature-icon" />
            <h3>Expert Tips</h3>
            <p>Get insights and strategies from experts who've aced the GATE exam.</p>
          </div>
        </div>
        <Link to="/features" className="learn-more-button">Learn More</Link>
      </section>
    </div>
  );
}

export default Home;
