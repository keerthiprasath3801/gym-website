import React from 'react';
import './Trainers.css';

const trainersData = [
  {
    id: 1,
    name: 'XXXXXX',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'XXXXXX',
    specialty: 'Yoga & Pilates',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'XXXXXX',
    specialty: 'HIIT & Cardio',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <h2 className="section-title">Expert Trainers</h2>
        <div className="trainers-grid">
          {trainersData.map(trainer => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p>{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;