import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Menu Button */}
      <button className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* The Actual Pop-up Menu */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <ul onClick={() => setIsOpen(false)}>
          <li><a href="#intro">Love Letter</a></li>
          <li><a href="#reasons">100 Reasons</a></li>
          <li><a href="#open-when">Open When</a></li>
          <li><a href="#moments">Moments</a></li>
          <li><a href="#future">Future</a></li>
        </ul>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;