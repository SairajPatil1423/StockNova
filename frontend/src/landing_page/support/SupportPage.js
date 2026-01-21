import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

function SupportPage() {
  const topics = [
    {
      icon: "fa-solid fa-user",
      title: "Your Account",
      desc: "Manage login, KYC, password, and profile settings"
    },
    {
      icon: "fa-solid fa-landmark",
      title: "Trading & Markets",
      desc: "Market hours, order types, margins, and settlement"
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Funds & Deposits",
      desc: "Add funds, withdrawals, and bank linked accounts"
    },
    {
      icon: "fa-solid fa-file-invoice",
      title: "Tax & Reports",
      desc: "P&L reports, capital gains, tax statements, and more"
    },
    {
      icon: "fa-solid fa-shield",
      title: "Security",
      desc: "2FA, device management, and account safety"
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "API & Developer",
      desc: "Kite Connect API integration and documentation"
    }
  ];

  return (
    <div>
      <Hero />

      <div className="container mt-5">
        <div className="row g-4">
          {topics.map((t, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="border rounded p-4 h-100">
                <i className={`${t.icon} fs-2 text-primary`}></i>
                <h5 className="fw-semibold mt-3">{t.title}</h5>
                <p className="text-muted small">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CreateTicket />
    </div>
  );
}

export default SupportPage;
