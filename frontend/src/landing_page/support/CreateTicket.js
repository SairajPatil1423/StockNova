import React from "react";

function CreateTicket() {
  return (
    <div className="container text-center mt-5 mb-5">
      <h4 className="fw-semibold">Still need help?</h4>
      <p className="text-muted small">
        Raise a support ticket and our team will assist you
      </p>
      <button className="btn btn-primary px-4 mt-2">
        <i className="fa-solid fa-ticket me-2"></i> Create Ticket
      </button>
    </div>
  );
}

export default CreateTicket;
