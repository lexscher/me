import React, { useState } from "react";


const MobileNav = ({ menuBarSelected, toggleMenuBarSelected }) => (
  <div
    className="menu-bars-container"
    onClick={() => toggleMenuBarSelected(!menuBarSelected)}
  >
    <div className={`menu-bar${menuBarSelected ? " menu-clicked" : ""}`}></div>
    <div className={`menu-bar${menuBarSelected ? " menu-clicked" : ""}`}></div>
    <div className={`menu-bar${menuBarSelected ? " menu-clicked" : ""}`}></div>
  </div>
);

export const Dropdown = ({ menuBarSelected, toggleMenuBarSelected }) => (
  <div className="menu">
    <div
      className="dropdown"
      onClick={() => toggleMenuBarSelected(!menuBarSelected)}
    >
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#archives">Archives</a>
    </div>
  </div>
);

export default MobileNav;
