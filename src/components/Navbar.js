import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // We'll create this CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <h1>SK <span>Fit</span></h1>
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#classes" onClick={toggleMenu}>Classes</a></li>
            <li><a href="#trainers" onClick={toggleMenu}>Trainers</a></li>
            <li><a href="#membership" onClick={toggleMenu}>Membership</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;