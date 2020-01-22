import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fall-animation";
// import Project from "../../Components/FeaturedProject";

const Projects = () => {
  const [concipilo, chello, ecommunity, ticTacToe, ecoDB] = [
    {
      title: "concipilo",
      description: "A Text Adventure Game",
      imgUrl: "https://i.imgur.com/VgK74v3.png",
      liveLink: "https://lexscher.github.io/Concipilo/",
      sourceCodeLink: "https://github.com/Lexscher/Concipilo"
    },
    {
      title: "Chello",
      description: "A Trello Clone",
      imgUrl: "https://i.imgur.com/ahH0L9d.png",
      liveLink: "https://chello-front-end.herokuapp.com/",
      sourceCodeLink: "https://github.com/Lexscher/tGRAH-api"
    },
    {
      title: "Eco-mmunity",
      description: "Reddit Clone",
      imgUrl: "https://i.imgur.com/Txvz3mN.png",
      liveLink: "https://lexscher.github.io/eco-mmunity/",
      sourceCodeLink: "https://github.com/Lexscher/eco-mmunity"
    },
    {
      title: "TicTacToe",
      description: "Re-created Tic Tac Toe",
      imgUrl: "https://i.imgur.com/XJlU15L.png",
      liveLink: "https://lexscher.github.io/Tic-Tac-Toe/",
      sourceCodeLink: "https://lexscher.github.io/Tic-Tac-Toe/"
    },
    {
      title: "EcoDB",
      description:
        "A database with information on the how land is used across the globe.",
      imgUrl: "https://i.imgur.com/6oWHwbs.png",
      liveLink: "http://ecodb.herokuapp.com/",
      sourceCodeLink: "https://github.com/Lexscher/ecodb"
    }
  ];

  const projectDataArr = [
    { ...concipilo },
    { ...chello },
    { ...ecommunity },
    { ...ticTacToe },
    { ...ecoDB }
  ];

  // this method will open a link in a new window - a tags aren't triggering within the Awesome Slider
  const takeMeTo = link => window.open(link);

  const projects = projectDataArr.map((project, i) => {
    const { title, description, imgUrl, liveLink, sourceCodeLink } = project;
    // THE FOLLOWING COMMENTED OUT CODE DID NOT WORK, FeaturedProject COMPONENT AND React Awesome Slider
    // const projectJsx = (<Project key={i} projectData={project} />)

    const projectJsx = (
      <div key={i} data-src={imgUrl}>
        <h3 className="single-project__title">{title}</h3>
        <p className="single-project__description">{description}</p>
        <p
          className="single-project__live-link"
          onClick={() => takeMeTo(liveLink)}
        >
          Live Website ↗
        </p>
        <p
          className="single-project__source-code-link"
          onClick={() => takeMeTo(sourceCodeLink)}
        >
          GitHub ↗
        </p>
      </div>
    );

    return projectJsx;
  });

  const slider = (
    <AwesomeSlider cssModule={AwesomeSliderStyles}>{projects}</AwesomeSlider>
  );

  const projectsJsx = () => (
    <div id="projects">
      <div className="projects-container">{slider}</div>
    </div>
  );

  return projectsJsx();
};

export default Projects;
