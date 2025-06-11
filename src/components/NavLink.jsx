import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => (
  <ul>
    <li className="li-box">
      <Link to="/">Logo</Link>
    </li>
    <li className="li-box">
      <Link to="/">Home</Link>
    </li>
    <li className="li-box">
      <Link to="/chat">Chat</Link>
    </li>
    <li className="li-box">
      <Link to="/map">Map</Link>
    </li>
    <li className="li-box">
      <Link to="/profile">Profile</Link>
    </li>
  </ul>
);

export default NavLink;
