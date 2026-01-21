import React from 'react';

function Brokerage() {
  const items = [
    {
      img: "/media/images/pricing0.svg",
      title: "Free equity delivery",
      desc: "All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage."
    },
    {
      img: "/media/images/intradayTrades.svg",
      title: "Intraday and F&O trades",
      desc: "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
    },
    {
      img: "/media/images/pricing0.svg",
      title: "Free direct MF",
      desc: "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges."
    }
  ];

  return (
    <div className="container mt-5 pt-4">
      <div className="row text-center justify-content-center g-4">
        {items.map((item, idx) => (
          <div className="col-md-4 p-3" key={idx}>
            <img 
              src={item.img} 
              className="img-fluid mb-3"
              style={{height:"150px"}}
              alt=""
            />

            <h4 className="fw-semibold">{item.title}</h4>

            <p className="text-muted small mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brokerage;
