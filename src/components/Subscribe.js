import React from "react";
import "../styles/Subscribe.css";

const Subscribe = () => {
  return (
    <div className="back">
      <div className="con">
        <div className="box-1">
          <p className="h5">Subscribe for Updates</p>
          <p className="h6">
            Stay in the loop with our latest event notifications.
          </p>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
