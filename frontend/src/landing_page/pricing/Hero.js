import React from 'react';

function Hero() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-semibold">Pricing</h1>
      <p className="text-muted fs-5">
        Free equity delivery and direct mutual funds. Flat ₹20 intraday and F&O.
      </p>
      <img
        src="/media/images/pricing0.svg"
        alt="pricing hero"
        className="img-fluid mt-4"
        style={{ maxHeight: "350px" }}
      />
    </div>
  );
}

export default Hero;
