import React from "react";

function Footer() {
  const linkStyle = { textDecoration: "none", color: "inherit" };

  return (
   
    <div className="container border-top mt-5">
      <div className="row py-5">
        <div className="col">
          <img src="media/images/logo.svg" style={{ width: "50%" }} alt="Zerodha Logo" />
          <p className="text-muted">© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        </div>

        <div className="col">
          <p><strong>Company</strong></p>
          <a href="" style={linkStyle}>About</a><br />
          <a href="" style={linkStyle}>Philosophy</a><br />
          <a href="" style={linkStyle}>Press & media</a><br />
          <a href="" style={linkStyle}>Careers</a><br />
          <a href="" style={linkStyle}>Zerodha Cares (CSR)</a><br />
          <a href="" style={linkStyle}>Zerodha.tech</a><br />
          <a href="" style={linkStyle}>Open source</a><br />
        </div>

        <div className="col">
          <p><strong>Support</strong></p>
          <a href="" style={linkStyle}>Contact us</a><br />
          <a href="" style={linkStyle}>Support portal</a><br />
          <a href="" style={linkStyle}>How to file a complaint?</a><br />
          <a href="" style={linkStyle}>Status of your complaints</a><br />
          <a href="" style={linkStyle}>Bulletin</a><br />
          <a href="" style={linkStyle}>Circular</a><br />
          <a href="" style={linkStyle}>Z-Connect blog</a><br />
          <a href="" style={linkStyle}>Downloads</a><br />
        </div>

        <div className="col">
          <p><strong>Account</strong></p>
          <a href="" style={linkStyle}>Open demat account</a><br />
          <a href="" style={linkStyle}>Minor demat account</a><br />
          <a href="" style={linkStyle}>NRI demat account</a><br />
          <a href="" style={linkStyle}>Commodity</a><br />
          <a href="" style={linkStyle}>Dematerialisation</a><br />
          <a href="" style={linkStyle}>Fund transfer</a><br />
          <a href="" style={linkStyle}>MTF</a><br />
          <a href="" style={linkStyle}>Referral program</a><br />
        </div>

        <div className="col">
          <p><strong>Quick Links</strong></p>
          <a href="" style={linkStyle}>Upcoming IPOs</a><br />
          <a href="" style={linkStyle}>Brokerage charges</a><br />
          <a href="" style={linkStyle}>Market holidays</a><br />
          <a href="" style={linkStyle}>Economic calendar</a><br />
          <a href="" style={linkStyle}>Calculators</a><br />
          <a href="" style={linkStyle}>Markets</a><br />
          <a href="" style={linkStyle}>Sectors</a><br />
        </div>
      </div>

      <div className="mt-4 text-muted" style={{ fontSize: "14px" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633.
          Depository services through Zerodha Broking Ltd. – IN-DP-431-2019. Commodities through Zerodha Commodities Pvt. Ltd. – INZ000038238.
        </p>

        <p>
          Registered office: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P. Nagar 4th Phase, Bengaluru – 560078, Karnataka, India.
          Contact: <a href="mailto:complaints@zerodha.com" style={linkStyle}>complaints@zerodha.com</a> (broking), <a href="mailto:dp@zerodha.com" style={linkStyle}>dp@zerodha.com</a> (DP queries).
        </p>

        <p>
          Read the Risk Disclosure Document as prescribed by SEBI | ICF. KYC is a one-time process with SEBI-registered intermediaries.
          Support portal: <a href="https://support.zerodha.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>support.zerodha.com</a>
        </p>

        <p>
          Stock brokers can accept securities as margin only via pledge system (w.e.f. Sep 1, 2020).
          Keep your email/phone updated with your broker to receive OTP for pledging from depository.
          Verify holdings in your monthly NSDL/CDSL consolidated account statement.
        </p>

        <p>
          Prevent unauthorized transactions. Update contact details to receive transaction alerts directly from Exchange at end of day.
          For IPOs, write bank details on the form to authorize payment. No cheque required.
        </p>

        <p>
          We do not offer stock tips or manage accounts. If someone claims to be from Zerodha offering such services, report at:
          <a href="https://zerodha.com/contact" target="_blank" rel="noopener noreferrer" style={linkStyle}> zerodha.com/contact</a>
        </p>

        <hr />

        <div className="text-center mt-3">
          <p>
            <a href="" style={linkStyle}>NSE</a> &nbsp;|&nbsp;
            <a href="" style={linkStyle}>BSE</a> &nbsp;|&nbsp;
            <a href="" style={linkStyle}>MCX</a> &nbsp;|&nbsp;
            <a href="" style={linkStyle}>Terms & conditions</a> &nbsp;|&nbsp;
            <a href="" style={linkStyle}>Policies & procedures</a> &nbsp;|&nbsp;
            <a href="" style={linkStyle}>Privacy policy</a> &nbsp;|&nbsp;
            <a href="" style={linkStyle}>Disclosure</a> &nbsp;|&nbsp;
            <a href="" style={linkStyle}>For investor's attention</a> &nbsp;|&nbsp;
            <a href="" style={linkStyle}>Investor charter</a>
          </p>
        </div>
      </div>
    </div>
   
  );
}

export default Footer;
