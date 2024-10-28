import React from "react";
import "../styles/contactus.css";

const Contactus = () => {
  return (
    <div className="contact">
      <div className="content">
        <p className="h">Feedback</p>
        {/* <p className="h1">We're here to help you.</p> */}
        <input type="text" placeholder="Your Message" className="txt" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Contactus;
