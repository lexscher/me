import React, { Component } from "react";
import Particles from "react-particles-js";
import Party from "../Party";

class Connect extends Component {
  constructor() {
    super();
    this.state = {
      interwebs: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/alexanderschelchere/"
        },
        {
          name: "GitHub",
          link: "https://github.com/Lexscher"
        },
        {
          name: "Twitter",
          link: "https://twitter.com/Lexscher"
        },
        {
          name: "Resume",
          link:
            "https://drive.google.com/open?id=16XdudPyzj_Bgi7bZZRsn0FWvc5WazdT1"
        }
      ],
      skills: [
        "JavaScript",
        "Ruby on Rails",
        "React",
        "React Native",
        "Node.js",
        "Git",
        "Express"
      ]
    };
  }

  render() {
    let socials = this.state.interwebs.map(link => (
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        className="about-link"
      >
        {link.name}
      </a>
    ));
    let skillsList = this.state.skills.map(skill => (
      <p className="skill-item" key="skill">
        {skill}
      </p>
    ));
    return (
      <div className="connect">
        <h1>Glad you were interested enough to view this page!</h1>
        <h2>Find me on the internet.</h2>
        <div className="social-media">{socials}</div>
        <h2>A few of my skills...</h2>
        {/* <div className="skills-body"> */}
        {/* <Particles className="party-curls" params={particleParams} /> */}
        <ul className="skill-item-container">{skillsList}</ul>
        {/* <Party /> */}
        {/* </div> */}
      </div>
    );
  }
}
// Tried a few things, had a lot of fun here, but it was too much everywhere 😅
const particleParams = {
  particles: {
    number: {
      value: 40,
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
          "https://raw.githubusercontent.com/Lexscher/me/master/cool-wars/R2-D2.png",
        width: 134,
        height: 177
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
      value: 22,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 17,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 125,
      color: "#42c5fa",
      opacity: 0.7,
      width: 1.5
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
        distance: 50,
        size: 50,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 75,
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

export default Connect;
