import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-semibold">How can we help you?</h1>
      <p className="text-muted">Search for answers or browse help topics</p>

      <div className="d-flex justify-content-center mt-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search questions..."
        />
      </div>
    </div>
  );
}

export default Hero;
