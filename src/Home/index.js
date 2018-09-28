import React, { Component } from "react";
// Import another component - flip card game to let the user find out about them.
import CardGame from "../CardGame";
// Content about me
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home.</h1>
        <CardGame />
      </div>
    );
  }
}

export default Home;
