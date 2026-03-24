import React from 'react';
import './Membership.css';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    features: ['Access to gym floor', 'Locker room access', 'Free parking', '1 free guest pass/month']
  },
  {
    name: 'Pro',
    price: '$59',
    features: ['All Basic features', 'Group classes included', 'Personal trainer session/month', 'Nutrition guide']
  },
  {
    name: 'Elite',
    price: '$99',
    features: ['All Pro features', 'Unlimited guest passes', '24/7 gym access', 'Private locker', 'Monthly massage']
  }
];

const Membership = () => {
  return (
    <section id="membership" className="section membership">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${index === 1 ? 'popular' : ''}`}>
              {index === 1 && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="btn">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;