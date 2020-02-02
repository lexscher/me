import React, { useState, useEffect } from 'react';
import MobileNav, { Dropdown } from './Mobile';
import WebNav from './Web';

const NavBar = () => {
  const [menuBarSelected, toggleMenuBarSelected] = useState(false);
  const [darkNav, toggleDarkNav] = useState(false);
  // MOBILE NAV
  const mobileNavJsx = (
    <MobileNav
      menuBarSelected={menuBarSelected}
      toggleMenuBarSelected={toggleMenuBarSelected}
    />
  );
  // Mobile -- Dropdown
  const dropdownJsx = (
    <Dropdown
      menuBarSelected={menuBarSelected}
      toggleMenuBarSelected={toggleMenuBarSelected}
    />
  );

  // handle scroll
  const handleScroll = () => {
    const [client, scrollYWeb, scrollYMobile, webMinWidth] = [
      window.scrollY, // Position - where the client has scrolled
      1515, // this is the turning point for the "Web" design
      2035, // turning point for the "Mobile" design
      768, // Width of the page determines if we're "Mobile" or "Web"
    ];

    // Turning point is determined by the width of the screen.
    // The "Mobile" screen will have a higher turning point.
    const turningPoint = window.innerWidth > webMinWidth ? scrollYWeb : scrollYMobile;

    // We'll have a dark nav if we've passed the turning point
    client > turningPoint ? toggleDarkNav(true) : toggleDarkNav(false);
  };
  // add event listener to body
  const addScrollEventToWindow = () => window.addEventListener('scroll', handleScroll);

  // When the component mounts
  useEffect(addScrollEventToWindow, []);

  // Nav Bar
  const navJsx = (
    <div className={`nav${darkNav ? ' nav__dark' : ''}`}>
      <WebNav />
      {mobileNavJsx}
      {menuBarSelected && dropdownJsx}
    </div>
  );

  return navJsx;
};

export default NavBar;
