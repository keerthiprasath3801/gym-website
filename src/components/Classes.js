import React from 'react';
import './Classes.css';

const classesData = [
  {
    id: 1,
    title: 'Strength Training',
    description: 'Build muscle and increase power with our strength-focused workouts.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'Cardio Blast',
    description: 'High-intensity cardio sessions to burn fat and boost endurance.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: 'Yoga & Mobility',
    description: 'Improve flexibility, reduce stress, and find your inner balance.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    title: 'HIIT',
    description: 'Short bursts of intense exercise followed by rest. Maximum results in minimum time.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const Classes = () => {
  return (
    <section id="classes" className="section classes">
      <div className="container">
        <h2 className="section-title">Our Classes</h2>
        <div className="classes-grid">
          {classesData.map(cls => (
            <div key={cls.id} className="class-card">
              <div className="class-image">
                <img src={cls.image} alt={cls.title} />
              </div>
              <div className="class-info">
                <h3>{cls.title}</h3>
                <p>{cls.description}</p>
                <button className="btn-small">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;