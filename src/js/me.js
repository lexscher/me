import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';

class Me extends Component {

  render() {
    return (
      <Fragment>
        <header>
          <NavBar />      
        </header>
        <h1>
          OKAY <code>Hi, My name is Alexander</code>
        </h1>
        <h3>haha</h3>
        <p>Ok.</p>
      </Fragment>
    );
  }
}

export default Me;
