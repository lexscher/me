import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Connect from './Connect';
import About from './About';
import Portfolio from './Portfolio';
import Game from './Game';
import Sorry from './Sorry';

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
              Alex.
            </Link>
            <Link className="links" to="/projects" onClick={toTheTop}>
              Projects.
            </Link>
            <Link className="links" to="/connect" onClick={toTheTop}>
              Connect!
            </Link>
            {/* <Link className="links" to="/game">
              Play a Game?!
            </Link> */}
          </nav>
          <div className="content">
            <Switch>
              <Route exact path="/" render={() => <About />} />
              <Route exact path="/connect" render={() => <Connect />} />
              <Route exact path="/projects" render={() => <Portfolio />} />
              {/* <Route exact path="/game" render={() => <Game />} /> */}
              <Route component={Sorry} />
            </Switch>
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
