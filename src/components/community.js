import React from "react";
import "../styles/community.css";

const Community = () => {
  return (
    <div className="community">
      <div class="flex-container">
        <div class="flex-items">
          <div className="link-box">
            <a href="#about-us">About Us</a>
            <a href="#our-work">Our Work</a>
            <a href="#follow-us">Follow Us</a>
            <a href="#get-in-touch">Get in Touch</a>
          </div>
        </div>
        <div class="flex-items">
          <p>Join Our Community</p>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
          <p className="community-text">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
