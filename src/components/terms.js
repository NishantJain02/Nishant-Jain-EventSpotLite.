import React from "react";
import "../styles/terms.css";

const Terms = () => {
  return (
    <div className="terms">
      <div className="line"></div>

      <div class="flex-container">
        <div class="flex-items">
          <div className="link-box">
            <a href="#about-us">Privacy Policy</a>
            <a href="#our-work">Terms of Service</a>
            <a href="#follow-us">Cookie Preferences</a>
          </div>
        </div>
        <div class="flex-items">
          <p>© 2024 EventSpot Lite. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
