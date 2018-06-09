import React, { Component } from "react";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [
        {
          name: "Tic-Tac-Time",
          screenshot_url: "https://i.imgur.com/XJlU15L.png",
          description: "Tic-Tac-Toe!!",
          app_link: "https://tic-tac-time.bitballoon.com/",
          github_link: "https://github.com/Lexscher/Tic-Tac-Toe"
        },
        {
          name: "Concipilo",
          screenshot_url: "https://i.imgur.com/ifl6mvv.png",
          description: "A text adventure game!",
          app_link: "https://concipilo.bitballoon.com/",
          github_link: "https://github.com/Lexscher/Concipilo"
        },
        {
          name: "Flash Cards",
          screenshot_url: "https://i.imgur.com/W2WNNOJ.png",
          description: "An app to help you study! This was a group project.",
          app_link: "https://glacial-escarpment-17286.herokuapp.com/",
          github_link: "https://github.com/Lexscher/Flash-Cards"
        },
        {
          name: "Pokèmon App",
          screenshot_url: "https://i.imgur.com/mmBjX3f.png",
          description: "Behold... The PokèDex of your dreams!",
          app_link: "https://shrouded-lake-66712.herokuapp.com/",
          github_link: "https://github.com/Lexscher/Pok-Dex-App"
        },
        {
          name: "Cut It",
          screenshot_url: "https://i.imgur.com/e84H3km.png",
          description: "View and add to a gallery of haircuts!",
          app_link: "https://shrouded-plateau-40710.herokuapp.com/",
          github_link: "https://github.com/Lexscher/Haircut_Gallery"
        }
      ]
    };
  }

  render() {
    // map through the project object.
    let projects = this.state.project.map(project => (
      <div className="project-container" key={project.name}>
        <h1>{project.name}</h1>
        <img
          className="project-image"
          src={project.screenshot_url}
          alt={project.name}
        />
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a className="project-link" href={project.app_link} target="_blank">
            <p>try it!</p>
            <img
              className="project-link-image"
              src="https://d30y9cdsu7xlg0.cloudfront.net/png/114-200.png"
              alt="Link to learn more!"
            />
          </a>
          <a
            className="project-link"
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>github</p>
            <img
              className="project-link-image"
              src="https://octicons.github.com/img/og/mark-github.png"
              alt="Link to learn more!"
            />
          </a>
        </div>
      </div>
    ));
    return <div className="projects-container">{projects}</div>;
  }
}

export default Portfolio;
