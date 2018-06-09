import React, { Component } from "react";
import Particles from "react-particles-js";
class Party extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Particles className="party-curls" params={particleParams} />;
  }
}

// kinda remembered the stylesheet and stackNavigator in React Native.
// Making a constant to hold the parameters, and then passing it to the Particles seems a lot cleaner.
const particleParams = {
  particles: {
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "image",
      stroke: {
        width: 2,
        color: "#000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src:
          "https://raw.githubusercontent.com/Lexscher/me/master/cool-wars/darth-vader.png",
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
      value: 50,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 22,
        sync: true
      }
    },
    line_linked: {
      enable: false,
      distance: 250,
      color: "#00FF70",
      opacity: 0.8,
      width: 5
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
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
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
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
        distance: 100,
        size: 100,
        duration: 2,
        opacity: 0.2,
        speed: 10
      },
      repulse: {
        distance: 75,
        duration: 0.8
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
