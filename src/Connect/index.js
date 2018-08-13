import React, { Component } from "react";
// import Particles from "react-particles-js";
// import Party from "../Party";

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
            "https://drive.google.com/open?id=1dw9emPfyyUvsLqfZ5WbA2GZ-LnWdODH-"
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
    let socials = this.state.interwebs.map((link, index) => (
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        className="about-link"
        key={index}
      >
        <h3>{link.name}</h3>
      </a>
    ));
    let skillsList = this.state.skills.map((skill, index) => (
      <p className="skill-item" key={index}>
        {skill}
      </p>
    ));
    return (
      <div className="connect">
        <h1>Glad you were intrested enough to connect with me!</h1>
        <h2>Find me on the internet.</h2>
        <div className="social-media">{socials}</div>
        <h2>A few of my skills...</h2>
        <ul className="skill-item-container">{skillsList}</ul>
      </div>
    );
  }
}

export default Connect;
