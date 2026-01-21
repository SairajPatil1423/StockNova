import React from 'react';

function RightSection({ imageURL, ProductName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row py-5 align-items-center">
        
        {}
        <div className="col-md-6 order-md-1 order-2">
          <h2 className="fw-semibold">{ProductName}</h2>
          <p className="text-muted">{productDescription}</p>
          {learnMore && <a href={learnMore}>Learn More</a>}
        </div>

        <div className="col-md-6 order-md-2 order-1 text-center">
          <img src={imageURL} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
