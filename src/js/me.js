import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Connect from './Pages/Connect';
import Archives from './Pages/Archives';

const Me = () => {
  return (
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
          path="/projects"
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
      </div>
    </Switch>
  );
};

export default Me;
