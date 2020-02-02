import React, { useState } from "react";
import MobileNav, { Dropdown } from "./Mobile";
import WebNav from './Web';

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
  const webNavJsx = <WebNav />

  const navJsx = (
    <div className="nav">
      {webNavJsx}
      {mobileNavJsx}
      {menuBarSelected && dropdownJsx}
    </div>
  );

  return navJsx;
};

export default NavBar;
