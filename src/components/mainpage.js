import React from "react";
import "../styles/mainpage.css";

const Mainpage = () => {
  return (
    <div className="b">
      <div class="flex-container">
        <div class="flex-items">
          <p className="head">Spotlight on Events</p>
          <p className="head1">
            Find exciting happenings in your area with ease.
          </p>
          <p className="head2">
            Stay updated with the latest events around you. Whether it's music,
            art, or food, we have it all.
          </p>
          <a href="#events-section">
            <button>See Events</button>
          </a>
        </div>
        <div class="flex-items"></div>
      </div>
    </div>
  );
};

export default Mainpage;
