import React from "react";
import { Outlet, Link } from "react-router-dom";
const NavLink = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <div className="li-box">
            <Link to="/">Logo</Link>
          </div>
        </li>
        <li>
          <div className="li-box">
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div className="li-box">
            <Link to="/Chat">Chat</Link>
          </div>
        </li>
        <li>
          <div className="li-box">
            <Link to="/Map">Map</Link>
          </div>
        </li>
        <li>
          <div className="li-box">
            <Link to="/Profile">Profile</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavLink;
