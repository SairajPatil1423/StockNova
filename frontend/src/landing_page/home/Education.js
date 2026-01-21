import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="education" style={{width:"70%"}} />
        </div>
        <div className="col-6 ">
          <h1 className="mb-3 fs-2">Free and Open Market Education</h1>
          <p>
            varsity, the largest online stock Market education book in the world{" "}
            <br />
            coversing everything from basics to advanced trading.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            versity
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
           Trading Q&A ,the most active trading and investment community in India for all your Market related Queries
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Trading Q&A
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
