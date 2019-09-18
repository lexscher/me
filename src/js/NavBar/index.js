import React, { useState } from 'react';

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
        <div className="menu dropdown">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Projects</h1>
          <h1>Connect</h1>
          <h1>Archives</h1>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavBar;
