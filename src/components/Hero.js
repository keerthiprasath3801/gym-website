import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Transform Your Body,<br />Transform Your Life</h1>
        <p>Join the best gym in town with state-of-the-art equipment, expert trainers, and a community that pushes you to your limits.</p>
        <button className="btn">Get Started Today</button>
      </div>
    </section>
  );
};

export default Hero;