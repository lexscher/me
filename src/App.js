import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Connect from "./Connect";
import About from "./About";
import Portfolio from "./Portfolio";
import Party from "./Party";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="nav-bar">
            <Link className="links" to="/">
              Alex.
            </Link>
            <Link className="links" to="/projects">
              Projects.
            </Link>
            <Link className="links" to="/connect">
              Connect!
            </Link>
            {/* I think I want to put something else here... We'll leave this commented out. for now. */}
            {/* <Link className="links" to="/me/particles">
              More Particles!!
            </Link> */}
          </nav>
          <div className="content">
            <Route
              exact
              path="/me"
              render={() => (
                <h1 className="greetings">
                  Please, use the navigation bar above.
                </h1>
              )}
            />
            <Route exact path="/" render={() => <About />} />
            <Route exact path="/connect" render={() => <Connect />} />
            <Route exact path="/projects" render={() => <Portfolio />} />
            <Route exact path="/particles" render={() => <Party />} />
            <Route from="*" to="/" />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
