import React from 'react';
import Particles from 'react-particles-js';
import Connect from '../Connect';

const particleStyles = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#F62817',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 2,
        color: '#000',
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.41,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 125,
      color: '#e6d5f4',
      opacity: 0.7,
      width: 0.2,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'top',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: ['bubble'],
      },
      onclick: {
        enable: false,
        mode: 'remove',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 115,
        line_linked: {
          opacity: 0.7,
          width: 0.3,
        },
      },
      bubble: {
        distance: 150,
        size: 4,
        duration: 1,
        opacity: 0.9,
        speed: 7,
      },
      repulse: {
        distance: 55,
        duration: 1,
      },
      push: {
        particles_nb: 3,
      },
      remove: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};
const SafeApp = () => {
  const appJsx = (
    <div className="safety-app">
      <h1 className="safety-h1">Alexander Schelchere</h1>
      <div className="particles-container">
        <Particles className="particle-block" params={particleStyles} />
      </div>
      <Connect />
    </div>
  );

  return appJsx;
};

export default SafeApp;
