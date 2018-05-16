import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Connect from "./Connect";
import About from "./About";
import Portfolio from "./Portfolio";
import Party from "./Party";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="nav-bar">
            <Link className="links" to="/me">
              Alex.
            </Link>
            <Link className="links" to="/me/alexander">
              Interwebs.
            </Link>
            <Link className="links" to="/me/projects">
              Projects.
            </Link>
            <Link className="links" to="/me/particles">
              More Particles!!
            </Link>
          </nav>
          <div className="content">
            <Route
              exact
              path="/"
              render={() => (
                <h1 className="greetings">
                  Please, use the navigation bar above.
                </h1>
              )}
            />
            <Route exact path="/me" render={() => <About />} />
            <Route exact path="/me/alexander" render={() => <Connect />} />
            <Route exact path="/me/projects" render={() => <Portfolio />} />
            <Route exact path="/me/particles" render={() => <Party />} />
            <Route from="*" to="/me" />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
