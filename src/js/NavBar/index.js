import React, { useState } from "react";

const NavBar = () => {
  const [menuBarSelected, toggleMenuBarSelected] = useState(false);
  // MOBILE NAV
  const generateMobileNav = () => (
    <div
      className="menu-bars-container"
      onClick={() => toggleMenuBarSelected(!menuBarSelected)}
    >
      <div
        className={`menu-bar${menuBarSelected ? " menu-clicked" : ""}`}
      ></div>
      <div
        className={`menu-bar${menuBarSelected ? " menu-clicked" : ""}`}
      ></div>
      <div
        className={`menu-bar${menuBarSelected ? " menu-clicked" : ""}`}
      ></div>
    </div>
  );

  const generateDropdown = () => (
    <div className="menu">
      <div
        className="dropdown"
        onClick={() => toggleMenuBarSelected(!menuBarSelected)}
      >
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#live-feed">GitHub Live Feed</a>
      <a href="#archives">Archives</a>
      </div>
    </div>
  );

  // WEB NAV
  const generateWebNav = () => (
    <div className="menu-web-container">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#live-feed">GitHub Live Feed</a>
      <a href="#archives">Archives</a>
    </div>
  );

  const navJsx = () => (
    <div className="nav">
      {generateWebNav()}
      {generateMobileNav()}
      {menuBarSelected ? generateDropdown() : ""}
    </div>
  );

  return navJsx();
};

export default NavBar;
