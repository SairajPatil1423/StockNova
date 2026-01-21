import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-top ">
        <h1 className=" text-center">People</h1>
      </div>
      <div
        className="row p-5 text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/me.webp"
            alt="sai"
            style={{ borderRadius: "100%", height: "80%", width: "80%" }}
          />

          <h4 className="mt-5">Sai Patil</h4>
          <h6>Founder & CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Sai bootstrapped and founded TradeMind in 2021 to overcome the
            hurdles he faced during his early years as a trader and tech
            enthusiast. Today, TradeMind is working towards transforming the
            Indian investing and financial education landscape.
          </p>
          <p>
            He is a member of the Indian Fintech Association and an advisor to
            several startup communities.
          </p>
          <p>Playing chess is his zen.</p>
          <p>Connect on <a  href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /<a href="" style={{textDecoration:"none"}}>Twitter</a> </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
