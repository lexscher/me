import React, { Fragment } from "react";
import NavBar from "./NavBar";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Connect from "./Pages/Connect";
import Archives from "./Pages/Archives";
import Skills from "./Pages/Skills";
import LiveFeed from "./Pages/LiveFeed";
import Footer from "./Footer";

const App = () => (
  <Fragment>
    <header>
      <NavBar />
    </header>
    <Connect />
    <LiveFeed />
    <div className="app">
      <About />
      {/* <div className="divider"></div> */}
      <Skills />
      {/* <div className="divider"></div> */}
      <Projects /> {/* May add gradient white -> grey -> black background */}
      <Archives />
      <div className="divider divider-container__blk">
        <div></div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  </Fragment>
);

export default App;