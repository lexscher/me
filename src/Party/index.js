import React, { Component } from "react";
import Particles from "react-particles-js";
class Party extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="game-container">
        <Particles id="particles-js" params={particleParams}>
          <h1 className="h">hello</h1>
        </Particles>
      </div>
    );
  }
}

// kinda remembered the stylesheet and stackNavigator in React Native.
// Making a constant to hold the parameters, and then passing it to the Particles seems a lot cleaner.
const particleParams = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00D1FF"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 2,
        color: "#00D1FF"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://i.imgur.com/RYVm3qh.jpg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 18,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 125,
      color: "#EE1616",
      opacity: 0.7,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 7,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["bubble", "repulse", "grab"]
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 125,
        line_linked: {
          opacity: 0.2
        }
      },
      bubble: {
        distance: 200,
        size: 24,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 50,
        duration: 0.4
      },
      push: {
        particles_nb: 5
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default Party;
