import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';

function Pricing() {
  return (
    <div>
      <Hero />
      <Brokerage />

      <div className="container mt-5 text-center">
        <h4 className="fw-semibold">Opening an account</h4>
        <p className="text-muted small">₹200 equity + ₹100 commodity</p>

        <h4 className="fw-semibold mt-4">AMC charges</h4>
        <p className="text-muted small">₹300 per year (billed quarterly)</p>

        
      </div>

      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary px-4 fs-5">Open account</button>
      </div>
    </div>
  );
}

export default Pricing;
