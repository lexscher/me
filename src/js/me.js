/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import NavBar from './NavBar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Connect from './Pages/Connect';
import Archives from './Pages/Archives';
import Skills from './Pages/Skills';
import LiveFeed from './Pages/LiveFeed';
import Footer from './Footer';

import SafeApp from './Pages/SafeApp';

const App = () => {
  const [browser, getBrowser] = useState('');


  // Method checks if we're on a mobile device
  const onMobileDevice = () => (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1) || (window.innerWidth <= 800 && window.innerHeight <= 600);

  // alert(window.navigator.vendor);
  const validBrowserCheck = () => {
    let valid = false;
    // if we're not mobile
    if (!onMobileDevice()) {
      // let's check what browser we're on
      switch (browser) {
        case 'Google Inc.':
          valid = true;
          break;
        default:
          console.log(browser);
          break;
      }
    }
    return valid;
  };


  const renderCoreJsx = () => (
    <>
      <header>
        <NavBar />
      </header>
      <Connect />
      <LiveFeed />
      <div className="app">
        <About />
        <Skills />
        <Projects />
        <Archives />
        <div className="divider divider-container__blk">
          <div />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );

  useEffect(() => {
    getBrowser(window.navigator.vendor);
  }, []);

  return validBrowserCheck() ? renderCoreJsx() : <SafeApp />;
};

export default App;
