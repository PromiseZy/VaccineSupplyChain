import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">


          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                หน้าหลัก
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/เพิ่มวัคซีน"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                เพิ่มวัคซีน
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/เพิ่มสถานะ"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                เพิ่มสถานะ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ติดตามวัคซีน"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ติดตามวัคซีน
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;