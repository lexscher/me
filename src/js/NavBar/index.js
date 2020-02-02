import React, { useState } from "react";
import MobileNav, { Dropdown } from "./Mobile";

const NavBar = () => {
  const [menuBarSelected, toggleMenuBarSelected] = useState(false);
  // MOBILE NAV
  const mobileNavJsx = (
    <MobileNav
      menuBarSelected={menuBarSelected}
      toggleMenuBarSelected={toggleMenuBarSelected}
    />
  );

  const dropdownJsx = (
    <Dropdown
      menuBarSelected={menuBarSelected}
      toggleMenuBarSelected={toggleMenuBarSelected}
    />
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

  const navJsx = (
    <div className="nav">
      {generateWebNav()}
      {mobileNavJsx}
      {menuBarSelected && dropdownJsx}
    </div>
  );

  return navJsx;
};

export default NavBar;
