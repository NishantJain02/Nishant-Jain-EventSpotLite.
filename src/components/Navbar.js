import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="n" id="events-section">
      <p className="n-brand">Events</p>
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="n-search"
      />
    </nav>
  );
};

export default Navbar;
