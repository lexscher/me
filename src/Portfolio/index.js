import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [
        {
          name: 'Tic-Tac-Time',
          screenshot_url:
            'https://raw.githubusercontent.com/Lexscher/me/master/src/images/tic-tac-time.png',
          description: 'I Recreated Tic-Tac-Toe!!',
          app_link: 'https://lexscher.github.io/Tic-Tac-Toe/',
          github_link: 'https://github.com/Lexscher/Tic-Tac-Toe',
          technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
        },
        {
          name: 'EcoDB',
          screenshot_url: 'https://i.imgur.com/6oWHwbsh.png',
          description:
            "An api with data on the state of the global environment! (still growing 🌱)",
          app_link: 'https://ecodb.herokuapp.com/',
          github_link: 'https://github.com/Lexscher/ecodb',
          technologies: ['NodeJS', 'Express', 'Puppeteer']
        },
        {
          name: 'Concipilo',
          screenshot_url:
            'https://raw.githubusercontent.com/Lexscher/me/master/src/images/concipilo.png',
          description: 'A text adventure game!',
          app_link: 'https://lexscher.github.io/Concipilo/',
          github_link: 'https://github.com/Lexscher/Concipilo',
          technologies: ['Vanilla JavaScript', 'HTML', 'CSS']
        },
        {
          name: 'Pokèmon App',
          screenshot_url:
            'https://raw.githubusercontent.com/Lexscher/me/master/src/images/pokedex.png',
          description: 'Behold... The PokèDex of your dreams!',
          app_link: 'https://alexanders-pokeapp.herokuapp.com/',
          github_link: 'https://github.com/Lexscher/Pok-Dex-App',
          technologies: ['React', 'Poke Api', 'CSS', 'JavaScript']
        },
        {
          name: 'Pong.',
          screenshot_url:
            'https://raw.githubusercontent.com/Lexscher/me/master/src/images/pong.png',
          description: 'Play the Iconic game, Pong!',
          app_link: 'https://lexscher.github.io/pong/',
          github_link: 'https://github.com/Lexscher/pong',
          technologies: ['HTML Canvas', 'Vanilla JS', 'CSS']
        }
      ]
    };
  }

  render() {
    let projects = this.state.project.map(project => (
      <div className="project-container" key={project.name}>
        <h1>{project.name}</h1>
        <img
          className="project-image"
          src={project.screenshot_url}
          alt={project.name}
        />
        <p className="project-description">{project.description}</p>
        <div className="tech-container">
          {project.technologies.map(technology => (
            <h3 className="tech">{technology}</h3>
          ))}
        </div>
        <div className="project-links">
          <a className="project-link" href={project.app_link} target="_blank">
            <p>Check it Out!</p>
            <img
              className="project-link-image"
              src="https://www.freepngimg.com/download/web_design/24947-9-cursor-hand-transparent-image.png"
              alt="Link to learn more!"
            />
          </a>
          <a
            className="project-link"
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
            <img
              className="project-link-image"
              src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png"
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
