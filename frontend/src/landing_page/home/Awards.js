import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largebroker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest Stock Broker In India</h1>
          <p className="mb-5">
            2+ million Finzaar Clients contribute to over 15% of all retail
            order volumes in india daily by trading and Investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">futures and options</li>
                <li className="mb-2">commodity derivatives</li>
                <li className="mb-2">currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">stocks and IPOs</li>
                <li className="mb-2">direct mutual funds</li>
                <li className="mb-2">Bonds and Government securities</li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="presslogos"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
