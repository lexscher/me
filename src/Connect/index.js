import React, { Component } from "react";

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
        <h1>Glad you were interested enough to view another page!</h1>
        <h2>My Socials</h2>
        <div className="social-media">{socials}</div>
        <h2>A few of my skills...</h2>
        <ul className="skill-item-container">{skillsList}</ul>
      </div>
    );
  }
}

export default Connect;
