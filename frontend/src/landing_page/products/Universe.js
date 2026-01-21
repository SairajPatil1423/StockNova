import React from 'react';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="fw-semibold">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="row text-center mt-5">
        
        <div className="col-md-4 p-4">
          <img src="media\images\zerodhaFundhouse.png" className="img-fluid" alt="" style={{height:"50px"}} />
          <h5 className="mt-3 fw-semibold">Zerodha Fund House</h5>
          <p className="text-muted small mt-2">
            Our asset management venture that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>

       
        <div className="col-md-4 p-4">
          <img src="media/images/sensibullLogo.svg" className="img-fluid" alt="" style={{height:"50px"}} />
          <h5 className="mt-3 fw-semibold">Sensibull</h5>
          <p className="text-muted small mt-2">
            Options trading platform that lets you create strategies, analyze positions, 
            and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

   
        <div className="col-md-4 p-4">
          <img src="media/images/goldenpiLogo.png" className="img-fluid" alt="" style={{height:"50px"}} />
          <h5 className="mt-3 fw-semibold">Tijori</h5>
          <p className="text-muted small mt-2">
            Investment research platform that offers detailed insights on stocks, 
            sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="media/images/streakLogo.png" className="img-fluid" alt="" style={{height:"50px"}} />
          <h5 className="mt-3 fw-semibold">Streak</h5>
          <p className="text-muted small mt-2">
            Systematic trading platform that allows you to create and backtest 
            strategies without coding.
          </p>
        </div>

        
        <div className="col-md-4 p-4">
          <img src="media/images/smallcaseLogo.png" className="img-fluid" alt="" style={{height:"50px"}} />
          <h5 className="mt-3 fw-semibold">Smallcase</h5>
          <p className="text-muted small mt-2">
            Thematic investing platform that helps you invest in diversified 
            baskets of stocks on ETFs.
          </p>
        </div>

     
        <div className="col-md-4 p-4">
          <img src="media/images/dittoLogo.png" className="img-fluid" alt="" style={{height:"50px"}} />
          <h5 className="mt-3 fw-semibold">Ditto</h5>
          <p className="text-muted small mt-2">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center my-4">
        <button className="btn btn-primary fs-5 px-4">Sign up now</button>
      </div>
    </div>
  );
}

export default Universe;
