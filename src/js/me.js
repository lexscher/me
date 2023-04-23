/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import NavBar from './NavBar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Connect from './Pages/Connect';
import Archives from './Pages/Archives';
import Skills from './Pages/Skills';
import Footer from './Footer';

import SafeApp from './Pages/SafeApp';

const App = () => {
  const REMODELING = true;

  const coreJsx = (
    <>
      <header>
        <NavBar />
      </header>
      <Connect />
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

  return REMODELING ? <SafeApp /> : coreJsx;
};

export default App;

