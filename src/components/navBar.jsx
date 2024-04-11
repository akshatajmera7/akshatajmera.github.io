import React from "react";
import "./navBar.css";
export const NavBar = () => {
  return (
    <div className="dash">
      <button className="dashboard" onClick="s">
        <div>
          <p>DASHBOARD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -</p>
        </div>
      </button>
      <ul>
        <div className="dashnames">
          <li className="dashitems">
            <div className="#home"></div>Home
          </li>
          <li className="dashitems">
            <div className="#about"></div>About
          </li>
          <li className="dashitems">
            <div className="#experience"></div> Experience
          </li>
          <li className="dashitems">
            <div className="#projects"></div> Projects
          </li>
          <li className="dashitems">
            <div className="#contact"></div> Contact
          </li>
        </div>
      </ul>
    </div>
  );
};
