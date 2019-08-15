import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import FindMe from "./FindMe";

class App extends Component {
  render() {
    let toTheTop = () => {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(toTheTop);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    };
    return (
      <Router>
        <div className="container">
          <nav className="nav-bar">
            <Link className="links" to="/" onClick={toTheTop}>
              Home.
            </Link>
            <Link className="links" to="/Projects" onClick={toTheTop}>
              Portfolio.
            </Link>
            <Link className="links" to="/LinkUp" onClick={toTheTop}>
              Find Me.
            </Link>
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
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/Projects" render={() => <Projects />} />
            <Route exact path="/LinkUp" render={() => <FindMe />} />
            <Route from="/*" to="/" />
          </div>
          <footer>
            <h3>Built by Alexander Schelchere using React.</h3>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
