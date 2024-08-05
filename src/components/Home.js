import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this path is correct

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
        <p>Testmate is an online platform designed to help students prepare for a gate exams. We have the resources you need to succeed. Our platform offers practice tests, study materials, and tips from top scorers to guide you through your preparation journey.</p>
      </section>
      
    </div>
  );
}

export default Home;
