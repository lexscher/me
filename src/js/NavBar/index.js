import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuBarSelected, toggleMenuBarSelected] = useState(false);

  return (
    <div className="nav">
      <div
        className="menu-bars-container"
        onClick={() => toggleMenuBarSelected(!menuBarSelected)}
      >
        <div
          className={`menu-bar${menuBarSelected ? ' menu-clicked' : ''}`}
        ></div>
        <div
          className={`menu-bar${menuBarSelected ? ' menu-clicked' : ''}`}
        ></div>
        <div
          className={`menu-bar${menuBarSelected ? ' menu-clicked' : ''}`}
        ></div>
      </div>
      {menuBarSelected ? (
        <div className="menu">
          <div
            className="dropdown"
            onClick={() => toggleMenuBarSelected(!menuBarSelected)}
          >
            <Link to="/">Home</Link>
            {/* <Link to="/About">About</Link> */}
            <Link to="/Projects">Projects</Link>
            <Link to="/Connect">Connect</Link>
            <Link to="/Archives">Archives</Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavBar;
