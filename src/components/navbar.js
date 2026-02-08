import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li><a href="#intro">Love Letter</a></li>
        <li><a href="#reasons">100 Reasons</a></li>
        <li><a href="#open-when">Open When</a></li>
        <li><a href="#moments">Moments</a></li>
        <li><a href="#future">Future</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;