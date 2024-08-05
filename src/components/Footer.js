import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 Testmate. All rights reserved.</p>
        <ul className="footer-menu">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
