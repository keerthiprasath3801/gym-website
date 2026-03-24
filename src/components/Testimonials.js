import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'XXXXXX',
    role: 'Member since 2022',
    text: 'IronFit completely transformed my fitness journey. The trainers are incredible and the community is so supportive!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 2,
    name: 'XXXXXX',
    role: 'Member since 2023',
    text: 'Best gym I\'ve ever been to. State-of-the-art equipment and classes that actually push you to improve.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    name: 'XXXXXX',
    role: 'Member since 2021',
    text: 'I\'ve lost 30 pounds and gained so much confidence thanks to the amazing trainers here. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">What Members Say</h2>
        <div className="testimonials-grid">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;