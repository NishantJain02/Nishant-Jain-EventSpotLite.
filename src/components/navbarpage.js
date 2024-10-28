// import React from "react";
// import "../styles/Navbarpage.css";

// const Navbarpage = () => {
//   return (
//     <nav className="navbar">
//       <h3 className="logo">EventSpot Lite</h3>
//       <input type="checkbox" id="menu-toggle" className="menu-toggle" />
//       <label htmlFor="menu-toggle" className="menu-icon">
//         <i className="fas fa-bars"></i>
//       </label>
//       <ul className="nav-links">
//         <li>
//           <a href="#events-section">Discover Events</a>
//         </li>
//         <li>
//           <a href="#services">Explore Local</a>
//         </li>
//         <li>
//           <a href="#about">Our Team</a>
//         </li>
//         <li>
//           <a href="#" className="button join-button">
//             Join Now
//           </a>
//         </li>
//         <li>
//           <a
//             href="#get-started"
//             className="button start-button"
//             style={{ color: "white" }}
//           >
//             Get Started
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbarpage;

import React, { useState } from "react";
import "../styles/Navbarpage.css";

const Navbarpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h3 className="logo">Eventspot Lite</h3>
      <div className="menu-icon" onClick={toggleMenu}>
        <span>&#9776;</span> {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#events-section" onClick={() => setIsOpen(false)}>
            Discover Events
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsOpen(false)}>
            Explore Local
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            Our Team
          </a>
        </li>
        <li>
          <a
            href="#"
            className="button join-button"
            onClick={() => setIsOpen(false)}
          >
            Join
          </a>
        </li>
        <li>
          <a
            href="#get-started"
            className="button start-button"
            onClick={() => setIsOpen(false)}
          >
            Started
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbarpage;
