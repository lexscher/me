import React, { Component } from 'react';

export default class Game extends Component {
  state = {
    player: {}
  };

  componentDidMount() {}

  render() {
    return (
      <div className="game-container">
        <h1>Let the Games Begin!</h1>
      </div>
    );
  }
}
