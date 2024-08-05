import React from 'react';
import './Home.css'; // Ensure this path is correct

function Home() {
  return (
    <div className="home">
      <header className="welcome">
        <h1>Welcome to the GATE Preparation Website</h1>
        <p>Your one-stop solution for GATE exam preparation</p>
      </header>
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>What is GATE?</h3>
          <p>GATE (Graduate Aptitude Test in Engineering) is an examination that tests the comprehensive understanding of various undergraduate subjects in engineering and science for admission into the Master's Program and Job in Public Sector Companies.</p>
        </div>
        <div className="faq">
          <h3>How do I register for GATE?</h3>
          <p>You can register for GATE by visiting the official GATE website and following the instructions provided there.</p>
        </div>
        <div className="faq">
          <h3>What resources are available on this website?</h3>
          <p>We offer a variety of resources including practice tests, study materials, and tips from previous GATE toppers to help you prepare effectively.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
