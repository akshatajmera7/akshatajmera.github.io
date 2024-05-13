import React from "react";
import "./navBar.css";
export const NavBar = () => {
  return (
    // const [show, setShow] = useState(true);
    <div className="dash">
      <button className="dashboard">
        <div>
          <p>DASHBOARD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -</p>
        </div>
      </button>
      <div className="dashnames">
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="Achievements">Achievements</div>
        <div className="projects">Projects</div>
      </div>
    </div>
  );
};
