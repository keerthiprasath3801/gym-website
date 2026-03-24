import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SK <span>Fit</span></h3>
            <p>Empowering you to reach your fitness goals with world-class facilities and expert guidance.</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#membership">Membership</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Your address </p>
            <p>Phone: your phone number</p>
            <p>Email: your email</p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday: 5am - 11pm</p>
            <p>Saturday: 7am - 9pm</p>
            <p>Sunday: 8am - 8pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 SK Fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;