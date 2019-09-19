import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Connect from './Connect';
import Archives from './Archives';

const Me = () => {
  return (
    <Switch>
      <header>
        <NavBar />
      </header>
      <Route exact path="/" render={routerProps => <Home {...routerProps} />} />
      <Route
        exact
        path="/About"
        render={routerProps => <About {...routerProps} />}
      />
      <Route
        exact
        path="/Projects"
        render={routerProps => <Projects {...routerProps} />}
      />
      <Route
        exact
        path="/Connect"
        render={routerProps => <Connect {...routerProps} />}
      />
      <Route
        exact
        path="/Archives"
        render={routerProps => <Archives {...routerProps} />}
      />
    </Switch>
  );
};

export default Me;
