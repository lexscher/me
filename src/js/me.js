import React, { Fragment } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Connect from "./Pages/Connect";
import Archives from "./Pages/Archives";
import Skills from "./Pages/Skills";
import LiveFeed from "./Pages/LiveFeed";
import Footer from "./Footer";

const jsxOld = () => (
  <Switch>
    <header>
      <NavBar />
    </header>
    <div className="app">
      <Route
        exact
        path="/Home"
        render={routerProps => <Home {...routerProps} />}
      />
      <Route
        exact
        path="/"
        render={routerProps => <About {...routerProps} />}
      />
      <Route
        exact
        path="#projects"
        render={routerProps => <Projects {...routerProps} />}
      />
      <Route
        exact
        path="#Connect"
        render={routerProps => <Connect {...routerProps} />}
      />
      <Route
        exact
        path="#Archives"
        render={routerProps => <Archives {...routerProps} />}
      />
    </div>
  </Switch>
);

const jsxNew = () => (
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

const Me = () => {
  return jsxNew();
};

export default Me;
